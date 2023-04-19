import { Page } from ".";

export const HomePage = () => <h1>Home</h1>;
export const LoginPage = () => <h1>Login</h1>;
export const ProfilePage = () => <h1>Profile</h1>;

export const pages: Page[] = [
  { path: "/", component: <HomePage />, isPublic: true },
  { path: "/login", component: <LoginPage />, isPublic: true },
  { path: "/profile", component: <ProfilePage />, isPublic: false },
];
