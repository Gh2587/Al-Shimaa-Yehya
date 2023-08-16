function sendMail() {
   
            var fullName =  document.getElementById("fullName").value;
            var subject = document.getElementById("subject").value;
            var email = document.getElementById("email").value;
            var message = document.getElementById("message").value;
            
            var mail = document.createElement("a");
            mail.href = `mailto:shimaayahya51@gmail.com?subject=${subject} - ${fullName} - ${email}&body=${message}`;
            mail.click();
        
  
}