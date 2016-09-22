console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = 'Hi hasura.. Text Changeed';


var elementImg = document.getElementById("img1");
elementImg.onClick = function(){
    elementImg.style.marginLeft='100px';
};