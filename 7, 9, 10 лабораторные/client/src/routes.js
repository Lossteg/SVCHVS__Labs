import { lazy } from "react";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Post from "./pages/Post";
import OwnPost from "./pages/OwnPost";
import Profile from "./pages/Profile";
import PublicProfile from "./pages/PublicProfile";
import Following from "./pages/Following";
import Saved from "./pages/Saved";
import CommunityHome from "./pages/CommunityHome";
import AllCommunities from "./pages/AllCommunities";
import MyCommunities from "./pages/MyCommunities";

const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReportedPost = lazy(() => import("./pages/ReportedPost"));
const Moderator = lazy(() => import("./pages/Moderator"));

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
      {
        path: "/my/post/:postId",
        element: <OwnPost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/user/:userId",
        element: <PublicProfile />,
      },
      {
        path: "/community/:communityName",
        element: <CommunityHome />,
      },
      {
        path: "/community/:communityName/reported-post",
        element: <ReportedPost />,
      },
      {
        path: "/community/:communityName/moderator",
        element: <Moderator />,
      },
      {
        path: "/communities",
        element: <AllCommunities />,
      },
      {
        path: "/my-communities",
        element: <MyCommunities />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/following",
        element: <Following />,
      },
];

export const publicRoutes = [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
        path: "/auth/verify",
        element: <VerifyEmail />,
      },
      {
        path: "/email-verified",
        element: <EmailVerifiedMessage />,
      },
      {
        path: "/verify-login",
        element: <LoginVerified />,
      },
      {
        path: "/access-denied",
        element: <AccessDenied />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
];