import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const Buttons = ({route, buttonText}) => {
const navigate =  useNavigate();

  return (
    <div className="text-6xl">
      <button
        onClick={() => navigate(route)}
        className="text-cyan-500 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2-indigo-500 transition-all"
      >
        {buttonText}
      </button>
    </div>
  );
};
Buttons.propTypes = {
  route: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Buttons;


