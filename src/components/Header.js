// Import header image
import museum from "../assets/museum.jpg";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <h1>Museum of the Mundane</h1>
            </div>
            <div className="wrapper image">
                <img src={museum} alt="Museum gallery exhibiting numerous framed paintings. Photo by Artur Matosyan, published 2019." />
            </div>
        </header>
    )
}

export default Header;