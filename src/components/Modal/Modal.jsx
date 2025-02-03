import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, ModalContainer } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.closeModal();
    }
  };

  handleClose = (event) => {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  };

  closeModal = () => {
    this.props.onClose(prevState => ({
      ...prevState,
      selectedImageIndex: null, // 🔹 Închide modalul corect
    }));
  };

  render() {
    const { images, imgInd } = this.props;
    const activeImg = images?.[imgInd];

    if (!modalRoot || !activeImg) return null;

    return createPortal(
      <Overlay onClick={this.handleClose}>
        <ModalContainer>
          <img src={activeImg.largeImageURL} alt={activeImg.tags} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  images: PropTypes.array.isRequired,
  imgInd: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
