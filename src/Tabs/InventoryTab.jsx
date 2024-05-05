import Card from "../components/Card";
import CreateItemModal from "../components/CreateItem";
import { useEffect, useState } from 'react';
import { addItemToInventory, getInventory } from "../firebase/utils";

const InventoryTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [data,setData] = useState([]);

  useEffect(() => {
    const initData = async () => {
      const inventory = await getInventory();
      console.log(inventory);
      setData(inventory);
    }

    initData();
  }, []);

  const createItem = (newItem) => {
    addItemToInventory(newItem);
    setData([...data, newItem]);
    setShowModal(false);
  };
    return (
      <div>
      <div className='header'>
      <div className='heading'>Inventory</div>
      <button className="add-button" onClick={()=>setShowModal(true)}>Add Item</button>  
      </div>
      {showModal && (
      <CreateItemModal onClose={() => setShowModal(false)} createItem={createItem}/>)}
      <div>
      {data.length !==0 && data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
      </div>
    );
};

export default InventoryTab;