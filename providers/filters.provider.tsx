"use client";

import { Option } from "@/schema/options.schema";
import { SaleData } from "@/schema/saleData.schema";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext<{
  channelFilters: Option[];
  setChannelsFilters: (channels: Option[]) => void;

  campaignFilters: Option[];
  setCampaignFilters: (campaigns: Option[]) => void;

  channelGroupFilters: Option[];
  setChannelGroupFilters: (channelGroups: Option[]) => void;
}>({
  channelFilters: [],
  setChannelsFilters: () => {},

  campaignFilters: [],
  setCampaignFilters: () => {},

  channelGroupFilters: [],
  setChannelGroupFilters: () => {},
});

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [channelFilters, setChannelsFilters] = useState<Option[]>([]);
  const [campaignFilters, setCampaignFilters] = useState<Option[]>([]);
  const [channelGroupFilters, setChannelGroupFilters] = useState<Option[]>([]);

  return (
    <FilterContext.Provider
      value={{
        channelFilters,
        setChannelsFilters,

        campaignFilters,
        setCampaignFilters,

        channelGroupFilters,
        setChannelGroupFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
