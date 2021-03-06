import React, { Component } from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm'
import ToDoList from './component/ToDoList';
import Export from './component/Export';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from './component/UI/Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Book from './component/Book'
import './App.css';
import ExportForm from './component/ExportForm'
import Exportfrm from './component/Exportfrm';
import Login from './component/Login';
import { Button } from '@material-ui/core';
import fire from '../src/config/Fire'
import { Redirect } from 'react-router';

// const styles={
//   backgroundColor:'#FF6666',
//   height:90%
// }


class Navigate extends Component {
  constructor(props) {
    super(props);
    this.render();
    this.logout = this.logout.bind(this);
}

logout=()=>{
    fire.auth().signOut();
}
  render() {
  return (
    <BrowserRouter>
      <div className="App"> 
      <AppBar position="static" className="headerStyle">
      <Toolbar>
          <Typography variant="h6" color="secondary" >
            <Navbar/>
          </Typography> 
          <Button onClick={this.logout} color='inherit' style={{marginLeft:'inherit'}}>LogOut</Button>
      </Toolbar>
      </AppBar>
      <Redirect exact from="/" to="/post" />
      <Switch>
          <Route  exact path="/post" component={ToDoForm} />
          <Route path="/allpost" component={ToDoList} />
          {/* <Route path="/export" component={Export} /> */}
          {/* <Route exact path="/book" component={Book} />
          <Route exact path="/exportform" component={ExportForm} />
          <Route exact path="/exportfrm" component={Exportfrm} />  */}
          </Switch>  
    </div>
    </BrowserRouter>   
    );
  }
}

export default Navigate;
