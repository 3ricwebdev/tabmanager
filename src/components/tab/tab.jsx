import { useContext } from "react";
import styles from "./tab.module.css";
import PropTypes from "prop-types";
import { TabMenuContext } from "../../contexts/tabMenuContext";

export default function Tab({ id, url, title, action }) {
  const { setItemsLsLength } = useContext(TabMenuContext);
  function removeTab(event) {
    event.preventDefault();
    let itemsFromLs = JSON.parse(localStorage.getItem("tabs"));
    let itemsCollection = itemsFromLs.filter((item) => item.id != id);
    localStorage.setItem("tabs", JSON.stringify(itemsCollection));
    setItemsLsLength(itemsFromLs.length);
    action(itemsCollection);
  }
  return (
    <a href={url} className={styles.tab} target="_blank">
      <div className={styles.reset}>⚙️</div>
      <div className={styles.remove} onClick={removeTab}>
        🗑️
      </div>
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
}

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
};
