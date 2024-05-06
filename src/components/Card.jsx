import React, { useState } from 'react';
import './Card.css';
const Card = ({ item }) => {
    const [expanded, setExpanded] = useState(true);
    const toggleExpand = () => {
        setExpanded(!expanded);
        console.log(expanded);
    };

    return (
        <div>
            {expanded ? (
                <div className="card" onClick={() => toggleExpand()}>
                    <div className="col1">
                        <div className="text1">{item.name}</div>
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
                (

                    <div className='card-expanded'>
                        <div className="card" onClick={() => toggleExpand()}>
                            <div className="col1">
                                <div className="text1">{item.name}</div>
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
                            </div>

                    </div>
                )}
        </div>
    );
};

export default Card;