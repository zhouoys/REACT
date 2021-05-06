import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
class index extends Component {
    goBack = ()=>{
        this.props.history.goBack();
    }
    goForward =()=>{
        this.props.history.goForward();
    }
    go = ()=>{
        this.props.history.go(2);
    }
  render() {
      console.log('header',this.props);
    return (
      <div>
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
          <button onClick={this.goBack}>上一步</button>&nbsp;&nbsp;
          <button onClick={this.goForward}>下一步</button>&nbsp;&nbsp;
          <button onClick={this.go}>跳转</button>&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}
export default withRouter(index)
