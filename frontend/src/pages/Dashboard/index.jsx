import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Drawer, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../services/AuthContext";
import { activities, drawerItems, pipeline, quickStats, topArticles } from "./dashboardData";
import DrawerContent from "./components/DrawerContent";
import QuickStats from "./components/QuickStats";
import ProfileCard from "./components/ProfileCard";
import PipelineCard from "./components/PipelineCard";
import TopArticlesTable from "./components/TopArticlesTable";
import ActivityCard from "./components/ActivityCard";

const drawerWidth = 280;

function Dashboard() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [mobileOpen, setMobileOpen] = useState(false);

    const avatarInitials = useMemo(() => {
        if (!user) return "?";
        const first = user.name?.charAt(0) ?? "";
        const last = user.lastname?.charAt(0) ?? "";
        const initials = `${first}${last}`.trim();
        return initials ? initials.toUpperCase() : "?";
    }, [user]);

    const handleNav = (path) => {
        if (!path) return;
        navigate(path);
        if (!isMdUp) setMobileOpen(false);
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
            <Drawer
                variant={isMdUp ? "permanent" : "temporary"}
                open={isMdUp ? true : mobileOpen}
                onClose={() => setMobileOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        borderRight: "1px solid",
                        borderColor: "divider",
                    },
                }}
            >
                <DrawerContent
                    user={user}
                    avatarInitials={avatarInitials}
                    drawerItems={drawerItems}
                    onNav={handleNav}
                />
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    px: { xs: 2, sm: 3, lg: 4 },
                    py: { xs: 3, sm: 4 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                <Grid container spacing={3}>
                    <QuickStats items={quickStats} />

                    <Grid item xs={12} lg={5}>
                        <ProfileCard user={user} avatarInitials={avatarInitials} onNav={handleNav} />
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <PipelineCard stages={pipeline} />
                    </Grid>

                    <Grid item xs={12} lg={8}>
                        <TopArticlesTable rows={topArticles} />
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <ActivityCard items={activities} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Dashboard;
