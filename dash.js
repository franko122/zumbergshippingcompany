function StartCode() {
         const earning = document.getElementById("earning");
         const dashin = document.getElementById("frank");
         const ballance = document.getElementById("balance");
         const refresh = document.getElementById("refresh");
        
         refresh.addEventListener('click', () => {
dashin.innerText="Darlene266"
       });
         alert(JSON.parse(localStorage.getItem("users")))
}
StartCode();
