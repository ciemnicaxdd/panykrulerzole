 const title = "3TP PANY, KRULE, RZÓLE";
 var x = 0;

 function sliceText() {



     document.createElement("h1");

     document.body.innerHTML = (title.slice(0, x));
     x++;

     if (x > title.length + 1)


     {
         x = 0
         document.body.innerHTML = ""
     }

 }

 window.setInterval(sliceText, 100);