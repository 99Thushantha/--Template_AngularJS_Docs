<?php
function getDB ()
{




    $dbhost = "";
    $dbuser = "";
    $dbpass = "";
    $dbname = "";



    $dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=UTF8", $dbuser, $dbpass);


    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbConnection->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    return $dbConnection;
}

function getConn ()
{




    $dbhost = "";
    $dbuser = "";
    $dbpass = "";
    $dbname = "";

    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);


    return $conn;
}
function cast_query_results($rs) {
    $fields = mysqli_fetch_fields($rs);
    $data = array();
    $types = array();
    foreach($fields as $field) {
        switch($field->type) {
            case 3:
                $types[$field->name] = 'int';
                break;
            case 4:
                $types[$field->name] = 'float';
                break;
            default:
                $types[$field->name] = 'string';
                break;
        }
    }
    while($row=mysqli_fetch_assoc($rs)) array_push($data,$row);
    for($i=0;$i<count($data);$i++) {
        foreach($types as $name => $type) {
            settype($data[$i][$name], $type);
        }
    }
    return $data;
}
?>