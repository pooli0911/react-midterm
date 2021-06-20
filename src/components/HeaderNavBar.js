import { Link, useHistory } from "react-router-dom";
import UserInfo from "./UserInfo"
import { Badge, notification } from "antd";
import { StoreContext } from "../store"
import { useState, useContext } from "react";
import { requestComment,requestComment2 } from '../actions'


export default function HeaderNavBar({ isOnTouch }) {
    const { state: { cart: { cartItems }, count,userSignin: { userInfo} },dispatch } = useContext(StoreContext);
    const history = useHistory();
    const checkoutHandler = () => {
        history.push("/login?redirect=team");
        openFull();
     }
     const checkoutEvent = () => {
        requestComment(dispatch);
        requestComment2(dispatch);
        history.push("/login?redirect=event");
        openFull();
     }
     const openFull = () => {
        if (!(userInfo)) {
        notification.open({
            message: '請先登入！',
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'bottomRight'
        
     });
    }
    };
    return (
        <>
            <div className={`header-text ${isOnTouch ? "" : "header-text-wrap"}`}>
                <Link to="" className="header-text-item" activeclassName="header-text-item--active">遊戲介紹</Link>
                <Link to="/cookie" className="header-text-item" activeclassName="header-text-item--active">餅乾介紹</Link>
                <Badge className="count-badge" count={count} size={"small"} style={{ color: 'white', backgroundColor: '#46413A' }}>
                    <div onClick={checkoutHandler} className="header-text-item" activeclassName="header-text-item--active">陣容預覽</div>
                </Badge>
                <div onClick={checkoutEvent} className="header-text-item" activeclassName="header-text-item--active">特殊活動</div>
                <Link to="/number" className="header-text-item" activeclassName="header-text-item--active">序號兌換</Link>
                <UserInfo />
            </div>

        </>
    );
}