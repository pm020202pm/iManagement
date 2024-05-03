import logo from './logo.svg';
import './App.css';

function App() {
  let data = [
    {
    "name": "John Doe",
    "Purpose": "john@gmail.com",
    "Functionality": "123456",
    "Quantity Ordered": "123456",
    "Quantity Possessed": "123456",
    "Current Location": "123456",
    "Remarks": "123456",
    "Club Tenure": "123456",
    "Ordered Date": "123456",
    "Link to Product": "123456",
    "Invoice Folder Link": "123456",
    "Total Price": "123456"
  },
  
    {
    "name": "John Doe",
    "Purpose": "john@gmail.com",
    "Functionality": "123456",
    "Quantity Ordered": "123456",
    "Quantity Possessed": "123456",
    "Current Location": "123456",
    "Remarks": "123456",
    "Club Tenure": "123456",
    "Ordered Date": "123456",
    "Link to Product": "123456",
    "Invoice Folder Link": "123456",
    "Total Price": "123456"
  },
    {
    "name": "John Doe",
    "Purpose": "john@gmail.com",
    "Functionality": "123456",
    "Quantity Ordered": "123456",
    "Quantity Possessed": "123456",
    "Current Location": "123456",
    "Remarks": "123456",
    "Club Tenure": "123456",
    "Ordered Date": "123456",
    "Link to Product": "123456",
    "Invoice Folder Link": "123456",
    "Total Price": "123456"
  },
  
    {
    "name": "John Doe",
    "Purpose": "john@gmail.com",
    "Functionality": "123456",
    "Quantity Ordered": "123456",
    "Quantity Possessed": "123456",
    "Current Location": "123456",
    "Remarks": "123456",
    "Club Tenure": "123456",
    "Ordered Date": "123456",
    "Link to Product": "123456",
    "Invoice Folder Link": "123456",
    "Total Price": "123456"
  },


]


  return (
    <div className="App">
      <div>Inventory Management</div>

  <table>
    
  <tr class="table-row">
    <th>Name</th>
    <th>Purpose</th>
    <th>Functionality</th>
    <th>Quantity Ordered</th>
    <th>Quantity Possessed</th>
    <th>Current Location</th>
    <th>Remarks</th>
    <th>Club Tenure</th>
    <th>Ordered Date</th>
    <th>Link to Product</th>
    <th>Invoice Folder Link</th>
    <th>Total Price</th>
  </tr>

  {
        data.map((item, index) => {
          return (
            <tr key={index} class="table-row">
              <td>{item.name}</td>
              <td>{item.Purpose}</td>
              <td>{item.Functionality}</td>
              <td>{item['Quantity Ordered']}</td>
              <td>{item['Quantity Possessed']}</td>
              <td>{item['Current Location']}</td>
              <td>{item.Remarks}</td>
              <td>{item['Club Tenure']}</td>
              <td>{item['Ordered Date']}</td>
              <td>{item['Link to Product']}</td>
              <td>{item['Invoice Folder Link']}</td>
              <td>{item['Total Price']}</td>
            </tr>
          )
        })
      }

</table>
    </div>
  );
}

export default App;
