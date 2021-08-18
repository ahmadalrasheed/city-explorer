import React from 'react';
import Card from 'react-bootstrap/Card'

class WeatherData extends React.Component {
    render() {
        return (
            <>
                {this.props.WeatherData.map((item, idx) => {
                    return (
                        <>
                            <Card className='mycards' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Weather Forecast : Day{idx + 1}</Card.Title>
                                    <Card.Text>
                                        {this.props.DisplayWeather && <p className='Weatherparagraphs'>Date: {item.date}</p>}
                                        {this.props.DisplayWeather && <p className='Weatherparagraphs'>Description : {item.description}</p>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })}
                {/* {this.props.WeatherData.map(item => {
                    return (
                        <>
                            {this.props.DisplayWeather && <p className='Weatherparagraphs'>Date: {item.date}</p>}
                            {this.props.DisplayWeather && <p className='Weatherparagraphs'>Description : {item.description}</p>}
                        </>
                    )
                })} */}

            </>
        )
    }
}
export default WeatherData;