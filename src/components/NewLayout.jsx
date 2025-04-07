
import PropTypes from 'prop-types';
import backgroundBlob2 from '../assets/backgroundBlob2.svg';





const NewLayout = ({ children }) => {
  



  return (
    <>
      {/* background cover the page*/}
      <div className='fixed inset-0 bg-cover bg-center bg-fixed bg-no-repeat z-0' style={{backgroundImage: `url(${backgroundBlob2})` }}></div>


      {/* Main Content */}
        <div className="relative z-10 min-h-screen">
            {children}
        </div>
    </>
  );
};

NewLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewLayout;