import React from 'react';
import '../Components/home.css';
import Carousel from './Carousel';

class Home extends React.Component{

    componentDidMount(){
    }

    constructor(){
        super()
        this.state = {
            show : false,
            search_text : null
        }
    }

    handleSearch=(event)=>{
        this.setState({search_text : event.target.value });
    }

    render(){

        return(
            <div className="home-main-div">
                <div className="home-title">Anime Buzz</div>
                <div className="home-description"> Now All your Favourate anime in one website . </div>
                <input className="home-seach-input" 
                onChange={this.handleSearch}
                value={this.state.search_text}
                style={{marginTop:"100px",
                        width:"70%",
                        marginLeft:"0px",
                        height:"40px"}}
                        placeholder=" search your anime" />
                <button className="btn btn-primary"
                style={{
                    marginTop:"-6px",
                    marginLeft:"10px"
                }}>Search</button>
                <Carousel/>
            </div>
        )
    }
}

export default Home;
