// Modal.js
import PropTypes from 'prop-types';


const ModalComp = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue p-6 rounded-lg max-w-4xl w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Resume</h2>
          <button onClick={onClose} className="text-xl font-bold text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4 bg-purple-100 p-4 rounded-lg">
          <embed
            src={pdfUrl}
            width="100%"
            height="500px"
            type="application/pdf"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
ModalComp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  pdfUrl: PropTypes.string.isRequired,
};

export default ModalComp;


