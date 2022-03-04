import React, { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    document.title = "Mernuas - Admin";
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
