import { Fragment } from "react";
// Import frame image
import frame from "../assets/frame.png";
// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        
const Gallery = (props) => {
    // Destructure props
    const { momentsData, confirmDelete, showModal, removePost, itemSelected, exitModal } = props;

    return (
        <Fragment>
            {/* // Create a <ul> to hold all submitted user input values */}
            <ul>
            {
            momentsData.map((moment) => {
                // Map through the array of user inputs to render each of them onto the page
                return(
                    <Fragment key={ moment.key }>
                        <li>
                            <img src={frame} alt="" className="frame"/>
                            <p>{ moment.post }</p>
                            <button className="delete-input"
                                onClick={() => {
                                    confirmDelete(moment.key);
                                }
                                }> 
                                <span className="sr-only">Delete post</span>
                                <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                            </button>
                        </li>
                        <div className={showModal === true ? "show-modal" : "hide-modal"}>
                            <div className="modal">
                                <div className="modal-content">
                                    <button className="exit-modal" onClick={exitModal}>
                                        <span className="sr-only">Exit modal</span>
                                        <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                                    </button>
                                    <p>Are you sure you'd like to delete this input? This action cannot be undone.</p>
                                    <button className="confirm-delete" 
                                        onClick={ () => {
                                            removePost(itemSelected);
                                        }
                                        }>
                                            Confirm
                                    </button>
                                </div> 
                            </div>
                        </div>
                    </Fragment>

                )
            })
            }
            </ul>
        </Fragment>
    )
}

export default Gallery;