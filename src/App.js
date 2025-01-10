import "./App.css";
import { useRef } from "react";
import Categories from "./components/Categories";
import img1 from "./images/sgb1 1.png";
import img2 from "./images/01_Card 2.png";
import img3 from "./images/03_card 2.png";
import icon from "./images/Group 220.png";
import facebook from "./images/Group 205.png";
import amazon from "./images/Group 206.png";
import artsofcard from "./images/pc-blavck 1.png";
import Card from "./components/card";
import Carousel from "./components/carousel";
import cardData from "./data/cardData";
import product from "./data/product";
import sliderImages from "./data/sliderData";
import mobileImages from "./data/mobile";
import ProductCarousel from "./components/productCarousel";
import MobileCarousel from "./components/mobile-carousel";

function App() {
  const cardbg = useRef(null);
  const handleHover = (bg) => {
    if (cardbg.current) {
      cardbg.current.style.backgroundImage = `url('${bg}')`;
    }
  };

  const outHandler = (bg) => {
    if (cardbg.current) {
      cardbg.current.style.backgroundImage = "none";
    }
  };

  return (
    <>
      <content>
        <div className="container-fluid px-0">
          {/* carousel Starts */}
          <div className="carousel1">
            <Carousel image={sliderImages} text="Main Carousel" />
          </div>
          {/* carousel ends */}

          {/* carousel Starts */}
          <div className="mobile-carousel">
            <MobileCarousel info={mobileImages} text="Main Carousel" />
          </div>
          {/* carousel ends */}
          {/* categories start */}
          <div className="blank-color"></div>
          <div className="categories">
            <div className="categories-child1">
              <h2 className="categories-head text-center">
                Explore Our Collections
              </h2>
            </div>
            <div className="categories-child2 container-lg " >
              <div className="row d-flex justify-content-center px-lg-auto px-sm-2 px-3" >
                <div className="col-lg-4 col-sm-6">
                  <Categories
                    image={img1}
                    title="Gifting"
                    content="Perfect birthday return gift options for you kids birthday parties featuring officially licensed characters from Disney’s & Marvel universe like Frozen, Princess, Avengers, Spider-Man & Mickey Mouse. With birthdays always around the corner, the Surprise Gift Bag is the perfect gift that brings both joy and value and is packed with a little bit of magic and loads of fun!"
                    alt="Gifting-Img"
                  />
                </div>
                <div className="col-lg-4 col-sm-6 pt-sm-0 pt-4">
                  <Categories
                    image={img2}
                    title="Card Games"
                    content="Explore the Disney & Marvel universe with our officially licensed card games featuring your favourite characters like Anna, Elsa, Captain America, Man, Hulk, Iron Man, etc. Perfect for ages 4 and above providing a fun and engaging way to spend quality playtime with friends and family."
                    alt="Card-Games-Img"
                  />
                </div>
                <div className="col-lg-4 col-sm-6 pt-lg-0 pt-4">
                  <Categories
                    image={img3}
                    title="Educational"
                    content="Explore our collection which helps promote hand-eye coordination, fine motor skills, problem-solving, and critical thinking for the toddlers ages 18 months and above. It also creates opportunities for interactive learning and social interaction, making it ideal for both solo and group activities."
                    alt="Educational-img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* categories end */}
          {/* card starts */}
          <div className="cards" ref={cardbg}>
            <div className="card-child1">
              <h2 className="card-head text-center">
                Explore The World Of Wonders With Disney & Marvel
              </h2>
            </div>
            <div className="card-child2 container-lg px-lg-0 px-3">
              <div className="card-row1 row d-flex justify-content-center">
                {/* <div className="mx-2"> */}
                <Card info={cardData} onHover={handleHover} onOut={outHandler} />
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* card end */}
          {/* product Carousel starts */}
          <div className="product-carousel ">
            <div className="container-lg">
              <div className="product-child1 text-center">
                <h2 className="product-head">Product Videos</h2>
              </div>
              <div className="product-child2">
                <ProductCarousel info={product} />
              </div>
              <div className="product-child3 text-center">
                <span className="product-span1">Watch out our Playlist on</span>{" "}
                <br />
                <button className="btn border border-dark border-2 product-btn">
                  <img src={icon} alt="Youtube icon" className="me-2" />
                  YouTube
                </button>
              </div>
            </div>
          </div>
          {/* product Carousel ends */}
          {/* explore starts */}
          <div className="explore text-center ">
            <div className="container-lg">
              <div className="explore-child1 text-center">
                <h2 className="explore-head">Explore All Products</h2>
                <div className="row ">
                  <div className="col-sm-4 col-6 text-sm-end">
                    <button className="btn explore-btn">
                    <img className="me-2 btn-img" src={amazon} alt="Amazon icon" />
                    Amazon
                  </button>
                  </div>
                  <div className="col-sm-4 col-6">
                    <button className="btn explore-btn">
                    <img className="me-2 btn-img" src={facebook} alt="facebook icon" />
                    Facebook
                  </button>
                  </div>
                  <div className="col-sm-4 text-sm-start">
                    <button className="btn explore-btn">
                    <img className="me-2 btn-img" src={artsofcard} alt="Artsofcard icon" />
                    Artsofcard
                  </button>
                  </div>



                </div>
              </div>
              <div className="explore-child2">
                @2024 Parksons Cartamundi. All Rights Reserved.
              </div>
            </div>
          </div>
          {/* explore ends */}
        </div>
      </content>
    </>
  );
}

export default App;
