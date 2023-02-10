import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedProducts = (props) => {
    const featured_products = props.featured_products;
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

    let IMAGE_URL = process.env.REACT_APP_SERVER_URL+"storage/uploads/";

    return(
        <React.Fragment>
            <div className="section small_pt pb_20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading_tab_header">
                                <div className="heading_s2">
                                    <h2>Featured Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3" data-loop="true" data-dots="false" data-nav="true" data-margin="20">
                            <Slider {...settings}>
                            { featured_products.map((three, i) => { 
                                return (
                                    <div key={i} className="item">
                                    { three.map((item, index) => { 
                                        return (
                                            <div key={item.id} className="product">
                                                <div className="product_img">
                                                    <a href="shop-product-detail.html">
                                                        <img src={IMAGE_URL+"products/"+item.image_product} alt="" />
                                                    </a>
                                                </div>
                                                <div className="product_info">
                                                    <h6 className="product_title"><a href="shop-product-detail.html">{item.name_product}</a></h6>
                                                    <div className="product_price">
                                                        <span className="price">{item.price_product}</span>
                                                        {/* <del>10</del>
                                                        <div className="on_sale">
                                                            <span>4% Off</span>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    </div>
                                )
                            })}
                            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>        
                )
};

export default FeaturedProducts;