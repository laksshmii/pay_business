import React from "react";
import SuspenseWrapper from "@/router/Component/SuspenseWrapper";
const Dashboard = React.lazy(() => import("@/pages/DashBoard/dashboard"));
const ManageQr = React.lazy(() => import("@/pages/QR/index"));
const ProfileDashboard = React.lazy(() => import("@/pages/profile/ProfileDashboard"));
const SettlementHistory = React.lazy(() => import("@/pages/History/history"));

const Index = [
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <Dashboard />
      </SuspenseWrapper>
    ),
  },
  {
    path: "manageQr",
    element: (
      <SuspenseWrapper>
        <ManageQr />
      </SuspenseWrapper>
    ),
  },
  {
    path: "profile",
    element: (
      <SuspenseWrapper>
        <ProfileDashboard />
      </SuspenseWrapper>
    ),
  },
  {
    path: "history",
    element: (
      <SuspenseWrapper>
        <SettlementHistory />
      </SuspenseWrapper>
    ),
  }

];

export default Index;
