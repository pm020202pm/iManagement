import logo from './logo.svg';
import './App.css';
import CustomNav from './components/navbar/CustomNav.jsx';

function App() {


  return (
    <div className="App">
      <CustomNav
      li={[
        ["Dashboard", "img/dashboard.svg"],
        ["Restautant’s", "img/restaurant.svg"],
        ["Manage User’s", "img/manage user.svg"],
        ["Manage Order’s", "img/manage  order.svg"],
        ["Manage Coupon’s", "img/manage coupon.svg"]
      ]}
    />
    </div>
  );
}

export default App;
