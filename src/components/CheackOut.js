import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";
import { Row, Col, Button, Spin } from "antd";
import { ADD_TEAM_ITEM, REMOVE_TEAM_ITEM } from "../utils/constants";
import { removeFromTeam,createOrder, resetOrder, requestOrderDetail } from "../actions";


export default function CheckOut() {
    const {
        state: { teamItems,cart, orderInfo: { loading, success, order }  },
        dispatch,
    } = useContext(StoreContext);
    const history = useHistory()
    useEffect(() => {
        localStorage.setItem("teamItems", JSON.stringify(teamItems));
    }, [teamItems])
    useEffect(() => {
        if (success) {
          resetOrder(dispatch);
          requestOrderDetail(dispatch, order.id)
          history.push(`/order/${order.id}`);
        }
      }, [success]);
    const getTotalAtk = () => {
        return (teamItems.length > 0)
            ? teamItems.reduce((sum, item) => sum + item.atk, 5)
            : 0;
    };
    const placeOrderHandler = () => {
        createOrder(dispatch, teamItems)
      };
    const pingfeng = (getTotalAtk) => {
        if (getTotalAtk >= 90000) {
            return "SS"
        }
        else if (getTotalAtk >= 70000 && getTotalAtk < 90000) {
            return "S"
        }
        else if (getTotalAtk >= 50000 && getTotalAtk < 70000) {
            return "A"
        }
        else if (getTotalAtk >= 30000 && getTotalAtk < 50000) {
            return "B"
        }
        else {
            return "C"
        }
    }

    return (
        <div>
            {teamItems.length === 0 ? (
                <div className="checkout">快去選擇喜歡的餅乾吧！</div>
            ) : (<div>
                <div className="cooline">{
                    teamItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-item-end">
                                <div className="cart-item-delete" onClick={() => removeFromTeam(dispatch, item.id)}>
                                    x
                     </div>
                            </div>
                            <div className="cart-image">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-content">
                                    <div className="cart-name">{item.name}</div>
                                </div>
                            </div>
                        </li>

                    ))}</div>
                <div className="cart-total-atk-wrap">
                    <div className="cart-total-atk">總戰力：{getTotalAtk()}</div>
                    <div className="cart-total-comment">{pingfeng(getTotalAtk())}級評分</div>
                </div>
                <Button
                  className="primary-btn"
                  block
                  type="primary"
                  onClick={placeOrderHandler}
                >
                  Save
                </Button>
            </div>


            )}
        </div>

    );
}