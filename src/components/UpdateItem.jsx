import React, { useState} from 'react';
import './UpdateItem.css';
const UpdateItemModal = ({ onClose, oldItem, createItem, updateItem, isUpdating}) => {
  const [productName, setProductName] = useState(isUpdating ? oldItem.Name : '');
  const [selectedType, setSelectedType] = useState(isUpdating ? oldItem.Type : "Inventory");
  const [purpose, setPurpose] = useState(isUpdating ? oldItem.Purpose : '');
  const [selectedFunctionality, setSelectedFunctionality] = useState(isUpdating? oldItem.Functionality : "Working/OK");
  const [quantityPossessed, setQuantityPossessed] = useState(isUpdating ? oldItem.QuantityPossessed : '');
  const [currentLocation, setCurrentLocation] = useState(isUpdating ? oldItem.CurrentLocation : '');
  const [remarks, setRemarks] = useState(isUpdating ? oldItem.Remarks : '');
  const [clubTenure, setClubTenure] = useState(isUpdating ? oldItem.ClubTenure : '');
  const [linkToSGForm, setLinkToSGForm] = useState(isUpdating ? oldItem.LinkToSGForm : '');
  const [orderedBy, setOrderedBy] = useState(isUpdating ? oldItem.OrderedBy : '');
  const [linkToProduct, setLinkToProduct] = useState(isUpdating ? oldItem.LinktoProduct : '');
  const [invoiceFolderLink, setInvoiceFolderLink] = useState(isUpdating ? oldItem.InvoiceFolderLink : '');
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
        <div className="form-group">
          <label htmlFor="productName">Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <input
            type="text"
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="quantityPossessed">Quantity Possessed</label>
            <input
              type="number"
              id="quantityPossessed"
              value={quantityPossessed}
              onChange={(e) => setQuantityPossessed(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentLocation">Current Location</label>
            <input
              type="text"
              id="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="orderedBy">Ordered By</label>
            <input
              type="text"
              id="orderedBy"
              value={orderedBy}
              onChange={(e) => setOrderedBy(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkToProduct">Link to Product</label>
            <input
              type="text"
              id="linkToProduct"
              value={linkToProduct}
              onChange={(e) => setLinkToProduct(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="remarks">Remarks</label>
            <input
              type="text"
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clubTenure">Club Tenure</label>
            <input
              type="text"
              id="clubTenure"
              value={clubTenure}
              onChange={(e) => setClubTenure(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="linkToSGForm">Link to SG Form</label>
            <input
              type="text"
              id="linkToSGForm"
              value={linkToSGForm}
              onChange={(e) => setLinkToSGForm(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="invoiceFolderLink">Invoice Folder Link</label>
            <input
              type="text"
              id="invoiceFolderLink"
              value={invoiceFolderLink}
              onChange={(e) => setInvoiceFolderLink(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="totalPrice">Total Price</label>
            <input
              type="number"
              id="totalPrice"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {type.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="functionality">Functionality</label>
            <select id="functionality" value={selectedFunctionality} onChange={(e) => setSelectedFunctionality(e.target.value)}
            >
              {functionality.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="modal-actions">
          {isUpdating ? (
            <button
              className="create-item-btn"
              onClick={() => updateItem(oldItem, newItem)}
            >
              Update
            </button>
          ) : (
            <button
              className="create-item-btn"
              onClick={() => createItem(newItem)}
            >
              Create
            </button>
          )}
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UpdateItemModal;