console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = 'Hi hasura.. Text Changeed';



elementImg.onClick = function(){
    var intervel = setInterval(marginRight, 100);
};

var marginLeft = 0;
function marginRight()
{
    var elementImg = document.getElementById("img1");
    marginLeft=marginLeft + 10;
    elementImg.style.marginLeft=marginLeft+'px';
}