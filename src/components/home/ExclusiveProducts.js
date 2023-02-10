import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useTab, useTabList, useTabPanel} from 'react-aria';
import {Item, useTabListState} from 'react-stately';
// import ModalDialog from './../Modal';
// import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';

function Tabs(props) {
  let state = useTabListState(props);
  let ref = React.useRef();
  let { tabListProps } = useTabList(props, state, ref);
  return (
    <div className={`tabs ${props.orientation || ''}`}>
      <div {...tabListProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

function Tab({ item, state, orientation }) {
  let { key, rendered } = item;
  let ref = React.useRef();
  let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);
  return (
    <div {...tabProps} ref={ref}>
      {rendered}
    </div>
  );
}

function TabPanel({ state, ...props }) {
  let ref = React.useRef();
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

const ExclusiveProducts = (props) => {

    const new_arrival = props.new_arrival;
    const best_seller = props.best_seller;
    const flash_sale = props.flash_sale;

    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});

    const handleClose = () => setShow(false);

    const handleShow = (item) => { 
      setItem(item);
      setShow(true);
    };

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
      <div className="section small_pb">
        <div className="container">
          <div className="row">
              <div className="col-12">
                <Tabs aria-label="History of Ancient Rome">
                  <Item key="new" title="New Arrival">
                  <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20">                
                    <Slider {...settings}>
                    { new_arrival.map((item, index) => { 
                        return (
                            <div key={item.id} className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={IMAGE_URL+"products/"+item.image_product} alt="http://placekitten.com/g/400/200" />
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li>
                                                <a className="popup-ajax" onClick={handleShow}><i className="icon-magnifier-add"></i></a>
                                                </li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">aa</a></h6>
                                        <div className="product_price">
                                            <span className="price">5</span>
                                            <del>10</del>
                                            <div className="on_sale">
                                                <span>5% Off</span>
                                            </div>
                                        </div>
                                        <div className="pr_desc">
                                            <p>short</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </Slider>
                  </div>  
                  </Item>
                  <Item key="best" title="Best Sellers">
                  <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20">                
                    <Slider {...settings}>
                    { best_seller.map((item, index) => { 
                        return (
                            <div key={item.id} className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={IMAGE_URL+"products/"+item.image_product} alt="http://placekitten.com/g/400/200" />
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a className="popup-ajax" onClick={handleShow}><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">aa</a></h6>
                                        <div className="product_price">
                                            <span className="price">5</span>
                                            <del>10</del>
                                            <div className="on_sale">
                                                <span>5% Off</span>
                                            </div>
                                        </div>
                                        <div className="pr_desc">
                                            <p>short</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </Slider>
                  </div> 
                  </Item>
                  <Item key="flash" title="Flash Sale">
                  <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20">                
                    <Slider {...settings}>
                    { flash_sale.map((item, index) => { 
                        return (
                            <div key={item.id} className="item">
                                <div className="product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={IMAGE_URL+"products/"+item.image_product} alt="http://placekitten.com/g/400/200" />
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a 
                                                className="popup-ajax" 
                                                onClick={() => handleShow(item)}><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><a href="shop-product-detail.html">aa</a></h6>
                                        <div className="product_price">
                                            <span className="price">5</span>
                                            <del>10</del>
                                            <div className="on_sale">
                                                <span>5% Off</span>
                                            </div>
                                        </div>
                                        <div className="pr_desc">
                                            <p>short</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </Slider>
                  </div> 
                  </Item>
                </Tabs>
              </div>
          </div> 
          <div className="row">
              <div className="col-12">        
                
              </div>       
          </div>  
        </div>   
</div>

       <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} dialogClassName="modal-90w">
        
        <Modal.Body>
          <div className="ajax_quick_view">
              <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                  <div className="product-image">
                          <div className="product_img_box">
                              <img id="product_img" src="{{asset('storage/uploads/products/'.$product->image_product)}}" data-zoom-image="{{asset('storage/uploads/products/'.$product->image_product)}}" alt="{{asset('storage/uploads/products/'.$product->image_product)}}" />
                          </div>
                          
                          <div id="pr_item_gallery" className="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
                              
                              <div className="item">
                                  <a href="#" className="product_gallery_item @if($loop->first) active @endif" data-image="{{asset('storage/uploads/variant/'.$item->img_file)}}" data-zoom-image="{{asset('storage/uploads/zoom/'.$item->img_file)}}">
                                      <img src="{{asset('storage/uploads/thumb/'.$item->img_file)}}" alt="$item->img_file" />
                                  </a>
                              </div>
                              
                          </div>
                          
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                      <div className="pr_detail">
                          <div className="product_description">
                              <h4 className="product_title"><a href="#">{item.name_product}</a></h4>
                              <div className="product_price">
                                  <span className="price"></span>
                                      <del></del>
                                      <div className="on_sale">
                                          <span>% Off</span>
                                      </div>
                              </div>
                              <div className="pr_desc">
                                  <p></p>
                              </div>
                              <div className="product_sort_info">
                                  <ul>
                                      <li><i className="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                                      <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                                      <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                                  </ul>
                              </div>
                              
                          </div>
                          <hr />
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
                      </div>
                  </div>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </React.Fragment>        
    )
    }


export default ExclusiveProducts;

// ModalDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool.isRequired
// };