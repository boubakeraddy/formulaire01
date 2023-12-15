import { useState } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import NameFormFunction from "./components/NameFormFunction";
import NameFormClass from "./components/NameFormClass";
import TextAreaFunction from "./components/TextAreaFunction";
import TextAreaClass from "./components/TextAreaClass";
import SelectFunction from "./components/SelectFunction";
import SelectClass from "./components/SelectClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>Formulaire simple</h4>
      <Formulaire />
      <hr />
      <h4>Formulaire sous forme de composant contrôlé</h4>
      <h5>Formulaire NameFormFunction</h5>
      <NameFormFunction />
      <hr />
      <h4>Formulaire sous forme de composant contrôlé</h4>
      <h5>Formulaire NameFormClass</h5>
      <NameFormClass />
      <hr />
      <h4>
        Composant fonctionnel <i>TextArea</i>
      </h4>
      <TextAreaFunction cols={40} rows={10} value="Cliquez ici" />
      <hr />
      <h4>
        Composant de classe <i>TextArea</i>
      </h4>
      <TextAreaClass cols={40} rows={10} value="Cliquez ici" />
      <hr />
      <h4>Les listes de sélection (Fonctionnel)</h4>
      <SelectFunction
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
      />
      <hr />
      <h4>Les listes de sélection (Class)</h4>
      <SelectClass
        defaultValue={4}
        options={["Option 1", "Option 2", "Option 3", "Option 4"]}
      />
      <hr />
    </>
  );
}

export default App;
