import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
function Moviediv(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="Popular-Movies">
            <div className="main-contanear">
                <h3>Popular-Movies</h3>
                <div className="movie-contanear">
                    {props.popularlists.map((popularmovie) => (
                        <div key={popularmovie.id} className="movie">
                        <img src={img_api + popularmovie.poster_path} alt={popularmovie.title} />
                        <div className="movie-info">
                            <h3>{popularmovie.title}</h3>
                            <p>{popularmovie.overview}</p>
                            <div className="playnow">
                                <h4 className="letvote">{popularmovie.vote_average}</h4>
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
export default Moviediv;