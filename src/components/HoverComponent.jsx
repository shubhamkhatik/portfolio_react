import { useState } from "react";
import PropTypes from "prop-types";

const HoverPopup = ({ text }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative cursor-pointer text-cyan-400">
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text.length > 50 ? text.substring(0, 50) + "..." : text}
      </span>

      <div
        className={`absolute bg-gray-800 text-gray-200 p-3 rounded shadow-lg border border-cyan-500 w-4/5 max-h-40 overflow-y-auto 
          left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-300 ease-in-out hide-scrollbar
          ${
            hover
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </div>
    </div>
  );
};
HoverPopup.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HoverPopup;
