import React, { Component } from 'react';
import { QuickView } from '../quick-view';



export class ProductContainer extends Component {
    constructor() {
        super();
        this.state = {
            components: false
        };
        this.src = process.env.REACT_APP_SERVER_URL+"storage/uploads/products/";
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick = (a) => {
        this.setState({ components: true });
        console.log(this.state.components);
        // { this.state.components.map((item, i) => ( <QuickView /> ))} 
    };

    render() {
        return(
            <div className="item">
                <div className="product">
                    <a href="shop-product-detail.html">
                        <img src={this.src+this.props.data.image_product} alt="product_img1" />
                    </a>
                    <div className="product_action_box">
                        <ul className="list_none pr_action_btn">
                            <li><a href="#"><i className="icon-basket-loaded"></i></a></li>
                            <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                            <li><a href="#" className="popup-ajax" onClick={() => this.handleClick(this.props.data)}><i className="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i className="icon-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="product_info">
                    <h6 className="product_title"><a href="shop-product-detail.html">{this.props.data.name_product}</a></h6>
                    <div className="product_price">
                        <span className="price">$45.00</span>
                        <del>$55.25</del>
                        <div className="on_sale">
                            <span>35% Off</span>
                        </div>
                    </div>
                    <div className="rating_wrap">
                        <div className="rating">
                            <div className="product_rate" style={{ width:"80%" }} ></div>
                        </div>
                        <span className="rating_num">(21)</span>
                    </div>
                    <div className="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    <div className="pr_switch_wrap">
                        <div className="product_color_switch">
                            <span className="active" data-color="#87554B"></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
};

export default ProductContainer;