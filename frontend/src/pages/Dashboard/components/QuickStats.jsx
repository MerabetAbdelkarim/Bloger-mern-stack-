import { Avatar, Box, Card, CardContent, Grid, IconButton, Stack, Typography } from "@mui/material";
import { MoreHoriz, TrendingUp } from "@mui/icons-material";

function QuickStats({ items }) {
  return (
    <>
      {items?.map((item) => {
        const Icon = item.Icon;
        return (
          <Grid item xs={12} sm={6} lg={3} key={item.title}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: `${item.color}.light`,
                      color: `${item.color}.dark`,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <Icon />
                  </Avatar>
                  <Box flexGrow={1}>
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography variant="h5" mt={0.5}>
                      {item.value}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                      <TrendingUp sx={{ color: "success.main", fontSize: 18 }} />
                      <Typography variant="body2" color="success.main">
                        {item.change}
                      </Typography>
                    </Stack>
                  </Box>
                  <IconButton size="small" color="inherit">
                    <MoreHoriz />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

export default QuickStats;
