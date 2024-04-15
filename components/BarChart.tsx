import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";
import { GrossSalesPerChannel } from "@/utils/data.util";
import colorsUtil from "../utils/colors.util";

export default function GrossSalesPerChannelChart({
  data,
}: {
  data: GrossSalesPerChannel[];
}) {
  const labels = data.map((d) => d.channel);
  const values = data.map((d) => d.grossSales);

  return (
    <Box
      border={1}
      padding={2}
      paddingY={3}
      borderColor={colorsUtil.border}
      borderRadius={1}
    >
      <BarChart
        height={300}
        margin={{
          right: 5,
          top: 10,
          bottom: 20,
          left: 100,
        }}
        series={[{ data: values, color: "#333666", type: "bar" }]}
        xAxis={[
          {
            data: labels,
            scaleType: "band",
            tickPlacement: "middle",
            tickLabelPlacement: "middle",
          },
        ]}
      />
    </Box>
  );
}
