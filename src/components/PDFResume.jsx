
import PropTypes from 'prop-types';

const PDFResume = ({ pdfUrl }) => {
  

  return (
    <>  
      <label htmlFor="pdf-modal" className="btn btn-primary modal-button">
        Open Resume
      </label>

      <input type="checkbox" id="pdf-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl h-[80vh] max-h-[800px] p-0">
          <label 
            htmlFor="pdf-modal" 
            className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
          >
            ✕
          </label>
          
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full"
            title="PDF Resume"
          >
            <p>Your browser does not support PDFs. Please download the PDF to view it.</p>
          </iframe>
        </div>
      </div>
    </>
  );
}

PDFResume.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
};

export default PDFResume;