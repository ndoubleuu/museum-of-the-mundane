// Import header image
import museum from "../assets/museum.jpg";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                {/* <p><q>Life is a passage through a museum of beauty.</q> -Robert Genn</p> */}
                <h1>Museum of the <span>Mundane</span></h1>
            </div>
            <div className="wrapper image">
                <img src={museum} alt="Museum gallery exhibiting numerous framed paintings. Photo by Artur Matosyan, published 2019." />
            </div>
        </header>
    )
}

export default Header;