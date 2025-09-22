function StartCode (){
    let button = document.getElementById("two");
    let input = document.getElementById("one");
    let code  = document.getElementById("code");
    let  lide =document.getElementById("lide")

     let tracknumbe = 63452452454
     let tracktw =  884989486533
lide.addEventListener("click", ()=>{
     let het = 0   
    if (drive.style.height == het) { 
        drive.style.height="250px"; 
       } 
       else{ 
        drive.style.height="0px";
       }

})
    button.addEventListener("click", ()=>{
        if (input.value == tracknumbe ) { 
            window.location = "trackone.html";
            button.innerText="tracking"
            code.innerText="successfully tracking"
             code.style.color="green"
            return fasle
        }
        else{
            code.style.display="block"; 
            setTimeout(() => {
                 code.style.display="none"; 
                  one.style.border=" rgb(0, 77, 165) solid 2px";
            }, 2000);
        }
    })         
    }
StartCode();


