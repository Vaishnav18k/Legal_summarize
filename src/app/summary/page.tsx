// // app/summary/page.tsx
// "use client";
// import { useEffect, useState } from "react";

// export default function SummaryPage() {
//   const [summaryData, setSummaryData] = useState<any>(null);

//   useEffect(() => {
//     const data = localStorage.getItem("summaryData");
//     if (data) {
//       setSummaryData(JSON.parse(data));
//       // Clear localStorage after retrieval
//       localStorage.removeItem("summaryData");
//     } else {
//       // Redirect back if no data
//     //   window.location.href = "/";
//     }
//   }, []);

//   if (!summaryData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Generated Summary</h1>
//       <p>
//         <strong>File:</strong> {summaryData.fileName}
//       </p>
//       <p>
//         <strong>Summary Style:</strong> {summaryData.summaryStyle.name}
//       </p>
//       {/* Add your summary display logic here */}
//     </div>
//   );
// }
'use client';   
import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, MessageSquare, FileText, Sparkles, Send } from 'lucide-react';

const LegalAIChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [showSummary, setShowSummary] = useState(true); // Default: summary visible (FireShot Capture 022)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
           
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Legal AI Chat Interface</h1>
              {/* <p className="text-sm text-gray-500">ABC Corporation Ltd. v. XYZ Industries Pvt. Ltd.</p> */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSummary}
              className="flex items-center gap-2 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
            >
              {showSummary ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSummary ? 'Hide Summary' : 'Show Summary'}
            </button>
          </div>
        </div>
        {/* <div className="flex gap-2 mt-4">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 text-xs">
            ABC Corporation Ltd.
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs">
            Citizens Rights Foundation
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-xs">
            State
          </button>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Section */}
        <div className={`bg-white flex flex-col ${showSummary ? 'w-1/2' : 'w-full'} border-r border-gray-200 transition-all duration-300`}>
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Legal AI Assistant 
            </h2>
            <p className="text-sm text-gray-600 mt-1">Ask questions about the legal judgment</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="flex gap-3 justify-start">
                <div className="flex gap-3 max-w-[85%] flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg px-4 py-3 bg-gray-100 text-gray-900 border border-gray-200">
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      Hello! I'm your Legal AI Assistant powered by GPT. I have access to this legal judgment and can help you understand complex legal concepts, analyze arguments, and explore the implications of the court's decision. Feel free to ask me anything about this case!
                    </div>
                    <div className="text-xs mt-2 text-gray-500">22:49:47</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <input
                className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white"
                placeholder="Ask about legal concepts, precedents, implications..."
                value={message}
                onChange={handleInputChange}
              />
              <button
                className="inline-flex items-center color-white justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-500 text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4"
                disabled={!message}
              >
                <Send className="h-4 w-4 " />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Sparkles className="h-3 w-3" />
                <span>Powered by GPT-4o</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Summary Section */}
        {showSummary && (
          <div className="w-1/2 bg-white flex flex-col transition-all duration-300">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Case Summary & Analysis
              </h2>
              <p className="text-sm text-gray-600 mt-1">Detailed breakdown of the legal judgment</p>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="prose prose-sm max-w-none text-gray-700">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Legal Judgment Summary</h1>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Case Overview</h2>
                <p>
                  <strong className="font-semibold text-gray-900">ABC Corporation Ltd. v. XYZ Industries Pvt. Ltd.</strong> is a Supreme Court commercial dispute case involving breach of contract and damages. The case arose from a supply agreement for industrial equipment worth Rs. 50 lakhs, where the respondent failed to deliver within the stipulated 90-day period.
                </p>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Key Legal Issues</h2>
                <p>The court addressed three primary issues:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Whether delayed delivery constitutes fundamental breach</li>
                  <li>Appropriate damage measures for commercial contracts</li>
                  <li>The validity of COVID-19 related force majeure claims</li>
                </ul>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Court's Decision</h2>
                <p>The Supreme Court ruled in favor of the appellant, awarding:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong className="font-semibold text-gray-900">Rs. 20 lakhs</strong> in damages</li>
                  <li><strong className="font-semibold text-gray-900">8% annual interest</strong> from the date of filing</li>
                  <li><strong className="font-semibold text-gray-900">Rs. 50,000</strong> in costs</li>
                </ul>
                <p>The court rejected the respondent's force majeure defense, emphasizing that commercial contracts require strict timeline adherence.</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Legal Principles Established</h2>
                <p>This judgment establishes several important precedents:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong className="font-semibold text-gray-900">Time is of the essence</strong> in commercial contracts unless expressly stated otherwise</li>
                  <li><strong className="font-semibold text-gray-900">Force majeure requires specific proof</strong> of impediment - general claims are insufficient</li>
                  <li><strong className="font-semibold text-gray-900">Damages should compensate</strong> for actual losses and reasonable consequences of breach</li>
                </ul>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Precedents Cited</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong className="font-semibold text-gray-900">Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)</strong> - regarding frustration of contract</li>
                  <li><strong className="font-semibold text-gray-900">Murlidhar Chiranjilal v. Harishchandra Dwarkadas (1962)</strong> - regarding damages in commercial contracts</li>
                  <li><strong className="font-semibold text-gray-900">Energy Watchdog v. Central Electricity Regulatory Commission (2017)</strong> - regarding force majeure</li>
                </ul>
                <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Impact and Implications</h2>
                <p>This judgment reinforces the importance of contractual obligations in commercial relationships and sets a precedent for similar breach of contract cases in the commercial sphere. It emphasizes the need for businesses to:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Honor delivery timelines in commercial contracts</li>
                  <li>Provide specific evidence when claiming force majeure</li>
                  <li>Understand the financial consequences of contract breaches</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalAIChat;