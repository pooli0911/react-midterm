import { Link,useHistory } from "react-router-dom";
import UserInfo from "./UserInfo"


export default function HeaderNavBar({ isOnTouch }) {
    const history = useHistory();
    const checkoutHandler = () => {
        history.push("/login?redirect=team");
     }
    return (
        <>
            <div className={`header-text ${isOnTouch ? "" : "header-text-wrap"}`}>
                <Link to="" className="header-text-item" activeclassName="header-text-item--active">遊戲介紹</Link>
                <Link to="/cookie" className="header-text-item" activeclassName="header-text-item--active">餅乾介紹</Link>
                <div onClick={checkoutHandler} className="header-text-item" activeclassName="header-text-item--active">陣容預覽</div>
                <Link to="/number" className="header-text-item" activeclassName="header-text-item--active">序號兌換</Link>
                <UserInfo/>
                
            </div>

        </>
    );
}