import "./Title.css";
import { useContext } from "react";
import { textContext } from "../../../contexts/text-context";

function Title() {
  const { text, setText } = useContext(textContext);
  return (
    <div className="title">
      <h1>Title</h1>
      <span>{text}</span>
      <button onClick={() => setText("new value")}>change text</button>
    </div>
  );
}

export default Title;
