import React from "react";
import { Navigate } from "react-router";

export default function Auth({ isAuthenticated, children, protect = false }) {
  return (
    <>
      {/* filter untuk page yang dilindungi */}
      {protect && (
        <>
          {isAuthenticated && children}
          {!isAuthenticated && <Navigate to='/login' />}
        </>
      )}

      {/* filter untuk page yang tidak dilindungi */}
      {!protect && (
        <>
          {!isAuthenticated && children}
          {isAuthenticated && <Navigate to='/home' />}
        </>
      )}
    </>
  );
}
