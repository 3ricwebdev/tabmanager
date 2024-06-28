// import styles from "./App.module.css";
import TabMenu from "./components/tabMenu/tabMenu";
import TabContainer from "./components/tabContainer/tabContainer";
import { TabMenuContextProvider } from "./contexts/tabMenuContext";
function App() {
  return (
    <>
      <div>
        <TabMenuContextProvider>
          <TabMenu />
          <TabContainer />
        </TabMenuContextProvider>
      </div>
    </>
  );
}

export default App;
