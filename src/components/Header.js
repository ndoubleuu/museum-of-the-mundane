// Import header image
import museum from "../assets/museum.jpg";
// Import Fontawesome icon
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return(
        <header>
            <div className="wrapper top-container">
                <div className="title">
                    <h1>Museum of the <span>Mundane</span></h1>
                    <h2>A community-curated collection</h2>
                </div>
                <a href="#share"><FontAwesomeIcon icon={faCaretDown} className="arrow-down" /></a>
            </div>
            <div className="wrapper image">
                <img src={museum} alt="Museum gallery exhibiting numerous framed paintings. Photographed by Artur Matosyan, published 2019." />
            </div>
        </header>
    )
}

export default Header;