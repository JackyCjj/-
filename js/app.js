window.onload=function () {

    //获取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

//当音乐播放完停止的时候,自动体重光盘旋转效果
//给audio添加一个监听事件,ended停止事件
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","");
        //this.style.animationPlayState="paused";
        //this.style.webkitAnimationPlayState="paused";
    },false);


    /*music.onclick = function () {
     //如果是暂停的点击就能播放,否则就暂停
     if (audio.paused) {
     //调用audio的播放api
     audio.play();
     this.setAttribute("class", "play");
     //this.style.animationPlayState="running";
     //this.style.webkitAnimationPlayState="running";
     } else {
     //调用audio的暂停api
     audio.pause();
     this.setAttribute("class", "");
     //this.style.animationPlayState="paused";
     //this.style.webkitAnimationPlayState="paused";
     }
     };*/


//click事件 有300毫秒的延迟，最好用touchstart代替
    music.addEventListener("touchstart",function (event) {
        if (audio.paused) {
            //调用audio的播放api
            audio.play();
            this.setAttribute("class", "play");
            //this.style.animationPlayState="running";
            //this.style.webkitAnimationPlayState="running";
        } else {
            //调用audio的暂停api
            audio.pause();
            this.setAttribute("class", "");
            //this.style.animationPlayState="paused";
            //this.style.webkitAnimationPlayState="paused";
        }
    },false);

    //点击屏幕开启好运2017
    page1.addEventListener("touchstart",function (event) {
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";

        setTimeout(function () {
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500)
    },false);
};

