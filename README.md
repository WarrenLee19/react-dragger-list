### react-drag-list

> npm install @nankle/react-drag-list

```javascript
import React, {useEffect, useState, useRef} from 'react';
import {DragList} from "@nankle/react-drag-list";
import img1 from '../assets/1.png';
import img2 from '../assets/1.png';
import img3 from '../assets/1.png';
import './demoHook.scss';

export default function DemoHook() {
    const [items, setItems] = useState([{
        id: 1,
        name: 'a',
        img: img1
    },
        {
            id: 2,
            name: 'b',
            img: img2
        },
        {
            id: 3,
            name: 'c',
            img: img3
        },
    ])

    const itemRenderer = (item) => {
        return <div className='demo'>
            <span>{item.name}</span>
            <img className='demo-img' key={item.id} src={item.img} alt=""/>
        </div>;
    }

    return (
        <DragList items={items} itemRenderer={itemRender}></DragList>
    );
}

```


### demo

![示例](https://github-1251618686.cos.ap-chengdu.myqcloud.com/react-drag-list/drag.gif)


### API
items中的对象需要有id进行区分。

被拖拽的子组件会增加nankle-rdl-is-dragging的class。可以自定义样式。
