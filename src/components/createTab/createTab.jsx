import styles from "./createTab.module.css";
import PropTypes from "prop-types";
import { TabMenuContext } from "../../contexts/tabMenuContext";
import { useContext } from "react";
export default function CreateTab() {
  const { setMenuState, setInputValues } = useContext(TabMenuContext);

  const openMenu = () => {
    setMenuState(true);
    setInputValues({ url: "", title: "" });
  };
  return (
    <div onClick={openMenu} className={styles.tab}>
      <h2 className={styles.title}></h2>+
    </div>
  );
}

CreateTab.propTypes = {
  // url: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  action: PropTypes.func,
};
