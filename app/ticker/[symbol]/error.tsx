"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Countdown from "react-countdown";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-white/90">
      <h2>Oops! Your getting rate limited. Please refresh the page in</h2>
      <Countdown date={Date.now() + 10000}>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => window.location.reload()
          }
        >
          Refresh
        </button>
      </Countdown>
    </div>
  );
}
