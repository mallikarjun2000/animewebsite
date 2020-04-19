import React from 'react';
import './singlelistitem.css';
//import PlaceHolder from '../assets/placeholder-img.jpg';
import { Link } from 'react-router-dom';

class SingleListItem extends React.Component{


    render(){

        const anime_data = this.props.singleanime;
        const title = anime_data.title;
        const img_url = anime_data.image_url;
        const episodes = anime_data.episodes;
        var start_date = anime_data.start_date;
        const mal_id = anime_data.mal_id;
        
        if(start_date == null)
        start_date = "Not available"

        var airing=false,disply;
        if(airing)
            disply = "Airing"
        else
            disply= "Not Airing"

        const url = '/landingpage/'+anime_data.mal_id;
        return(
            
            <div className="card single-card">
                <Link to={url}>
                <div className="single-div-img">
                    <img className="single-img" src={img_url} alt=".."/>
                </div>
                </Link>
                <div className="single-anime-name">{title}</div>
                <div className="single-anime-year">{start_date}</div>
            </div>
        )
    }
}

export default SingleListItem;