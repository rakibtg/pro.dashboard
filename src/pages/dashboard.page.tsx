import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";
import TextLabel from "../components/TextLabel";
import Text from "../components/Text";

export default function DashboardPage() {
  return (
    <Layout>
      <Box marginBottom={2}>
        <TextLabel>Reports Dashboard</TextLabel>
      </Box>
      <Text>This is the dashboard page.</Text>
    </Layout>
  );
}
