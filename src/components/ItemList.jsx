const ItemList = ()=>{
    let data = [
        {
        "name": "Guitar",
        "Purpose": "I aim to cultivate a new skill that will challenge me intellectually and artistically. Learning to play this versatile instrument will be a rewarding process, requiring dedication, patience, and a willingness to step out of my comfort zone. ",
        "Functionality": "123456",
        "Quantity Ordered": "23",
        "Quantity Possessed": "16",
        "Current Location": "Lucknow, India",
        "Remarks": "This guitar purchase marks the beginning of an exciting musical journey.",
        "Club Tenure": "123456",
        "Ordered Date": "23 April 2024",
        "Link to Product": "123456",
        "Invoice Folder Link": "123456",
        "Total Price": "123456"
      },
      
        {
        "name": "John Doe",
        "Purpose": "I aim to cultivate a new skill that will challenge me intellectually and artistically. Learning to play this versatile instrument will be a rewarding process, requiring dedication, patience, and a willingness to step out of my comfort zone. ",
        "Functionality": "156",
        "Quantity Ordered": "123456",
        "Quantity Possessed": "123456",
        "Current Location": "Lucknow, India",
        "Remarks": "123456",
        "Club Tenure": "123456",
        "Ordered Date": "23 April 2024",
        "Link to Product": "123456",
        "Invoice Folder Link": "123456",
        "Total Price": "123456"
      },
        {
        "name": "John Doe",
        "Purpose": "I aim to cultivate a new skill that will challenge me intellectually and artistically. Learning to play this versatile instrument will be a rewarding process, requiring dedication, patience, and a willingness to step out of my comfort zone. ",
        "Functionality": "123456",
        "Quantity Ordered": "123456",
        "Quantity Possessed": "123456",
        "Current Location": "Lucknow, India",
        "Remarks": "123456",
        "Club Tenure": "123456",
        "Ordered Date": "23 April 2024",
        "Link to Product": "123456",
        "Invoice Folder Link": "123456",
        "Total Price": "123456"
      },
      
        {
        "name": "John Doe",
        "Purpose": "I aim to cultivate a new skill that will challenge me intellectually and artistically. Learning to play this versatile instrument will be a rewarding process, requiring dedication, patience, and a willingness to step out of my comfort zone. ",
        "Functionality": "123456",
        "Quantity Ordered": "123456",
        "Quantity Possessed": "123456",
        "Current Location": "Lucknow, India",
        "Remarks": "123456",
        "Club Tenure": "123456",
        "Ordered Date": "23 April 2024",
        "Link to Product": "123456",
        "Invoice Folder Link": "123456",
        "Total Price": "123456"
      },
    
    
    ]


    return (
        <div>
  {
  data.map((item, index) => {
    return (

            <div key={index} class="card">
                <div className="col1">
                    <div className="text1">{item.name}</div>
                    <div className="text2">Purpose : {item.Purpose}</div>
                </div>
                <div className="vline"></div>
                <div className="col2">
                    <div className="text1">Quantity Ordered : {item['Quantity Ordered']}</div>
                    <div className="text1">Ordered Date : {item['Ordered Date']}</div>
                </div>
                <div className="vline"></div>
                <div className="col2">
                    <div className="text1">Quantity Possessed : {item['Quantity Possessed']}</div>
                    <div className="text1">Current Location : {item['Current Location']}</div>
                </div>
                <div className="vline"></div>
                <div className="col4">
                    <div className="text1">Total Price</div>
                    <div className="text2">₹ {item['Total Price']}</div>
                </div>
                <div className="vline"></div>
                <div className="col5">
                <div className="text1">Remarks</div>
                <div className="text2">{item.Remarks}</div>
                </div>  
            </div>
          )
        })
      }

        </div>
    );
};

export default ItemList;