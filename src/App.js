import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import LandingPage from "./pages/main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard";
import AddShipment from "./pages/AddShipment";
import EditShipment from "./pages/EditShipment";
import Logs from "./pages/Logs";
import ShowReceipt from "./pages/ShowReceipt";
import Invoice from "./pages/Invoice";
import InvoiceReceipt from "./pages/InvoiceReceipt";
import TransactionReceipt from "./pages/TransactionReceipt";
function App() {
  return (
 
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/add_shipment" element={<AddShipment />} />
          <Route exact path="/logs" element={<Logs />} />
          <Route exact path="/edit_shipment/:id" element={<EditShipment />} />
          <Route exact path="/invoice/:id" element={<Invoice />} />
          <Route exact path="/receipt" element={<ShowReceipt />} />
          <Route exact path="/invoice_receipt" element={<InvoiceReceipt />} />
          <Route exact path="/transaction_receipt" element={<TransactionReceipt />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
