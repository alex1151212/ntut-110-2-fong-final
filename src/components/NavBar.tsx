/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, SetStateAction } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Memeber from "../images/nav-bar/Login icon.png";
import Cart from "../images/nav-bar/Cart.png";
import Tag from "../images/nav-bar/tag.png";
import Option from "../images/nav-bar/option.png";
interface IProps {}

const NavBar: React.FC<IProps> = ({}) => {
  //   const [isDrop, setIsDrop] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [rwdStatus, setRwdStatus] = useState<string>("PC");

  const handleRWD = () => {
    if (window.innerWidth < 768) setRwdStatus("mobile");
    else if (window.innerWidth >= 768 && window.innerWidth < 1280)
      setRwdStatus("ipad");
    else setRwdStatus("pc");
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  // useEffect(() => {
  //   if (isMobile) setIsLeftNavBarOpen(false);
  //   else setIsLeftNavBarOpen(true);
  // }, [isMobile]);

  return (
    <div className="nav-bar">
      {rwdStatus === "pc" ? (
        <ul>
          <li>本月熱推</li>
          <li>
            <Link to="">奶凍系列</Link>
          </li>
          <li>伴手禮</li>
          <li>綜合禮盒</li>
        </ul>
      ) : (
        <div className="nav-bar-option-icon">
          <img src={Option} alt="" />
        </div>
      )}

      <div className="nav-bar-tag-icon">
        <img src={Tag} alt="" />
      </div>

      {rwdStatus === "pc" ? (
        <ul>
          <li>彌月禮盒</li>
          <li>囍餅禮盒</li>
          <li>生日蛋糕</li>
        </ul>
      ) : (
        <></>
      )}

      <div className="icon-wrapper">
        <div className="shop-login">
          <div className="shop-icon">
            <img src={Cart} alt="" />
          </div>
          <div className="head-icon-wrapper">
            <div className="head-icon">
              <img src={Memeber} alt="" />
            </div>
            <div>
              <Link to="">登入</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
