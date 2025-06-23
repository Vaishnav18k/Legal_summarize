// app/summary/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function SummaryPage() {
  const [summaryData, setSummaryData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("summaryData");
    if (data) {
      setSummaryData(JSON.parse(data));
      // Clear localStorage after retrieval
      localStorage.removeItem("summaryData");
    } else {
      // Redirect back if no data
    //   window.location.href = "/";
    }
  }, []);

  if (!summaryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Generated Summary</h1>
      <p>
        <strong>File:</strong> {summaryData.fileName}
      </p>
      <p>
        <strong>Summary Style:</strong> {summaryData.summaryStyle.name}
      </p>
      {/* Add your summary display logic here */}
    </div>
  );
}