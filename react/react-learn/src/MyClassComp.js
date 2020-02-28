import React from "react";

export default class MyclassComp extends React.Component{
 
    // constructor(props){
    //        super(props);     //使用继承，构造函数必须先执行super()，先调用一次父类的构造函数，且需要把属性传给super()，
                                //意义是this.props=props。在类里面如果不是有特殊用法，可以不用写这个构造函数。因为没有意义，会自动走这一步。
    // }
    /**
     * 该方法必须返回一个react元素
     */
    render(){
        // console.log(this.props)
        if(this.props.obj){
            return(
               //<></>根元素，这样写法可以不反映到dom元素里
                <>              
                  <p>
                      姓名：{this.props.name}
                  </p>
                  <p>
                      年龄：{this.props.age}
                  </p>
                
                </>
            )
        }else if(this.props.ui){
       
            // return this.props.ui
          return (
              <div>
                  <h2>下面是传入的内容：</h2>
                  {this.props.ui}
              </div>
          )
        }
    return <h1>类组件内容：数字{this.props.number}</h1>

    }
}