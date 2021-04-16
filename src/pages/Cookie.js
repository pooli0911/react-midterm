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



import { StoreContext } from "../store"




const { Header, Content, Footer } = Layout;
function Cookie() {
    const { state: { cookie } } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, []);
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
                        <CookieDetail cookies={cookie} />
                        <img className="arrow left-arrow" src={left}></img>
                        <img className="arrow right-arrow" src={right}></img>
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









