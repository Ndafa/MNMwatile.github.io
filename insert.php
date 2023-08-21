<?php
$Name = $_POST['username'];
$Password = $_POST['password'];
$Gender = $_POST['gender'];
$Email = $_POST['email'];
$PhoneCode = $_POST['phoneCode'];
$Phone = $_POST['phone'];

if (!empty($username)|| !empty($password) || !empty($gender) || !empty($email) || !empty($phoneCode) || !empty($phone)) {
    $host = "localhost";
    $dbUsername = "root";
    $dpPassword = "";
    $dbname = "register";

    //create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    ///check connection
    if ($conn->connect_error) {
        die('Connect Error('. $conn->connect_errno).($conn->connect_error);
    } else {
        $SELECT = "SELECT email from reg where email = ? limit 1";
        $INSERT = "INSERT into reg (Name, password, gender, email, phoneCode, phone) values(?,?,?,?,?)";

        //prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt -> bind_param("s",$Email);
        $stmt ->execute();
        $stmt -> bind_result($Email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum==0){
            $stmt-> close();

            $stmt =$conn->prepare($INSERT);
            $stmt->bind_param("ssii",$name, $password, $gender, $email, $phoneCode, $phone);
            $stmt->execute();
            echo "New record inserted sucessfully";
        } else {
            echo "Someone already register using this email";
        }
        $stmt->close();
        $stmt->close();
    }
} else {
    echo "All field are required";
    die();
}
$conn->close();
?>