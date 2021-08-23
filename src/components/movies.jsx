import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = { 
        movies: getMovies(),
        like: 0
     }
     handleLikes = () =>{
         return this.getLike();
     }
     handleDelete = (movie) => {
         const movies = this.state.movies.filter(m => m._id !== movie._id)
         this.setState({ movies})
     }
    getLike() {
        let classes = 'fa fa-heart';
        let like = {...this.state.like.value };
        console.log('like',like)
        if (like === 0) {
            like.value++;
            classes += '-o';
        } else {
            classes += '';
        }
        return classes;
    }

    render() { 
        const {length:count} = this.state.movies;
        if(count === 0) return <p>There no movies in the database</p>
        return( 
            <React.Fragment>
            <p>Showing {count} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><i onClick={() => this.handleLikes()} className={this.getLike()}></i></td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
            </React.Fragment>
        )
    }
}
 
export default Movies ;