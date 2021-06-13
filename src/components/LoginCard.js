import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { loginToFirebase } from '../actions'
import { StoreContext } from "../store"

const LoginCard = ({ redirect }) => {
  const { state:{ userSignin: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();
 
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  useEffect(() => {
    if(userInfo) history.push(redirect);
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1 className="logIn-headtext">帳號登入</h1>
      <p className="logIn-account">電子郵件帳號</p>
      <Form.Item
      
        name="email"
        style={{ color: "red" }}
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
        hasFeedback
      >
        <Input
          
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <p className="logIn-account">密碼</p>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox ><p className="remember">記住帳號</p></Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <div className="account-flex">
          <p className="accountText">還沒有帳號?</p>
          <Link to={"/register?redirect=profile"}className="account-link">點擊註冊!</Link>
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

      <Form.Item>
        {loading ? (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
            loading
          >
            登入
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
          >
            登入
          </Button>
        )}
        
      </Form.Item>
    </Form>
  );
};
export default LoginCard;
