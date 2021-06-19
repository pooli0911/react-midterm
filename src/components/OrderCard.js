import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { requestOrderDetail } from "../actions"
import { StoreContext } from "../store";


export default function OrderCard({ orderId }) {
  const { state: { orderDetail: { loading, order } }, dispatch } = useContext(StoreContext);
  const { orderItems } = order;
  const history = useHistory()
  const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: String(order.totalPrice),
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  useEffect(() => {
    requestOrderDetail(dispatch, orderId)
  }, [orderId])
  const getTotalAtk = () => {
    return (orderItems.length > 0)
      ? orderItems.reduce((sum, item) => sum + item.atk, 5)
      : 0;
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
    <>
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (


          <div className="card card-body">
            <div className="cardpos">
              <h2 className="cardtext">已儲存隊伍至：</h2>
              <h2 className="cardid">{orderId}</h2>
            </div>
            {orderItems.length === 0 ? (
              <div className="checkout">快去選擇喜歡的餅乾吧！</div>
            ) : (<div>
              <div className="cooline">
                {orderItems.map(item => (
                  <li key={item.id} className="cart-item">


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

            </div>


            )}

          </div>



        )

      }
    </>


  );
}

