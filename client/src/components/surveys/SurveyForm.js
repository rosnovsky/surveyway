import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, placeholder }) => {
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
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
