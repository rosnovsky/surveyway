import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return  (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return (
          <li><a href="/api/logout">Logout</a></li>
        );
    }
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal darken-2">
          <Link 
          to={this.props.auth ? "/surveys" : "/"} 
          className="left brand-logo" style={{ marginLeft: "0.425em" }}
          >Emaily App</Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { 
    auth
  }
}

export default connect(mapStateToProps)(Header);
