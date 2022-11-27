
import './App.css'


function App() {

  return (
   <div> 

    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container px-5">
        <a class="navbar-brand" href="#page-top">InstaYa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#!">Crea tu cuenta</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Inicia Sesión</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">Pedidos</a></li>
            </ul>
        </div>
    </div>
</nav>
//Header
<header class="masthead text-center text-white">
    <div class="masthead-content">
        <div class="container px-5">
            <h1 class="masthead-heading mb-0">La Comunicación</h1>
            <h2 class="masthead-subheading mb-0">Nunca había sido tan fácil...</h2>
            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Registrate Ya</a>
        </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
    </header>
   
   </div>
   
   
  )
}

export default App