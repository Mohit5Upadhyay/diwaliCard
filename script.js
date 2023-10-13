//  cretaing function for the PDF

function templatePdf() {
    var name = document.querySelector('.name').value;
    var relation = document.querySelector('.relation').value;
    var address = document.querySelector('.address').value;
    var body = document.querySelector('body');

    // insertion of the innerHTML
    body.innerHTML = `
    <div class="sub-container xyz">
    <div class="piece">
        <p class=" down-p"> 

            <code class="om">||   ॐ नमः शिवाय    || </code>  <code class="sg">|| श्री गणेशाय नमः  ||  </code>   <code class="ml">||  श्री लक्ष्मी नमः   ||</code>                   
            <br>
            <br>
            उपाध्याय परिवार की ओर से आप सभी को दीपावली की हार्दिक शुभकामनाएँ
            <br>
            <br>
            <br>
            माननीय  <i class="r-name"> ${name}   </i>   जी को उपाध्याय परिवार की ओर से दीपावली की हार्दिक शुभकामनाएँ  यह दीपावली आपके परिवार के साथ-साथ पूरी दुनिया में भी खुशियाँ लाए, यही हमारी कामना है |
            हम कामना करते हैं कि हमारे बीच का रिश्ता सदैव मधुर बना रहे |
            <br>
            <br>
            <br>
            धन्यवाद प्रिय,
            <br>
            सम्पूर्ण उपाध्याय परिवार की ओर से ||
            <img class="diwali-image"  src="diwali.png.png" alt="diwali image !!">
            <br> 
            <br>
            <code>|| वसुधैव कुटुम्बकम्  ||  </code>
            <br>
            <br>
            <code>|| जय हिन्द  ||  </code>
        </p>
    </div>

    <div class="btn">
        <button class="join-btn  download" onclick="generatePDF()"> Download </button>
    </div>
</div>
                  

`

}

function generatePDF(){
    const piece= document.querySelector(".piece")
    let btn=document.querySelector(".download")

    btn.addEventListener('click',()=>{
        
        html2pdf().from(piece).save("Diwali.pdf")

    })

}

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

