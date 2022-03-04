import "./NotFound.css";
import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Mernuas - 404 Not Found";
  }, []);

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
