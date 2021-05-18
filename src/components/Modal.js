// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ showModal, removePost }) => {
    return (
        <div className={showModal === true ? "show-modal" : "hide-modal"}>
            <div className="modal">
                <div className="modal-content">
                    <button className="exit-modal">
                        <span className="sr-only">Exit modal</span>
                        <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                    </button>
                    <p>Are you sure you'd like to delete this input? This action cannot be undone.</p>
                    <button className="confirm-delete" 
                        onClick={removePost}>
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