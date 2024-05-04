import React, { useState, useRef } from 'react';
import './CreateItem.css';

const CreateItemModal = ({ onClose, createItem}) => {
  const [productName, setProductName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [quantityOrdered, setQuantityOrdered] = useState('');
  const [orderedBy, setOrderedBy] = useState('');
  const [linkToProduct, setLinkToProduct] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const newItem = {
    "name": productName,
    "Purpose": purpose,
    "Functionality": "Working",
    "QuantityOrdered": quantityOrdered,
    "OrderedBy": orderedBy,
    "QuantityPossessed": "0",
    "CurrentLocation": "--",
    "Remarks": "--",
    "ClubTenure": "123456",
    "OrderedDate": new Date(Date.now()).getDate() + " " + months[new Date(Date.now()).getMonth()] + " " + new Date(Date.now()).getFullYear()  ,
    "LinktoProduct": linkToProduct,
    "InvoiceFolderLink": "123456",
    "TotalPrice": totalPrice,
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
          <label htmlFor="label">Quantity</label>
          <input type="text" id="quantityOrdered" value={quantityOrdered} onChange={(e) => setQuantityOrdered(e.target.value)}/>
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
        
        <div className="modal-actions">
          {
            productName === '' || purpose === '' || quantityOrdered === '' || orderedBy === '' || linkToProduct === '' || totalPrice === '' ? null : <button className="create-item-btn" onClick={()=>createItem(newItem)}>Done</button>
          }
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateItemModal;