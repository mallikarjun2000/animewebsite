import React from 'react';
import carousel1 from '../assets/carousel1.jpg';

function carousel(){
    return( 
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" width="100px">
           <div class="carousel-item">
            <img src="..." alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
            </div>
            </div>
        </div>
    )
}

export default carousel;