"use client";

import { Option } from "@/schema/options.schema";
import { SaleData } from "@/schema/saleData.schema";
import { createContext, useContext, useState } from "react";

const DataContext = createContext<{
  saleData: SaleData[];
  setSaleData: (data: SaleData[]) => void;

  channels: Option[];
  setChannels: (channels: Option[]) => void;

  campaigns: Option[];
  setCampaigns: (campaigns: Option[]) => void;

  channelGroups: Option[];
  setChannelGroups: (channelGroups: Option[]) => void;
}>({
  saleData: [],
  setSaleData: () => {},

  channels: [],
  setChannels: () => {},

  campaigns: [],
  setCampaigns: () => {},

  channelGroups: [],
  setChannelGroups: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [channels, setChannels] = useState<Option[]>([]);
  const [saleData, setSaleData] = useState<SaleData[]>([]);
  const [campaigns, setCampaigns] = useState<Option[]>([]);
  const [channelGroups, setChannelGroups] = useState<Option[]>([]);

  return (
    <DataContext.Provider
      value={{
        saleData,
        setSaleData,

        channels,
        setChannels,

        channelGroups,
        setChannelGroups,

        campaigns,
        setCampaigns,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
