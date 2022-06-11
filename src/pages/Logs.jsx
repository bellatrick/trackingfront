import { useQuery } from "react-query";

import { getAllLogs } from "../Api";
import Layout from "../components/Layout";
import LogsTable from "../components/LogsTable";

export default function Dashboard() {
  const { data, isLoading } = useQuery("tracking", getAllLogs);

  return (
    <Layout>
      <div className="flex justify-end mr-4 mt-4"></div>
      <LogsTable List={data} loading={isLoading} />
    </Layout>
  );
}
