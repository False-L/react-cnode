import React from 'react';
import CnodeMainHeader from './CnodeMainHeader.js';
import CnodeMainItem from './CnodeMainItem.js';

export default class CnodeMain extends React.Component {
    
  render() {
    return (
        <div className="cnodeMain">
            <div className="cnodeMainB">
                <CnodeMainHeader />
                <div className="cnodeItemList">
                    {
                        (this.props.items).map((item,index)=>{
                            return(
                                <CnodeMainItem key={index} item={item} rank={1}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        );
  }
}