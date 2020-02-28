import React from 'react';


// export default function MyFuncComp(){  //函数组件
//     return <h1>组件内容</h1>
// }

export default function AttrFunc(prop){   //关于属性
return <h1>组件内容，显示传过来的数字{prop.number}</h1>
}