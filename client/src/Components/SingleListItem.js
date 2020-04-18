import React from 'react';
import './singlelistitem.css';
import PlaceHolder from '../assets/placeholder-img.jpg';

class SingleListItem extends React.Component{
    render(){

        const anime_data = this.props.singleanime;
        const title = anime_data.title;
        const img_url = anime_data.image_url;
        const episodes = anime_data.episodes;
        console.log(img_url);

        var airing=false,disply;
        if(airing)
            disply = "Airing"
        else
            disply= "Not Airing"

        return(
            <div className="card single-card">
                <img className="single-img" src={img_url} alt=".."/>
                <div className="single-name">{title}</div>
                <p className="single-start-date">{anime_data.start_date}</p>
                <div className="single-rating-div" >
                    <div className="single-rating" >Rating : </div>
                    <div>{anime_data.rank}</div>
                </div>
                <button className="btn btn-primary single-btn"
                >Know More</button>
            </div>
        )
    }
}

export default SingleListItem;