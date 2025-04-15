import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleButton(){
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "green"

  return (
    <button onClick={handleButton} style={{background: color}}>
      {isOn ? "OFF" : "ON"}
    </button>
  )
}

export default Toggle;
