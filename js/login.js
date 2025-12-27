"use strict"
document.addEventListener("DOMContentLoaded",()=>{
   const formEl=document.querySelector("#form") 
   const usernameEl=document.querySelector(".usernamee")
   const passwordEl=document.querySelector(".passwordd") 

   formEl.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(usernameEl.value)
    try {
        const res = await fetch("https://fakestoreapi.com/auth/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                username:usernameEl.value,
                password:passwordEl.value
            })
        });
        
        const data=await res.json();
        localStorage.setItem("userToken", data.token);
        window.location.href="../index.html";
        }catch (error) {
        console.log(error)
        alert("not found")
    }
   });
})