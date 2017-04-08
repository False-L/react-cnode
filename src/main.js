
import { render } from 'react-dom';
import React from 'react';
import CnodeBody from './component/CnodeBody.js';
import $ from 'jquery';

function getData(url){
    return Promise.resolve($.ajax(url));
}

getData('https://cnodejs.org/api/v1/topics').then((data)=>{
    return data.data;
}).then((items)=>{
    render(<CnodeBody items={items}/>, document.getElementById('content'));
}).catch((err)=>{
    console.log(err);
})