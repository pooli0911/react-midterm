import { useEffect, useContext } from "react";
import { StoreContext } from "../store";
import { ADD_TEAM_ITEM, REMOVE_TEAM_ITEM } from "../utils/constants";
import { removeFromTeam } from "../actions";


export default function CheckOut() {
    const {
        state: { teamItems },
        dispatch,
    } = useContext(StoreContext);
    useEffect(() => {
        localStorage.setItem("teamItems", JSON.stringify(teamItems));
    }, [teamItems])
    const getTotalPrice = () => {
        return teamItems.length > 0
            ? teamItems.reduce((sum, item) => sum + item.atk, 5)
            : 0;
    };

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
                    Total
                        <div className="cart-total-atk">{getTotalPrice()}</div>
                </div>
            </div>


            )}
        </div>

    );
}