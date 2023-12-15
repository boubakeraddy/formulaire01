import React from "react";
class SelectClass extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerChange(event) {
    console.log("key=" + event.target.value);
  }

  render() {
    return (
      <select
        onChange={this.handlerChange.bind(this)}
        defaultValue={this.props.defaultValue}
      >
        {this.props.options.map(function (option, index) {
          return (
            <option key={index + 1} value={index + 1}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }
}
export default SelectClass;
