import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ArticleOutlined, AutoGraph, TrendingUp } from "@mui/icons-material";

function TopArticlesTable({ rows }) {
  return (
    <Card>
      <CardHeader
        title="Top performing articles"
        subheader="Recent articles with views and CTR"
        action={
          <Button size="small" variant="outlined" startIcon={<AutoGraph />}>
            Performance report
          </Button>
        }
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">CTR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.title} hover>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar variant="rounded" sx={{ width: 34, height: 34, bgcolor: "primary.light", color: "primary.dark" }}>
                      <ArticleOutlined fontSize="small" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">{row.title}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Last update: {row.date}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    color={row.status === "Published" ? "success" : row.status === "Draft" ? "warning" : "secondary"}
                    label={row.status}
                  />
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right">{row.views}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="flex-end">
                    <TrendingUp sx={{ color: "success.main", fontSize: 18 }} />
                    <Typography variant="body2">{row.ctr}</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default TopArticlesTable;
