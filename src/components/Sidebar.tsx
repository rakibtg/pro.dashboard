"use client";

import Select from "./Select";
import TextLabel from "./TextLabel";
import { Box } from "@mui/material";
import { useData } from "@/providers/data.provider";
import { useFilter } from "@/providers/filters.provider";

export default function Sidebar() {
  const { channels, campaigns, channelGroups } = useData();
  const {
    channelFilters,
    campaignFilters,
    channelGroupFilters,
    setChannelsFilters,
    setCampaignFilters,
    setChannelGroupFilters,
  } = useFilter();

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      paddingBottom={{
        xs: 2,
        md: 0,
      }}
    >
      <Box
        flexGrow={1}
        marginBottom={1.5}
        display="flex"
        flexDirection={"column"}
        gap={{
          xs: 2,
          md: 3,
        }}
      >
        <TextLabel>Filter Report Data</TextLabel>

        <Select
          label="Channels"
          options={channels}
          value={channelFilters}
          onChange={(items) => {
            setChannelsFilters(items);
          }}
        />

        <Select
          label="Channel Groups"
          options={channelGroups}
          value={channelGroupFilters}
          onChange={(items) => {
            setChannelGroupFilters(items);
          }}
        />

        <Select
          label="Campaigns"
          options={campaigns}
          value={campaignFilters}
          onChange={(items) => {
            setCampaignFilters(items);
          }}
        />
      </Box>
    </Box>
  );
}
