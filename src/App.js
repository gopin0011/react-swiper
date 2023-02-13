import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import ProductService from "./services/product.service";

// import { QuickView } from './components/quick-view';
import { Modal } from './components/modal';

export default function App() {
  const [shown, setShown] = useState(false);
  const [detail, setDetail] = useState({});
  const [product, setProduct] = useState(null);
  const srcProduct = process.env.REACT_APP_SERVER_URL+"storage/uploads/products/";

  function QuickView(props) {
    let modalRef = null;
    let closeButton = null;

    return (
      <React.Fragment>
        {props.isShown ? (
          <Modal
            modalRef={(n) => (modalRef = n)}
            buttonRef={(n) => (closeButton = n)}
            closeModal={closeModal}
            onKeyDown={onKeyDown}
            onClickOutside={onClickOutside}
            detail={detail}
          />
        ) : null}
      </React.Fragment>
    );
  }

  function ProductCard({data}) {
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
            modules={[Navigation]}
            className="mySwiper"
          >
          { product && product.map((data,id)=>{
            return (
              <SwiperSlide key={data.id}>
                <div className="item">
                  <div className="product">
                      <a href="shop-product-detail.html">
                          <img src={srcProduct+data.image_product} alt="product_img1" />
                      </a>
                      <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                              <li><a href="#"><i className="icon-basket-loaded"></i></a></li>
                              <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                              <li><a href="#" className="popup-ajax" onClick={() => showModal(data)}><i className="icon-magnifier-add"></i></a></li>
                              <li><a href="#"><i className="icon-heart"></i></a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="product_info">
                      <h6 className="product_title"><a href="shop-product-detail.html">{data.name_product}</a></h6>
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
              </SwiperSlide>              
            )
          }) }
        </Swiper>
        <QuickView isShown={shown} />
    </React.Fragment>
    );
  }


  const getAllData = () => {
    ProductService.all().then((response) => {
      setProduct(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  function showModal(data) {
    setShown(true);
    setDetail(data);
    toggleScrollLock();
  };

  function closeModal() {
    setShown(false);
  }

  function onKeyDown(event) {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  function onClickOutside(event) {
    console.log(this);
    // if (this.modal && this.modal.contains(event.target)) return;
    // closeModal();
  };

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };


  return (
    <>
      <div className="container">
        <ProductCard />
      </div>
    </>
  );


}