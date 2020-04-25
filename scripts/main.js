let myheading = document.querySelector('h1');
myheading.textContent = 'Hello World !';

document.querySelector('html').onclick = function () {
    alert("求求你了，别点了");
}

let myImage = document.querySelector('img');

myImage.onclick = function (e) {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == './images/panda.png') {
        myImage.setAttribute('src', './images/panda2.png')
    } else {
        myImage.setAttribute('src', './images/panda.png')
    }

    //阻止冒泡
    e.stopPropagation();
}

let setPic=setInterval(() => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == './images/panda.png') {
        myImage.setAttribute('src', './images/panda2.png')
    } else {
        myImage.setAttribute('src', './images/panda.png')
    }
}, 100);

setTimeout(()=>{
    clearInterval(setPic)
},10000);