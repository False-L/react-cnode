import React from 'react'
import {Link } from 'react-router-dom'
import moment from 'moment'
moment.locale('zh-cn');

 const HomeMain=({posts})=>(
        <div className="mainItem">
        <ul>
         {posts.map((post, i) =>
    <li key={i} className='itemPart'>
        <div className='authorImg' style={{float:'left'}} >
        <img src={post.author.avatar_url} style={{height:'40px'}} title={post.author.loginname} alt={post.author.loginname}/>
        </div>
        <div>
        <div className='itemPartMain'>
         <p>
        <span className={post.top?'itemIcon':post.good?'itemIcon':'itemNormal'}>{post.top?'置顶':(post.good?'精华':post.tab==='ask'?'问答':post.tab==='share'?'分享':'招聘')}</span>
        <Link to={`/topic/${post.id}`} className='mainItemLink'>
        {post.title}
        </Link></p>
        </div>
        <div className="itemTime"><i>{moment(post.create_at).format('YYYY MM DD')}</i><span> {post.reply_count}/{post.visit_count} </span>{moment(post.last_reply_at).startOf('hour').fromNow()}</div>
        </div>
    </li>
    )}
        </ul>
        </div>
)
export default HomeMain