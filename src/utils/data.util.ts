import { Order } from "@/schema/order.schema";
import { Session } from "@/schema/session.schema";
import { SaleData } from "@/schema/saleData.schema";

interface KeyData {
  channel: string;
  channelGroup: string;
  campaignName: string;
}

const getTotalVisits = (keyData: KeyData, sessions: Session[]) => {
  let count = 0;
  for (const session of sessions) {
    if (
      session.channel === keyData.channel &&
      session.channelGroup === keyData.channelGroup &&
      session.campaignName === keyData.campaignName
    ) {
      count++;
    }
  }
  return count;
};

export const aggregateData = (orders: Order[], sessions: Session[]) => {
  const response = orders.reduce((data, order) => {
    const keyData: KeyData = {
      channel: order.channel,
      channelGroup: order.channelGroup,
      campaignName: order.campaignName,
    };

    const key = Object.values(keyData).join("");

    if (!data[key]) {
      data[key] = {
        ...order,
        grossSales: order.orderValue,
        totalVisits: getTotalVisits(keyData, sessions),
        totalOrders: 1,
      };
    } else {
      data[key].grossSales += order.orderValue;
      data[key].totalOrders++;
    }
    return data;
  }, {} as Record<string, SaleData>);

  return Object.values(response);
};
