import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = ({ redirect }) => {
  const { state: { userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >
      <h1 className="register-headtext">帳號註冊</h1>
      <p className="register-text">名稱</p>
      <Form.Item
        className="res-form"
        name="name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input
          placeholder="Your Name" />
      </Form.Item>
      <p className="register-text">電子郵件帳號</p>
      <Form.Item
        className="res-form"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input
          placeholder="E-Mail" />
      </Form.Item>
      <p className="register-text">密碼</p>

      <Form.Item
        className="res-form"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          placeholder="Password" />
      </Form.Item>
      <p className="register-text">再次輸入密碼</p>
      <Form.Item
        className="res-form"
        name="rePassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Renter-Password" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          <p className="agreement">我已閱讀隱私權條款</p>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <div className="account-flex">
          {/* <p className="accountText">已經擁有帳號？</p>{" "} */}
          <Link to={"/login?redirect=profile"} className="account-link">已經擁有帳號？點擊登入！</Link>
        </div>
        {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {loading ? (
          <Button
            type="primary"
            className="login-form__button register"
            htmlType="submit"
            loading
          >
            註冊
          </Button>
        ) : (
          <Button
            type="primary"
            className="login-form__button register"
            htmlType="submit"
          >
            註冊
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;