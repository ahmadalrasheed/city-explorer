import React from 'react';
import Table from 'react-bootstrap/Table';

class TableDisplay extends React.Component {


  render() {

    return (
      <>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>display_name</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{this.props.displayname}</td>
          <td>{this.props.Latitude}</td>
          <td>{this.props.Longitude}</td>
        </tr>
      </tbody>
    </Table>
      </>
    )
  }
}
export default TableDisplay;