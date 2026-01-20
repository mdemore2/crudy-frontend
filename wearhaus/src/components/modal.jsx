
import '../styles/modal.css'

function Modal({isOpen, setIsOpen, content}){
   
    const handleClick = (e) => {
        setIsOpen(false);
    }

    if (isOpen){
        return <div class="my-modal" onClick={handleClick}>
            {content}
        </div>
    }

    return null
}

export default Modal;