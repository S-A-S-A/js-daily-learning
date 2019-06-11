export default {
    namespaced:true,
    state:{  //公共数据池
      studentList:[],
    },
    getters:{             //用来更改store里面的函数
      newStudent(state){    //可传第二个参数，参数为getters，指本身这个对象。eg：在newStudent后面有一个a函数，我们可以在newStudent中通过getters.a调用
        return state.studentList.map((item,index)=>{
          if(index==0){
            return "**"+item
          }else if(index<3){
          return item+"**"
          }else{
            return "++"+item+"++"
          }
        })
      }                  //相当于计算属性，更改数据池里的东西
    },
    mutations:{
      changeStudent(state,{name,number}){     //第二个参数用来接收外面传的值,若需传多个值，用对象{name,number}，下面push（name+number）
      state.studentList.push(name+number);
    },
    },
    actions:{   //在action里触发mutation里的函数，然后执行。存在意义是执行一些异步的操作
      changeStudent(ctx,{name,number}){   //此处的ctx相当于store
        setTimeout(() => {
          ctx.commit('changeStudent',{name,number})
        }, (1000));
     
      }
    }
  }