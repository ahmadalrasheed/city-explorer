import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




class MapDisplay extends React.Component {
    render() {
        return (
            <>
                <Container>
 
 
                        <Col xs={6} md={4}>
                            <Image src={this.props.Mapimage} roundedCircle />
                        </Col>

                </Container>

            </>
        )
    }
}
export default MapDisplay;