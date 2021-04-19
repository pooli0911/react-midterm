import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Top from "../components/Main"
import Appcontent from "../components/Content"
import Home_img from "../components/Home_img"
import GifLoader from "react-gif-loader";
import React, { useState, useEffect } from 'react';
import HamMenu from "../components/hammenu"


import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;
function Home() {
    const { state: { home_img } } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    const [isOnTouch, setIsOnTouch] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, []);
    return (
        <div className="loading">
            {loading ? <GifLoader
                loading={true}
                imageSrc="https://pa1.narvii.com/6287/d09cc9041e92993c86ad2ffd228c2cc97af15f28_hq.gif"
                loading={loading}
            /> : <Layout className="container main-layout">
                <Layout >
                    <HamMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <Header className="layout-header">
                        <AppHeader isOnTouch={isOnTouch} />
                    </Header>
                    <Content className="layout-content">
                        <Top />
                        <Appcontent />
                        <Home_img home_img={home_img} />
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

export default Home;