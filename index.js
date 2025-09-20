function StartCode (){
    let button = document.getElementById("two");
    let input = document.getElementById("one");
    let code  = document.getElementById("code");
    button.addEventListener("click", ()=>{
        if (!input.value) { 
            code.style.display="block";
            setTimeout(() => {
                 code.style.display="none";
            }, 2000);
        }
    })         
    }
StartCode();


