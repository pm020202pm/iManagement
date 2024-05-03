import DashboardStats from "../DashboardStats";
import ItemList from "../ItemList";

const InventoryTab = () => {
    return (
        <div>
        <div className='header'>
      <div className='heading'>Inventory</div>
      <button className="add-button">Add Item</button>  
      </div>
      <DashboardStats />
      <ItemList/>
        </div>
    );
};

export default InventoryTab;