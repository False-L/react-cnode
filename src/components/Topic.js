import React,{Component} from 'react'
import {connect}from 'react-redux'
import fetch from 'isomorphic-fetch'
import '../css/topic.less';
import Replies from './Replies'
import { BackTop } from 'antd';

class Topic extends Component{
    constructor(props){
        super(props);
         this.state = { data:{} };
    }
    componentDidMount(){
        const {topicid}=this.props.match.params
       return fetch(`https://cnodejs.org/api/v1/topic/${topicid}`)
        .then(res=>res.json())
        .then(json=>this.setState({data:json.data}))
    }
    render(){
        console.log(this.state)
        return(
            <div className='topic'>
                <header className='topicHeader'> 
                <h1>{this.state.data.title}</h1>
                <span>{this.state.data.visit_count} 次浏览</span>
                <span> 作者 {this.state.data.author?this.state.data.author.loginname:''}</span>
                </header>
                <section className='topicContent clearfix'>
                   <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='topicContentMain'/>
                </section>
                <section className="replies">
                   <Replies data={this.state.data} />
                </section>
                <div className="backTop">
                    <BackTop >
                    <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
  const {selectedCnode,postsByCnode}=state
  const {
    isFetching,
    items:posts
  } =postsByCnode[selectedCnode] || {
    isFetching: true,
    items: []
  }
  return{
      selectedCnode,
      posts,
      isFetching
  }
}

export default connect(mapStateToProps)(Topic)