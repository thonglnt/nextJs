"use client";

import SwiperCarousels from "@/Components/Swiper";
import { mockImagesProducts } from "@/mock/mockDataProduct";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Home() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  // Render col card product
  const renderCardProduct = () =>
    mockImagesProducts.map((element) => (
      <div className="col-md-3" key={element}>
        <div className="card card-popular border-0">
          <a href="#" className="product-image">
            <img src={element} className="card-img-top" alt="product" />
            <span className="sale-badge">Sale</span>
            <span className="add-to-cart">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </span>
          </a>
          <div className="card-body">
            <div className="row">
              <Rating size={20} onClick={handleRating} />
            </div>
            <a href="#" className="price">
              Product Name 1
            </a>
            <p>
              <span className="text-decoration-line-through me-1 text-secondary fw-semibold">
                $75.00
              </span>
              <span className="fw-semibold">$59.00</span>
            </p>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="row banner ms-3 me-3">
        <div className="col-md-4 home-page">
          <h6 className="text-white title-banner">NEW IN TOWN</h6>
          <h1 className="text-white content-banner">
            The New Beauty Collection
          </h1>
          <h3 className="fs-4 text-white">
            This new collection brings with it the most exciting lorem ipsum
            dolor sit amet.
          </h3>
          <button className="button mt-3">SHOP NOW</button>
        </div>
      </div>
      <div className="row ms-1 me-1">
        <SwiperCarousels />
      </div>
      <section>
        <div className="row text-center mt-5">
          <h6 className="sub-title">POPULAR PRODUCTS</h6>
          <h1 className="title mb-4">Trending Now</h1>
        </div>
        <div className="row ms-1 me-1">{renderCardProduct()}</div>
      </section>
      <section>
        <div className="row text-center mt-5">
          <h6 className="sub-title">SHOP</h6>
          <h1 className="title mb-4">Best Selling</h1>
        </div>
        <div className="row ms-1 me-1">{renderCardProduct()}</div>
      </section>
      <div className="row collection ms-3 me-3">
        <div className="col-md-4 home-page">
          <h6 className="text-white title-banner">NEW COLLECTION</h6>
          <h1 className="text-white content-banner">
            The beauty collection that makes all the difference!
          </h1>
          <h3 className="fs-4 text-white">
            Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu
            hendrerit sapien.
          </h3>
          <button className="button mt-3">SHOP NOW</button>
        </div>
      </div>
      <section className="mt-5 row ms-1 me-1">
        <div className="col-md-6">
          <h6 className="title-banner">JANE OLIVER</h6>
          <h1 className="content-banner">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            posuere...
          </h1>
        </div>
        <div className="col-md-5">
          <div className="row widget-wrapper">
            <Rating size={20} onClick={handleRating} />
            <h3 className="fs-6 fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas
              ac erat pretium, ultricies nibh quis, mattis massa.
            </h3>
            <h6 className="title-banner fw-light">JANE OLIVER</h6>
            <hr className="border-2" />
          </div>
          <div className="row widget-wrapper mt-5">
            <Rating size={20} onClick={handleRating} />
            <h3 className="fs-6 fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas
              ac erat pretium, ultricies nibh quis, mattis massa.
            </h3>
            <h6 className="title-banner fw-light">JANE OLIVER</h6>
            <hr className="border-2" />
          </div>
          <div className="row widget-wrapper mt-5">
            <Rating size={20} onClick={handleRating} />
            <h3 className="fs-6 fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas
              ac erat pretium, ultricies nibh quis, mattis massa.
            </h3>
            <h6 className="title-banner fw-light">JANE OLIVER</h6>
            <hr className="border-2" />
          </div>
        </div>
      </section>
      <section className="row me-1 ms-1 mt-5 d-flex justify-content-around">
        <div className="col-md-6 new-collection1 bg-image">
          <div className="col-md-4 home-page">
            <h6 className="text-white title-banner">NEW COLLECTION</h6>
            <h1 className="text-white content-banner">
              Awesome Makeup Kit Gift Sets
            </h1>
            <h3 className="fs-4 text-white">Find your unique style.</h3>
            <button className="button mt-3">SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6 new-collection2 bg-image">
          <div className="col-md-4 home-page">
            <h6 className="text-white title-banner">NEW COLLECTION</h6>
            <h1 className="text-white content-banner">
              The Ultimate Skincare Regime
            </h1>
            <h3 className="fs-4 text-white">Find your unique style.</h3>
            <button className="button mt-3">SHOP NOW</button>
          </div>
        </div>
      </section>
      <section className="row mt-5 me-1 ms-1">
        <div className="col-md-3">
          <h6 className="title-banner">WHY CHOOSE US</h6>
          <hr className="why-choose-us" />
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-2">
              <div className="choose-us-icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <h3 className="fs-4">Fast Delivery</h3>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-2">
              <div className="choose-us-icon">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <h3 className="fs-4">Free Shipping</h3>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-2">
              <div className="choose-us-icon">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <h3 className="fs-4">Easy Returns</h3>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
