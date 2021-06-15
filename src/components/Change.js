import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { logoutFromFirebase, updateUserInfo, storeOrderId, storeOrderItem } from "../actions";
import { StoreContext } from "../store";
import { getOrderByUser } from "../api";
const ProfileCard = () => {
  const {
    state: {
      userSignin: { userInfo },
    },

    dispatch,
  } = useContext(StoreContext);
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };



  return (
    <Form
      onFinish={handleUpdate}
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={userInfo}
    >
      <h1 className="logIn-headtext">更改密碼</h1>
      <p className="register-text">請輸入目前的密碼:</p>
      <Form.Item
        name="confirm-password"
        rules={[
          {
            message: "Please input your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue({ userInfo }) === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="confirm-password" />
      </Form.Item>

      <p className="register-text">請輸入新的密碼:</p>
      <Form.Item
        name="password"
        rules={[
          {
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <p className="register-text">請再次輸入新的密碼:</p>

      <Form.Item
        name="rePassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
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
        <Input.Password placeholder="Renter-Password" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form__button"
        >
          確認更改
        </Button>


      </Form.Item>
    </Form>
  );
};
export default ProfileCard;
