import React, { Component, useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

// const MyModalComponent = (props) => {
//     if(!props.show) {
//         return null;
//     }

//     // onHide={() => setShow(false)} 

//     return (

//                     <div className="ajax_quick_view">
//                         <div className="row">
//                             <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
//                             <div className="product-image">
//                                     <div className="product_img_box">
//                                         <img id="product_img" src="{{asset('storage/uploads/products/'.$product->image_product)}}" data-zoom-image="{{asset('storage/uploads/products/'.$product->image_product)}}" alt="{{asset('storage/uploads/products/'.$product->image_product)}}" />
//                                     </div>
                                    
//                                     <div id="pr_item_gallery" className="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
                                        
//                                         <div className="item">
//                                             <a href="#" className="product_gallery_item @if($loop->first) active @endif" data-image="{{asset('storage/uploads/variant/'.$item->img_file)}}" data-zoom-image="{{asset('storage/uploads/zoom/'.$item->img_file)}}">
//                                                 <img src="{{asset('storage/uploads/thumb/'.$item->img_file)}}" alt="$item->img_file" />
//                                             </a>
//                                         </div>
                                        
//                                     </div>
                                    
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6">
//                                 <div className="pr_detail">
//                                     <div className="product_description">
//                                         <h4 className="product_title"><a href="#">aaaa</a></h4>
//                                         <div className="product_price">
//                                             <span className="price"></span>
//                                                 <del></del>
//                                                 <div className="on_sale">
//                                                     <span>% Off</span>
//                                                 </div>
//                                         </div>
//                                         <div className="pr_desc">
//                                             <p></p>
//                                         </div>
//                                         <div className="product_sort_info">
//                                             <ul>
//                                                 <li><i className="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
//                                                 <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
//                                                 <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
//                                             </ul>
//                                         </div>
                                        
//                                     </div>
//                                     <hr />
//                                     <div className="cart_extra">
//                                         <div className="cart-product-quantity">
//                                             <div className="quantity">
//                                                 <input type="button" defaultValue="-" className="minus" />
//                                                 <input type="text" name="quantity" defaultValue="1" title="Qty" className="qty" size="4" />
//                                                 <input type="button" defaultValue="+" className="plus" />
//                                             </div>
//                                         </div>
//                                         <div className="cart_btn">
//                                             <button className="btn btn-fill-out btn-addtocart" type="button"><i className="icon-basket-loaded"></i> Add to cart</button>
//                                             <a className="add_compare" href="#"><i className="icon-shuffle"></i></a>
//                                             <a className="add_wishlist" href="#"><i className="icon-heart"></i></a>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <ul className="product-meta">
//                                         <li>SKU: <a href="#">BE45VGRT</a></li>
//                                         <li>Category: <a href="#">Clothing</a></li>
//                                         <li>Tags: <a href="#" rel="tag">Cloth</a>, <a href="#" rel="tag">printed</a> </li>
//                                     </ul>
                                    
//                                     <div className="product_share">
//                                         <span>Share:</span>
//                                         <ul className="social_icons">
//                                             <li><a href="#"><i className="ion-social-facebook"></i></a></li>
//                                             <li><a href="#"><i className="ion-social-twitter"></i></a></li>
//                                             <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
//                                             <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
//                                             <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//     )
// }

// export default MyModalComponent;


class MyModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            show : this.props.show,
            item : this.props.item,
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(event) {  
      event.preventDefault();
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        console.log(this.props);
        return (
        <Modal show={this.props.show} onHide={this.handleClose} dialogClassName="modal-90w">
              <Modal.Header>
                <Modal.Title>asdsad</Modal.Title>
              </Modal.Header>

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
                                <h4 className="product_title"><a href="#">aaaa</a></h4>
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
                                        <li>{this.state.item}</li>
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
                <Button onClick={this.handleClose}>Close</Button>

              </Modal.Footer>
            </Modal>
        );
    }
  }

  export default MyModalComponent;

