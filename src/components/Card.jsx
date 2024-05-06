import React, { useState } from 'react';
import './Card.css';
import UpdateItemModal from './UpdateItem';
const Card = ({item, uid,deleteItem, updateItem}) => {
    const [expanded, setExpanded] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);  
    const handleUpdateItemModal=()=>{
        setExpanded(false);
        setIsUpdating(false);
    }
    return (
        <div>
            
            {expanded ? (
                <div className="card" onClick={() => setExpanded(!expanded)}>
                    <div className="col1">
                        <div className="text1">{item.Name}</div>
                    </div>
                    <div className="vline"></div>
                    <div className="col4">
                        <div className="text1">Quantity Ordered</div>
                        <div className="text2">{item['QuantityOrdered']}</div>
                    </div>
                    <div className="vline"></div>
                    <div className="col4">
                        <div className="text1">Ordered Date</div>
                        <div className="text2">{item['OrderedDate']}</div>
                    </div>
                    <div className="vline"></div>
                    <div className="col4">
                        <div className="text1">Quantity Possessed</div>
                        <div className="text2">{item['QuantityPossessed']}</div>
                    </div>
                    <div className="vline"></div>
                    <div className="col4">
                        <div className="text1">Current Location</div>
                        <div className="text2">{item['CurrentLocation']}</div>
                    </div>
                    <div className="vline"></div>
                    <div className="col4">
                        <div className="text1">Total Price</div>
                        <div className="text2">₹ {item['TotalPrice']}</div>
                    </div>
                </div>)
                :
                (!isUpdating ?
                    (

                    <div className='card-expanded'>
                        <div className="card" onClick={() => setExpanded(!expanded)}>
                            <div className="col1">
                                <div className="text1">{item.Name}</div>
                            </div>
                            <div className="vline"></div>
                            <div className="col4">
                                <div className="text1">Quantity Ordered</div>
                                <div className="text2">{item['QuantityOrdered']}</div>
                            </div>
                            <div className="vline"></div>
                            <div className="col4">
                                <div className="text1">Ordered Date</div>
                                <div className="text2">{item['OrderedDate']}</div>
                            </div>
                            <div className="vline"></div>
                            <div className="col4">
                                <div className="text1">Quantity Possessed</div>
                                <div className="text2">{item['QuantityPossessed']}</div>
                            </div>
                            <div className="col4">
                                <div className="text1">Current Location</div>
                                <div className="text2">{item['CurrentLocation']}</div>
                            </div>
                            <div className="vline"></div>
                            <div className="col4">
                                <div className="text1">Total Price</div>
                                <div className="text2">₹ {item['TotalPrice']}</div>
                            </div>
                        </div>
                        <div className="col5">
                        <div className="col5">
                                <div className="text1">OrderedBy : </div>
                                <div className="text2">{item.OrderedBy}</div>
                            </div>
                        <div className="col5">
                                <div className="text1">Purpose : </div>
                                <div className="text2">{item.Purpose}</div>
                            </div>
                            <div className="col5">
                                <div className="text1">Link To Product : </div>
                                <div className="text2">{item.LinkToProduct}</div>
                            </div>
                            <div className="col5">
                                <div className="text1">Invoice Folder Link : </div>
                                <div className="text2">{item.InvoiceFolderLink}</div>
                            </div>
                            <div className="col5">
                                <div className="text1">Functionality : </div>
                                <div className="text2">{item.Functionality}</div>
                            </div>
                            <div className="col5">
                                <div className="text1">Remarks :</div>
                                <div className="text2">{item.Remarks}</div>
                            </div>
                            <button className="delete-button" onClick={deleteItem}>Delete</button>
                            <button className="update-button" onClick={()=>setIsUpdating(true)}>Update</button>
                            </div>

                    </div>
                ):(
                    <UpdateItemModal onClose={() => handleUpdateItemModal()} oldItem={item} updateItem={updateItem} uid={uid}/>
                ))
            }
        </div>
    );
};

export default Card;