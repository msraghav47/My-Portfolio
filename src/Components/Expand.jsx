import React from "react";
import { FaListUl } from "react-icons/fa";
const Expand = () => {
  return (
    <div className="exp">
      <FaListUl
        style={{
          width: "8vw",
          height: "1%",
          border: "3px solid red",
          padding: "5px",
          borderRadius: "8px",
          boxShadow: "2px 2px 6px 6px rgba(255, 0, 0,0.7)",
        }}
      />
    </div>
  );
};
export default Expand;
