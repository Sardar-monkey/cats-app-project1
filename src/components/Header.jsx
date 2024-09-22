import CatIcon from "../assets/images/TestCatPaw2.svg";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header class="header">
            <div class="container">
                <Link to="/main" class="button-category">
                    <img src= {CatIcon} alt="Menu Button" />
                </Link>
            </div>
        </header>
    );
};

export default Header;