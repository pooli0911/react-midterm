import { useContext } from "react";
import { BackTop } from 'antd';
import { Link } from "react-router-dom";
import Logo from "../img/header/logo.png"
import NavItem from "./NavItem"
import HeaderNavBar from "./HeaderNavBar"


export default function OrderHeader() {
    return (
        <div>
            <div className="header">
                <header className="header-wrap">
                    <div className="header-logo">
                        <Link to="/">
                            <img className="img-logo" src={Logo}></img>
                        </Link>
                        
                    </div>
                    <div className="header-text">
                    <Link to="/" className="header-text-item" activeclassName="header-text-item--active">返回首頁</Link>
                    </div>
                </header>
                <BackTop />
            </div>
        </div>
    );
}