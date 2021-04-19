import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, notification } from "antd"

import NumberLogo from "../img/number/number.png"
import Step from "../img/number/step.png"


export default function NumberInput() {
    const openNotification = () => {
        notification.open({
            message: '已領取獎勵',
            description:
                `請重啟遊戲以確認`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'bottomRight'
        });
    };
    const getGift = () => {
        openNotification();
    };
    return (
        <>
            <div className="number-logo">
                <img className="logo-img" src={NumberLogo}></img>
            </div>
            <div className="nummain">

                <div className="input">
                    <div className="first-input">
                        <div className="account">
                            <div className="account-text">DevPlay帳號</div>
                        </div>
                        <Input placeholder="請輸入DevPlay帳號" prefix={<UserOutlined />} />
                    </div>
                    <div className="second-input">
                        <div className="account-text">虛寶序號(16字)</div>
                        <Input placeholder="請輸入虛寶序號" />
                    </div>
                </div>
                <div className="get-btn">
                    <p className="get-text">* 每個序號僅供1個帳號使用1次，無法重複使用。</p>
                    <p className="get-text">* 輸入後請重新開啟遊戲，即可獲得獎勵。</p>
                    <Button type="primary" className="btn-get" activeclassName="btn-get--active" onClick={getGift}>
                        領取獎勵
                </Button>
                </div>
            </div>
            <div className="number-step">
                <img className="step-img" src={Step}></img>
            </div>
        </>
    );
}