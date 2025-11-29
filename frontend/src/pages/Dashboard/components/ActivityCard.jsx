import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { EditOutlined, MoreHoriz, PlaylistAddCheck } from "@mui/icons-material";

function ActivityCard({ items }) {
  return (
    <Card>
      <CardHeader
        title="Recent activity"
        subheader="Latest updates across your workspace"
        action={
          <IconButton size="small" color="primary">
            <MoreHoriz />
          </IconButton>
        }
      />
      <List sx={{ py: 0 }}>
        {items.map((activity) => {
          const Icon = activity.Icon;
          return (
            <ListItem key={activity.title} divider alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: "background.paper",
                    color: "primary.main",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Icon color={activity.iconColor} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2">{activity.title}</Typography>}
                secondary={<Typography variant="body2" color="text.secondary">{activity.meta}</Typography>}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Stack direction="row" spacing={1.5} sx={{ p: 2 }}>
        <Button variant="outlined" fullWidth startIcon={<PlaylistAddCheck />}>
          Task list
        </Button>
        <Button variant="contained" fullWidth startIcon={<EditOutlined />}>
          Add note
        </Button>
      </Stack>
    </Card>
  );
}

export default ActivityCard;
