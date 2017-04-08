import React from 'react';
import Moment from 'moment';

export default class CnodeMainItem extends React.Component{
    getAvatar(){
        return (
            <a href={"https://cnodejs.org/user/"+this.props.item.author.loginname}><img src={this.props.item.author.avatar_url} title={this.props.item.author.loginname}/></a>
        )
    }
    getItemTitle(){
        return (
           < a className="cnodeMainItem-link" href={"https://cnodejs.org/topic/"+this.props.item.id} title={this.props.item.title}>{this.props.item.title}</a>
        )
    }
    getTab(){
        return(
                <div className={ this.props.item.top||this.props.item.good?"tab-div":"tab"}>
                    {this.props.item.top?"置顶":(this.props.item.good?"精品":this.props.item.tab)}
                </div>
        )
    }
    getReplyCount(){
        return(
        <span className="replay_count">{this.props.item.reply_count}/{this.props.item.visit_count}</span>
        )    
    }
    getCreateTime(){
        return(
        <span className="create_at">发布时间：{Moment.utc(this.props.item.create_at).format("YYYY-MM-DD")}</span>
        )
    }
    getLastReplyTime(){
        return(
           <span className="last_replay_at">最后回复时间{Moment.utc(this.props.item.last_replay_at).format("YYYY-MM-DD")}</span> 
        )
    }
    render(){
        return(
            <div className="cnodeMainItem">
                <div className="cnodeMainItemPart-f">
                    {this.getAvatar()}
                    {this.getReplyCount()}
                </div>
                {this.getTab()}
                {this.getItemTitle()}
                {this.getCreateTime()}
                {this.getLastReplyTime()}
                
            </div>
        )
    }
}
