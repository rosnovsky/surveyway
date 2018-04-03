import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SurveyList from "./surveys/SurveyList";

class Surveys extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <div>
        <SurveyList />
        <div className="action-btn">
          <Link
            to={this.props.auth ? "/surveys/new" : "/"}
            className="btn-large waves-effect waves-light red"
          >Create Survey
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Surveys);
