import { useState } from "react";

const NameFormFunction = () => {
  const [nom, setNom] = useState("");
  const handleChange = (event) => {
    setNom(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Le nom a été soumis : " + nom);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" name="nom" value={nom} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
export default NameFormFunction;
