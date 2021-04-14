import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/header/logo.png"


export default function Header(){
    return(
<div className="header">
    <header className="header-wrap">
        <div className="header-logo">
            <Link to ="/">
                <img className="img-logo" src={Logo}></img>
            </Link>
        </div>
        <div className="header-text">
            <Link to className="header-text-item">遊戲介紹</Link>
            <Link to ="/cookie" className="header-text-item">餅乾介紹</Link>
            <Link to className="header-text-item">陣容預覽</Link>
        </div>

    </header>

</div>
    );
}