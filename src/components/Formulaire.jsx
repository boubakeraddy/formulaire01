function Formulaire() {
  return (
    <form>
      <label>
        Nom :
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default Formulaire;
