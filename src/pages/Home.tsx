import { useContext } from "react";
import { UserContext } from "../UserContext";
import { ChildAsFC } from "../props/Child";
import GuestList from "../state/GuestList";

export function Home() {
  // const { msg, setMsg } = useContext(UserContext);
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        This is the child
      </ChildAsFC>

      <GuestList></GuestList>
    </div>
  );
}
