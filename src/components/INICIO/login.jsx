import Header from '../header_todos';
import { Link } from "react-router-dom"
import './loginstyle.css'

const Login = (props) => {

    return <div>
        <Header/>
        <div id='bordescontenedorR'>
        <div id='ignore'>.</div>
        <div id='contenedorR'>
            <div id='tituloContenedorR'>LOG IN.</div>
            <div id='textoContenedorR'>Log in with your details below to view your order.</div>
            <input type="text" class="form-control" id="floatingInput" placeholder="Email"/>
            <input type="password" class="form-control" id="floatingInput" placeholder="Password"/>
            
            <Link to={"/"}>
                <button id='botonblanco' class="btn btn-primary">LOGIN</button>
            </Link>
            <div><a href=" ">Forgot your password?</a></div>
            <div id='ignore'>.</div>
            <div id='textoContenedorR'>Don't have an account?</div>
            <Link to={"/Register"}>
                <button id='botonblanco' class="btn btn-primary">SIGN UP</button>
            </Link>
        </div>
        </div>
    </div>
        
}

export default Login;