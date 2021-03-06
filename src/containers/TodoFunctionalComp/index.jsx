
import React, { useState } from "react";

const initialState = [
  { text: "Learn JavaScript", done: false },
  { text: "Learn React", done: false },
  { text: "Play around in JSFiddle", done: true },
  { text: "Build something awesome", done: true },
  { text: "Build something awesome 1", done: true },
  { text: "Build something awesome 2", done: true },
  { text: "Build something awesome 3", done: true }
];

const numColumns = 3;

const Column = (props) => {
  const { items, num, recordsPerColumn } = props;
  const itemsLength = items.length;
  const firstIndex = (num - 1) * recordsPerColumn;
  let lastIndex = (num * recordsPerColumn) - 1;
  lastIndex = itemsLength < lastIndex ? itemsLength : lastIndex;
  return (
    <div style={{ display: 'inline-block', width: 200, verticalAlign: 'top'}}>
      <ul>
        {items.slice(firstIndex, lastIndex + 1).map(item => (
          <li key={item.id}>
            <label>
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TodoAppColumnWise = () => {
  const [items, setItems] = useState(initialState);
  const recordsPerColumn = Math.ceil(items.length / numColumns);

  const passColumnRecords = () => {
    const columnList = [];
    for (let i = 1; i <= numColumns; i++) {
      columnList.push(<Column items={items} num={i} recordsPerColumn={recordsPerColumn} />);
    }
    console.log(columnList);
    return columnList;
  }

  return (
    <div style={{ padding: 100 }}>
      <h2>Todos:</h2>
      {passColumnRecords()}
    </div>
  );
}

export default TodoAppColumnWise;
