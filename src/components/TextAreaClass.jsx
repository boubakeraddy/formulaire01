import React from "react";
class TextAreaClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: props.value };
  }
  handlerChange(event) {
    this.setState({ message: event.target.value });
  }
  handlerFocus(event) {
    this.setState({ message: "" });
  }
  render() {
    return (
      <textarea
        cols={this.props.cols}
        rows={this.props.rows}
        value={this.state.message}
        onFocus={this.handlerFocus.bind(this)}
        onChange={this.handlerChange.bind(this)}
      />
    );
  }
}
export default TextAreaClass;
