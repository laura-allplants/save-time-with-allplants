import React from 'react';
import logo from './logo.svg';
import ActivityAndTime from "./ActivityAndTime";
import activities from './ActivitiesDatabase';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activity: activities[0].activity,
      time: activities[0].time,
    };
  }
  randomActivity() {
    const randomNumber = Math.floor(Math.random() * activities.length);
    return activities[randomNumber];
    
  }
  shuffleActivities(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomActivity = this.randomActivity();
    this.setState({
      activity: generateRandomActivity.activity,
      time: generateRandomActivity.time
    });
    this.shuffleActivities(activities)
  };

  randomColor() {
    const colors = ['#213852','#05574A','#5E4563','#DE613D','#EBBAB2'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }
  
  render() {
    return (
      <div>
        <ActivityAndTime
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
