import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Surveys extends Component {
  
  render() {
    console.log(this.props.auth);
    return (
      
        <div>
          <h3>Dashboard</h3>
          <div className="fixed-action-btn">
            <Link to={this.props.auth ? "/surveys/new" : "/"} className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { 
    auth
  }
}

export default connect(mapStateToProps)(Surveys)