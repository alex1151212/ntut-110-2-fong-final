/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Carosel1 from "../images/home/carousel/banner1.png";

import BannerLogo from "../images/detail/banner/cake logo.png";
import BannerBg from "../images/detail/banner/cake_img.png";
import BannerText from "../images/detail/banner/text.png";

import ArrowDown from "../images/detail/arrowDown.png";
import ArrowUp from "../images/detail/arrowUp.png";

import Cake1 from "../images/detail/content/cake01.png";
import Cake2 from "../images/detail/content/cake02.png";
import Cake3 from "../images/detail/content/cake03.png";
import Cake4 from "../images/detail/content/cake04.png";
import Cake5 from "../images/detail/content/cake05.png";
import Cake6 from "../images/detail/content/cake06.png";
import Cake7 from "../images/detail/content/cake07.png";
import Cake8 from "../images/detail/content/cake08.png";

import Footer from "./Footer";

interface IProps {}

const productItemsInit: {
  title: string;
  src: string;
  price: number;
  amount: number;
}[] = [
  { title: "鮮果雪藏", src: Cake1, price: 280, amount: 0 },
  { title: "牛奶雪藏", src: Cake2, price: 280, amount: 0 },
  { title: "日式芒果奶凍", src: Cake3, price: 280, amount: 0 },
  { title: "日式草莓奶凍", src: Cake4, price: 280, amount: 0 },
  { title: "日式芋頭奶凍", src: Cake5, price: 280, amount: 0 },
  { title: "日式香草奶凍", src: Cake6, price: 280, amount: 0 },
  { title: "日式巧克力奶凍", src: Cake7, price: 280, amount: 0 },
  { title: "珍珠奶凍", src: Cake8, price: 280, amount: 0 },
];

const Detail: React.FC<IProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productItems, setProductItems] = useState<
    {
      title: string;
      src: string;
      price: number;
      amount: number;
    }[]
  >(productItemsInit);

  const [device, setDevice] = useState<string>("pc");
  const [displayDetailInfo, setDisplayDetailInfo] = useState<
    string | undefined
  >(undefined);

  const gotTopHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const handleRWD = () => {
    if (window.innerWidth > 768) setDevice("pc");
    else if (window.innerWidth >= 768 && window.innerWidth < 1280)
      setDevice("ipad");
    else setDevice("mobile");
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="detail">
        <div className="detail-banner">
          <div className="detail-banner-logo">
            <img src={BannerLogo} alt="" />
          </div>
          <div className="detail-banner-bg">
            <img src={BannerBg} alt="" />
          </div>
          <div className="detail-banner-text">
            <img src={BannerText} alt="" />
          </div>
        </div>
        <div className="detail-content">
          {productItems.map((item, index) => (
            <div className="detail-content-card" key={`${item.title}`}>
              <div
                className="detail-content-card-info-wrapper"
                data-title={item.title}
                onMouseEnter={(e) => {
                  setDisplayDetailInfo(e.currentTarget.dataset.title);
                }}
                onMouseLeave={() => {
                  setDisplayDetailInfo(undefined);
                }}
              >
                {displayDetailInfo === item.title && (
                  <div className="detail-content-card-info">
                    <div className="detail-content-card-info-title">
                      商品說明
                    </div>
                    <div className="detail-content-card-info-text">
                      <p>
                        內容物成分：鮮奶油、雞蛋、鮮奶、砂糖、麵粉、沙拉油、草莓
                      </p>
                      <p>保存期限：冷藏約兩天</p>
                      <p>素食可否食用：蛋奶素</p>
                      <p>配件：每盒附刀子乙支 每兩盒附提袋二個</p>
                    </div>
                  </div>
                )}

                <div className="detail-content-card-title">鮮{item.title}</div>
                <img
                  src={item.src}
                  alt=""
                  className="detail-content-card-img"
                />
              </div>
              <div className="detail-content-card-status">
                <div className="detail-content-card-status-price">
                  ＄{item.price}
                </div>
                <div className="detail-content-card-status-amount">
                  <img
                    src={ArrowDown}
                    alt=""
                    onClick={() => {
                      if (productItems[index].amount - 1 < 0) return;
                      productItems[index].amount -= 1;
                      setProductItems([...productItems]);
                    }}
                  />
                  <input type="number" value={item.amount} />
                  <img
                    src={ArrowUp}
                    alt=""
                    onClick={() => {
                      productItems[index].amount += 1;
                      setProductItems([...productItems]);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
