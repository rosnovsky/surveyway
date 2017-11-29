import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="The Survey Way" // the pop-in header title
        description="Send out 5 surveys, fast"
        image="/morda_square.jpeg"
        ComponentClass="div"
        panelLabel="Buy 5 Survey Credits"
        currency="USD"
        amount={2500}
        email="billing@thesurveyway.com"
        billingAddress={true}
        zipCode={true}
        bitcoin
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn btn-primary">
          <span role="img" aria-label="Closed Lock">
            🔒
          </span>{" "}
          Buy Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
