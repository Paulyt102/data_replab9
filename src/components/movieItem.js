import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {


    //movieItem.js
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)//links to url
        .then(()=>{
            this.props.ReloadDataMethod();
            })
            
            .then()
            .catch();
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}