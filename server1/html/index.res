<!DOCTYPE html >
<html>
<head>

<title> Hello HTML </title>

 <script src="http://code.jquery.com/jquery-1.9.1.js">
 </script>

 <script type='text/javascript'>
    $(document).ready(function(){

      $("#submitButton").on("click", function(event) {
     
      console.log("aaa");
      var postData = {
          "first_name" : $('#userFirstName').val(),
          "last_name" : $('#userLastName').val(),
          "email" : $('#userEmail').val()
      };

      $.post("http://localhost:8888/login", postData).done(function(data){
          console.log("OK");
      });

    });

    });

</script>


</head>
<body>


<div class='form'>

First Name: <br>
<input type="text"  id="userFirstName" size="30" />
<br />
Last Name:
<br />
<input type="text"  id="userLastName" size="30" />
<br/>
Email:
<br/>
<input type="text"  id="userEmail" size="30" />

<br/>
 <button id = "submitButton" >Submit</button>
<br/>

</div>
</body>
</html>