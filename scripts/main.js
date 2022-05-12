let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon1.jpg'){
        myImage.setAttribute('src','images/icon2.jpg');
    }else{
        myImage.setAttribute('src','images/icon1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入您的名字。');
    if(!myName || myName === null) {
        alert('名字不能为空！');
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = myName + ',欢迎来到我的网站 :)';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = storeName + ',欢迎来到我的网站 :)';
}

myButton.onclick = function() {
    setUserName();
}