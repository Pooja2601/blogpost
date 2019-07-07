import React from "react";
import { Select, MenuItem } from "@material-ui/core";

export class DropDown extends React.Component {
  state = {
    select: '',
  };
  handleChange = event => {
    this.setState({ select: event.target.value });
  };
  render() {
    
    const { select, field ,form, ...props} =this.props
    return (
      <div>
          <Select {...field} {...props}
            value={this.state.select}
           onChange={this.handleChange} 
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Job No</MenuItem>
            <MenuItem value={20}>S/B No</MenuItem>
            <MenuItem value={30}>AWB/BL No</MenuItem>
            <MenuItem value={40}>HAWB/HBL No</MenuItem>
          </Select>
      </div>
    );
  }
}