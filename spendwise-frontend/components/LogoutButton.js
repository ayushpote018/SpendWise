"use client"; // Required for interactivity

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}
