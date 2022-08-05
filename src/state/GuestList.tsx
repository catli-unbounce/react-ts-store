import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  //TS infers type based on the default value.
  //Here, we must explicity define the array as an array of strings
  //Otherwise, it's going to think the array will always be empty
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
