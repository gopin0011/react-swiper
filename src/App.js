import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
// import ProductService from "./services/product.service";

import Product from "./components/cards/products";

export default function App() {
  const [product, setProduct] = useState(null);

  const getAllData = () => {
    axios
      .get(process.env.REACT_APP_SERVER_URL+"api/product")
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="container">
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
            <SwiperSlide key={data.id}><Product data={data} /></SwiperSlide>              
          )
        }) }
        </Swiper>
      </div>
    </>
  );
}