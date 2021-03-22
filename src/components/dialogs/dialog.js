import React from "react";

function ModalDialog({ children, id, title, isShow, onShow }) {
  return isShow ? (
    <>
      <div onClick={() => onShow(false)} className="modal-overlay" />
      <div
        id={id}
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            {title}
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => onShow(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  ) : null;
}

export default ModalDialog;
