"use client";

import { useEffect, useState } from "react";
import TextLabel from "./TextLabel";
import { Box } from "@mui/material";
import { Option } from "@/schema/options.schema";
import { SaleData } from "@/schema/saleData.schema";
import { useData } from "@/providers/data.provider";
import { useFilter } from "@/providers/filters.provider";
import StatCard from "./StatCard";
import { getOverviewData } from "@/utils/data.util";
import { useReport } from "@/providers/reports.provider";
import GrossSalesPerChannelChart from "./BarChart";
import DataTable from "./DataTable";
import { useQueryParams } from "@/hooks/useQueryString";

interface DashboardProp {
  aggregateData: {
    data: SaleData[];
    channels: Option[];
    campaigns: Option[];
    channelGroups: Option[];
  };
}

export default function Dashboard({ aggregateData }: DashboardProp) {
  const {
    channelFilters,
    campaignFilters,
    channelGroupFilters,
    setChannelsFilters,
    setCampaignFilters,
    setChannelGroupFilters,
  } = useFilter();
  const { setChannels, setSaleData, setChannelGroups, setCampaigns } =
    useData();
  const { overviewData, setOverviewData } = useReport();
  const { setQueryParams, getQueryParams } = useQueryParams();

  const [blockQueryString, setBlockQueryString] = useState(false);

  useEffect(() => {
    setSaleData(aggregateData.data);
    setChannels(aggregateData.channels);
    setCampaigns(aggregateData.campaigns);
    setChannelGroups(aggregateData.channelGroups);
  }, [aggregateData]);

  useEffect(() => {
    if (!blockQueryString) {
      const queryParams = getQueryParams();

      if (queryParams.channelFilters) {
        setChannelsFilters(JSON.parse(queryParams.channelFilters));
      }
      if (queryParams.campaignFilters) {
        setCampaignFilters(JSON.parse(queryParams.campaignFilters));
      }
      if (queryParams.channelGroupFilters) {
        setChannelGroupFilters(JSON.parse(queryParams.channelGroupFilters));
      }

      setBlockQueryString(true);
    }
  }, []);

  useEffect(() => {
    if (blockQueryString) {
      const overviewData = getOverviewData({
        data: aggregateData.data,
        channelFilters,
        campaignFilters,
        channelGroupFilters,
      });
      setOverviewData(overviewData);

      setQueryParams({
        channelFilters: JSON.stringify(channelFilters),
        campaignFilters: JSON.stringify(campaignFilters),
        channelGroupFilters: JSON.stringify(channelGroupFilters),
      });
    }
  }, [channelFilters, campaignFilters, channelGroupFilters, blockQueryString]);

  return (
    <Box marginBottom={10}>
      <TextLabel paddingBottom={2}>Business Overview</TextLabel>
      <Box
        display="flex"
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        gap={2}
      >
        <StatCard
          label="Total Gross Sales"
          value={overviewData.totalGrossSales}
        />
        <StatCard label="Total Orders" value={overviewData.totalOrders} />
        <StatCard label="Total Visits" value={overviewData.totalVisits} />
      </Box>
      <Box marginY={2}>
        <TextLabel marginBottom={2} paddingBottom={0} marginTop={3}>
          Gross Sales Per Channel
        </TextLabel>
        <GrossSalesPerChannelChart
          data={overviewData.totalGrossSalesPerChannel}
        />
      </Box>
      <Box marginY={2}>
        <TextLabel marginBottom={2} paddingBottom={0} marginTop={3}>
          All Activities
        </TextLabel>
        <DataTable rowsData={overviewData.dataReports} />
      </Box>
    </Box>
  );
}
