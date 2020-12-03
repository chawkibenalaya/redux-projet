import React, { useState } from "react";
import { connect } from "react-redux";
import reducer from "../Reducers/reducer";
import { addVoiture } from "../action/action";
function AjoutVoiture({ add }) {
  const [text, setText] = useState({});
  const [name, setName] = useState("");
  const [puissance, setPuissance] = useState("");
  const [description, setDescription] = useState("");
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const puissanceChange = (e) => {
    setPuissance(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
    setText({
      name,
      puissance,
      description,
    });
    console.log(text);
  };
  const handleSubmit = () => {
    console.log(text);
    add({ name, puissance, description });
  };
  return (
    <div className="container">
      <h1>Ajout voiture</h1>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => nameChange(e)}
        />
        <br />
        <input
          type="text"
          id="puissance"
          value={puissance}
          onChange={(e) => puissanceChange(e)}
        />
        <br />
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => descriptionChange(e)}
        />
        <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { add: (text) => dispatch(addVoiture(text)) };
};
export default connect(null, mapDispatchToProps)(AjoutVoiture);
