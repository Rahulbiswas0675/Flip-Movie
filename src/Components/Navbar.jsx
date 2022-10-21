import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import swal from 'sweetalert';
import './Search/Searchstyle.css';
import Upcomingmovies from '../Pages/Upcomingmovies';
import Allmovies from '../Pages/Allmovies';
import Tvshow from '../Pages/Tv-Show';

const ResponsiveAppBar = (props) => {
  // -------------------------Search---------------------------
  const [searchtrem, setSearchtrem] = useState();
  const [list, setList] = useState([]);

  // useEffect(() => {
  //   setList(props.allmoviess.filter((filtermovie) => {
  //     return filtermovie.title.includes(searchtrem)
  //   }))
  // }, [searchtrem]);

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

  // useEffect(() => {
  //   if (searchtrem) {
  //     props.classname('true')
  //   } else {
  //     props.classname('false');
  //   }
  // }, [searchtrem]);

  const onchangehandel = (e) => {
    let val = e.target.value
    setSearchtrem(val);
    props.filterlist(list);
  }

  return (
    <Router>
      <div className="Navbar">
        <div className="logo">
          <h1 className="logoname">React</h1>
        </div>
        <div className="menu">
          <a className="menu-ankar"><Link to="/">Upcoming-Movies</Link></a>
          <a className="menu-ankar"><Link to="/About">All-movies</Link></a>
          <a className="menu-ankar" ><Link to="/Contact">Tv-Show</Link></a>
        </div>
        <nav className="desktop">
          <div className="search-contanear">
            <form className="search-fild" role="search" onSubmit={submithandel}>
              <input className="searchinput" type="search" placeholder="Search" onChange={(e) => onchangehandel(e)} />
              <button className="searchbtn" type="submit"><SearchIcon className="searchicon" /></button>
            </form>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/Upcomingmovies" element={<Upcomingmovies />}></Route>
        <Route path="/Upcomingmovies" element={<Upcomingmovies />}></Route>
        <Route path="/Allmovies" element={<Allmovies />}></Route>
        <Route path="/Tvshow" element={<Tvshow />}></Route>
      </Routes>
    </Router>
  );
};
export default ResponsiveAppBar;
