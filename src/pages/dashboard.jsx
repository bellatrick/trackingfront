import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getAllShippment } from "../Api";
import Layout from "../components/Layout";
import ShipmentTable from "../components/ShipmentTable";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");
  const { data, isLoading } = useQuery("tracking", () => getAllShippment(user));

  return (
    <Layout>
      <div className="flex justify-end mr-4 mt-4">
        <button
          className="bg-rose-600 px-4 py-2 mb-6 text-white rounded-md"
          onClick={() => navigate("/add_shipment")}
        >
          Add new Shipment
        </button>
      </div>
      <ShipmentTable List={data} loading={isLoading} />
    </Layout>
  );
}
