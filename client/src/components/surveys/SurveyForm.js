import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    placeholder: "Give your survey a name",
    noValueError: "Each survey requires a title."
  },
  {
    label: "Email Subject",
    name: "subject",
    placeholder: "Survey Email Subject",
    noValueError: "A subject is a must here."
  },
  { 
    label: "Survey Body", 
    name: "body", 
    placeholder: "Yes or No question for your recipients to answer",
    noValueError: "There\'s no survey without a message body." },
  {
    label: "Recipients",
    name: "emails",
    placeholder: "A list of emails of survey recipients",
    noValueError: "At least one recipient is required."
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, placeholder }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Survey</h3>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}

          <button
            type="submit"
            className="btn center btn waves-effect waves-light"
          >
            Preview <i className="tiny material-icons right">find_in_page</i>
          </button>
          <Link
            to="/surveys"
            className="btn right red waves-effect waves-light"
          >
            Cancel <i className="tiny material-icons right">warning</i>
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(FIELDS, ({ name, noValueError }) => {
    if(!values[name]) {
      errors[name] = noValueError;  
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
