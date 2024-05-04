import Card from "../components/Card";
import CreateItemModal from "../components/CreateItem";
import { useState } from 'react';

const InventoryTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [data,setData] = useState([
    {
      "name": "Guitar",
      "Purpose": "I aim to cultivate a new skill that will challenge me intellectually and artistically. Learning to play this versatile instrument will be a rewarding process, requiring dedication, patience, and a willingness to step out of my comfort zone. ",
      "Functionality": "Working",
      "QuantityOrdered": "23",
      "OrderedBy": "Me",
      "QuantityPossessed": "16",
      "CurrentLocation": "Lucknow, India",
      "Remarks": "This guitar purchase marks the beginning of an exciting musical journey.",
      "ClubTenure": "123456",
      "OrderedDate": "23 April 2024",
      "LinktoProduct": "123456",
      "InvoiceFolderLink": "123456",
      "TotalPrice": "123456"
    },
  ]);

  const createItem = (newItem) => {
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
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
      </div>
    );
};

export default InventoryTab;