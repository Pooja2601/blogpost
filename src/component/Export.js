import React, { Component } from 'react';
import Export from '../export.json'

class LogisysExport extends Component {
  render() {
    return (
      <div>
      <table>
          <thead>
              <tr>
              <th>CL</th>
              <th>FL</th>
              <th>SB No</th>
              <th>Date</th>
              <th>Job No</th>
              <th>Exporter</th>
              <th>Mode</th>
              <th>SB Type</th>
              <th>Loading Port</th>
              <th>Destination Port</th>
              <th>Custom House</th>
              <th>Status</th>
              </tr>
            </thead>
      </table>
        {Export.export.map((data,index)=>{
        return <table key={data.id}> 
        <tbody>
        <tr>
              <td>{data.cl}</td>
              <td>{data.fl}</td>
              <td>{data.Sbno}</td>
              <td>{data.date}</td>
              <td>{data.exporter}</td>
              <td>{data.mode}</td>
        </tr>
        </tbody>
        </table>
        })}
      </div>
    )
  }
}
export default LogisysExport;
