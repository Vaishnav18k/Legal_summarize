// pages/legal-ai-chat.tsx (or components/LegalAIChat.tsx)
import React, { useState, ChangeEvent, MouseEvent } from 'react';

// Define interfaces for props (customize as needed)
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

// Custom Button component with typed props
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);

// Custom Input component with typed props
const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
  />
);

// Main Legal AI Chat component
const LegalAIChat: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Message sent:', inputValue);
    setInputValue('');
  };

  const handleBackToHome = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Navigating back to home');
    // Add navigation logic, e.g., using Next.js router
  };

  const handleHideSummary = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Hiding summary');
    // Add logic to toggle summary visibility
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={handleBackToHome} className="h-9 rounded-md px-3 flex items-center gap-2 hover:bg-accent hover:text-accent-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Legal AI Chat Interface</h1>
              <p className="text-sm text-gray-500">ABC Corporation Ltd. v. XYZ Industries Pvt. Ltd.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleHideSummary}
              className="h-9 rounded-md px-3 flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
              Hide Summary
            </Button>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="h-9 rounded-md px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90">
            ABC Corporation Ltd.
          </Button>
          <Button className="h-9 rounded-md px-3 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            Citizens Rights Foundation
          </Button>
          <Button className="h-9 rounded-md px-3 text-xs border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            State
          </Button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Section */}
        <div className="bg-white flex flex-col w-1/2 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-600"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Legal AI Assistant
            </h2>
            <p className="text-sm text-gray-600 mt-1">Ask questions about the legal judgment</p>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <div className="flex gap-3 justify-start">
                <div className="flex gap-3 max-w-[85%] flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                  </div>
                  <div className="rounded-lg px-4 py-3 bg-gray-100 text-gray-900 border border-gray-200">
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      Hello! I'm your Legal AI Assistant powered by GPT. I have access to this legal judgment and can help
                      you understand complex legal concepts, analyze arguments, and explore the implications of the court's
                      decision. Feel free to ask me anything about this case!
                    </div>
                    <div className="text-xs mt-2 text-gray-500">23:46:33</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Ask about legal concepts, precedents, implications..."
                className="flex-1 bg-white"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="h-9 rounded-md px-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                <span>Powered by GPT-4o</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Summary Section */}
        <div className="w-1/2 bg-white flex flex-col">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-green-600"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              Case Summary & Analysis
            </h2>
            <p className="text-sm text-gray-600 mt-1">Detailed breakdown of the legal judgment</p>
          </div>
          <div className="flex-1 overflow-auto p-6">
            <div className="prose prose-sm max-w-none">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Legal Judgment Summary</h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Case Overview</h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                <strong className="font-semibold text-gray-900">ABC Corporation Ltd. v. XYZ Industries Pvt. Ltd.</strong>{' '}
                is a Supreme Court commercial dispute case involving breach of contract and damages. The case arose from a
                supply agreement for industrial equipment worth Rs. 50 lakhs, where the respondent failed to deliver
                within the stipulated 90-day period.
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Key Legal Issues</h2>
              <p className="mb-4 leading-relaxed text-gray-700">The court addressed three primary issues:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className="mb-1">Whether delayed delivery constitutes fundamental breach</li>
                <li className="mb-1">Appropriate damage measures for commercial contracts</li>
                <li className="mb-1">The validity of COVID-19 related force majeure claims</li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Court's Decision</h2>
              <p className="mb-4 leading-relaxed text-gray-700">The Supreme Court ruled in favor of the appellant, awarding:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Rs. 20 lakhs</strong> in damages
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">8% annual interest</strong> from the date of filing
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Rs. 50,000</strong> in costs
                </li>
              </ul>
              <p className="mb-4 leading-relaxed text-gray-700">
                The court rejected the respondent's force majeure defense, emphasizing that commercial contracts require
                strict timeline adherence.
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Legal Principles Established</h2>
              <p className="mb-4 leading-relaxed text-gray-700">This judgment establishes several important precedents:</p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Time is of the essence</strong> in commercial contracts
                  unless expressly stated otherwise
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Force majeure requires specific proof</strong> of
                  impediment - general claims are insufficient
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Damages should compensate</strong> for actual losses and
                  reasonable consequences of breach
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Precedents Cited</h2>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)</strong>{' '}
                  - regarding frustration of contract
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Murlidhar Chiranjilal v. Harishchandra Dwarkadas (1962)</strong>{' '}
                  - regarding damages in commercial contracts
                </li>
                <li className="mb-1">
                  <strong className="font-semibold text-gray-900">Energy Watchdog v. Central Electricity Regulatory Commission
                  (2017)</strong>{' '}
                  - regarding force majeure
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Impact and Implications</h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                This judgment reinforces the importance of contractual obligations in commercial relationships and sets a
                precedent for similar breach of contract cases in the commercial sphere. It emphasizes the need for
                businesses to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li className="mb-1">Honor delivery timelines in commercial contracts</li>
                <li className="mb-1">Provide specific evidence when claiming force majeure</li>
                <li className="mb-1">Understand the financial consequences of contract breaches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAIChat;