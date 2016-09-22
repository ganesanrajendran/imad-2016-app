var button = doucment.getElementById("counter");
button.onclick = function(){
    
    
    counter = counter+ 1;
    var span = document.getElementById("count");
    span.innerHtml = counter.toString();
}