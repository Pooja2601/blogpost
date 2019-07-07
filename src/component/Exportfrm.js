import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import './Export.css'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';



// function rand() {
//     return Math.round(Math.random() * 20) - 10;
//   }
  
//   function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }
  

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
    },
    input:{
        width:"150px",
        height:"25px"
    },
    paper: {
        position: 'absolute',
        width: "100%",
        boxShadow: theme.shadows[10],
        padding: theme.spacing.unit * 6,
        outline: 'none',
        backgroundColor:"cyan"
      },
modal:{
    width:"75%",
    height:"75%",
    margin:"50px 175px ",
    align:"middle",
    backgroundColor:"#A9BCE5"
},
column :{
  float: "left",
  width:"50%",
  padding:"10px",
  height:"300px", /* Should be removed. Only for demonstration */
}

  });

class Exportfrm extends Component {   
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
   const {classes}=this.props;
    return (
        <div >
          <Card className={classes.modal}>
          <CardContent>
          <div >
          <table>
           <tbody>
             <tr>
               <td><label>Job Number</label></td>
               <input type="text"/>
               <td><label>Job Date</label></td>
               <input type="date"/>
               <td><label>Job Recieved on</label></td>
               <input type="date"/>
               <input value="SB Number"/>
             </tr> 
             <tr>
             <td><label>Transport Mode</label></td>
             <input type="text"/>
             <td><label>Custom House</label></td>
             <input type="text"/>
             <td><label>Assigned To</label></td>
             <input type="text"/>
             </tr>   
             <tr>
             <td><label>Filing Mode</label></td>
             <input/>
             <td><label>SB Type</label></td>
             <input/>
             <td><label>Consignment Type</label></td>
             <input/>
             <button>Standard Documents</button>
             </tr>            
           </tbody>
          </table>
          
          <Card>
          <CardContent>
          <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            General
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Shipment
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <form>
             <table>
              <tbody>
                 <tr>
                    <td><label>Exporter</label></td>
                    <td><input type="dropdown"/></td>
                    <td><label>Exporter Ref No/Date</label></td>
                    <td><input type="text"/></td>
                    <td><input type="date"/></td>
                 </tr> 
                 <tr>
                    <td><label>Address</label></td>
                    <td><textarea/></td>
                    <td><label>Exporter Type</label></td>
                    <td><input type="text"/></td>
                    <td><label>SB Number/Date</label></td>
                    <td><input type="text"/></td>
                    <td><input type="date"/></td>
                    <td><label>RBI Appr No. & Date</label></td>
                    <td><input type="text"/></td>
                    <td><input type="date"/></td>
                    <td><label>GR No. & Date</label></td>
                    <td><input type="text"/></td>
                    <td><input type="date"/></td>
                 </tr> 
                 <tr>
                    <td><label>Branch SNo</label></td>
                    <td><input type="text"/></td>
                    <td><label>State</label></td>
                    <td><input type="text"/></td>
                    <td><label>RBI Waiver No/Date</label></td>
                    <td><input type="text"/></td>
                    <td><input  type="date"/></td>
                   
                 </tr> 
                 <tr>
                 <td><label>IE Code No</label></td>
                 <td><input type="text"/></td>
                 <td><label>Regn No</label></td>
                 <td><input  type="text"/></td>
                 <td><label>Consignee</label></td>
                 <td><input type="text"/></td>
                 <td><label>Bank Dealer</label></td>
                 <td><textarea/></td>
                 <td><label>Account No.</label></td>
                 <td><input type="text"/></td>
                 <td><label>AD Code</label></td>
                 <td><input type="number"/></td>
                </tr> 
                <tr>
                <td><label>Address</label></td>
                <td><textarea/></td>
                <td><label>EPZ Code</label></td>
                <td><input type="text"/></td>
                <td><label>Notify</label></td>
                <td><input type="text"/></td>
                <td><label>Notify Address</label></td>
                <td><textarea/></td>
               </tr> 
               <tr>
                <td><label>Cons Country</label></td>
                <td><input type="text"/></td>
                <td><label>Sales Person</label></td>
                <td><input type="text"/></td>
                <td><label>Quotation</label></td>
                <td><input type="text"/></td>
               </tr> 
              </tbody>
             </table>
             </form>
             <p>Note: Items in italic indicates the fields which are used for EDI file submission</p>
             </TabPane>
             </TabContent>
             </CardContent>
             </Card>
            
          </div>
         
          </CardContent>
         
          <tr>
             <CardActions>
               <button>Copy Prev Job</button>
               <button>Import from File</button>
               <button>Supporting Documents</button>
               <button>Declaration</button>
               <button>Close</button>
               </CardActions>
             </tr>
          </Card>
      </div>   
    )
  }
}
const Wrapped = withStyles(styles)(Exportfrm);

export default Wrapped;