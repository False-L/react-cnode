import '../css/main.less';
import React from 'react';
import CnodeHeader from './CnodeHeader.js';
import CnodeMain from './CnodeMain.js';

export default class NewsList extends React.Component {
  render() {
    return (
        <div className="cnodeBody">
           <CnodeHeader />
           <CnodeMain items={this.props.items}/>
        </div>
        );
  }
}