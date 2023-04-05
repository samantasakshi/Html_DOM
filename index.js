
//active element on click
function clickEvent(){
    const tempElement = document.activeElement.tagName;
    //console.log(tempElement);
}

//Focus nd Blur Element
function getFocus(){
    const focus = document.getElementById('text').focus();
   //const colorBtn = document.button.style.backgroundColor ='red';
   text.activeElement(function(){
    text.setAttribute('style','color:blue');
   });

}
function blur(){
    const blur = document.getElementById('')
}
//eventListener element use mouseover and out
window.onload = function(){
    main()
}
function main(){
 const mouseOver = document.getElementById('mouseOver');
 mouseOver.addEventListener('mousemove',function(){
    mouseOver.setAttribute('style','color:red; font-size:12px');
 });
 mouseOver.addEventListener('mouseout',function(){
    mouseOver.setAttribute('style','color:green; font-size:30px');
 });
}
//AdaptNode method
function adaptNode(){
    const adapt = document.getElementById('adaptNode');
    //const adaptH1 = document.getElementsByClassName('adaptH1');
    const adaptH1 = fram.contentWindow.getElementsByClassName('adaptH1')[0];
    const node = document.adaptNode(h1);
    document.appendChild(node);
}//check baseUrl
function main(){
    const base = document.baseURI;
    const  checkBody = document.body.innerHTML;
    //console.log(base);
   // console.log(checkBody);
}
//Change html
function main(){
    document.getElementById('changeHtml').innerText = 'Hello World';
    console.log(changeHtml);
}

function appEnd(){
    const para = document.createElement('p');
    const node2 = document.createTextNode('This is a Paragraph');
    para.appendChild(node2);
    document.body.appendChild(para);
}

