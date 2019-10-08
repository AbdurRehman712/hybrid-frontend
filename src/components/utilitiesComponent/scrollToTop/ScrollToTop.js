import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {

      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0)
      }
      else
      {
        window.scrollTo(0,window.scrollY)
      }
    }

  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)