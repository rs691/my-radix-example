import { useState } from 'react';
import PropTypes from 'prop-types';

const PDFResumeModal = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <>
      {/* DaisyUI Button */}
      <button
        className="btn btn-primary"
        onClick={handleShow}
      >
        View Resume
      </button>

      {/* DaisyUI Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold">Resume</h2>
              <button
                className="btn btn-sm btn-circle btn-outline"
                onClick={handleClose}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="h-[70vh]">
              <iframe
                src={`${pdfUrl}`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Resume PDF"
              />
            </div>

            {/* Modal Footer */}
            <div className="modal-action">
              <button
                className="btn"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Prop Types
PDFResumeModal.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
};

export default PDFResumeModal;
