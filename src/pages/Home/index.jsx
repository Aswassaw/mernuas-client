import React, { useEffect } from "react";
import useAuthStore from "../../hooks/auth/useAuthStore";
import AlertVerified from "../../components/molecules/AlertVerified";

export default function Home() {
  const { user } = useAuthStore();

  useEffect(() => {
    document.title = "Mernuas - Home";
  }, []);

  return (
    <div className="container-md my-4">
      <AlertVerified user={user} />

      <h1>Home</h1>
    </div>
  );
}
