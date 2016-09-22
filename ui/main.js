console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = 'Hi hasura.. Text Changeed';


var elementImg = document.getElementById("img1");
elementImg.onClick = function(){
    var intervel = setInterval(marginRight, 100);
    elementImg.style.marginLeft='200px';
};

function marginRight()
{
    marginLeft=marginLeft + 10;
    elementImg.style.marginLeft=marginLeft+'px';
}