import "./styles.css";
import { useState } from "react";
var emojiDictionary = {
  "😀": "Smiling",
  "😅 ": "Face with Sweat",
  "😑": "Sad",
  "🧠": "Brain",
  "👶": "Baby",
  "❤️": "heart"
};
var emojiweKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");
  function emojiClickHandle(emoji) {
    var userInput = emoji;
    var meaning = emojiDictionary[userInput];
    setmeaning(meaning);
  }
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "😅 we don't have it in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input placeholder="Enter emoji" onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji we know</h3>
      {emojiweKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandle(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
