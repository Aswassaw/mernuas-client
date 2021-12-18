import React from "react";
import useAuthStore from "../../hooks/auth/useAuthStore";
import AlertVerified from "../../components/molecules/AlertVerified";

export default function Home() {
  const { user } = useAuthStore();

  return (
    <div className="container-lg my-4">
      <AlertVerified user={user} />

      <h1>Home</h1>
    </div>
  );
}
