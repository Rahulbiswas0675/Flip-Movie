import './Home.css';
import Searchresult from '../Components/Search/Searchresult';
import Upcomingmovie from '../Components/Upcomingmovie/Upcomingmovie';
import Nowplay from '../Components/Nowplay/Nowplay';
import Letestmoviediv from '../Components/Letestmovie';
import PopularMovie from '../Components/Moviediv';
import AllMovies from '../Components/AllMovies';
import Footer from '../Components/Footer/Footer';
import Login from '../Singuplogin/Login';

function Home(props) {
  return (
    <div className="Homecomponents">
      <Searchresult movieslist={props.searchlist} classname={props.searchstyle} />
      <Login logstates={props.logstatess}/>
      <Upcomingmovie Upcominglist={props.Upcominglist} />
      <Nowplay Playnowlist={props.Playnowlist} />
      <Letestmoviediv letestmovielist={props.letestmovie} />
      <PopularMovie popularlists={props.popularlist} />
      <AllMovies allmovieslist={props.allmovieslist} />
      <Footer />
    </div>
  )
}
export default Home;