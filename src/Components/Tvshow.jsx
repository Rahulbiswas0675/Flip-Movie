import React from "react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
function Tvshow(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="Popular-Movies">
            <div className="main-contanear">
                <h3>Tv-Shows</h3>
                <div className="movie-contanear">
                    {props.Tvshows.map((tvshowss) => (
                        <div key={tvshowss.id} className="movie">
                        <img src={img_api + tvshowss.poster_path} alt={tvshowss.title} />
                        <div className="movie-info">
                            <h3>{tvshowss.title}</h3>
                            <p>{tvshowss.overview}</p>
                            <div className="playnow">
                                <h4 className="letvote">{tvshowss.vote_average}</h4>
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
export default Tvshow;