<?php
$action=$_REQUEST['action'];
if ($action=="")    
    {
?>

<?php
    } 
else                
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
		echo "All fields are required, please fill <a href=\"\">the form</a> again. :)";
	    }
    else{		
	    $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
		// mail("youremail@yoursite.com", $subject, $message, $from);
		echo "Email sent! :)";
	    }
    }  
?>



<?php

/* Set e-mail recipient */
$myemail  = /*Your Email Address Here*/;

/* Check all form inputs using check_input function */
$name = check_input($_POST['name']);
$email = check_input($_POST['email']);
$message = check_input($_POST["message"]);

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* If URL is not valid set $website to empty */
if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}

/* Let's prepare the message for the e-mail */
$email_message = "Hello!

Your contact form has been submitted by:

Name: ".$name"
E-mail: ".$email"

Message: ".$message"

End of message
";

/* Send the message using mail() function */
mail($myemail, $email_message);

/* Redirect visitor to the thank you page */
header('Location: ./html/submission.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>