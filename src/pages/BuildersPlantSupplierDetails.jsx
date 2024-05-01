import React from "react";
import Modal from "react-bootstrap/Modal";

const BuildersPlantSupplierDetails = ({ onClose, supplier }) => {
  return (
    <>
      <Modal show={true} onHide={onClose}>
        <div className="modal-header">
          <h4 className="modal-title">
            {supplier.id} - {supplier?.name}
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>
      </Modal>
    </>
  );
};

export default BuildersPlantSupplierDetails;
