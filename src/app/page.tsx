import { getOrders, getSessions } from "@/actions/session.action";
import Dashboard from "@/components/Dashboard";
import { aggregateData } from "@/utils/data.util";

export const metadata = {
  title: "Pro Report",
  description: "Get Pro Report",
};

export default async function Home() {
  const orders = await getOrders();
  const sessions = await getSessions();
  const data = aggregateData(orders, sessions);

  return <Dashboard aggregateData={data} />;
}
