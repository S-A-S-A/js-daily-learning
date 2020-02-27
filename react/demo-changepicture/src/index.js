import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";

const srcs=[src1,src2,src3];  //保存图片路径的数组

let index=0;   //显示的图片索引

let timer;

const container = document.getElementById('root');

/**
 * 根据index的值，显示某张图片
 */
function render(){
    ReactDOM.render(<img src={srcs[index]} alt=""/>,container);

}

/**
 * 启动定时器，每隔一段时间，切换一张图片
 */
function start(){
    stop();
    timer=setInterval(()=>{
      index=(index+1)%3;
      render();
    },2000)
}

/**
 * 停止计时器
 */
function stop(){
    clearInterval(timer);
}

render();
start();

/**
 * 鼠标移入时停止切换图片
 */
container.onmouseenter=function(){
    stop();
}

/**
 * 鼠标移出时重新开始切换图片
 */
container.onmouseleave=function(){
    start();
}