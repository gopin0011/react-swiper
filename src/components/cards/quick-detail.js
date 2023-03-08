import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export const QuickDetail = ({detail}) => {
    const srcProduct = process.env.REACT_APP_SERVER_URL+"storage/uploads/products/";

    const [show, setShow] = useState(false);
    const [pic, setPic] = useState(null);
    
    const handleSelect = (variant) => { 
        setShow(true);
        setPic(createSelectItems(variant));
    };

    const createSelectItems = (detail) => {
        let items = [];

        const srcVariant = process.env.REACT_APP_SERVER_URL+"storage/uploads/variant/";
        
        return (
        <React.Fragment>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            navigation
            modules={[Pagination,Navigation]}
            className="swiper"
            // breakpoints={{
            //   // when window width is >= 640px
            //   640: {
            //     width: 640,
            //     slidesPerView: 1,
            //   },
            //   // when window width is >= 768px
            //   768: {
            //     width: 768,
            //     slidesPerView: 2,
            //   },
            //   1024: {
            //     width: 1024,
            //     slidesPerView: 4,
            //   }
            // }}
            // onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(swiper) => {  }}
          >
          { detail.map((item, index) => { 
                return (
                    <SwiperSlide key={index}>
                    <div className="item">
                    <a href="#" className="product_gallery_item" data-image="assets/images/product_img1-4.jpg" data-zoom-image="assets/images/product_zoom_img4.jpg">
                        <img src={srcVariant + item.img_file} alt={"image " + index} />
                    </a>
                </div>
                </SwiperSlide>
                )
            })}
          </Swiper>
        </React.Fragment>
        );
        // return items;
    } 

    return (
        <div className="ajax_quick_view">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                    <div className="product-image">
                        <div className="product_img_box">
                            <img id="product_img" src={srcProduct+detail.image_product} data-zoom-image="assets/images/product_zoom_img1.jpg" alt="product_img1" />
                        </div>
                        <div id="pr_item_gallery" className="product_gallery_item" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
                            { show && pic }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="pr_detail">
                        <div className="product_description">
                            <h4 className="product_title"><a href="#">{detail.name_product}</a></h4>
                            <div className="product_price">
                                <span className="price">$45.00</span>
                                <del>$55.25</del>
                                <div className="on_sale">
                                    <span>35% Off</span>
                                </div>
                            </div>
                            <div className="rating_wrap">
                                    <div className="rating">
                                        <div className="product_rate" style={{width:"80%"}}></div>
                                    </div>
                                    <span className="rating_num">(21)</span>
                                </div>
                            <div className="pr_desc">
                                <p dangerouslySetInnerHTML={{ __html: detail.content_product }} />
                            </div>
                            <div className="product_sort_info">
                                <ul>
                                    <li><i className="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                                    <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                                    <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                                </ul>
                            </div>
                            {/* <div className="pr_switch_wrap">
                                <span className="switch_lable">Color</span>
                                <div className="product_color_switch">
                                    <span className="active" data-color="#87554B"></span>
                                    <span data-color="#333333"></span>
                                    <span data-color="#DA323F"></span>
                                </div>
                            </div>
                            <div className="pr_switch_wrap">
                                <span className="switch_lable">Size</span>
                                <div className="product_size_switch">
                                    <span>xs</span>
                                    <span>s</span>
                                    <span>m</span>
                                    <span>l</span>
                                    <span>xl</span>
                                </div>
                            </div> */}
                        </div>
                        <hr />
                        <ul className="product-meta">
                            <li>SKU: <a href="#">BE45VGRT</a></li>
                            <li>Category: <a href="#">Clothing</a></li>
                            <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
                        </ul>
                        <div className="product_share">
                            <span>Share:</span>
                            <ul className="social_icons">
                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                        <div className="cart_extra">
                            <div className="btn-group btn-group-justified">
                            { detail.product_detail.map((item, index) => { 
                                return (
                                    <button className="btn btn-fill-out" type="button" onClick={() => handleSelect(item.product_variant_image)}>{item.product_attribute.attribute_value}</button>
                                )
                            })}
                            </div>
                        </div>
                        <hr />
                        { show && 
                            <React.Fragment>
                            <div className="cart_extra">
                                <div className="cart-product-quantity">
                                    <div className="quantity">
                                        <input type="button" defaultValue="-" className="minus" />
                                        <input type="text" name="quantity" defaultValue="1" title="Qty" className="qty" size="4" />
                                        <input type="button" defaultValue="+" className="plus" />
                                    </div>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn btn-fill-out btn-addtocart" type="button"><i className="icon-basket-loaded"></i> Add to cart</button>
                                    <a className="add_compare" href="#"><i className="icon-shuffle"></i></a>
                                    <a className="add_wishlist" href="#"><i className="icon-heart"></i></a>
                                </div>
                            </div>
                            <hr />
                            </React.Fragment>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickDetail;