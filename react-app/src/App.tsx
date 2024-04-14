import ListGroup  from "./components/ListGroup";
import MyButton from "./components/Button";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0)
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const handleSelectItem = (item: string) => {
    console.log('Selected item:', item);
  };
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div className="App">
      <ListGroup
        items={['Item 1', 'Item 2', 'Item 3']}
        heading="Example List Group"
        onSelectItem={handleSelectItem}
      />
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}

export default App;
