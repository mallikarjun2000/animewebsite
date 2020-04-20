import React from 'react';
import axios from 'axios';
import Loading from '../assets/giphy.webp';
import SingleListItem from './SingleListItem';
import './topanime.css';


class SearchResultPages extends React.Component{

    componentDidMount(){
        const { text } = this.props.match.params;
        axios.get(`https://api.jikan.moe/v3/search/anime?q=${text}`)
        .then(res=>{
            this.setState({results : res.data.results})
            console.log(' results : ',res.data);
        })
    }

    constructor(){
        super()
        this.state = {
            results : null
        }
    }

    render(){
        if(this.state.results!=null)
        {
            return(
                <div>
                <div style={{backgroundColor:"#1D1D1D",color:"white",fontSize:"150%"}}>Results</div>
                <div className='top-main-div'>
                    {this.state.results.map(single_Anime=>{
                        if(single_Anime.start_date!=null)
                        single_Anime.start_date = single_Anime.start_date.slice(0,4);
                        else
                        single_Anime.start_date = "Not Available";
                        return <SingleListItem singleanime={single_Anime}/>
                    }
                    )}
                </div>
                </div>
            )
        }
        else
        {
            return(
                    <div>
                        <img src={Loading}/> 
                    </div>
                )
        }
    }
}

export default SearchResultPages;