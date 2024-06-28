import styles from "./tabContainer.module.css";
import Tab from "../tab/tab";
import CreateTab from "../createTab/createTab";
import { useContext, useEffect, useState } from "react";
import { TabMenuContext } from "../../contexts/tabMenuContext";

export default function TabContainer() {
  let itemsFromLs = JSON.parse(localStorage.getItem("tabs"));
  if (itemsFromLs.length < 1) itemsFromLs = null;
  const [items, setItems] = useState(itemsFromLs);
  const handleChanges = (tabs) => {
    setItems(tabs);
  };
  const { itemsLsLength } = useContext(TabMenuContext);

  useEffect(() => {
    setItems(itemsFromLs);
  }, [itemsLsLength]);

  return (
    <div className={styles.tab_wrapper}>
      {items
        ? items.map((tab) => {
            return (
              <Tab
                key={tab.id}
                id={tab.id}
                url={tab.url}
                title={tab.title}
                action={handleChanges}
              />
            );
          })
        : null}

      <CreateTab />
    </div>
  );
}
