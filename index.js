function StartCode (){
    let button = document.getElementById("two");
    let input = document.getElementById("one");
    let code  = document.getElementById("code");


     let tracknumbe = 63452452454
     let tracktw =  884989486533

    button.addEventListener("click", ()=>{
        if (input.value == tracknumbe ) { 
            window.location = "trackone.html";
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


