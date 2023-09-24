import { useState } from "react";
import Logo from "./Logo";
import {Form} from "./Form";
import PackingList from "./PackingList";
import Stats  from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm( //confirm has ok and cancel
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <>
      <Logo className="app" />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}
