 const qrcode  = document.getElementById("qrcode");
    const btn    = document.getElementById("btn");
     const imgbox    = document.getElementById("imgbox");

    btn.addEventListener("click",function(){
      const input = document.getElementById("input");

      if(input.value.length > 0){

        qrcode.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value;

        input.value = "";



      }
      else{

        input.classList.add('error');
        setTimeout(()=>{
          input.classList.remove('error');
        },1000);
      }



    });
