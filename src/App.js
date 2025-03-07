import "./App.css";
import { motion } from "framer-motion";

import Item from "./components/NavItem";
import { useState } from "react";
import HomeTab from "./Tabs/HomeTab";
import InventoryTab from "./Tabs/InventoryTab";
import FeedbackTab from "./Tabs/FeedbackTab";
import AboutTab from "./Tabs/AboutTab";
function App() {
  const [index, setIndex] = useState(0);

  const tabs =[
    <HomeTab/>,
    <InventoryTab/>,
    <FeedbackTab/>,
    <AboutTab/>
  ]

  return (
    <div className="App">
      <motion.div className="sidebar_container">
          <div className="groups">
            <Item name="Dashboard" onClick={()=>setIndex(0)} />
            <Item name="Inventory" onClick={()=>setIndex(1)}/>
            <Item name="Feedback" onClick={()=>setIndex(2)}/>
            <Item name="About" onClick={()=>setIndex(3)}/>
          </div>
      </motion.div>
      <div className="body_container">{tabs[index]}</div>
    </div>
  );
}

export default App;
