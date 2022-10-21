import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
function Letestmovie(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="Popular-Movies">
            <div className="main-contanear">
                <h3>Latest & Trending Movies</h3>
                <div className="movie-contanear">
                    {props.letestmovielist.map((letestmovie) => (
                        <div key={letestmovie.id} className="movie">
                            <img src={img_api + letestmovie.poster_path} alt={letestmovie.title} />
                            <div className="movie-info">
                                <h3>{letestmovie.title}</h3>
                                <p>{letestmovie.overview}</p>
                                <div className="playnow">
                                    <h4 className="letvote">{letestmovie.vote_average}</h4>
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
export default Letestmovie;