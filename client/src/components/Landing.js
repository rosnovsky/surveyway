// Take a look at this for color scheme: https://coolors.co/

import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";
import {
  connect
} from "react-redux";

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return ( <
          p >
          No registration, just < a href = "/auth/google" > login with Google < /a>{" "}
          to proceed. <
          /p>
        );
      default:
        return ( <
          p >
          What are you waiting
          for ? {
            " "
          } <
          Link to = {
            "/surveys/new"
          } > Create a survey < /Link> or add credits to
          your account. <
          /p>
        );
    }
  }

  render() {
    return ( <
      div style = {
        {
          textAlign: "center"
        }
      } >
      <
      h1 > The Survey Way < /h1> <
      h5 > Send out surveys, fast < /h5> <
      div > {
        this.renderContent()
      } < /div> < /
      div >
    );
  }
}

function mapStateToProps({
  auth
}) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Landing);