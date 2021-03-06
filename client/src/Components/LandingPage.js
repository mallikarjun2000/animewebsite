import React from 'react';
import axios from 'axios';
import Loading from '../assets/giphy.webp';
import Placeholder from '../assets/placeholder-img.jpg';
import './landingpage.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component{

    componentDidMount(){
        const { malid } = this.props.match.params;
        const url = this.state.base_url+malid;
        console.log(url);
        axios.get(url)
        .then(res=>{console.log(res);
            this.setState({anime_data:res.data})})
            .catch(err=>{alert('An error has occured check or reload browser')});
    }

    constructor(){
        super();
        this.state = {
            base_url : 'https://api.jikan.moe/v3/anime/',
            anime_data:null
        }
    }

    render(){
        if(this.state.anime_data == null)
        {
            return(
                <div>
                    <img src={Loading} />
                </div>
            )
        }
        else{
            const anime_data = this.state.anime_data;
            const img_url = anime_data.image_url;
            const title = anime_data.title;
            const rating = anime_data.rating;
            const type = anime_data.type;
            const episodes = anime_data.episodes;
            const status = anime_data.status;
            const aired_details = anime_data.aired;
            const score = anime_data.score;
            const duration = anime_data.duration;
            const synopsis = anime_data.synopsis;
            const trailer_url = anime_data.trailer_url;
            const gener = anime_data.genres;

        return(
            <div className="landing-main-div">
                <div className="landing-header">
                    <div className="landing-header-left">
                        <img style={{padding:"30px"}} className="landing-image" src={img_url} />
                    </div>
                    <div className="landing-header-right">
                        <h2>{title}</h2>
                        <p>Rating : {rating}</p>
                        <p>Episodes : {episodes}</p>
                        <p>status : {status}</p>
                        <p>Score : <b>{score}</b> /10</p>
                    </div>
                </div>
                <div className="landing-body">
                <hr></hr>
                    <div>Synopsis : </div>
                        <div> {synopsis} </div>
                        <div  style={{marginTop:"25px",marginBottom:"10px"}} >Geners</div>
                    <div className="landing-gener-div">
                        {gener.map(generitem=>{
                            const url = '/newanime/'+generitem.mal_id
                            if(generitem.name!=null){
                            return <Link to={url} key={generitem.mal_id} ><div  className="langing-single-gener">{
                                generitem.name
                            }</div></Link>
                            }
                        })}
                    </div>
                    <p><b>Watch Trailer Here !</b></p>
                    <iframe className="landing-trailer" iframe src={trailer_url} width="380px" height="250px">Not Available
                    </iframe>
                </div>
            </div>
        )
    }
}
}

export default LandingPage;