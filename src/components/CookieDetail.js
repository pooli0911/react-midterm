import { useState } from "react";
import { Row, Col } from "antd";


function CookieDetail({ cookies }) {

    return (
        <div className="cookie-flex">
            {cookies.map(cookie => (
                <Row gutter={[32, 32]}>
                    <div className="ckies">
                        <Col
                            lg={{ span: 6, offset: 3 }}>
                            <img alt=""
                                className="cookie-image"
                                src={cookie.image} />
                        </Col>
                        <Col lg={{ span: 8 }}>
                            <div className="detail-box">
                                <h1 className="cookie-name">
                                    {cookie.name}
                                </h1>
                                <p className="cookie-state">
                                    站位：{cookie.state}
                                </p>
                                <p className="cookie-description">
                                    技能：{cookie.description}
                                </p>
                                <p className="cookie-comment">
                                    PVE/PVP 評價：{cookie.comment}
                                </p>
                                <p className="cookie-story">
                                    餅乾故事：{cookie.description_long}
                                </p>
                            </div>
                        </Col>
                    </div>
                </Row>
            ))}
        </div>

    );
}

export default CookieDetail;