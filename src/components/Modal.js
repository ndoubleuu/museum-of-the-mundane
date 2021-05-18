// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {
    // Destructure props
    const { showModal, exitModal, removePost, itemSelected } = props;

    return (
        <div className={showModal === true ? "show-modal" : "hide-modal"}>
            <div className="modal">
                <div className="modal-content">
                    <button className="exit-modal" onClick={exitModal}>
                        <span className="sr-only">Exit modal</span>
                        <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                    </button>
                    <p>Are you sure that you'd like to remove this post? This action cannot be undone.</p>
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
    )
}

export default Modal;

// onClick={() => {
//     // Add an event handler on the remove button which will call the function that removes the input from the Firebase database
//     removePost(moment.key);
// }}