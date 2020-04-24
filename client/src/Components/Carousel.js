import React from 'react';
import Carousel1 from '../assets/carousel1.jpg'
import Carousel2 from '../assets/carousel2.jpg';

class Carousel extends React.Component{
    render(){
        return(
            <div class="bd-example" width="100%" height="100%">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Carousel1} width="80%" height="40%" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Top Action</h5>
                        <p>Always stay updated on latest action animes </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel2} width="70%" height="100%" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5 style={{color:"#000000"}}>Don't wait</h5>
                        <p>Search your favourite charecter</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
        )
    }
}

export default Carousel;