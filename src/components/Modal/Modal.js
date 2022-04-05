import React from "react";

import { ModalHeader, Modal, ModalBody } from 'reactstrap'

const ModalComponent = (props) => {
    const { setModalShow, modalShow, modalTitle, fullWidth } = props;
    const toggle = () => setModalShow(!modalShow);
    const closeBtn = <button className="btn btn-dark" onClick={toggle}>&times;</button>;

    return (
        <Modal
            isOpen={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={fullWidth ? "modal-dialog modal-full-width" : "modal-dialog modal-lg"}>

            <ModalHeader close={closeBtn} className="modal-header modal-colored-header bg-dark text-center">
                <h3 className="modal-title text-white text-center" id="info-header-modalLabel"> {modalTitle}</h3>
            </ModalHeader>
            <ModalBody style={{ 'max-height': 'calc(500vh - 210px)', 'overflow-y': 'auto' }}>
                {props.children}
            </ModalBody>
        </Modal>
    )
}

export default ModalComponent