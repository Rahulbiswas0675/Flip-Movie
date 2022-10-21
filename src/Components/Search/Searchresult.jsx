import '../Search/Searchstyle.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { useEffect, useState } from 'react';

function Searchresult(props) {

    const img_api = "https://image.tmdb.org/t/p/w500";

    const [Stateresult, setStateresults] = useState(false);
    const [aa, setAa] = useState(false);
    useEffect(() => {
        if (props.movieslist) {
            setStateresults(true);

        } else {
            setStateresults(false);

        }
        if (props.movieslist == '') {
            setAa(true)
        } else {
            setAa(false)
        }
    }, [props])

    return (
        <div className={props.classname}>
            {Stateresult ?
                <div className="Popular-Movies">
                    <div className="main-contanear">
                        <h3>Searching Result</h3>
                        <div className="movie-contanear">
                            {props.movieslist.map((movies) => (
                                <div key={movies.id} className="movie">
                                    <img src={img_api + movies.poster_path} alt={movies.title} />
                                    <div className="movie-info">
                                        <h3>{movies.title}</h3>
                                        <p>{movies.overview}</p>
                                        <div className="playnow">
                                            <h4 className="letvote">{movies.vote_average}</h4>
                                            <h5><PlayCircleFilledWhiteOutlinedIcon />watch now</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                :
                null
            }
            {aa ?
                <Stack sx={{ width: '50%' }} spacing={2}>
                    <Alert severity="info">
                        <AlertTitle>Sorry</AlertTitle>
                        Movie Not Found — <strong>check spelling!</strong>
                    </Alert>
                </Stack>
                :
                null
            }
        </div>
    )
}
export default Searchresult;