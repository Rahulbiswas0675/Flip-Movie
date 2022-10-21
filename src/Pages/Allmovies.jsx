import React from "react";
import '../App.css';
import AllMovies from '../Components/AllMovies';
function Allmovies(props) {
    return (
        <div className="Allmovies">
            <AllMovies allmovieslist={props.allmovieslist}/>
        </div>
    )
}
export default Allmovies;