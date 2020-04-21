import React from 'react';
import { Link } from 'react-router-dom';

class  singleGener extends React.Component {

    render()
    {
        const data =  this.props.singlegenre;
        const url = '/newanime/'+data.value;
    return(
        <Link to={url}>
        <div className="gener-single-main" id="gener-single-main">
            <div className="gener-name" id="gener-div" style={{ 
                width:"100px",
                height:"50px",
                margin:"20px 50px",
                borderRadius:"5px",
                backgroundColor:"gray",
                alignContent:"center",
                justifyContent:"center",
                color:"white"
            }}>
                { data.gener }
            </div>
        </div>
        </Link>
    )
    }
}

export default singleGener;