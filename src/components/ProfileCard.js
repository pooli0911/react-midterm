import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { logoutFromFirebase, updateUserInfo, storeOrderId, storeOrderItem, removeOrderDetail } from "../actions";
import { StoreContext } from "../store";
import { TeamOutlined } from '@ant-design/icons';
import { getOrderByUser, removeOrderById } from "../api";

const ProfileCard = () => {
  const {
    state: {
      userSignin: { userInfo },
    },
    state: { orderId: { orderres } },
    state: { orderid },
    state: { orderitem },
    dispatch,
  } = useContext(StoreContext);
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();
  const [open, setopen] = useState(false);
  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };
  useEffect(() => {
    removeOrderDetail(dispatch, orderid)
  }, [orderid])

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  }
  const checkorder = () => {
    let id;
    storeOrderItem(dispatch);
    storeOrderId(dispatch);
    setopen(!open);
    console.log(id);
    console.log(orderid);
    // history.push("/placeorder");
  }
  const removeOrder = (id) => {
    removeOrderDetail(dispatch, id);
    storeOrderItem(dispatch);
  }
  const clickorderid = (id) => {
    console.log(id);
    console.log(orderid[orderitem.indexOf(id)]);
    history.push("/order/" + id);
    // history.push("/order/"+orderid[orderitem.indexOf(id)]);
  }
  //  const addnum=() => {
  //    if(num<4){
  //      setnum(num+1);
  //    }

  // console.log(num);

  return (
    <div className="login-form">
      <h1 className="logIn-headtext">個人資訊</h1>
      <p className="register-text">電子郵件帳號</p>
      <p className="profile-text">{email}</p>
      <p className="register-text">玩家名稱</p>
      <p className="cart-summary-profileText">
        {displayName}
      </p>
      <p className="register-text">更改密碼</p>
      <div>
        <Link to={"/change"} className="change-password-link">點我前往更改密碼</Link>
      </div>

      <div className="button-pos">
        <Button
          type="primary"
          className="login-form__button"
          onClick={handleLogout}
        >
          登出
        </Button>
        <Button
          type="primary"
          style={{ marginTop: "0.8rem" }}
          className="login-form__button"
          onClick={checkorder}
        >
          查看陣容
        </Button>
        {open
          ? (

            orderitem.map((id) =>

              <div className="orderlist">
                <Button className="order" onClick={() => clickorderid(id)}>Team:{id}</Button>
                <div className="cart-item-end">
                  <div className="cart-item-delete" onClick={() => removeOrder(id)}>
                    刪除隊伍
                  </div>

                </div>

              </div>
            )

          ) : (
            <div></div>
          )
        }
      </div>
    </div>
  );
};
export default ProfileCard;