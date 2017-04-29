import React,{Component} from 'react'
import {Icon} from 'antd';
import {Link } from 'react-router-dom'
import '../css/replies.less'
import moment from 'moment'
moment.locale('zh-cn');

const Replies=({data})=>(
        <div className="replyMain">
        <div className="replyHeader">
            <h1>回复</h1>
            <span style={{float:"right",height:'20px'}}>回复数：{data.reply_count}</span>
        </div>
        <div className="replyPart">
            <ul>
            { data.replies?data.replies.map((reply,i)=>
                <li className="replyItem" key={i}>
                <div className="author">
                    <Link to={`/user/${reply.author.loginname}`}>
                        <img src={reply.author.avatar_url} style={{height:'40px'}} title={reply.author.loginname} alt={reply.author.loginname}/>
                    </Link>
                    <div className="author_info" >
                        <Link to={`/user/${reply.author.loginname}`} className="reply_author">{reply.author.loginname}</Link>
                        {i+1}楼·<Link to="" className="reply_time">  {moment(reply.create_at).startOf('hour').fromNow()}</Link>
                        {data.author.loginname==reply.author.loginname?<span style={{font:'20px',background:'#61DAFB'}}>作者</span>:''}
                    </div>
                    <div className="user_action" >
                        <span >点赞</span>
                        <span >回复</span>
                    </div>
                </div>
                <div className="reply_content" dangerouslySetInnerHTML={{__html:reply.content}}></div>
                </li>
            ):<Icon type="loading" />
            }
            </ul>
        </div>
        </div>
);
export default Replies