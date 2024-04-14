import { getOrders, getSessions } from "@/actions/session.action";
import { aggregateData } from "@/utils/data.util";

export const metadata = {
  title: "Pro Report",
  description: "Get Pro Report",
};

export default async function Home() {
  const orders = await getOrders();
  const sessions = await getSessions();

  const data = aggregateData(orders, sessions);
  console.log(data);

  return <div>hello page</div>;
}
