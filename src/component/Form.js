import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import {DropDown} from '../HOC/DropDown';
import './Form.css'
import Export from '../export.json'

class Form extends Component {
  constructor(props){
    super(props);
     this.state = {
        header : [
            {name:"ol", value:"OL"},
            {name:"fl", value:"FL"},
            {name:"sbno", value:"SB_NO"},
            {name:"date", value:"DATE"},
            {name:"jobno", value:"JOB_NO"},
            {name:"exporter", value:"EXPORTER"},
            {name:"mode", value:"MODE"},
            {name:"sbtype", value:"SB_TYPE"},
            {name:"loadingport", value:"LOADING_PORT"},
            {name:"destinationport", value:"DESTINATION_PORT"},
            {name:"customhouse", value:"CUSTOMHOUSE"},
            {name:"status", value:"STATUS"},
            {name:"trackingno", value:"TRACKING_NO"},
            {name:"column", value:"COL"},
            {name:"column1", value:"COL1"}
        ],
        search: '',
        search1: '',
    }
}
onchange = e => {
  this.setState({ search1: e.target.value });
};
handleChange = event => {
  this.setState({ search: event.target.value });
};

  render() {
  const { header } =this.state;
  const { search,search1 } = this.state;

    const filteredData = Export.export.filter(data => {
        return data.sbno.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    });

    const filteredData1 = filteredData.filter(data =>{
        return data.exporter.toLowerCase().indexOf(search1.toLowerCase()) !== -1
    });
    return (
      <Formik>
      <table>
      <tr>
          <td><Field type="dropdown" component={DropDown} className="dropdown" onchange={this.handleChange} value={this.state.search}/></td>
          <td>Date :</td>
          <td><Field placeholder='Date' type='date'/></td>
      </tr>
      <tr>
          <td >Mode :</td>
          <td><Field name="mode"/></td>
          <td >SB Type :</td>
          <td><Field name="sbtype" onChange={this.onchange}/></td>
          <td>Exporter :</td>
          <td><Field name="exporter"/></td>
      </tr>
      <tr>
        <td>Loading Port :</td>
        <td><Field name="loadingport"/></td>
        <td>Destination Port :</td>
        <td><Field name="destinationport"/></td>
      </tr>
      <tr>
        <td>Custom House :</td>
        <td><Field name="customhouse"/></td>
        <td>Status :</td>
        <td><Field name="status"/></td>
      </tr>
      <tr>
        <td>Show :</td>
        <td><Field name="show"/></td>
        <td>Active :</td>
        <td><Field name="active"/></td><br/>
      <button>Search</button>
  
      </tr>
         </table>
      
      </Formik>
      
      
    )
  }
}
export default Form;
