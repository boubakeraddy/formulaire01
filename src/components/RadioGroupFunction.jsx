const RadioGroupFunction = (props) => {
  return (
    <div>
      {" "}
      {props.radios.map((radio, index) => {
        return (
          <label key={index + 1}>
            <input type="radio" value={radio.value} name="radioname" />
            <span>{radio.text}</span>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroupFunction;
