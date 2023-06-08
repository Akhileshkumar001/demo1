import React, { Component } from 'react'
import {movies} from './getMovies';


export default class List extends Component {
  render() {
    let movie= movies.results;
    let height;
    return (
      <>
      {
       movie.length == 0 ?(
       <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
       </div>
    ):(
      <div>
       <h3 className="text-center">
          <strong>Trending</strong>
       </h3>
       <div className="movies-list">
        {movie.map((movieObj)=>(
          <div className="card movies-card">
          <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top banner-img" alt="..." style={{height:"40vh",width:"20vw"}}  />
           {/* <div class="card-body"> */}
            <h5 className="card-title movie-title">{movieObj.original_title}</h5>
            {/*<p className="card-text banner-textf ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
            <div className="button-wrapper">
              <a href="#" class="btn btn-primary movie-button">add to favourites</a>
           </div>
          </div>
        ))}
        </div>
      </div>
     )}
      </>
    );
  }
}
