import { SetStateAction, useState } from "react";

function MyCard() {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);
  const card = [
    { name: "Hydrogen", formula: "H", id: 1 },
    { name: "Helium", formula: "He", id: 2 },
    { name: "Lithium", formula: "Li", id: 3 },
  ];
  var listcard = card.map((element) => (
    <li key={element.id}>{element.name}</li>
  ));

  const [num, setnum] = useState(0);
  function handleClick() {
    setnum(num + 1);
  }
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <button onClick={handleClick}>{num}</button>
      <div>{card[index].formula}</div>
      <input value={inputValue} onInput={handleInput}></input>
      <p>---------</p>
    </div>
    
  );
}
export default MyCard;
