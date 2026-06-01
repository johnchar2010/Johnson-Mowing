document.getElementById("instumement").addEventListener("submit",
    (event) => {
        event.preventDefault();
       
        let yes = 0;
        let nah = 0;
        

        instumementResult = document.getElementById('instumement').value;
        if(instumementResult == "Guitar"){
            yes++;
            yes++;
        }
        if(instumementResult == "Bass"){
            nah++;
        }
        if(instumementResult == "Drums"){
            yes++;
        }
        if(instumementResult == "Vocals"){
            nah++;
        }
       

        if(document.getElementById("pearl jam").checked){
            yes++;
            yes++;
        }
        if(document.getElementById("nirvana").checked){
            nah++;
        }
        if(document.getElementById("alice in chains").checked){
            yes++;
        }
        if(document.getElementById("pantera").checked){
            nah++;
        }

        if(document.getElementById("pepperoni").checked){
            nah++;
            nah++;
        }
        if(document.getElementById("pineapple").checked){
            yes++;
        }
    

        if(document.getElementById("yes").checked){
            nah++;
        }
        if(document.getElementById("no").checked){
            yes++;
        }

        winner = [];
        if(yes >= nah
            && yes >= nah
            && yes >= nah
            && yes >= nah
        ){
            winner.push("Premium");
        }
        if(nah >= yes
            && nah >= yes
            && nah >= yes
            && nah >= yes
        ){
            winner.push("Standard");
        }
        if(yes >= nah
            && yes >= nah
            && yes >= nah
            && yes >= nah
        ){
            winner.push("Premium");
        }
        if(nah >= yes
            && nah >= yes
            && nah >= yes
            && nah >= yes
        ){
            winner.push("Standard");
        }
        if(yes >= nah
            && yes >= nah
            && yes >= nah
            && yes >= nah
        ){
            winner.push("Premium");
        }

        winningIndex = Math.floor(Math.random() * winner.length);
        actualWinner = winner[winningIndex];
   
        document.getElementById("resultParagraph").textContent = actualWinner;
    }
)
