window.onload = function(){
    

    var xmlH;
    var xmlH1;
    var button1 = document.getElementById("countrylookup");
    var button2 = document.getElementById("citylookup");
    var result = document.getElementById("result");
   

    button1.addEventListener('click',function(e){
        e.preventDefault();
        

        
        var country = document.getElementById("country").value;
        
        
        xmlH  = new XMLHttpRequest();
    
        url = 'world.php?country='+ country;
      
        
        
        
        xmlH.onreadystatechange = req;
        xmlH.open('GET', url);
        
        xmlH.send();
        
    });
    
    


    function req(){
        if((xmlH.readyState === XMLHttpRequest.DONE) && (xmlH.status === 200))
        {
            
            
           result.innerHTML = xmlH.responseText;
        }
       
    }
    
    
    
     button2.addEventListener('click',function(f){
        f.preventDefault();
        

        
        var country = document.getElementById("country").value;
        
      
        xmlH1  = new XMLHttpRequest();
    
       
        url = 'world.php?country='+country+'&context='+country;
       
        
      
        
        xmlH1.onreadystatechange = secreq;
        xmlH1.open('GET', url);
        xmlH1.send();
        
    });
    
     function secreq(){
        if((xmlH1.readyState === XMLHttpRequest.DONE) && (xmlH1.status === 200))
        {
            
            
           result.innerHTML = xmlH1.responseText;
        }
       
    }


};