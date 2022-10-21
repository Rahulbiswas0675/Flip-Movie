import Upcomingmovielist from '../Components/Upcomingmovielist';
function Upcomingmovies(props){
    return(
        <div className="Allmovies">
            <Upcomingmovielist Upcomingmoviess={props.Upcominglist}/>
        </div>
    )
}
export default Upcomingmovies;