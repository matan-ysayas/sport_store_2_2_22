import react from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(<div>
        <h1>navbar</h1>
        <nav>
            <li>
                <Link to="/Shoes">Shoes</Link>
            </li>
            <li>
                <Link to="/Pants">pants</Link>
            </li>
            <li>
                <Link to="/Shirts">Shirts</Link>
            </li>
        </nav>
    </div>)
}
export default Navbar ;