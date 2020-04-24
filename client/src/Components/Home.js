import React from 'react';
import '../Components/home.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Carousel from './Carousel';

class Home extends React.Component{

    componentDidMount(){

    }

    constructor(){
        super()
        this.state = {
            show : false,
            search_text : null,
            redirect : false
        }
    }

    handleKey=(event)=>{
        if(event.key == 'Enter')
        {
            console.log('Enter pressed');
            this.setState({redirect : true});
        }
    }

    handleSearch=(event)=>{
        this.setState({search_text : event.target.value });
    }

    render(){

        const url = '/searchresults/'+this.state.search_text;
        if(this.state.redirect)
        {
            return <Redirect push to={url}/>
        }
        return(
            
            <div className="home-main-div">
                <div className="home-title">Anime Buzz</div>
                <div className="home-description"> Now All your Favourate anime in one website . </div>
                <input className="home-seach-input" 
                onKeyDown = {this.handleKey}
                onChange={this.handleSearch}
                value={this.state.search_text}
                style={{marginTop:"100px",
                        width:"70%",
                        marginLeft:"0px",
                        height:"40px"}}
                        placeholder=" search your anime" />
                <Link to={url}>
                <button className="btn btn-primary"
                style={{
                    marginTop:"-6px",
                    marginLeft:"10px"
                }}>Search</button>
                </Link>
                
            </div>
        )
    }
}

export default Home;
