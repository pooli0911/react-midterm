import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { ADD_TEAM_ITEM } from "../utils/constants"
import { addToTeamItem } from "../actions/"

export default function AddToTeam({ cookie }) {
    const { state: { teamItems, count }, dispatch } = useContext(StoreContext);

    const openNotification = () => {
        notification.open({
            message: '餅乾被加進陣容裡了',
            description:
                `${cookie.name} 已加入陣容`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'bottomRight'
        });
    };
    const openFull = () => {
        notification.open({
            message: '陣容已滿！',
            description:
                `${cookie.name} 不能再被添加到陣容裡了`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'bottomRight'
        });
    };

    const addToTeam = () => {
        if (count < 5) {
            openNotification();
            addToTeamItem(dispatch, cookie, count);
        } else {
            openFull();
        }


    };
    useEffect(() => {
        localStorage.setItem("teamItems", JSON.stringify(teamItems));
    }, [teamItems])
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count])


    return (
        <Button type="primary" className="btn-tocar" activeclassName="btn-tocar--active" onClick={addToTeam}>
            加入陣容
        </Button>
    );
}