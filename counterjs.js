 let count=0;
        const  Decrees = document.getElementById("ct3");
        const  reset = document.getElementById("ct2");
        const  increes = document.getElementById("ct1");
        const  ctlabel = document.getElementById("counter");
    

    increes.onclick =function()
        {
            count++;
             ctlabel.textContent =count;
        }
      reset.onclick=function()
        {
            count=0;
             ctlabel.textContent=count;
          
        }
      Decrees.onclick =function()
        {
            count--;
              ctlabel.textContent=count;
        }