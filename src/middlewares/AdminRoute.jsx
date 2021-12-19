import React from "react";
import { Navigate } from "react-router";

export default function AdminRoute({
  isAuthenticated,
  children,
  role = "user",
}) {
  return (
    <>
      {/* filter untuk page yang dilindungi */}
      {role === "admin" && (
        <>
          {isAuthenticated && children}
          {!isAuthenticated && <Navigate to="/login" />}
        </>
      )}

      {/* filter untuk page yang tidak dilindungi */}
      {!role !== "admin" && (
        <>
          {!isAuthenticated && <Navigate to="/login" />}
          {isAuthenticated && <Navigate to="/home" />}
        </>
      )}
    </>
  );
}
