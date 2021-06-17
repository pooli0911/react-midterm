import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox,Upload, message,Table } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined,UploadOutlined } from '@ant-design/icons';
import { loginToFirebase,createComment,requestComment } from '../actions'
import { StoreContext } from "../store"
import Spe01 from "../img/otherimg/spe01.jpg"
import Spe02 from "../img/otherimg/spe02.jpg"
import Spe03 from "../img/otherimg/spe03.jpg"
import EventInfo from "../json/event.json"





export default function Event({redirect}) {
    const {
        state: {
          userSignin: { userInfo },
          commentInfo: { loading, success, comment },
          commentitem,
        },
        dispatch,
    } = useContext(StoreContext);
    const { displayName} = userInfo;
    const [form] = Form.useForm();
    const history = useHistory();
    // useEffect(() => {
    //   if (success) {
    //     resetOrder(dispatch);
    //   }
    // }, [success]);
    useEffect(() => {
      if (userInfo) history.push(redirect);
    }, [userInfo]);
    useEffect(() => {
      localStorage.setItem("commentitem", JSON.stringify(commentitem));
  }, [commentitem]);
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        await createComment(dispatch, values,displayName);
        await requestComment(dispatch);
    };
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
      },
      {
        title: 'ID',
        dataIndex: 'id',
        width: 150,
      }
    ];
    const data=[];
    for (let i=0;i<commentitem.length;i++){
      data.push({
        name:commentitem[i].name,
        id:commentitem[i].commentItems.ID,
      });
    }
    


    
    return (
        <div>
            <div className="event-box">
                <div className="img-flex">
                   <div className="flex1"> 
                     <img className="event-img" src={Spe01}></img>
                   </div>
                   <div className="flex2">
                       <div className="title-box">
                       <h1 className="event-title">教/團/密/令：懸賞通緝任務發布</h1>
                       <p className="event-text event-text1">【🔥今日懸賞通緝 完成每日次數🔥】</p>
                       <p className="event-text">💚完成後截圖分享至本留言串</p>
                       <p className="event-text">💚分享時記得加上你的玩家ID(英文+數字)</p>
                       <p className="event-text">💚就有機會獲得10個魔法餅乾模具跟10個寶物扭蛋券</p>
                       <p className="event-mission">✨特別任務獎勵：第一個符合活動方式的留言者可直接獲得10個魔法餅乾模具跟10個寶物扭蛋券</p>
                       <p className="event-notice">注意事項：<br></br>活動日期：即日起~6/13 23:59止<br></br>每次活動將抽取11名玩家獲獎(含特別任務獎勵)
                          參加活動必須提供正確玩家ID，未提供或提供有誤者將不列入活動計算薑餅人王國》營運團隊擁有活動的最終解釋權。</p>
                        </div>
                   </div>
                </div>
                <div className="input-box">
                    <div className="displayname">{displayName}</div>
                    
                      <Form
                        name="normal_login"
                        className="input-form"
                        form={form}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                      >
                        <div className="input-flex">
                        <div className="id-flex">
                          <p className="id-text">請輸入ID (英文+數字)</p>
                          <Form.Item
                            className="input-id"
                            name="ID"
                            // style={{ color: "#FFE9CB" }}
                            // rules={[
                            //   {
                            //     type: "id",
                            //     message: "The input is not valid ID!",
                            //   },
                            //   {
                            //     required: true,
                            //     message: "Please input your ID!",
                            //   },
                            // ]}
                            hasFeedback
                          >
                            <Input
                              placeholder="ID (英文+數字)"
                            />
                          </Form.Item>
                        </div>
                      
                        <div className="screen-flex">
                            <p className="screen-text">截圖</p>
                            <Upload className="click-upload" >
                              <Button icon={<UploadOutlined />}className="click-upload">Click to Upload</Button>
                            </Upload>
  
                        </div>
                        
                        {loading ? (
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="upload__button"
                          loading
                        >
                          上傳
                        </Button>
                        ) : (
                          <Button
                          type="primary"
                          htmlType="submit"
                          className="upload__button"
                        >
                          上傳
                        </Button>
                          )}
                        
                        
                        </div>
                     </Form>
                
                    
                </div>
                {/* <Table columns={columns} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} >
                {commentitem.map(com =>(
                 <div className="input-box">
                   <div className="displayname">{com.name}</div>
                      <div className="displayname">{com.commentItems.ID}</div>
                  </div>            
                ))}
                </Table> */}
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 700 }} scroll={{ y: 200 }} />
            </div>
          

            
        </div>
    );
}