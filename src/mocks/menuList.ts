import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";

export const sidebarTabsList = [
    {
      text: "Dashboard",
      key: "dashboard",
      sub: false,
      icon: DashboardIcon,
    },
    {
      text: "Learn",
      key: "learn",
      sub: false,
      icon: RequestPageOutlinedIcon,
    },
    {
      text: "Health",
      key: "health",
      sub: false,
      icon: DocumentScannerOutlinedIcon,
    },
    {
      text: "Events",
      key: "events",
      sub: false,
      icon: ReportIcon,
    },
    {
      text: "Information",
      key: "information",
      sub: false,
      icon: ReportIcon,
    },
    { 
      text: "Assesment",
      key: "assesment",
      sub: false,
      icon: SettingsOutlinedIcon,
    },
    {
      text: "Admin",
      key: "admin",
      sub: false,
      icon: SettingsOutlinedIcon,
    },
  ];
  
  export const drawerWidth = 240;
  