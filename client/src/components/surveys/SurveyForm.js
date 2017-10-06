import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title", placeholder: "Give your survey a name" },
  { label: "Email Subject", name: "subject", placeholder: "Survey Email Subject" },
  { label: "Survey Body", name: "body", placeholder: "Content of your survey" },
  { label: "Recipients", name: "recipients", placeholder: "A list of emails of survey recipients" }
];

class SurveyForm extends Component {
  
renderFields() {
  return _.map(FIELDS, ({label, name, placeholder}) => {
    return (
      <Field component={SurveyField} type="text" label = {label} name={name} placeholder={placeholder} />
    )
  })
}

  render() {
    
    return (
        <div>
          <h3>Create New Survey</h3>
          <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
            

            <button type="submit" className="btn center btn waves-effect waves-light">Preview <i class="tiny material-icons right">find_in_page</i></button>
          </form>

        </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)