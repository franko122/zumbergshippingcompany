function StartCode() {
         const earning = document.getElementById("earning");
         const dashin = document.getElementById("frank");
         const ballance = document.getElementById("balance");
         const franklin = 'franklin' 
         const frank = "frank";
         const sheikh = "Sheikh";    
         if (dashin.innerHTML == sheikh) { 
             earning.innerHTML="450";
             ballance.innerHTML="50";
            }
            if (dashin.innerText == frank) {
                earning.innerHTML="0"
                ballance.innerHTML="0"
            } 
            if (dashin.innerText == franklin) {
                earning.innerHTML="200"
                ballance.innerHTML="500"    
            }            
}    
StartCode();