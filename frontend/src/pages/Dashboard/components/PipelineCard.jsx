import { Box, Button, Card, CardContent, CardHeader, LinearProgress, Stack, Typography } from "@mui/material";
import { QueryStatsOutlined } from "@mui/icons-material";

function PipelineCard({ stages }) {
  return (
    <Card>
      <CardHeader
        title="Publishing pipeline"
        subheader="Work in each production stage"
        action={
          <Button variant="text" startIcon={<QueryStatsOutlined />} size="small">
            View details
          </Button>
        }
      />
      <CardContent>
        <Stack spacing={2.5}>
          {stages.map((stage) => (
            <Box key={stage.title}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2">{stage.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {stage.helper}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={stage.value}
                color={stage.color}
                sx={{ mt: 1, height: 10, borderRadius: 999 }}
              />
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PipelineCard;
