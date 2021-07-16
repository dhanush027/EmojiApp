import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

import "./styles.css";
const color = "green";
const dispColor = "blue";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍐": "Pear",
  "🍌": "Banana",
  "🍫": "Cholocate",
  "🍓": "Strawberry",
  "🥝": "Kivi",
  "🥭": "Mango",
  "🍍": "Pineapple",
  "🥞": "Pancake",
  "🍨": "Ice Cream",
  "🍹": "Tropical Drink",
  "🥤": "Milkshake",
  "🍟": "French Fries",
  "🍿": "Popcorn",
  "🥪": "Sandwich",
  "🥗": "Green Salad",
  "🧁": "Cupcake",
  "🍦": "Soft Icecream",
  "🌮": "Taco",
  "🥘": "Shallow pan of food",
  "🍕": "Pizza",
  "🍋": "Lemon",
  "🌭": "Hotdog",
  "🍔": "Hamburger",
  "🍒": "Cherries",
  "🥫": "Canned Food",
  "🧈": "Butter",
  "🍚": "Cooked Rice",
  "🍯": "Honey Pot",
  "🍪": "Cookie"
};
var emojiMeaning = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState(""); //hooks can only be called in the function bodu
  function changeHandler(event) {
    meaning = event.target.value;
    if (meaning in emojiDictionary) {
      setMeaning(emojiDictionary[meaning]);
      console.log(meaning);
    } else {
      meaning = "We don't have this in our DataBase";
      setMeaning(meaning);
    }
  }
  function onclickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: color }}>Emoji Interpreter</h1>
      <h2>A simple and quick method to know the right emoji !</h2>
      <input
        style={{
          padding: "1rem",
          height: "0.2rem",
          borderRadius: "1rem",
          outline: "none"
        }}
        onChange={changeHandler}
      />
      <div style={{ fontSize: "larger", color: dispColor }}>{meaning}</div>
      <h3>Click on any emoji or paste it in search bar to see it's meaning</h3>
      <div
        style={{
          border: "1px solid blue",
          borderRadius: "1rem",
          backgroundColor: "#E0E7FF",
          maxWidth: "800px",
          margin: "auto"
        }}
      >
        {emojiMeaning.map((emoji) => {
          return (
            <span
              onClick={() => onclickHandler(emoji)}
              style={{
                cursor: "pointer",
                padding: "2rem",
                fontSize: "2.5rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
