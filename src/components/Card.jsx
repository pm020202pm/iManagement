import React, { useState } from 'react';
import './Card.css';

const Card = ({ item, updateItem, deleteItem}) => {
    const[isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
    {!isExpanded
    ? (
      <div className="card" onClick={()=>setIsExpanded(true)}>
        <div className="col1"><div className="text1">{item.Name}</div></div>
        <LabelText1 label="Ordered Date" value={item.OrderedDate}/>
        <LabelText1 label="Quantity Possessed" value={item.QuantityPossessed}/>
        <LabelText1 label="Current Location" value={item.CurrentLocation}/>
        <LabelText1 label="Total Price" value={"₹ "+item.TotalPrice}/>
        </div>
    ) : (
      <div className='card-expanded'>
        <div className="card" onClick={()=>setIsExpanded(false)}>
        <div className="col1"><div className="text1">{item.Name}</div></div>
        <LabelText1 label="Ordered Date" value={item.OrderedDate}/>
        <LabelText1 label="Quantity Possessed" value={item.QuantityPossessed}/>
        <LabelText1 label="Current Location" value={item.CurrentLocation}/>
        <LabelText1 label="Total Price" value={"₹ "+item.TotalPrice}/>
      </div>
        <div className="col5">
            <LabelText2 label="Ordered By" value={item.OrderedBy}/>
            <LabelText2 label="Purpose" value={item.Purpose}/>
            <LabelText2 label="Link To Product" value={item.LinkToProduct}/>
            <LabelText2 label="Invoice Folder Link" value={item.InvoiceFolderLink}/>
            <LabelText2 label="Functionality" value={item.Functionality}/>
            <LabelText2 label="Remarks" value={item.Remarks}/>
            <button className="delete-button" onClick={deleteItem}>Delete</button>
            <button className="update-button" onClick={updateItem}>Update</button>
        </div>
      </div>
    )}
    </div>
  )
};

export default Card;

export const LabelText1 = ({label, value}) => {
    return (
        <>
        <div className="vline"></div>
        <div className="col4">
            <div className="text1">{label}</div>
            <div className="text2">{value}</div>
        </div>
        </>
    )
}

export const LabelText2 = ({label, value}) => {
    return (
        <div className="col5">
            <div className="text1">{label}</div>
            <div className="text2">{value}</div>
        </div>
    )
}