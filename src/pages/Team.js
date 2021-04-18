import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import CheckOut from "../components/CheackOut"
import GifLoader from "react-gif-loader";
import React, { useState, useEffect } from 'react';


import { StoreContext } from "../store"


const { Header, Content, Footer } = Layout;
function Team() {
    const { state: { home_img } } = useContext(StoreContext);
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
                    <Content className="layout-content">
                        <div className="lineuptitle">陣容預覽</div>
                        <CheckOut />
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

export default Team;