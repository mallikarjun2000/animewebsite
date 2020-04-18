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
        

        var airing=false,disply;
        if(airing)
            disply = "Airing"
        else
            disply= "Not Airing"

        const url = '/landingpage/'+anime_data.mal_id;
        return(
            <div className="card single-card">
                <img className="single-img" src={img_url} alt=".."/>
                <div className="single-name">{title}</div>
                <p className="single-start-date">{anime_data.start_date}</p>
                <div className="single-rating-div" >
                    <div className="single-rating" >Rating : </div>
                    <div>{anime_data.rank}</div>
                </div>
                <Link to={url} >
                <button className="btn btn-primary single-btn"
                >Know More</button>
                </Link>
            </div>
        )
    }
}

export default SingleListItem;