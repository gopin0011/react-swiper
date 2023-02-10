import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { Dropdown, ButtonGroup } from "react-bootstrap";


export class Header extends Component {

  render() {
    return (
        <header className="header_wrap">
            <div className="top-header d-none d-md-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="header_topbar_info">
                                <div className="header_offer">
                                    <span>Free Ground Shipping Over $250</span>
                                </div>
                                <div className="download_wrap">
                                    <span className="mr-3">Download App</span>
                                    <ul className="icon_list text-center text-lg-left">
                                        <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                        <li><a href="#"><i className="fab fa-android"></i></a></li>
                                        <li><a href="#"><i className="fab fa-windows"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                                <div className="lng_dropdown">
                                    <select name="countries" className="custome_select">
                                        <option value='en' data-image="assets/images/eng.png" data-title="English">English</option>
                                        <option value='fn' data-image="assets/images/fn.png" data-title="France">France</option>
                                        <option value='us' data-image="assets/images/us.png" data-title="United States">United States</option>
                                    </select>
                                </div>
                                <div className="ml-3">
                                    <select name="countries" className="custome_select">
                                        <option value='USD' data-title="USD">USD</option>
                                        <option value='EUR' data-title="EUR">EUR</option>
                                        <option value='GBR' data-title="GBR">GBR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-header dark_skin">
                <div className="container">
                    <div className="nav_block">
                        <a className="navbar-brand" href="index.html">
                            <img className="logo_light" src="{{asset('assets/images/logo_light.png')}}" alt="logo" />
                            <img className="logo_dark" src="{{asset('assets/images/logo_dark.png')}}" alt="logo" />
                        </a>
                        <div className="contact_phone order-md-last">
                            <i className="linearicons-phone-wave"></i>
                            <span>123-456-7689</span>
                        </div>
                        <div className="product_search_form">
                            <form>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="custom_select">
                                            <select className="first_null">
                                                <option value="">All Category</option>
                                                <option value="Dresses">Dresses</option>
                                                <option value="Shirt-Tops">Shirt & Tops</option>
                                                <option value="T-Shirt">T-Shirt</option>
                                                <option value="Pents">Pents</option>
                                                <option value="Jeans">Jeans</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input className="form-control" placeholder="Search Product..." required=""  type="text" />
                                    <button type="submit" className="search_btn"><i className="linearicons-magnifier"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
                <div className="container">
                    <div className="row"> 
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false"> 
                                    <span className="ion-android-menu"></span>
                                </button> 
                                <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                    <ul className="navbar-nav">
                                        <li className="dropdown dropdown-mega-menu">
                                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Category</a>
                                            <div className="dropdown-menu">
                                                <ul className="mega-menu d-lg-flex">
                                                    <li className="mega-menu-col col-lg-12">
                                                        <ul className="carousel-cat">
                                                            
                                                            <li>
                                                                <ul> 
                                                                    <li className="dropdown-header"><div className="icon_box icon_box_style2"><i className="flaticon-"></i> <span><img src="" /> ass</span></div></li>
                                                                    
                                                                    <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">aaa</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="navbar-nav attr-nav align-items-center">
                                    <li><a href="#" className="nav-link"><i className="linearicons-user"></i></a></li>
                                    <li><a href="#" className="nav-link"><i className="linearicons-heart"></i><span className="wishlist_count">0</span></a></li>
                                    <li className="dropdown cart_dropdown"><a className="nav-link cart_trigger" href="#" data-toggle="dropdown"><i className="linearicons-cart"></i><span className="cart_count">2</span></a>
                                        <div className="cart_box dropdown-menu dropdown-menu-right">
                                            <ul className="cart_list">
                                                <li>
                                                    <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                                    <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Variable product 001</a>
                                                    <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                                </li>
                                                <li>
                                                    <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                                    <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2" />Ornare sed consequat</a>
                                                    <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                                </li>
                                            </ul>
                                            <div className="cart_footer">
                                                <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                                <p className="cart_buttons"><a href="#" className="btn btn-fill-line view-cart">View Cart</a><a href="#" className="btn btn-fill-out checkout">Checkout</a></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="pr_search_icon">
                                    
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }

}

export default withRouter(Header);
