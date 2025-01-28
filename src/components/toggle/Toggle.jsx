import React from "react";
import "./toggle.css";

const Toggle = () => {
  return (
    <div>
      <label class="ui-switch">
        <input type="checkbox" />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
