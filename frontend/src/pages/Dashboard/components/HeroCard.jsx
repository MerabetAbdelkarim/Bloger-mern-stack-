import { Avatar, Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { AutoGraph, ExitToApp } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
function HeroCard({ user, avatarInitials, onNav }) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardContent sx={{ position: "relative", zIndex: 2 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">
          <Avatar
            // eslint-disable-next-line react/prop-types
            src={user?.image ? `${import.meta.env.VITE_API_URL}/getimageauthor/avatar/${user.image}` : undefined}
            sx={{ width: 70, height: 70, bgcolor: "rgba(255,255,255,0.18)", color: "white", fontSize: 28 }}
          >
            {avatarInitials}
          </Avatar>
          <Box flexGrow={1}>
            <Typography variant="h5" fontWeight={700}>
              Content overview
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.82)", mt: 0.5 }}>
              Track performance, publishing progress, and everything you need to keep content moving.
            </Typography>
            <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap">
              <Chip color="secondary" label="Weekly focus: SEO uplift" />
              <Chip variant="outlined" color="default" label="Priority: User experience" />
            </Stack>
          </Box>
          <Stack direction={{ xs: "row", md: "column" }} spacing={1}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AutoGraph />}
              onClick={() => onNav("/articles")}
            >
              View articles
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<ExitToApp />} onClick={() => onNav("/")}>
              Back to site
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.16), transparent 25%)",
          opacity: 0.9,
        }}
      />
    </Card>
  );
}

export default HeroCard;
