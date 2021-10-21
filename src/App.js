import React, { Component } from 'react'
import Navbar from './Project 1/Navbar';
import News from './Project 1/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (prog) => {
    this.setState({
      progress: prog
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apikey={this.apikey} pageSize={12} country="us" category="science" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={12} country="us" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={12} country="us" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={12} country="us" category="general" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={12} country="us" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={12} country="us" category="science" />
            </Route>
            <Router te exact path="/sports">
              <News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={12} country="us" category="sports" />
            </Router>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={12} country="us" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
