import { Order } from "@/schema/order.schema";
import { Session } from "@/schema/session.schema";
import { SaleData } from "@/schema/saleData.schema";
import { Option } from "@/schema/options.schema";

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
  const campaigns: string[] = [];
  const channels: string[] = [];
  const channelGroups: string[] = [];

  const response = orders.reduce((data, order) => {
    if (!campaigns.includes(order.campaignName)) {
      campaigns.push(order.campaignName);
    }

    if (!channels.includes(order.channel)) {
      channels.push(order.channel);
    }

    if (!channelGroups.includes(order.channelGroup)) {
      channelGroups.push(order.channelGroup);
    }

    const keyData: KeyData = {
      channel: order.channel,
      channelGroup: order.channelGroup,
      campaignName: order.campaignName,
    };

    const key = Object.values(keyData).join("");

    if (!data[key]) {
      data[key] = {
        ...order,
        grossSales: Number(order.orderValue),
        totalVisits: getTotalVisits(keyData, sessions),
        totalOrders: 1,
      };
    } else {
      data[key].grossSales += Number(order.orderValue);
      data[key].totalOrders++;
    }
    return data;
  }, {} as Record<string, SaleData>);

  return {
    data: Object.values(response),
    campaigns: campaigns.map((campaign) => ({
      title: campaign ? campaign : "No Campaign",
      value: campaign,
    })),
    channels: channels.map((channel) => ({
      title: channel ? channel : "No Channel",
      value: channel,
    })),
    channelGroups: channelGroups.map((channelGroup) => ({
      title: channelGroup ? channelGroup : "No Channel Group",
      value: channelGroup,
    })),
  };
};

interface OverviewData {
  data: SaleData[];
  channelFilters: Option[];
  campaignFilters: Option[];
  channelGroupFilters: Option[];
}

export interface GrossSalesPerChannel {
  channel: string;
  grossSales: number;
}

export interface OverviewDataReturn {
  totalGrossSales: number;
  totalOrders: number;
  totalVisits: number;
  totalGrossSalesPerChannel: GrossSalesPerChannel[];
  dataReports: SaleData[];
}

export const getOverviewData = ({
  data,
  channelFilters,
  campaignFilters,
  channelGroupFilters,
}: OverviewData): OverviewDataReturn => {
  let totalGrossSales = 0;
  let totalOrders = 0;
  let totalVisits = 0;
  let totalGrossSalesPerChannel: GrossSalesPerChannel[] = [];
  let dataReports: SaleData[] = [];

  const channelFilterSet = new Set(
    channelFilters.map((filter) => filter.value)
  );
  const campaignFilterSet = new Set(
    campaignFilters.map((filter) => filter.value)
  );
  const channelGroupFilterSet = new Set(
    channelGroupFilters.map((filter) => filter.value)
  );

  const passesFilters = (item: SaleData) => {
    const passesChannel =
      channelFilterSet.size === 0 || channelFilterSet.has(item.channel);
    const passesCampaign =
      campaignFilterSet.size === 0 || campaignFilterSet.has(item.campaignName);
    const passesChannelGroup =
      channelGroupFilterSet.size === 0 ||
      channelGroupFilterSet.has(item.channelGroup);
    return passesChannel && passesCampaign && passesChannelGroup;
  };

  for (const item of data) {
    if (passesFilters(item)) {
      // Process data cards overview.
      totalGrossSales += item.grossSales;
      totalOrders += item.totalOrders;
      totalVisits += item.totalVisits;

      // Process data for chart.
      const channelIndex = totalGrossSalesPerChannel.findIndex(
        (channel) => channel.channel === item.channel
      );
      if (channelIndex === -1) {
        totalGrossSalesPerChannel.push({
          channel: item.channel,
          grossSales: item.grossSales,
        });
      } else {
        totalGrossSalesPerChannel[channelIndex].grossSales += item.grossSales;
      }

      // Process data for table.
      dataReports.push(item);
    }
  }

  return {
    totalGrossSales,
    totalOrders,
    totalVisits,
    totalGrossSalesPerChannel,
    dataReports,
  };
};
