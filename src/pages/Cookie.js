import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CookieNavBar from "../components/Cookie-navBar"
import CookieDetail from "../components/CookieDetail"
import left from "../img/otherimg/leftarrow.png"
import right from "../img/otherimg/rightarrow.png"
import Loader from "../components/loader"
import GifLoader from "react-gif-loader";
import React, { useState, useEffect } from 'react';
import SSwiper from "../components/swiper"


import { StoreContext } from "../store"


let count = 0

const { Header, Content, Footer } = Layout;
var clicks = 0;

function Cookie() {
    const { state: { cookie } } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);
    const widthDif = document.getElementById(`${cookie}`)?.scrollWidth
    const [moveStyle, setMoveStyle] = useState({
        transform: "translate3d(0px, 0px, 0px)",
    });

    const onPrevClick = () => {

        setMoveStyle({ transform: "translate3d(0%, 0px, 0px)" });
    };

    const onNextClick = () => {
        console.log("MOVE TO TRUE")
        setMoveStyle({ transform: `translate3d(-100%, 0px, 0px)` })
    };
    return (
        <div className="loading">
            {loading ? <GifLoader
                loading={true}
                imageSrc="https://pa1.narvii.com/6287/d09cc9041e92993c86ad2ffd228c2cc97af15f28_hq.gif"
                loading={loading}
            /> : <Layout className="container main-layout">
                <Layout >
                    <Header className="layout-header">
                        <AppHeader />
                    </Header>
                    <Content className="cookie-content">
                        <CookieNavBar />
                        <SSwiper cookies={cookie} />
                        {/* <CookieDetail cookies={cookie} move={moveStyle} /> */}
                        {/* <div onClick={onPrevClick} onClick="clicks++;check();"><img onClick={onPrevClick} className="arrow left-arrow" src={left}></img></div>
                        <div onClick={onNextClick} onClick="clicks++;check();"><img onClick={onNextClick} className="arrow right-arrow" src={right}></img></div> */}
                    </Content>
                    <Footer className="layout-footer">
                        <AppFooter />
                    </Footer>
                </Layout>
            </Layout>
            }
        </div>
    );
}

export default Cookie;









