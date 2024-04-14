import { SetStateAction, useState } from "react";
import { InputHTMLAttributes } from "react";
function TypeFlash() {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);
  const card = [
    {sentence:"The quick brown fox jumped over the lazy dog"},
  ];

  
  var listcard = card.map((element) => (
    <li key={element.id}>{element.name}</li>
  ));

  const handleInput = (event: { target: { value:string; }; }) => {
    setInputValue(event.target.value);
    if (event.target.value === card[index].name) {

      console.log("That's me");

      console.log(event.target.value);
      setIndex(index+1)
      setInputValue("")
      console.log(index)
      console.log(card.length)
      if(index>=card.length-1){
        setIndex(0)
      }
    } else {
      console.log(event.target.value);
    }
  };
  return (
    <div>
      <div>{listcard}</div>
      <div>{card[index].sentence}</div>
      <input value={inputValue} onInput={handleInput}></input>
      
    </div>
  );
}
export default TypeFlash;
