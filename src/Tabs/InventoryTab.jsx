import Card from "../components/Card";
import CreateItemModal from "../components/CreateItem";
import { useEffect, useState } from 'react';
import { addItemToInventory, deleteItemFromInventory, getInventory, updateItemInInventory } from "../firebase/utils";
import { set } from "firebase/database";

const InventoryTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [data,setData] = useState([]);
  const [isUpdating,setIsUpdating] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const Clubs= ["Programming Club", "Film Club", "Music Club"];

  useEffect(() => {
    const initData = async () => {
      const inventory = await getInventory(Clubs[selectedOption]);
      setData(inventory);
    }
    initData();
  }, [selectedOption]);

  const createItem = (newItem) => {
    addItemToInventory(Clubs[selectedOption], newItem);
    setData([...data, newItem]);
    setShowModal(false);
  };
  const deleteItem = async (uid, item) => {
    // console.log(uid,item);
    await deleteItemFromInventory(uid,item);
    setData(data.filter(i => i !== item));
  };

  const updateItem = async (uid, oldItem, newItem) => {
    setIsUpdating(true);
    setShowModal(true);
    // await updateItemInInventory(uid, oldItem, newItem);
    // setData(data.map(i => i === oldItem ? newItem : i));
  };
    return (
      <div className="inventory-tab">
      <div className='header'>
      <div className='heading'>Inventory</div>
      <div className="dropdown">
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value={Clubs[0]}>{Clubs[0]}</option>
          <option value={Clubs[1]}>{Clubs[1]}</option>
          <option value={Clubs[2]}>{Clubs[2]}</option>
      </select>
      </div>
      <button className="add-button" onClick={()=>setShowModal(true)}>Add Item</button>  
      </div>
      {showModal && (<CreateItemModal onClose={() => setShowModal(false)} createItem={(isUpdating)? updateItem: createItem}/>)}
      <div className="item-list"> 
      {data.length !==0 && data.map((item, index) => (
        <Card 
        key={index} 
        uid={selectedOption}
        item={item} 
        uid={Clubs[selectedOption]}
        deleteItem={() => deleteItem(Clubs[selectedOption], item)}
        updateItem={(newItem) => updateItem(Clubs[selectedOption], item, newItem)}
        />
      ))}
    </div>
      </div>
    );
};

export default InventoryTab;