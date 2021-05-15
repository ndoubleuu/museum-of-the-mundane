// Import header image
import museum from "../assets/museum.jpg";

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <h1>Museum of the Mundane</h1>
            </div>
            <div className="wrapper image">
                <img src={museum} alt="" />
            </div>
        </header>
    )
}

export default Header;