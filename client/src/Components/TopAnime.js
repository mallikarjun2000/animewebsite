import React from 'react';
import axios from 'axios';
import SingleAnime from './SingleListItem';
import './topanime.css';
import Loading from '../assets/giphy.webp';

class TopAnime extends React.Component {

    componentDidMount(){
        const url = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
        axios.get(url)
        .then(res=>{console.log(res);
                    this.setState({webdata : res.data.top});
        })
        .catch(err=>{alert('error' , err)});
    }

    constructor(){
        super();
        this.state = {
            webdata : null
        }
    }

    render(){
        if(this.state.webdata==null)
        {
            return(
            <div>
                <img src={Loading}/> 
            </div>
            )
        }
        return(
            <div className="top-main-main">
            <div className="top-title">New Anime List</div>
            <div className="top-main-div">
                {
                    this.state.webdata.map(SINGLEANIME=>{
                        return <SingleAnime key={SINGLEANIME.mal_id} singleanime={SINGLEANIME} />
                    })
                }
            </div>
            </div>
        )
    }

}

export default TopAnime;