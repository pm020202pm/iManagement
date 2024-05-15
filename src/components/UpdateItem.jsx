import React, { useState} from 'react';
import './UpdateItem.css';
const UpdateItemModal = ({ onClose, oldItem, createItem, updateItem, isUpdating}) => {
  const [productName, setProductName] = useState(isUpdating ? oldItem.Name : '');
  const [selectedType, setSelectedType] = useState(isUpdating ? oldItem.Type : "Inventory");
  const [purpose, setPurpose] = useState(isUpdating ? oldItem.Purpose : '--');
  const [selectedFunctionality, setSelectedFunctionality] = useState(isUpdating? oldItem.Functionality : "Working/OK");
  const [quantityPossessed, setQuantityPossessed] = useState(isUpdating ? oldItem.QuantityPossessed : '');
  const [currentLocation, setCurrentLocation] = useState(isUpdating ? oldItem.CurrentLocation : '');
  const [remarks, setRemarks] = useState(isUpdating ? oldItem.Remarks : '--');
  const [clubTenure, setClubTenure] = useState(isUpdating ? oldItem.ClubTenure : '--');
  const [linkToSGForm, setLinkToSGForm] = useState(isUpdating ? oldItem.LinkToSGForm : '--');
  const [orderedBy, setOrderedBy] = useState(isUpdating ? oldItem.OrderedBy : '');
  const [linkToProduct, setLinkToProduct] = useState(isUpdating ? oldItem.LinktoProduct : '--');
  const [invoiceFolderLink, setInvoiceFolderLink] = useState(isUpdating ? oldItem.InvoiceFolderLink : '--');
  const [totalPrice, setTotalPrice] = useState(isUpdating ? oldItem.TotalPrice : '');

  const type= ["Inventory", "Consumable", "Written Off","Check Remarks"];
  const functionality= ["Working/OK", "Missing", "Damaged", "Check Remarks"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const newItem = {
    "Name": productName,
    "Type": selectedType,
    "Purpose": purpose,
    "Functionality": selectedFunctionality,
    "QuantityPossessed": quantityPossessed,
    "CurrentLocation": currentLocation,
    "Remarks": remarks,
    "ClubTenure": clubTenure,
    "LinkToSGForm": linkToSGForm,
    "OrderedBy": orderedBy,
    "LinktoProduct": linkToProduct,
    "InvoiceFolderLink": invoiceFolderLink,
    "TotalPrice": totalPrice,
    "OrderedDate": new Date(Date.now()).getDate() + " " + months[new Date(Date.now()).getMonth()] + " " + new Date(Date.now()).getFullYear()  ,
  };

  return (
    <div className="modal">
    <div className="modal-content">
      <h2>{isUpdating ? 'Update Item' : 'Add Item'}</h2>
      <form>
        <TextFields label="Name" value={productName} onChange={setProductName}/>
        <TextFields label="Purpose" value={purpose} onChange={setPurpose}/> 
        <div className="form-row">
          <TextFields type="number" label="Quantity Possessed" value={quantityPossessed} onChange={setQuantityPossessed}/>
          <TextFields label="Current Location" value={currentLocation} onChange={setCurrentLocation}/>
        </div>
        <div className="form-row">
          <TextFields label="Ordered By" value={orderedBy} onChange={setOrderedBy}/>
          <TextFields label="Link to Product" value={linkToProduct} onChange={setLinkToProduct}/>
        </div>
        <div className="form-row">
          <TextFields label="Remarks" value={remarks} onChange={setRemarks}/>
          <TextFields label="Club Tenure" value={clubTenure} onChange={setClubTenure}/>
        </div>
        <div className="form-row">
          <TextFields label="Link to SG Form" value={linkToSGForm} onChange={setLinkToSGForm}/>
          <TextFields label="Invoice Folder Link" value={invoiceFolderLink} onChange={setInvoiceFolderLink}/>
        </div>
        <div className="form-row">
          <TextFields type="number" label="Total Price" value={totalPrice} onChange={setTotalPrice}/>
          <SelectFields label="Type" value={selectedType} onChange={setSelectedType} options={type}/>
          <SelectFields label="Functionality" value={selectedFunctionality} onChange={setSelectedFunctionality} options={functionality}/>
        </div>
        <div className="modal-actions">
          {isUpdating ? (
            <button className="create-item-btn" onClick={() => updateItem(oldItem, newItem)}>Update</button>
          ) : (
            <button className="create-item-btn" onClick={() => createItem(newItem)}>Create</button>
          )}
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UpdateItemModal;

export const TextFields = ({type, label, value, onChange}) => {
  
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type || "text"}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export const SelectFields = ({label, value, onChange, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}