import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// Displays New Survey form and components

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderConten(){
    if(this.state.showFormReview) {
      return <SurveyFormReview onCancel = {() => this.setState({ showFormReview: false })}/>;
    }
    return <SurveyForm onSurveySubmit = {() => this.setState({ showFormReview: true }) }/>;
  }

  render() {
    return (
      <div>
        {this.renderConten()}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
