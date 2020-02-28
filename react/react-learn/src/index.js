import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from "./MyFuncComp";
import MyClassComp from "./MyClassComp";

  
// function MyFuncComp(){
//     // return React.createElement(...)
//     return <h1>组件内容</h1>
// }

// const comp=<MyFuncComp/>;   //使用组件，生成的，仍然是一个react元素，变化的，只是type值
ReactDOM.render(<div>
    {/* {comp} */}
    <MyFuncComp number="2"/>
    <MyFuncComp number={5}/>
    <MyFuncComp number={6}/>

    <MyClassComp number="1" ennable/>
    <MyClassComp number={2} obj={{
        name:"热巴热巴",
        age:"18"
    }}/>
    <MyClassComp ui={<h2>这是传递属性</h2>}/>

    </div>, document.getElementById('root'));
