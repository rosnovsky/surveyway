import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "./Header";
import Landing from "./Landing";
import * as actions from '../actions';
import Surveys from "./Surveys";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render()
    {
      return (
        <div className="container">
          <BrowserRouter>
            <div>
              <Header />  
              <Route path="/" exact component={Landing} />
              <Route path="/surveys" exact component={this.props.auth ? Surveys : Landing } />
              <Route path="/surveys/new" component={this.props.auth ? SurveyNew : Landing } />
            </div>
          </BrowserRouter>
        </div>
      );
    }
};

function mapStateToProps({ auth }) {
  return { 
    auth
  }
}

export default connect(mapStateToProps, actions)(App);