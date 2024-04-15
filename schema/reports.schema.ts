export interface OverviewData {
  totalGrossSales: number;
  totalOrders: number;
  totalVisits: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

export interface TableData {
  columns: string[];
  rows: string[][];
}
