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
        var date_status="Not Available"
        if(anime_data.airing_start!=undefined){
        const airing_date = anime_data.airing_start.slice(0,4);
        

        if(start_date == null && airing_date == null)
        {
            date_status = "Not Avalable"
        }
        else
        {
            if(airing_date!=null)
            date_status = airing_date;
            else
            date_status = start_date;
        }
    }
    else{
    if(start_date != null)
    date_status = start_date;
    else
    date_status = "Not Available"
    }

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
                <div className="single-anime-year">{date_status}</div>
            </div>
        )
    }
}

export default SingleListItem;