import { Fragment } from "react";
// Import frame image
import frame from "../assets/frame.png";
// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

        
const Gallery = (props) => {
    // Destructure props
    const { momentsData, confirmDelete } = props;

    return (
        <Fragment>
            {/* // Create a <ul> to hold all submitted user input values */}
            <ul>
            {
            momentsData.map((moment) => {
                // Map through the array of user inputs to render each of them onto the page
                return(
                    <li key={moment.key}>
                        <img src={frame} alt="" className="frame"/>
                        <p className="moments">{moment.post}</p>
                        <button className="delete-input"
                            onClick={() => {
                                confirmDelete(moment.key);
                            }
                            }> 
                            <span className="sr-only">Delete post</span>
                            <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
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