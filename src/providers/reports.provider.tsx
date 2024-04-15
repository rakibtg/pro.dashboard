"use client";

import { OverviewDataReturn } from "@/utils/data.util";
import { createContext, useContext, useState } from "react";

const ReportContext = createContext<{
  overviewData: OverviewDataReturn;
  setOverviewData: (data: OverviewDataReturn) => void;
}>({
  overviewData: {
    totalGrossSales: 0,
    totalOrders: 0,
    totalVisits: 0,
    totalGrossSalesPerChannel: [],
    dataReports: [],
  },
  setOverviewData: () => {},
});

export const useReport = () => useContext(ReportContext);

export const ReportProvider = ({ children }: { children: React.ReactNode }) => {
  const [overviewData, setOverviewData] = useState<OverviewDataReturn>({
    totalGrossSales: 0,
    totalOrders: 0,
    totalVisits: 0,
    totalGrossSalesPerChannel: [],
    dataReports: [],
  });

  return (
    <ReportContext.Provider
      value={{
        overviewData,
        setOverviewData,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
