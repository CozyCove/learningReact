interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
import { MouseEvent, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active slashed-text"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul> 
    </>
  );
}

export default ListGroup;
