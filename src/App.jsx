import React from 'react';
import "./styles.css";
import { TbLockHeart } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";


const Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} />
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <TbLockHeart/> <p>Amazon</p>
          
        </div>
        <div className="nav">
          <ul>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG▾</li>
          </ul>
        </div>
        <div className="icons">
         <span> <input></input>
          <IoBagHandle/></span>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <h2>SKIN PROTECTION CREAM</h2>
          <div className="numbers">
            <span>01</span>
            <span>02</span>
          </div>
          <h3>Trendy Collection</h3>
          <p>
            Seedily say has suitable disposal and boy.
            Exerise joy man chidren rejoiced.
          </p>
        </div>
        <div className="right">
          <Image src="https://th.bing.com/th/id/OIP.UTTX12FDw-pp2Y2BuCLTEwAAAA?rs=1&pid=ImgDetMain.jpg" alt="model" />
          <div className="stats">
            <div>
              <p><h2>1.5m</h2></p>
              <span>Monthly traffic</span>
            </div>
            <div>
              <p><h2>100K</h2></p>
              <span>Happy catomers</span>
            </div>
            
          </div>
          <div className="best-sign up">
            <p><button></button></p>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product">
          <Image src="/left-arrow.png" alt="left arrow" />
          <div className="product-details">
            <h3>SKIN</h3>
            <p>Super Skin Care</p>
            <div className="price">
              <span>25$</span>
              <button>SHOP NOW</button>
            </div>
            <Image src="/product1.png" alt="product 1" />
          </div>
        </div>
        <div className="product">
          <div className="product-details">
            <h3>SKIN</h3>
            <p>Super Skin Care</p>
            <div className="price">
              <span>25$</span>
              <button>SHOP NOW</button>
            </div>
            <Image src="/product2.png" alt="product 2" />
          </div>
        </div>
        <div className="product">
          <div className="product-details">
            <h3>NATURE</h3>
            <p>Super Nature Oil</p>
            <div className="price">
              <span>25$</span>
              <button>SHOP NOW</button>
            </div>
            <Image src="/product3.png" alt="product 3" />
          </div>
          <Image src="/right-arrow.png" alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default App;