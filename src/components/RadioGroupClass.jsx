import React from "react";
class RadioGroupClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {" "}
        {this.props.radios.map((radio, index) => {
          return (
            <label key={index}>
              <input type="radio" value={radio.value} name="radioname1" />
              <span>{radio.text}</span>
            </label>
          );
        })}
      </div>
    );
  }
}
export default RadioGroupClass;
