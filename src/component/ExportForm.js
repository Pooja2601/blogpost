
import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
    },
    input:{
        width:"150px",
        height:"100px"
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
    width:"50%",
    heigh:"50%"
}
  });

class ExportForm extends Component {
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      }; 
  render() {
    const { classes } = this.props;
    return (
        <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} >
          <table>
           <tbody>
             <tr>
               <td>Job Number</td>
               <input/>
               <td>Job Date</td>
               <input/>
               <td>Job Recieved on</td>
               <input/>
               <input/>
             </tr> 
             <tr>
             <td>Transport Mode</td>
             <input/>
             <td>Custom House</td>
             <input/>
             <td>Assigned To</td>
             <input/>
             </tr>   
             <tr>
             <td>Filing Mode</td>
             <input/>
             <td>SB Type</td>
             <input/>
             <td>Consignment Type</td>
             <input/>
             <button>Standard Documents</button>
             </tr>            
           </tbody>
          </table>
          
          <hr/>
          <form>
             <table>
              <tbody>
                 <tr>
                    <td><label>Exporter</label></td>
                    <td><input/></td>
                    <td><label>Exporter Ref No/Date</label></td>
                    <td><input /></td>
                    <td><input/></td>
                 </tr> 
                 <tr>
                    <td><label>Address</label></td>
                    <td><textarea/></td>
                    <td><label>Exporter Type</label></td>
                    <td><input/></td>
                    <td><label>SB Number/Date</label></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><label>RBI Appr No. & Date</label></td>
                    <td><input/></td>
                    <td><input/></td>
                    <td><label>GR No. & Date</label></td>
                    <td><input/></td>
                    <td><input/></td>
                 </tr> 
                 <tr>
                    <td><label>Branch SNo</label></td>
                    <td><input/></td>
                    <td><label>State</label></td>
                    <td><input/></td>
                    <td><label>RBI Waiver No/Date</label></td>
                    <td><input/></td>
                    <td><input/></td>
                 </tr> 
                 <tr>
                 <td><label>IE Code No</label></td>
                 <td><input/></td>
                 <td><label>Regn No</label></td>
                 <td><input/></td>
                 <td><label>Consignee</label></td>
                 <td><input/></td>
                 <td><label>Bank Dealer</label></td>
                 <td><textarea/></td>
                 <td><label>Account No.</label></td>
                 <td><input /></td>
                 <td><label>AD Code</label></td>
                 <td><input /></td>
                </tr> 
                <tr>
                <td><label>Address</label></td>
                <td><textarea/></td>
                <td><label>EPZ Code</label></td>
                <td><input/></td>
                <td><label>Notify</label></td>
                <td><input/></td>
                <td><label>Notify Address</label></td>
                <td><textarea/></td>
               </tr> 
               <tr>
                <td><label>Cons Country</label></td>
                <td><input/></td>
                <td><label>Sales Person</label></td>
                <td><input/></td>
                <td><label>Quotation</label></td>
                <td><input/></td>
               </tr> 
              </tbody>
             </table>
             </form>
             <p>Note: Items in italic indicates the fields which are used for EDI file submission</p>
             <tr>
               <button>Copy Prev Job</button>
               <button>Import from File</button>
               <button>Supporting Documents</button>
               <button>Declaration</button>
               <button>Close</button>
             </tr>
            <ExportForm />
          </div>
          </Modal>
      
      </div>
     
       
     
    )
  }
}
const SimpleModalWrapped = withStyles(styles)(ExportForm);

export default SimpleModalWrapped;