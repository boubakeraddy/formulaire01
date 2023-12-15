import { useState } from "react";

function CheckBox(props) {
  const [checked, setChecked] = useState(props.checked || false);
  const handlerChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        value={props.value}
        checked={checked}
        onChange={handlerChange}
      />
      <span>{props.text}</span>
      <br />
    </label>
  );
}

function CheckBoxGroupFunction(props) {
  return (
    <div>
      {props.checkboxes.map((checkbox, index) => {
        return (
          <CheckBox
            key={index}
            text={checkbox.text}
            value={checkbox.value}
            checked={checkbox.checked}
          />
        );
      })}
    </div>
  );
}
export default CheckBoxGroupFunction;
