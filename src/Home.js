/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";
import ReactLoading from "react-loading";
import Footer from "./Footer";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
        setLoading(true);
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="home">
        {loading ? (
          <div className="home_container">
            <img
              className="home_image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
            <div className="home_row w3-animate-zoom">
              <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                description="A very useful and highly resourceful kitchen item, this will not only make cooking convenient and easy for you but also look great on your kitchen shelf. The stylish make will lend a smart and chic touch to your modern kitchen. Long Durability and Quality Product"
                category="Electronic Goods"
              />
              <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                description="Meet Echo - Echo (3rd Gen) has new premium speakers powered by Dolby to play 360° audio with crisp vocals and dynamic bass response. Enjoy premium sound - Personalize your listening experience by adjusting the equalizer settings. Pair with a second Echo (3rd Gen) or Echo Plus (2nd Gen) for stereo sound and add more bass with an Echo Sub."
                category="Electronic Smart Watches"
              />
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                description="12.9-inch edge-to-edge Liquid Retina display with ProMotion, True Tone, and P3 wide color. A12Z Bionic chip with Neural Engine. 12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner. 7MP TrueDepth front camera. Face ID for secure authentication and Apple Pay"
                category="Electronic Smart Phones"
              />
            </div>

            <div className="home_row ">
              {products.slice(9, 11).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={4}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>

            <div className="home_row">
              {products.slice(0, 3).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={5}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>
            <div className="home_row">
              <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                description="Starting up a new company or a business always involves a lot of risk. A number of startups fail even before they can reach a certain level. The Lean Startup: How Today Entrepreneurs Use Continuous Innovation To Create Radically Successful Businesses is about using a new and innovative approach called ‘Lean Startup’ to revolutionise the world of business."
                category="Inspirational Books"
              />
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                description="STYLE AND RELIABILITY: For those that love baking, the Kenwood kMix stand mixer with stylish glass bowl offers a stylish blend of colour, retro design and classic Kenwood reliability. NON-STICK BAKING: A full set of non-stick baking tools including the K-beater, balloon whisk and the dough hook, making baking bread and mixing cake batter, easy and stress free"
                category="Kitchen Goods"
              />
            </div>

            <div className="home_row">
              {products.slice(3, 6).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={4}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>
            <div className="home_row">
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                description='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB, Dark Blue Grey'
                category="Smart Televisions"
              />
            </div>

            <div className="home_row">
              {products.slice(6, 9).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={3}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>

            <div className="home_row">
              {products.slice(12, 15).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={5}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>

            <div className="home_row">
              {products.slice(15, 18).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={4}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>
            <div className="home_row">
              {products.slice(18, 20).map((item) => (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={5}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  alt=""
                />
              ))}
            </div>
          </div>
        ) : (
          <ReactLoading
            type="bubbles"
            color="#e1a50e"
            className="loader"
            width="100px"
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
