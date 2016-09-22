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