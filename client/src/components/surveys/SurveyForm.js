import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";
import { Link } from 'react-router-dom';

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
      <Field key = {name} component={SurveyField} type="text" label = {label} name={name} placeholder={placeholder} />
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
            <Link to="/surveys" className="btn right red waves-effect waves-light">Cancel <i class="tiny material-icons right">warning</i></Link>
          </form>
        </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "You must provide a title";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm)