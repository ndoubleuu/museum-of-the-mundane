// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="exit-modal">
                    <span className="sr-only">Exit modal</span>
                    <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                </button>
                <p>Are you sure you'd like to delete this input? This action cannot be undone.</p>
                <button className="confirm-delete">Confirm</button>
            </div> 
        </div>
    )
}

export default Modal;