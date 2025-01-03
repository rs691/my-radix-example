import PropTypes from 'prop-types';



const AbstractBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="absolute -inset-[100%] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      
        {children}
      </div>
    </div>
  );
};

AbstractBackground.propTypes = {
  children: PropTypes.node.isRequired,
};



export default AbstractBackground;