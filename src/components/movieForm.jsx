import React from 'react';
// import { useParams } from 'react-router-dom'

const MovieForm = ({match}) => {
    return ( <h1>Movie Form {match.params.id}</h1> );
}
 
export default MovieForm;