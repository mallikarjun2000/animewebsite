import React from 'react';
import SingleListItem from './SingleListItem';
import axios from 'axios';
import Loading from '../assets/giphy.webp';

class ParticularGener extends React.Component {
    componentDidMount()
    {
        const { gener } = this.props.match.params ; 
        axios.get(`https://api.jikan.moe/v3/genre/anime/${gener}/1`)
        .then(res=>{this.setState({data : res.data.anime.slice(0,70)})
                        console.log(res)
                    this.setState({gener : res.data.mal_url.name})})
    .catch(err=>{alert('an error occured please reload browser')});
    }

    constructor(){
        super();
        this.state = {
            data : null,
            gener : null,
        }
    }

    render(){

        if(this.state.data!=null)
        {
            return(
                <div>
                    <div
                    style={{
                        backgroundColor:"#1D1D1D",
                        fontSize:"120%",
                        color:"white"
                    }}> Top <b>{this.state.gener}</b> Anime</div>
                <div style={{
                    display : "flex",
                    flexDirection : "row",
                    flexWrap : "wrap",
                    justifyContent : "center",
                    alignContent : "center",
                    backgroundColor:"#1D1D1D"
                }}>
                    { this.state.data.map(singleanime=>{
                        return <SingleListItem key={singleanime.mal_id} singleanime={singleanime} />
                    }) }
                </div>
                </div>
            )
        }

        return(
            <div>
            <img src={Loading}/> 
        </div>
        )
    }
}

export default ParticularGener;