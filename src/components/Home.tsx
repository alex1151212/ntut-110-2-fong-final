/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Carosel1 from "../images/home/carousel/banner1.png";

import Hot1_1 from "../images/home/hot-1/Page1_img1.png";
import Hot1_2 from "../images/home/hot-1/Page1_img2.png";
import Hot1_3 from "../images/home/hot-1/Page1_img3.png";
import Hot1_4 from "../images/home/hot-1/Page1_img4.png";

import Cake1_1 from "../images/home/hot-2/Page1_img1.png";
import Cake1_2 from "../images/home/hot-2/Page1_img5.png";
import Cake1_3 from "../images/home/hot-2/Page1_img6.png";
import Cake1_4 from "../images/home/hot-2/Page1_img7.png";

import LeftArrow from "../images/home/left arrow.png";
import RightArrow from "../images/home/right arrow.png";

import Cheif from "../images/home/chef.png";
import Top from "../images/home/to top.png";
import Option from "../images/home/option.png";
import Footer from "./Footer";

interface IProps {}
const productItemData: { [key: string]: { src: string; title: string }[] } = {
  hot: [
    {
      src: Hot1_1,
      title: "鮮果雪藏",
    },
    {
      src: Hot1_2,
      title: "香戀Q餅乾禮盒",
    },
    {
      src: Hot1_3,
      title: "鳳梨酥20入禮盒",
    },
    {
      src: Hot1_4,
      title: "宜蘭餅6入禮盒",
    },
  ],
  cakeRoll: [
    {
      src: Cake1_1,
      title: "鮮果雪藏",
    },
    {
      src: Cake1_2,
      title: "日式巧克力奶凍",
    },
    {
      src: Cake1_3,
      title: "日式草莓奶凍",
    },
    {
      src: Cake1_4,
      title: "日式芋頭奶凍",
    },
  ],
};
const IndexData = ["hot", "cakeRoll"];
const Home: React.FC<IProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productDisplay, setProductDisplay] = useState<number>(0);

  const productDisplayHandler = (action: number) => {
    let index = productDisplay;
    if (index + action >= IndexData.length) {
      setProductDisplay(0);
    } else if (index + action < 0) {
      setProductDisplay(IndexData.length - 1);
    } else {
      setProductDisplay(productDisplay + action);
    }
  };
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="carousel">
          <img src={Carosel1} alt="" />
          {/* <div className="select-bar">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div> */}
        </div>
        <div className="slogan">
          <p>精心工藝 ˙ 創新工法</p>
        </div>
        <div className="nav-bar-switch">
          <ul>
            <li
              className={productDisplay === 0 ? "choiced" : ""}
              onClick={() => {
                setProductDisplay(0);
              }}
            >
              本月熱推
            </li>
            <li
              className={productDisplay === 1 ? "choiced" : ""}
              onClick={() => {
                setProductDisplay(1);
              }}
            >
              奶凍系列
            </li>
            <li>伴手禮</li>
            <li>彌月禮盒</li>
          </ul>
        </div>
        <div className="hot-sale">
          <p>熱銷商品</p>
        </div>
        <div className="product-imgs">
          <div
            className="button"
            onClick={() => {
              productDisplayHandler(-1);
            }}
          >
            <img src={LeftArrow} alt="" />
          </div>
          <div className="product-item-wrapper">
            {productItemData[IndexData[productDisplay]].map((data) => (
              <div className="product-item">
                <img src={data.src} alt="" />
                <p>{data.title}</p>
              </div>
            ))}
          </div>

          <div
            className="button"
            onClick={() => {
              productDisplayHandler(1);
            }}
          >
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="chief-img">
          <img src={Cheif} alt="" />
        </div>
        <div className="back-top-button">
          <img src={Top} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
