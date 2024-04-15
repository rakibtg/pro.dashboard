import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import colorsUtil from "@/utils/colors.util";
import { SaleData } from "@/schema/saleData.schema";
import { Box, Button } from "@mui/material";
import Text from "./Text";
import { ArrowDownward, ArrowUpward, SwapVert } from "@mui/icons-material";
import { useEffect } from "react";

interface Column {
  id:
    | "channelGroup"
    | "channel"
    | "campaignName"
    | "orderValue"
    | "grossSales"
    | "totalVisits"
    | "totalOrders";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: string) => string;
}

const columns: Column[] = [
  { id: "channel", label: "Channel", minWidth: 60 },
  { id: "channelGroup", label: "Group", minWidth: 80 },
  {
    id: "campaignName",
    label: "Campaign",
    minWidth: 120,
    format: (value: string) => (value.trim() ? value : "No Campaign"),
  },
  {
    id: "orderValue",
    label: "Order Value",
    minWidth: 140,
    format: (value: string) => Number(value).toLocaleString(),
  },
  {
    id: "grossSales",
    label: "Gross Sales",
    minWidth: 140,
    format: (value: string) => Number(value).toLocaleString(),
  },
  {
    id: "totalVisits",
    label: "Visits",
    minWidth: 4,
    format: (value: string) => Number(value).toLocaleString(),
  },
  {
    id: "totalOrders",
    label: "Orders",
    minWidth: 4,
    format: (value: string) => Number(value).toLocaleString(),
  },
];

export default function DataTable({ rowsData }: { rowsData: SaleData[] }) {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState<SaleData[]>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [sortBy, setSortBy] = React.useState<keyof SaleData | null>(null);
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc" | null>(null);

  useEffect(() => {
    setSortBy(null);
    setRows(rowsData);
    setSortOrder(null);
  }, [rowsData]);

  useEffect(() => {
    if (sortBy) {
      const sortedRows = rows.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else if (sortOrder === "desc") {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        return 0;
      });
      setRows(sortedRows);
    }
  }, [sortBy, sortOrder]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const SortIcon = ({ id }: { id: string }) => {
    if (!sortBy) {
      return <SwapVert />;
    } else if (sortBy === id) {
      if (sortOrder === "asc") {
        return <ArrowUpward />;
      } else if (sortOrder === "desc") {
        return <ArrowDownward />;
      }
    }
  };

  const handleSorting = (id: keyof SaleData) => {
    if (sortBy && sortBy !== id) {
      setSortBy(null);
      setSortOrder(null);
    } else {
      setSortBy(id);
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else {
        setSortOrder("asc");
      }
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colorsUtil.border,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 400,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Button
                    startIcon={<SortIcon id={column.id.toString()} />}
                    size="small"
                    onClick={() => {
                      handleSorting(column.id as keyof SaleData);
                    }}
                  >
                    <Text fontWeight="bold">{column.label}</Text>
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id as keyof SaleData];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(Number(value).toString())
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
