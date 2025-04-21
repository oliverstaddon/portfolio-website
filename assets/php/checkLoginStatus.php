<?php
session_start();
header('Content-Type: application/json'); // response type

$response = [ // checks if the user is logged in
    'loggedin' => isset($_SESSION['loggedin']) && $_SESSION['loggedin']
];

echo json_encode($response);
?>  