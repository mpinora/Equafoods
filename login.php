<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Login | EquaFoods</title>
    <link rel="icon" type="image/x-icon" href="img\icono-ventana.png">

    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet">

    <!-- Bebas Neue Regular (GOOGLE FONTS) -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Freehandwght@200;300;400;500;600;700;800&family=Lobster&display=swap">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

    <!-- Line Awesome -->
    <link rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <!-- Animaciones AOS -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">


    <!-- CSS -->
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/login.css">

</head>

<body>
    <div class="ts-wrapper">

        <!-- ================================= HEADER MENU ================================== -->
        <div class="ts-header">

            <div class="container">
                <div class="header-menu">

                    <div class="ts-logo">
                        <a href="index.html">
                            <img class="login-img" src="img/logo-equafods.png" alt="">
                        </a>
                    </div>

                    <!-- ================================== DESPLEGABLE HEADER MENU MOVIL ================================== -->
                    <div class="icon-menu">
                        <button type="button"><i class="fas fa-bars"></i></button>
                    </div>

                    </nav>

                </div>
            </div>

        </div>

        <!-- ================================== LOGIN USUARIO ================================== -->
        <div class="login-container">
            <h2>Login</h2>
            <form id="loginForm" action="php/login.php" method="post">
                <label for="username">Ingresa tu correo o usuario</label>
                <input type="text" id="username" name="username" required>

                <label for="password">Ingresa tu contraseña</label>
                <input type="password" id="password" name="password" required>

                <button type="submit">Iniciar sesión</button>
            </form>
            <a href="Registro">
                <p>¿No tienes cuenta? Regístrate aquí</p>
            </a>
        </div>


    </div>

</body>

</html>