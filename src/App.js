import React, { Component } from 'react';
import './App.css';
import PostForm from './component/PostForm'
import AllPost from './component/AllPost';
import Export from './component/Export';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from './component/UI/Navbar';
import { BrowserRouter,Route } from 'react-router-dom'
import Book from './component/Book'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <AppBar position="static" color="primary" className="AppBar">
      <Toolbar>
          <Typography variant="h6" color="secondary" >
            <Navbar/>
          </Typography>
      </Toolbar>
      </AppBar>
      <Route exact path="/" component={PostForm} />
          <Route path="/allpost" component={AllPost} />
          <Route path="/export" component={Export} />
          <Route exact path="/book" component={Book} />
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
