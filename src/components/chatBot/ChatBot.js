 
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { API_ID } from "./settings.js";
import { CometChat } from "@cometchat-pro/chat";
import Chatbox from "./ChatBox";
import Dashboard from "./DashBoard";
import Login from "./Login";
import CreateGroup from "./CreateGroup";
import "./chatBot.css";

class ChatBot extends Component {
  constructor(props) {
    super(props);

    CometChat.init(API_ID).then(
      (hasInitialized) => {
        console.log("Initialization completed successfully", hasInitialized);
      },
      (error) => {
        console.log("Initialization failed with error:", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <p>cdbhvlhsdvscvdshvkjd</p>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chatbox} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/creategroup" component={CreateGroup} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatBot;