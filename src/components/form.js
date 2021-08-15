import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormDisplay extends React.Component {



  render() {

    return (
      <>
        <h1>City explorer</h1>
        <br />
        <Form onSubmit={this.props.ShowLocations}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Enter a City" name='Explorer' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </>
    )
  }
}
export default FormDisplay;