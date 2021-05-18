// Import Fontawesome icon
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = (props) => {
    // Destructure props
    const { showModal, exitModal, removePost, itemSelected } = props;

    return (
        <div className={showModal ? null : "hide-modal"}>
            <div className="modal">
                <div className="modal-content">
                    <button className="exit-modal" onClick={exitModal}>
                        <span className="sr-only">Exit modal</span>
                        <FontAwesomeIcon icon={faTimesCircle} aria-hidden="true" />
                    </button>
                    <p>Are you sure you'd like to remove this post? This action cannot be undone.</p>
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