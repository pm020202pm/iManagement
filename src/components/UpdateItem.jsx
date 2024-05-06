import React, { useState, useRef } from 'react';
import './UpdateItem.css';
import { updateItemInInventory } from '../firebase/utils';

const UpdateItemModal = ({ onClose, oldItem,uid, updateItem}) => {
  const [productName, setProductName] = useState(oldItem.Name);
  const [selectedType, setSelectedType] = useState(0);
  const [purpose, setPurpose] = useState(oldItem.Purpose);
  const [selectedFunctionality, setSelectedFunctionality] = useState(0);
  const [quantityPossessed, setQuantityPossessed] = useState(oldItem.QuantityPossessed);
  const [currentLocation, setCurrentLocation] = useState(oldItem.CurrentLocation);
  const [remarks, setRemarks] = useState(oldItem.Remarks);
  const [clubTenure, setClubTenure] = useState(oldItem.ClubTenure);
  const [linkToSGForm, setLinkToSGForm] = useState(oldItem.LinkToSGForm);
  const [orderedBy, setOrderedBy] = useState( oldItem.OrderedBy);
  const [linkToProduct, setLinkToProduct] = useState(oldItem.LinktoProduct);
  const [invoiceFolderLink, setInvoiceFolderLink] = useState( oldItem.InvoiceFolderLink);
  const [totalPrice, setTotalPrice] = useState(oldItem.TotalPrice);

  const type= ["Inventory", "Consumable", "Written Off","Check Remarks"];
  const functionality= ["Working/OK", "Missing", "Damaged", "Check Remarks"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const newItem = {
    "Name": productName,
    "Type": type[selectedType],
    "Purpose": purpose,
    "Functionality": functionality[selectedFunctionality],
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
        <h2>Add Inventory Details</h2>
        <div className="form-group">
          <label htmlFor="label">Product Name</label>
          <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="label">Purpose</label>
          <input type="text" id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="label">Quantity Possessed</label>
          <input type="text" id="quantityOrdered" value={quantityPossessed} onChange={(e) => setQuantityPossessed(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="label">Ordered By</label>
          <input type="text" id="orderedBy" value={orderedBy} onChange={(e) => setOrderedBy(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="label">Link to Product</label>
          <input type="text" id="linkToProduct" value={linkToProduct} onChange={(e) => setLinkToProduct(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="label">Total Price</label>
          <input type="text" id="totalPrice" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)}/>
        </div>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value={type[0]}>{type[0]}</option>
          <option value={type[1]}>{type[1]}</option>
          <option value={type[2]}>{type[2]}</option>
      </select>
      <select value={selectedFunctionality} onChange={(e) => setSelectedFunctionality(e.target.value)}>
          <option value={functionality[0]}>{functionality[0]}</option>
          <option value={functionality[1]}>{functionality[1]}</option>
          <option value={functionality[2]}>{functionality[2]}</option>
      </select>
        
        <div className="modal-actions">
          {
            productName === '' || purpose === '' || quantityPossessed === '' || orderedBy === '' || linkToProduct === '' || totalPrice === '' ? null : <button className="create-item-btn" onClick={()=>updateItem(uid,oldItem, newItem)}>Done</button>
          }
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateItemModal;