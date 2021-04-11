import Apple from "../img/footer/apple.png"
import Google from "../img/footer/google.png"
import Facebook from "../img/footer/facebook.png"
import Youtube from "../img/footer/youtube.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="icon-wrap">
                <div className="first-icon-wrap">
                  <img className="img-facebook" src={Facebook}></img>
                  <img className="img-youtube" src={Youtube}></img>
                </div>
                <div className="second-icon-wrap">
                  <img className="img-google" src={Google}></img>
                  <img className="img-apple" src={Apple}></img>
                </div>
            </div>
            <div className="footer-text">
                <Link to className="footer-text-item  item1">使用條款</Link>
                <Link to className="footer-text-item  item2">隱私權政策</Link>
                <Link to className="footer-text-item  item3">客服中心</Link>
            </div>
            <div className="copy-right">
                <p className="copy-right-text">
                © 2021. All Rights Reserved.
                </p>
            </div>
            

        </footer>
    );
}