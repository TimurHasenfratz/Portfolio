function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=timurhasenfratz0106@mail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}