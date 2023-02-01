import React from "react";
import "../index.css";

export default function Meme() {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value, type } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((obj) => setAllMemes(obj.data.memes));
  }, []);

  function handleClick() {
    const random = Math.round(Math.random() * allMemes.length, 0);
    const url = allMemes[random].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  return (
    <div className="main-container">
      <div className="form-container" action="">
        <div className="input-txt-container">
          <input
            placeholder="top text"
            className="input-text-top input-txt-boxes"
            type="text"
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input
            placeholder="bottom text"
            className="input-text-bot input-txt-boxes"
            type="text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={handleClick} className="submit-btn" type="submit">
          Get a new meme image 🖼️
          <img src="" alt="" />
        </button>
      </div>
      <div className="img-container">
        <img className="meme-img" src={meme.randomImage} alt="meme" />
        <p className="meme-text meme-text-top">{meme.topText}</p>
        <p className="meme-text meme-text-bot">{meme.bottomText}</p>
      </div>
    </div>
  );
}
