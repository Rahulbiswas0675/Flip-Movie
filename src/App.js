import { Usersdata } from './data';
import { useState, useEffect } from 'react';
import './App.css';
import './Components/Components.css';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import swal from 'sweetalert';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import Home from './Pages/Home';
import Upcomingmovies from './Pages/Upcomingmovies';
import Allmovies from './Pages/Allmovies';
import Tvshow from './Pages/Tv-Show';

function App() {
  const Popular_Movies_api = "https://api.themoviedb.org/3/movie/popular?api_key=36f61a64b63d2fddf911c69f34661698&language=en-US&page=1";
  const Latest_movie_api = "https://api.themoviedb.org/3/trending/movie/day?api_key=36f61a64b63d2fddf911c69f34661698&language=en-US";
  const Upcoming_Movie_api = "https://api.themoviedb.org/3/movie/upcoming?api_key=36f61a64b63d2fddf911c69f34661698&language=en-US&page=1";
  const Nowplaying_api = "https://api.themoviedb.org/3/movie/now_playing?api_key=36f61a64b63d2fddf911c69f34661698&language=en-US&page=1"
  const All_movie_api = "https://api.themoviedb.org/3/movie/top_rated?api_key=36f61a64b63d2fddf911c69f34661698&language=en-US&page=1";


  // ================Search=============================
  const [searchtrem, setSearchtrem] = useState();
  const [classname, setClassname] = useState();
  const [list, setList] = useState([]);

  const onchangehandel = (e) => {
    let val = e.target.value
    setSearchtrem(val);
  }
  const submithandel = (e) => {
    e.preventDefault();
    if (!searchtrem) {
      swal({
        title: "Oops...",
        text: "Plese Enter Movie Name",
        icon: "error",
        button: "Ok",
      });
    }
  }
  useEffect(() => {
    // =======filter-search-result=======
    setList(allmovies.filter((filtermovie) => {
      return filtermovie.title.includes(searchtrem)
    }))
    // =======for-search-result-div-class=======
    if (searchtrem) {
      setClassname('true')
    } else {
      setClassname('false');
    }
  }, [searchtrem]);
  //=================Fatch-Api=====================
  const [Upcoming, setUpcoming] = useState([]);
  const [Playdata, setNowplay] = useState([]);
  const [letest, setLetest] = useState([]);
  const [popularlist, setPopularlist] = useState([])
  const [allmovies, setAllmovies] = useState([]);
  useEffect(() => {
    // ====Fatch-Upcoming_Movie_api=======
    fetch(Upcoming_Movie_api)
      .then((res) => res.json())
      .then((upcoming) => {
        setUpcoming(upcoming.results);
      })
    // ====Fatch-Latest_movie_api=========
    fetch(Latest_movie_api)
      .then((res) => res.json())
      .then((ltdata) => {
        setLetest(ltdata.results)
      })
    // ====Fatch-Nowplaying_api=========
    fetch(Nowplaying_api)
      .then((res) => res.json())
      .then((playdata) => {
        setNowplay(playdata.results);
      })
    // ====Fatch-Popular_Movies_api=========
    fetch(Popular_Movies_api)
      .then((res) => res.json())
      .then((data) => {
        setPopularlist(data.results);
      })
    // ====Fatch-All_movie_api=========
    fetch(All_movie_api)
      .then((res) => res.json())
      .then((data) => {
        setAllmovies(data.results);
      })
      // =================
  }, [])

  // ==========localStorage-data=================
  const [localStore, setLocalstore] = useState();
  // ==============profile-icon================
  const [logtag, setLogtag] = useState();
  useEffect(() => {
    setLocalstore(JSON.parse(localStorage.getItem("Userdata")));
    if (localStore) {
      setLogtag(localStore.name.split(' ').slice(0,1).join(' '));
    } else {
      setLogtag("Login");
    }
  },[localStore])

  //================Navbar events handeler====================
  const [closebarclass, setClosebarclass] = useState("menu");
  const openbar = () => {
    if (closebarclass === "menu") {
      setClosebarclass("menuclose")
    } else {
      setClosebarclass("menu")
    }
  }

  // ======================HTML=====================================
  return (
    <div className="app">
      <Router>
        <div className="Navbar">
          <button className="menubar" onClick={openbar}><MenuOpenTwoToneIcon fontSize="large" /></button>
          <div className="logo">
            <h1 className="logoname">Flip-Movie</h1>
          </div>
          <div className={closebarclass}>
            <a className="menu-ankar"> <Link to="/Home">Home</Link></a>
            <a className="menu-ankar"><Link to="/Upcomingmovies">Upcoming</Link></a>
            <a className="menu-ankar"><Link to="/Allmovies">Allmovies</Link></a>
            <a className="menu-ankar" ><Link to="/Tvshow">Tv-Show</Link></a>
          </div>
          <div className="desktop">
            <div className="search-contanear">
              <form className="search-fild" role="search" onSubmit={submithandel}>
                <input className="searchinput" type="search" placeholder="Search" onChange={(e) => onchangehandel(e)} />
                <button className="searchbtn" type="submit"><SearchIcon className="searchicon" /></button>
              </form>
            </div>
          </div>
          <div className="userprofile">
            <h3>{logtag}</h3>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home
            // ====Send====
            searchlist={list} searchstyle={classname}
            Upcominglist={Upcoming}
            Playnowlist={Playdata}
            letestmovie={letest}
            popularlist={popularlist}
            allmovieslist={allmovies}
          />}></Route>
          <Route path="/Home" element={<Home

            searchlist={list} searchstyle={classname}
            Upcominglist={Upcoming}
            Playnowlist={Playdata}
            letestmovie={letest}
            popularlist={popularlist}
            allmovieslist={allmovies}
          />}></Route>
          <Route path="/Upcomingmovies" element={<Upcomingmovies Upcominglist={Upcoming} />}></Route>
          <Route path="/Allmovies" element={<Allmovies allmovieslist={allmovies} />}></Route>
          <Route path="/Tvshow" element={<Tvshow Tvshowlist={Playdata} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
