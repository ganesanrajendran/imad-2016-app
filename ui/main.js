var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    //create request
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status ===200){
                var counter= request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }  
        }
        
    };
    
   //make request
   request.open('GET', "http://ganesanrajendran.imad.hasura-app.io/counter");
   request.send(null);
};

//Submit Name

var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick = function(){
    var names =['Name1','Name2','Name3', 'Name4'];
    var list = '';
    for (var i=0;i<names.length;i++){
        list+='<li>' + names[i] + '</li>'
    }
    var ul=doucment.getElementById('nameList');
    ul.innerHTML=list;
    
};