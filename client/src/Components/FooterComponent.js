import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    render(){
        return(
            <div className="container-fluid d-flex flex-column" 
                style={{height:'100px',
                backgroundColor:'#808080',color: '#ffffff'}}>
                <label className="d-flex align-self-center"><strong>Made by Mallikarjun</strong> </label>
                <a className=" text-dark align-self-center" href="https://www.github.com/mallikarjun2000/"><FontAwesomeIcon icon="github" size="xs"/>github</a>
            </div>
        )
    }
}

export default Footer;