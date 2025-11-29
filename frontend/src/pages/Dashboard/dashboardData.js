import {
  AccessTime,
  ArticleOutlined,
  AutoGraph,
  CalendarMonth,
  CheckCircleRounded,
  DraftsOutlined,
  EditOutlined,
  PlaylistAddCheck,
  QueryStatsOutlined,
  SpaceDashboardOutlined,
  TrendingUp,
} from "@mui/icons-material";

export const drawerItems = [
  { label: "Dashboard", Icon: SpaceDashboardOutlined, path: "/dashboard" },
  { label: "Articles", Icon: ArticleOutlined, path: "/articles" },
  { label: "Create Article", Icon: EditOutlined, path: "/createarticle" },
  { label: "Drafts", Icon: DraftsOutlined, path: null },
  { label: "Analytics", Icon: QueryStatsOutlined, path: null },
];

export const quickStats = [
  {
    title: "Published articles",
    value: "24",
    change: "+8% last 30 days",
    Icon: ArticleOutlined,
    color: "primary",
  },
  {
    title: "Active drafts",
    value: "5",
    change: "2 need review",
    Icon: DraftsOutlined,
    color: "secondary",
  },
  {
    title: "Engagement rate",
    value: "74%",
    change: "+3.2% growth",
    Icon: TrendingUp,
    color: "success",
  },
  {
    title: "Upcoming deadlines",
    value: "3",
    change: "This week",
    Icon: CalendarMonth,
    color: "warning",
  },
];

export const pipeline = [
  {
    title: "Ideas & research",
    value: 62,
    color: "primary",
    helper: "Sources and briefs in progress",
  },
  {
    title: "Ready to write",
    value: 48,
    color: "secondary",
    helper: "Approved outlines",
  },
  {
    title: "In editing",
    value: 35,
    color: "success",
    helper: "Awaiting final proof",
  },
  {
    title: "Scheduled & live",
    value: 22,
    color: "warning",
    helper: "Published or queued",
  },
];

export const activities = [
  {
    title: "Published a new article",
    meta: "10 minutes ago",
    Icon: CheckCircleRounded,
    iconColor: "success",
  },
  {
    title: "Updated profile details",
    meta: "1 hour ago",
    Icon: AutoGraph,
    iconColor: "primary",
  },
  {
    title: "3 comments awaiting review",
    meta: "Today",
    Icon: PlaylistAddCheck,
    iconColor: "warning",
  },
  {
    title: "Draft needs proofreading",
    meta: "Yesterday",
    Icon: AccessTime,
    iconColor: "secondary",
  },
];

export const topArticles = [
  {
    title: "Designing Better UX Flows",
    views: "1,280",
    status: "Published",
    date: "Nov 18",
    ctr: "4.8%",
  },
  {
    title: "SEO Starter Guide",
    views: "980",
    status: "Scheduled",
    date: "Nov 22",
    ctr: "3.5%",
  },
  {
    title: "Automating Editorial Tasks",
    views: "870",
    status: "Draft",
    date: "Nov 20",
    ctr: "2.9%",
  },
  {
    title: "Picking Your Next Topic",
    views: "640",
    status: "Published",
    date: "Nov 14",
    ctr: "2.4%",
  },
];
