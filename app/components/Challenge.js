import React, {
  Text,
  StyleSheet,
  View,
  Component,
  TouchableHighlight
} from 'react-native'

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: "  00:00:00",
      timerEnding: false
    }
  }

timer(endTime){
    let convertMillisecondsToDigitalClock =(ms)=>{
        hours = Math.floor(ms / 3600000), // 1 Hour = 36000 Milliseconds
        minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
        seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
            return hours + ":" + minutes + ":" + seconds;
    }
  if((new Date().getTime()) >= endTime) {
    this.setState({timeLeft: "  00:00:00", timerEnding: true})
    clearInterval(this.whatever)
  }
  else {
    let countLeft = endTime - new Date().getTime()
    if (countLeft <= 10000){
    this.setState({timeLeft: "  " + convertMillisecondsToDigitalClock(countLeft), timerEnding: true})
    } 
    else {
      this.setState({timeLeft: "  " + convertMillisecondsToDigitalClock(countLeft)})
    }
  }
}

componentWillMount(){
  this.whatever = setInterval((()=>{this.timer(this.props.challengeExpire)}).bind(this),50)
}

componentWillUnMount(){
  clearInterval(this.props.id)
}


render () {
  return (
    <TouchableHighlight onPress={()=> {this.props.onClick(this.props.id)
      this.props.clearAllIntervals()}} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {this.props.title}
        <Text style={this.state.timerEnding ? styles.timingOut : styles.timer}>
        {this.state.timeLeft}
        </Text>
      </Text>
    </TouchableHighlight>
  )
}
}

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
    fontSize: 25 
  },
  timingOut: {
    fontSize: 20,
    color: "red"
  },
  timer: {
    fontSize: 20,
    color: "black"
  }
})

export default Challenge