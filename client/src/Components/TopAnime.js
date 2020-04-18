import React from 'react';
import axios from 'axios';
import SingleAnime from './SingleListItem';
import './topanime.css';

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
                Loading ... 
            </div>
            )
        }
        return(
            <div className="top-main-main">
            <div className="top-title">Top Anime List</div>
            <div className="top-main-div">
                {
                    this.state.webdata.map(SINGLEANIME=>{
                        return <SingleAnime singleanime={SINGLEANIME} />
                    })
                }
            </div>
            </div>
        )
    }

}

export default TopAnime;