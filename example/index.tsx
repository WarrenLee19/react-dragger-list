import React from 'react';
import ReactDOM from 'react-dom';
import {DragList} from '../index';
import './index.scss';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import DemoHook from "./demoHook";

const ele = <div className='apps'>
    <div>
        <DemoHook/>
    </div>
</div>;

console.log( document.getElementById('app'));

ReactDOM.render(
    ele,
    document.getElementById('app'),
    function(){
        console.log(this);
    }
);
