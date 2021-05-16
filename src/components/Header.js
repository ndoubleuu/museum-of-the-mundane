// Import header image
import museum from "../assets/museum.jpg";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="title">
                    <h1>Museum of the <span>Mundane</span></h1>
                    <h2>A community-curated collection</h2>
                </div>
                <a href="#form"><i class="fas fa-caret-down"></i></a>
            </div>
            <div className="wrapper image">
                <img src={museum} alt="Museum gallery exhibiting numerous framed paintings. Photo by Artur Matosyan, published 2019." />
            </div>
        </header>
    )
}

export default Header;