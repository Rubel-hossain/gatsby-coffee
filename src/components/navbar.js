import React,{useState} from "react";
import Logo from "../images/logo.svg";
const Navbar = ()=>{
    const [openNav,setOpenNav] = useState(false);

    const navbarCollapse = () => {
        setOpenNav(prev=> !prev);
   }
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler p-4" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" onClick={()=>navbarCollapse()}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={openNav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/"><img src={Logo} alt="logo" className="img-fluid"/></a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
            </li>
            </ul>
        </div>
        </nav>
       </>
    );
}

export default Navbar;