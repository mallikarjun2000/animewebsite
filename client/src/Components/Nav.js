import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom';

class Nav extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/'>
            <a className="nav-home"  href="#" >Anime Buzz</a>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                <Link to='/newanime'>
                <a class="nav-link nav-new-anime" href="#" >Top Anime</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to='/topanime' >
                <a class="nav-link nav-top "  href="#">New Upcoming Anime</a>
                </Link>
                </li>
                </ul>
            </div>
            </nav>
        )
    }
    /*
    <nav class="nav navbar-expand-lg bg-dark">
            <a class="nav-home" href="#">Anime Buzz</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a class="nav-link nav-top active" href="#">Top Aime</a>
                <a class="nav-link nav-new-anime " href="#">New upcomming Anime</a>
            </div>
            </nav>
    */

}

export default Nav;