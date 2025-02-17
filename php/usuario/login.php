<?php

    require_once '../config.php';

    $valido['success']=array('success'=>false, 'mensaje'=> "", 'correo'=> "");

    if($_POST){
        $correo=$_POST['correo'];
        $password=md5($_POST['password']);
    
        $sql="SELECT * FROM USUARIOS WHERE CORREO = '$correo' AND PASSWORD = '$password'";

        $resultado=$cx->query($sql);
        $n=$resultado->num_rows;

        if($n>0){
            $row=$resultado->fetch_array();
            $valido['success']=true;
            $valido['mensaje']="Bienvenido de nuevo ";
            //$valido['correo']=$row['correo'];
        }else{
            $valido['success']=false;
            $valido['mensaje']="El correo ingresado no existe";
        }
    }

    echo json_encode($valido);
?>