import React from "react";
import "./App.css";

class ActivityAndTime extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="activitybox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="activity">{this.props.activity}</h1>
          <h5 id="time">
            {this.props.time ? this.props.time : "Unknown"}
          </h5>
        </div>
        <button
          id="newActivity"
          onClick={this.props.handleClick}
        >
          GIVE ME SOMETHING TO DO
        </button>
      </div>
    );
  }
}

export default ActivityAndTime;