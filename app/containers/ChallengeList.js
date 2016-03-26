import { connect } from 'react-redux'
import MyChallenges from '../components/MyChallengesComponent.js'
import { setChallengesViewStatus, getChallenges } from '../actions'
import { toggleChallengeStatus } from '../actions/toggleChallengeStatus'
import { fetchAllUsers } from '../actions/fetchUsers'
import { bindActionCreators } from 'redux'

const filterView = (challenges, challengesViewStatus) => {
if(challenges.length > 0){
  switch (challengesViewStatus) {
    case true :
      return challenges.filter(c => c.completed)
    case false:
      return challenges.filter(c=> !c.completed)
  }
} else {
  return undefined;
}
}

const checkChallenges = (array) => {
  // if(array.length === 0) {
  //   return [{id:-1}]
  // } else {
    if(array.length > 0){
    for(var i =0; i < array.length; i++){
    array[i].createdAtnum = Date.parse(array[i].createdAt)
    array[i].challengeExpire = array[i].createdAtnum + 40000
    }
    return array;
  } else {
    return undefined;
  }
}


const mapStateToProps = (state) => {
  return {
    visibleChallenges: checkChallenges(filterView(state.challenges.challengeList, state.challengesViewStatus)),
    allUserData: state.allUsers.usersList,
    refreshingChallenges: state.challenges.gettingUsersChallenges,
    currentUser: state.currentUser.userDetails[0],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(setChallengesViewStatus, dispatch),
    toggleChallenge: bindActionCreators(toggleChallengeStatus, dispatch),
    fetchAllUserData: bindActionCreators(fetchAllUsers, dispatch),
    getNewChallenges: bindActionCreators(getChallenges, dispatch),
    }
  }

const ChallengeList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(MyChallenges)

export default ChallengeList