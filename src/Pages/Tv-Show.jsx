import Tvshowlist from '../Components/Tvshow';
function Tvshow(props){//
    return(
        <div className="Allmovies">
            <Tvshowlist Tvshows={props.Tvshowlist}/>
        </div>
    )
}
export default Tvshow;