import { useContext, useEffect, useState } from "react";
import styles from "./tabMenu.module.css";
import { TabMenuContext } from "../../contexts/tabMenuContext";
export default function TabMenu() {
  const {
    menuState,
    setMenuState,
    inputValues,
    setInputValues,
    setItemsLsLength,
  } = useContext(TabMenuContext);

  // useEffect(() => {
  //   if (menuState) {
  //     setMenuState(true);
  //     return;
  //   }
  // }, [menuState]);

  const create = () => {
    const itemsFromLs = JSON.parse(localStorage.getItem("tabs"));
    let id;
    !itemsFromLs ? (id = 0) : (id = itemsFromLs.length);
    const { url, title } = inputValues;
    let item = { id, url, title };
    if (!url || !title) return;

    let itemsCollection = [];
    itemsCollection.push(item);

    if (itemsFromLs) itemsFromLs.map((el) => itemsCollection.push(el));

    localStorage.setItem("tabs", JSON.stringify(itemsCollection));
    setItemsLsLength(itemsCollection.length);

    return true;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const ok = () => {
    if (create()) {
      setMenuState(false);
    } else console.log("check input");
  };

  const cancel = () => {
    setMenuState(false);
  };
  return (
    <div className={menuState ? styles.layout : styles.layout_hidden}>
      <div className={styles.tabMenu}>
        <div className={styles.accept} onClick={ok}>
          ✔️
        </div>
        <div className={styles.cancel} onClick={cancel}>
          ❌
        </div>
        <input
          value={inputValues.url}
          type="text"
          className={styles.input}
          placeholder="url"
          name="url"
          onChange={handleChangeInput}
        />
        <input
          value={inputValues.title}
          type="text"
          className={styles.input}
          placeholder="title"
          name="title"
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
}
