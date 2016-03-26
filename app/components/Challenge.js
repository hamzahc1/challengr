import React, {
  Text,
  StyleSheet,
  View,
  Component,
  TouchableHighlight
} from 'react-native'

// const timer = (endTime) => {
//   if((new Date().getTime()) >= endTime) {
//   console.log("CHALLENGE EXPIRED!!")
//   this.setState
//   return true
//   }
//   else {
//   console.log("NOT YET!!!!");
//   return false;
//   }
// }

// const realTimer = setInterval()

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: this.props.challengeExpire,
      expired: false
    }
  }

timer(endTime){
  if((new Date().getTime()) >= endTime) {
    console.log("CHALLENGE EXPIRED!")
    // this.setState({expired: true})
  }
}

// componentDidMount(){
//   this.whatever = setInterval((()=>{this.timer(this.props.challengeExpire)}).bind(this),1000)
// }

render () {
  return (
    <TouchableHighlight onPress={()=> {this.props.onClick(this.props.id)}} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {this.props.title}
      </Text>
    </TouchableHighlight>
  )
}




}
        // {this.props.challengeTimer(this.props.challengeExpire)}

// const Challenge = ({key, onClick, title, id, createdAtnum, challengeExpire}) => {
// }

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 7.5
  },
  challengeText: {
    fontSize: 30 
  }
})

export default Challenge