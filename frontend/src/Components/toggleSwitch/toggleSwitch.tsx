import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const ToggleSwitch = ({setAddFlexgrow})=> {
  
  const [checked, setChecked] = useState(false);

  const handleChange = val => {
    setChecked(val);
    setAddFlexgrow(val);
  }

  return (
    <div className="toogle-container" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;