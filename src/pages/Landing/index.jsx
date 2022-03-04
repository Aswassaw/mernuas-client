import React, { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    document.title = "Mernuas - Landing";
  }, []);

  return (
    <div className="container-md my-4">
      <h1>Landing Page</h1>
    </div>
  );
}
