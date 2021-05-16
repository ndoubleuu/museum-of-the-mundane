import { Fragment } from "react";
import frame from "../assets/frame.png";
        
const Gallery = ({ momentsData, removePost }) => {
    return (
        <Fragment>
            {/* // Create a <ul> to hold all submitted user input values */}
            <ul>
            {
            momentsData.map((moment) => {
                // Map through the array of user inputs to render each of them onto the page
                // console.log(moment);
                return(
                    <li key={ moment.key }>
                        <img src={frame} alt="" className="frame"/>
                        <p>{ moment.post }</p>
                        {/* Create button to remove input values */}
                        <button className="delete-input" onClick={() => {
                            // Add an event handler on the remove button which will call the function that removes the input from the Firebase database
                            removePost(moment.key);
                        }}>
                            <span className="sr-only">Delete post</span>
                            <i className="far fa-times-circle"></i>
                        </button>
                    </li>  
                )
                
            })
            }
            </ul>
        </Fragment>
    )
}

export default Gallery;