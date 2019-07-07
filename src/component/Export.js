import React from 'react';
import PropTypes from 'prop-types';
import Export from '../export.json'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Formik, Field } from 'formik';
import { Select, MenuItem} from "@material-ui/core";
import './Form.css';


// const CustomTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    minWidth: 50,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});
class LogisysExport extends React.Component {
  constructor(props){
    super(props);
     this.state = {
        header : [
            {name:"ol", value:"OL"},
            {name:"fl", value:"FL"},
            {name:"sbno", value:"SB NO"},
            {name:"date", value:"DATE"},
            {name:"jobno", value:"JOB NO"},
            {name:"exporter", value:"EXPORTER"},
            {name:"mode", value:"MODE"},
            {name:"sbtype", value:"SB TYPE"},
            {name:"loadingport", value:"LOADING PORT"},
            {name:"destinationport", value:"DESTINATION PORT"},
            {name:"customhouse", value:"CUSTOM HOUSE"},
            {name:"status", value:"STATUS"},
            {name:"trackingno", value:"TRACKING NO"},
            {name:"column", value:"COL"},
            {name:"column1", value:"COL1"}
        ],
        search:'',
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
  const {search1,search } = this.state;

    const filteredData = Export.export.filter(data => {
        return data.Sbno.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    });

    const filteredData1 = filteredData.filter(data =>{
        return data.exporter.toLowerCase().indexOf(search1.toLowerCase()) !== -1
    });
    return (
      <div>
    <Paper>
    <Formik>
    <Table className="table">
    <TableRow> 
    <Select
    value={this.state.search}
    onChange={this.handleChange}>
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={'JOB_NO'}>Job No</MenuItem>
    <MenuItem value={'8485291'}>S/B No</MenuItem>
    <MenuItem value={'AWB/BLNO'}>AWB/BL No</MenuItem>
    <MenuItem value={'HAWB/HBLNO'}>HAWB/HBL No</MenuItem>

  </Select>
  <TableCell>
  <Field className="text"
    type="text"
    name="date"
  />
</TableCell>
        <TableCell >Date :</TableCell>
        <TableCell><Field placeholder='Date' type='date'/></TableCell>
    </TableRow>
    <TableRow>
        <TableCell >Mode :</TableCell>
        <TableCell><Field name="mode"/></TableCell>
        <TableCell >SB Type :</TableCell>
        <TableCell><Field name="sbtype" type="text" onChange={this.onchange}/></TableCell>
        <TableCell>Exporter :</TableCell>
        <TableCell><Field name="exporter" type="text" onChange={this.onchange}/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Loading Port :</TableCell>
      <TableCell><Field name="loadingport"/></TableCell>
      <TableCell>Destination Port :</TableCell>
      <TableCell><Field name="destinationport"/></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Custom House :</TableCell>
      <TableCell><Field name="customhouse"/></TableCell>
      <TableCell>Status :</TableCell>
      <TableCell><Field name="status"/></TableCell>
      <TableCell className="text"><a href="#">Advance Filter</a></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Show :</TableCell>
      <TableCell><Field name="show"/></TableCell>
      <TableCell>Active :</TableCell>
      <TableCell><Field name="active"/></TableCell><br/>
    <button>Search</button>

    </TableRow>
       </Table>
    
    </Formik>
    
    </Paper>
    <Paper>
    <Table className="tablecell">
    <TableHead>
        <TableRow className="items">
        {
          header.map((x, i) =>
            <TableCell  key={i}>{x.value}</TableCell>
          )
        }
        </TableRow>
      </TableHead>
</Table>
  {filteredData1.map((data,index)=>{
  return <Table key={index} className="table"> 
  <TableBody>
  <TableRow>
  <TableCell>{data.cl}</TableCell>
  <TableCell>{data.fl}</TableCell>
  <TableCell>{data.Sbno}</TableCell>
  <TableCell>{data.date}</TableCell>
  <TableCell>{data.jobno}</TableCell>
  <TableCell>{data.exporter}</TableCell>
  <TableCell>{data.mode}</TableCell>
  <TableCell>{data.sbtype}</TableCell>
  <TableCell>{data.loadingport}</TableCell>
  <TableCell>{data.destinationport}</TableCell>
  <TableCell>{data.customhouse}</TableCell>
  <TableCell>{data.status}</TableCell>
  </TableRow>
  </TableBody>
  </Table>
  })}
     </Paper>
</div>
    )
  }
}
LogisysExport.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LogisysExport);





// <TableRow>
//         <CustomTableCell>CL</CustomTableCell>
//         <CustomTableCell>FL</CustomTableCell>
//         <CustomTableCell>SB No</CustomTableCell>
//         <CustomTableCell>Date</CustomTableCell>
//         <CustomTableCell>Job No</CustomTableCell>
//         <CustomTableCell>Exporter</CustomTableCell>
//         <CustomTableCell>Mode</CustomTableCell>
//         <CustomTableCell>SB Type</CustomTableCell>
//         <CustomTableCell>Loading Port</CustomTableCell>
//         <CustomTableCell>Destination Port</CustomTableCell>
//         <CustomTableCell>Custom House</CustomTableCell>
//         <CustomTableCell>Status</CustomTableCell>
//         </TableRow>