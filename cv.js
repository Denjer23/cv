const form = document.querySelector('.withme');

form.onsubmit = sendText;

function sendText (e){
    e.preventDefault();

      const name =  document.getElementById('name'),
            email =  document.getElementById('email'),
            text =  document.getElementById('text');
     
      Email.send({
        SecureToken : "21cddb3d-0581-49fc-8c26-f500c0895e01",
        To : 'chip.daniele15@gmail.com',
        From : email.value,
        Subject : "withme",
        Body : text.value
    }).then(
      message => alert(message)
    );
  }