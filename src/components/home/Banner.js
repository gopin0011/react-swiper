import React from 'react'
import { Carousel } from 'react-bootstrap';

const Banner = (props) => {
    let banner = props.data;
    let IMAGE_URL = process.env.REACT_APP_SERVER_URL+"storage/uploads/sliders/";

    return(
        <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div id="carouselExampleControls" className="carousel slide light_arrow" data-ride="carousel">
                            <div className="carousel-inner">
                            <Carousel controls={false} nextLabel={""} prevLabel={""}>
                            { banner.map((banner, index) => { 
                                {/* const className = (index === 0) ? 'carousel-item background_bg active' : 'carousel-item background_bg';   */}
                                return (
                                    <Carousel.Item key={banner.id}>
                                        <img
                                            className="d-block w-100"
                                            src={IMAGE_URL+banner.image_slider}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                );
                            })}
                            </Carousel>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
};

export default Banner;