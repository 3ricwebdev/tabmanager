import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const TabMenuContext = createContext();
export const TabMenuContextProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const [inputValues, setInputValues] = useState({ url: "", title: "" });
  const [itemsLsLength, setItemsLsLength] = useState();
  return (
    <TabMenuContext.Provider
      value={{
        menuState,
        setMenuState,
        inputValues,
        setInputValues,
        itemsLsLength,
        setItemsLsLength,
      }}
    >
      {children}
    </TabMenuContext.Provider>
  );
};
TabMenuContextProvider.propTypes = {
  children: PropTypes.array,
};
