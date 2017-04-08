import React from'react';

export default class CnodeMainHeader extends React.Component{
    getNav(){
        var navlist=[
            { name:'全部',url: 'all',},
            { name:'精华',url: 'good',},
            { name:'分享',url: 'share',},
            { name:'问答',url: 'ask',},
            { name:'招聘',url: 'job',}
        ];
        return(
            <div className="cnodeMainHeader-nav">
                {
                    navlist.map(function(navLink){
                        return(
                            <a key={navLink.url} className="cnodeMainHeader-link" href={"https://cnodejs.org/?tab="+navLink.url}>{navLink.name}</a>
                        )
                    })
                }
            </div>
        )
    }
    render(){
        return(
            <div className="cnodeMainHeader">
            {this.getNav()}
            </div>
        )
    }
}