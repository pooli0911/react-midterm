import { Input } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, notification } from "antd"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NumberLogo from "../img/number/number.png"
import Step from "../img/number/step.png"
gsap.registerPlugin(ScrollTrigger);

// import NumberLogo from "../img/number/number.png"
// import Step from "../img/number/step.png"
// import Step1 from "../img/number/snumber01.png"
// import Step2 from "../img/number/snumber02.png"
// import Step3 from "../img/number/snumber03.png"


export default function NumberInput() {
    useEffect(() => {

        revealRefs.current.forEach((ref, index) => {
            gsap.fromTo(ref, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    // pin: true,
                    // scrub: true,
                    trigger: ref,
                    // markers: true,
                    start: 'top center+=100', //當ref的top碰到畫面中央+100px的高度時，就觸發動畫
                    toggleActions: 'play none none reverse'
                    //play none none reverse 對應四個動作
                    // onEnter - scrolling down, start meets scroller-start
                    // onLeave - scrolling down, end meets scroller-end
                    // onEnterBack - scrolling up, end meets scroller-end
                    // onLeaveBack - scrolling up, start meets scroller-star
                }
            });

        });

    }, []);
    const sections = [
        {
            numbersimg: '../img/number/snumber01.png'
        },
        {
            numbersimg: '../img/number/snumber02.png'
        },
        {
            numbersimg: '../img/number/snumber03.png'
        },
    ]
    const revealRefs = useRef([]);
    revealRefs.current = [];

    const addToRefs = ref => {
        if (ref && !revealRefs.current.includes(ref)) {
            revealRefs.current.push(ref);
        }
    };
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
            {/* <div className="number-step">
                <img className="step-img" src={Step1}></img>
                <img className="step-img" src={Step2}></img>
                <img className="step-img" src={Step3}></img>
            </div> */}
            <div className="App">
                <main className="App-main number-step">
                    {
                        sections.map(({ numbersimg }) => (
                            <div className="App-section step-img" key={numbersimg} ref={addToRefs}>
                                <img className="step-img" src={numbersimg}></img>
                            </div>
                        ))
                    }
                </main>
            </div>
        </>
    );
}