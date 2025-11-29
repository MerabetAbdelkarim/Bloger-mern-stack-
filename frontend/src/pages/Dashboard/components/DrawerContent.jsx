import {
  Avatar,
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {  CheckCircleRounded, ExitToApp } from "@mui/icons-material";

function DrawerContent({ user, avatarInitials, drawerItems, onNav }) {
  return (
    <Box
      role="presentation"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 3,
        background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
      }}
    >
      <Box
        sx={{
          p: 2.5,
          borderRadius: 3,
          bgcolor: "rgba(37, 99, 235, 0.08)",
          border: "1px solid",
          borderColor: "rgba(37, 99, 235, 0.18)",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {user?.image ? (
            <Avatar
              src={`${import.meta.env.VITE_API_URL}/getimageauthor/avatar/${user.image}`}
              alt={user?.name}
              sx={{ width: 50, height: 50 }}
            />
          ) : (
            <Avatar sx={{ width: 50, height: 50, bgcolor: "primary.main" }}>{avatarInitials}</Avatar>
          )}
          <Box>
            <Typography variant="subtitle1">{user ? `${user.name} ${user.lastname}` : "Your account"}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user?.email}
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          <Chip size="small" color="primary" icon={<CheckCircleRounded /> } label="Verified account" />
        </Stack>
      </Box>

      <List dense sx={{ flexGrow: 1, gap: 1, display: "flex", flexDirection: "column" }}>
        {drawerItems?.map((item) => {
          const ItemIcon = item.Icon;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => onNav(item.path)} selected={item.path === "/dashboard"}>
                <ListItemIcon sx={{ minWidth: 36, color: "text.secondary" }}>
                  <ItemIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Button variant="outlined" color="inherit" startIcon={<ExitToApp />} onClick={() => onNav("/")}>
        Back to site
      </Button>
    </Box>
  );
}

export default DrawerContent;
