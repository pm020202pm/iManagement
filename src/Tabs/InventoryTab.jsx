import Card from "../components/Card";
import { useEffect, useState } from 'react';
import { addItemToInventory, deleteItemFromInventory, getInventory, updateItemInInventory } from "../firebase/utils";
import UpdateItemModal from "../components/UpdateItem";
const InventoryTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [data,setData] = useState([]);
  const [isUpdating,setIsUpdating] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Programming Club");
  const [oldItem, setOldItem] = useState();
  const Clubs= ["Programming Club", "Film Club", "Music Club"];

  useEffect(() => {
    console.log("selectedOption:", selectedOption);
    const initData = async () => {
      const inventory = await getInventory(selectedOption);
      console.log("inventory:", inventory)
      setData(inventory);
    }
    initData();
  }, [selectedOption]);

  const createItem = (newItem) => {
    addItemToInventory(selectedOption, newItem);
    setData([...data, newItem]);
    setShowModal(false);
  };

  const deleteItem = async (uid, item) => {
    await deleteItemFromInventory(uid,item);
    setData(data.filter(i => i !== item));
  };


  const handleUpdateItem = async (item) => {
    setOldItem(item);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleUpdate = async (oldItem, newItem) => {
    try {
      updateItemInInventory(selectedOption, oldItem, newItem);
      setData(data.map(i => i === oldItem ? newItem : i));
      setShowModal(false);
      setIsUpdating(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleCreateItem = () => {
    setShowModal(true);
    console.log('showModal:', showModal);
  }


  const handleCloseModal=()=>{
    setShowModal(false);
    setIsUpdating(false);
  }
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
      </div><button className="add-button" onClick={()=>handleCreateItem()}>Add Item</button></div>
      <div className="item-list"> 
      {data.map((item, index) => (
        (<div>
        <Card item={item} updateItem={() => handleUpdateItem(item)} deleteItem={() => deleteItem(selectedOption, item)}/>
        {showModal && isUpdating &&
         <UpdateItemModal onClose={()=>handleCloseModal()} oldItem={oldItem} isUpdating={isUpdating} createItem={createItem} updateItem={handleUpdate}/>
        }
        </div>
        )
      ))}
      {showModal && !isUpdating &&
         <UpdateItemModal onClose={()=>handleCloseModal()} isUpdating={isUpdating} createItem={createItem} updateItem={handleUpdate}/>
      }
      </div>
      </div>
    );
};

export default InventoryTab;