import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return(
      <StripeCheckout 
      name="Emaily App" // the pop-in header title
      description="Send out 5 surveys, fast"
      image="/morda_square.jpeg"
      ComponentClass="div"
      panelLabel="Buy Survey Credits"
      currency="USD"
      amount = {500}
      email="artem@rosnovsky.us"
      billingAddress={true}
      zipCode={true}
      bitcoin
      token = {token => this.props.handleToken(token)}
      stripeKey = { process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY }
      >
        <button className="btn btn-primary">
          Buy Credits with Stripe
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);