
    function bar(){
        document.querySelector(".allHead").style.display = "none";
         document.querySelector(".ull").style.display = "block";
         document.querySelector(".navBar").style.animationName="navbar"
        
    }

    function cross(){
        document.querySelector(".allHead").style.display = "block";
        document.querySelector(".ull").style.display="none";
         document.querySelector(".navBar").style.animationName = "cross";
    }
   
  window.onload=function(){
     let para = "Hi this is sandesh and welcome to my website";
    let split = para.split('')
   let arr=[split];
  let len = split.length;
   let i=0;
  
     
    let start = setInterval(function(){
          
          if(i === len-1){
     clearInterval(start);
   }
         arr = [split[i]];
         document.querySelector(".text").textContent +=arr;
        i = i + 1;
       }, 100);
   console.log(arr)
      
   

let contactname = document.querySelector("#name");
     contactname.addEventListener("blur", function () {
       let regex = /^[0-9a-zA-Z\.]{1,15}$/;
       let user = contactname.value;
       if (regex.test(user)) {

        document.querySelector(".name").id = "black"
       } else {
           document.querySelector(".name").id = "red";
       
       }
     });

 let contactnumber = document.querySelector("#msg");
    
     contactnumber.addEventListener("blur", function () {
       let regex = /^[0-9]{10}$/;
       let user = contactnumber.value;

       if (regex.test(user)) {
           document.querySelector("#num").className = "black";
       } else {
           document.querySelector("#num").className = "red";
        
       }
     });

let contactemail = document.querySelector("#email");

     contactemail.addEventListener("blur", function () {
       let regex = /^([_\.\-0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]{1,5})$/;
       let em = contactemail.value;
       
       if (regex.test(em)) {
           document.querySelector(".email").id = "black";
       } else {
         
          document.querySelector(".email").id="red"
         
       }
     });
     let msg = document.querySelector("#emailmsg");
     msg.addEventListener("blur",function(){
         let check = msg.value;
         if(check ==""){
             document.querySelector(".feedback").id="red"
         }
         else{
              document.querySelector(".feedback").id = "black";
         }
     })

    }
   

    function submitted(){
      let contactemail = document.querySelector("#email");
      let contactnumber = document.querySelector("#msg");
      let contactname = document.querySelector("#name");


      if(msg.value =="" || contactemail.value=="" || contactname.value=="" || contactnumber==""){
          alert("Invalid");
      }
      else{
            
  
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: `${contactemail.value}`, 
        To: `${contactemail.value}`, 
        From: `${contactemail.value}`, 
        Subject: `${contactname.value}`, 
        Body: `${contactnumber.value}`, 
      
      }) 
        .then(function (message) { 
          alert("Mail has been sent successfully.") 
        }); 
    } 
 
      }
    