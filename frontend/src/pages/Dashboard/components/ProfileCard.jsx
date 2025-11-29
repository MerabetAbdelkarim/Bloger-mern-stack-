import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { CalendarMonth, PersonOutline } from "@mui/icons-material";

function ProfileCard({ user, avatarInitials, onNav }) {
  return (
    <Card>
      <CardHeader
        title="Profile card"
        subheader="Account details and public info"
        action={
          <Button variant="outlined" size="small" onClick={() => onNav(`/author/${user?._id}`)}>
            View profile
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              sx={{ width: 64, height: 64, bgcolor: "secondary.main", color: "white", fontSize: 28 }}
              src={
                user?.image
                  ? `${import.meta.env.VITE_API_URL}/getimageauthor/avatar/${user.image}`
                  : undefined
              }
            >
              {avatarInitials}
            </Avatar>
            <Box>
              <Typography variant="h6">{user ? `${user.name} ${user.lastname}` : "User"}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.email}
              </Typography>
            </Box>
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                Bio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user?.about || "No bio added yet."}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                Contact & IDs
              </Typography>
              <Stack spacing={1}>
                <Chip variant="outlined" icon={<PersonOutline />} label={user?._id || "—"} />
                <Chip variant="outlined" icon={<CalendarMonth />} label="Timezone: UTC+0" />
              </Stack>
            </Grid>
          </Grid>

          <Divider />

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip color="primary" label="Consistent publishing" />
            <Chip color="secondary" label="Editorial standards on" />
            <Chip variant="outlined" color="primary" label="Performance alerts enabled" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
