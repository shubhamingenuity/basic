function startmoving() {
    let redDiv = document.getElementById("animate");
    let leftPos = 0;
    let gPos = 0;
    
    let intervalId = setInterval(function () {
        if(gPos<200)
        {
        if (leftPos < 200) {
            redDiv.style.bottom = leftPos;
            redDiv.style.left = gPos/2;
        
             leftPos += 5;
             gPos +=5;
             console.log(leftPos);
             if(leftPos == 200){
                 gPos = 240;
                 redDiv.style.left = gPos/2; 
             }
        }}
        else{
            if(gPos<440){
                if (leftPos > 0) {
                    redDiv.style.bottom = leftPos;
                    redDiv.style.left = gPos/2;
                
                     leftPos -= 5;
                     gPos +=5;
                     console.log(leftPos);
                     if(leftPos == 0){
                         gPos = 480;
                         redDiv.style.left = gPos/2; 
                     }
                }}
                else{
                    if(gPos<680){
                        if (leftPos < 200) {
                            redDiv.style.bottom = leftPos;
                            redDiv.style.left = gPos/2;
                        
                             leftPos += 5;
                             gPos +=5;
                             console.log(leftPos);
                             if(leftPos == 200){
                                 gPos = 920;
                                 redDiv.style.left = gPos/2; 
                             }
                        }
                    }
                
            
        
       
        else {
            console.log(redDiv.style.bottom);

            clearInterval(intervalId);
        }}}
    }, 10);
     
  
}
