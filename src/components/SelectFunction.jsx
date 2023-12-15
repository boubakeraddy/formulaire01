const SelectFunction = (props) => {
  const handleChange = (event) => {
    console.log("key=" + event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {props.options.map(function (option, index) {
        return (
          <option key={index + 1} value={index + 1}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
export default SelectFunction;
