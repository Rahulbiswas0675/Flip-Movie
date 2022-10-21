import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
function Allmovies(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="Popular-Movies">
            <div className="main-contanear">
                <h3>Movies</h3>
                <div className="movie-contanear">
                    {props.allmovieslist.map((allmovies) => (
                        <div key={allmovies.id} className="movie">
                            <img src={img_api + allmovies.poster_path} alt={allmovies.title} />
                            <div className="movie-info">
                                <h3>{allmovies.title}</h3>
                                <p>{allmovies.overview}</p>
                                <div className="playnow">
                                    <h4 className="letvote">{allmovies.vote_average}</h4>
                                    <h5><PlayCircleFilledWhiteOutlinedIcon />watch now</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Allmovies;