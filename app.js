var aText = new Array( "Hi &#128075 I'm Maxence Toth", "", "and i'm junior full stack developer",
    )
    
    var iSpeed = 100; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 1000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


const screen = document.querySelector("#screen")



function displayscreenabout() {

    screen.classList.toggle('hidden')
    if (!document.querySelector("#information")) {
        let card = document.createElement("div")
        card.id = "information"
        card.classList.add('rounded','overflow-hidden', 'shadow-lg', 'm-auto', )
        screen.appendChild(card)

        let aboutme = document.createElement("div")
        aboutme.classList.add('text-neutral-300', 'm-8')
        aboutme.text = 
        card.appendChild(aboutme).innerHTML = aboutme.text

        setTimeout(() => {
            card.scrollIntoView({
                behavior: "smooth"
            },)
        }) 
    } 
}