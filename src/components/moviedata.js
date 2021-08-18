import React from 'react';
import Figure from 'react-bootstrap/Figure';

class MovieData extends React.Component {
    render() {
        return (
            <>
            {this.props.Displaymovie && <h1 className='figureheaders'>Movies Related To the City</h1>}
                {this.props.Allmovies.map(item => {
                    return (
                        <>
                            <h2 className='figureheaders'>{item.title}</h2>
                            <Figure className='myfigures'>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="500x700"
                                    src={item.image_url}
                                />
                                <Figure.Caption>{item.overview}</Figure.Caption>
                                <Figure.Caption>{item.released_on}</Figure.Caption>
                            </Figure>
                        </>
                    )
                })}
                {/* {this.props.Allmovies.map(item => {
                    return (
                        <>
                            {this.props.Displaymovie && <p className='Movieparagraphs'>{item.average_votes}</p>}
                            {this.props.Displaymovie && <p className='Movieparagraphs'>{item.total_votes}</p>}
                            {this.props.Displaymovie && <p className='Movieparagraphs'>{item.popularity}</p>}
                        </>
                    )
                })} */}
            </>
        )


    }
}
export default MovieData;