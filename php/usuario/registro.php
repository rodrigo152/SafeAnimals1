<?php
    require_once '../config.php';

    $valido['success']=array('success' =>false, 'mensaje' => "");

    if($_POST){
        $nombre=$_POST['nombre'];
        $correo=$_POST['correo'];
        $password=md5($_POST['password']);

        $sql="SELECT * FROM USUARIOS WHERE CORREO ='$correo'";
        $resultado=$cx->query($sql);

        $n=$resultado->num_rows;

        if($n==0){
            $sqlInsertar="INSERT INTO USUARIOS VALUES(null, '$correo','$password','$nombre')";
            if($cx->query($sqlInsertar)===true){
                $valido['success']=true;
                $valido['mensaje']="¡Bienvenido!";
            }else{
                $valido['success']=false;
                $valido['mensaje']="Oops, ha habido un error. No se ha podido completar tu registro.";
            }
        }else{
            $valido['success']=false;
            $valido['mensaje']="El correo ingresado ya existe";
        }
    }

    echo json_encode($valido)
?>