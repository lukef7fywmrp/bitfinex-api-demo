"use client";

import { Waveform } from "@uiball/loaders";

function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen pb-20">
      <Waveform size={40} lineWeight={3.5} speed={1} color="#3FE8BD" />
    </div>
  );
}

export default LoadingPage;
