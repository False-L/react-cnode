import React from 'react';
import cnodelogo from '../img/cnodelogo.svg';


export default class CnodeHeader extends React.Component{
    getLogo(){
        return (
            <div className="cnodeHeader-logo">
                <a className='cnodeHeader-logo-link' href="https://cnodejs.org"><img src={cnodelogo} /></a>
            </div>
        )
    }
    getNavMain(){
        var navLinks=[
            {
                name:'首页',
                url:''
            },
            {
                name:'新手入门',
                url:'getstart'
            },
            {
                name:'API',
                url:'api'
            },
            {
                name:'关于',
                url:'about'
            },
            {
                name:'注册',
                url:'signup'
            }
            ,
            {
                name:'登录',
                url:'signin'
            }
        ];
        return(
            <div className="cnodeHeader-nav">
                {
                    navLinks.map(function(navLink){
                        return (
                            <a key={navLink.url} className='cnodeheader-navlink' href={"https://cnodejs.org/"+navLink.url}>
                            {navLink.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
    render(){
        return (
            <div className="cnodeHeader">
                {this.getLogo()}

                {this.getNavMain()}
            </div>
        )
    }
}