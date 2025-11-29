import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#7db3ff",
      main: "#2563eb",
      dark: "#1d4ed8",
    },
    secondary: {
      light: "#6ee7b7",
      main: "#10b981",
      dark: "#059669",
    },
    background: {
      default: "#f4f6fb",
      paper: "#ffffff",
    },
    divider: "#e5e7eb",
    text: {
      primary: "#0f172a",
      secondary: "#4b5563",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Segoe UI', 'Helvetica Neue', sans-serif",
    h4: { fontWeight: 700, letterSpacing: -0.6 },
    h5: { fontWeight: 700, letterSpacing: -0.4 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600, color: "#1f2937" },
    body1: { color: "#4b5563" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f4f6fb",
          color: "#0f172a",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          boxShadow: "0 10px 40px -24px rgba(15,23,42,0.35)",
          borderBottom: "1px solid #e5e7eb",
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid #e8ebf2",
          boxShadow: "0 12px 40px -30px rgba(15,23,42,0.65)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 14,
          "&.Mui-selected": {
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            color: "#1d4ed8",
          },
        },
      },
    },
  },
});
