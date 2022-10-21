import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
function Nowplay(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="main-contanear">
            <div className="Nowplay">
                <h3>Continue Watching</h3>
                <div className="play-list">
                    {props.Playnowlist.map((play) => (
                        <div key={play.id} className="play-item">
                            <img src={img_api + play.backdrop_path} alt={play.title} />
                            <div className="plydet">
                                <h1>{play.title}</h1>
                            </div>
                            <h5 className="continewwatch"><PlayCircleFilledWhiteOutlinedIcon />Continue Watching</h5>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Nowplay;