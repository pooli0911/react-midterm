import { Link } from "react-router-dom";

export default function HeaderNavBar({ isOnTouch }) {
    return (
        <>
            <div className={`header-text ${isOnTouch ? "" : "header-text-wrap"}`}>
                <Link to="" className="header-text-item" activeclassName="header-text-item--active">遊戲介紹</Link>
                <Link to="/cookie" className="header-text-item" activeclassName="header-text-item--active">餅乾介紹</Link>
                <Link to="" className="header-text-item" activeclassName="header-text-item--active">陣容預覽</Link>
            </div>

        </>
    );
}