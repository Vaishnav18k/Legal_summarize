import { SignIn, UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* <div className="border border-white p-6 rounded-md bg-teal-700"> */}
        {/* <SignIn/> */}

        {/* </div> */}
        <div className="container mx-auto px-4 py-8 bg-white">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-xl">
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
                  className="lucide lucide-scale h-8 w-8 text-white"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M7 21h10"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                LegalSummarize
              </h1>
            </div>
            {/* paragraph text-slate */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered legal judgment summarization for legal professionals.
              Upload, analyze, and interact with legal documents efficiently.
            </p>
            {/* paragraph text-slate end */}
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            {/* gradient card start */}
            {/* <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200"

              data-v0-t="card"

            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3
                  className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2 text-purple-900"

                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-sparkles h-5 w-5"

                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                  Try the Legal Chat Interface
                </h3>
                <p
                  className="text-sm text-purple-700"

                >
                  Experience our AI-powered legal assistant with sample
                  judgments - no upload required!
                </p>
              </div>
              <div className="p-6 pt-0" >
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"

                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-message-square h-4 w-4 mr-2"

                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Start Chatting with Legal AI
                </button>
              </div>
            </div> */}
            {/* gradient card */}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Upload Your Own Document</h2>
              <p className="text-gray-600">Or upload your own legal judgment for custom analysis</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Upload Judgment Card */}
              <div className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload h-5 w-5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                    Upload Judgment
                  </h3>
                  <p className="text-sm text-slate-500">Upload legal judgment files in PDF, DOC, or TXT format</p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div role="presentation" tabIndex={0} className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400">
                      <input
                        accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,text/plain,.txt"
                        tabIndex={-1}
                        type="file"
                        style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)', height: 1, margin: '-1px -1px -1px 0px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1, whiteSpace: 'nowrap' }}
                      />
                      <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload h-6 w-6 text-gray-600">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" x2="12" y1="3" y2="15"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-900">Upload judgment file</p>
                          <p className="text-sm text-gray-500 mt-1">Drag and drop or click to browse</p>
                          <p className="text-xs text-gray-400 mt-2">Supports PDF, DOC, DOCX, TXT (max 10MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summarization Style Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel h-5 w-5">
                      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
                      <path d="m16 16 6-6"></path>
                      <path d="m8 8 6-6"></path>
                      <path d="m9 7 8 8"></path>
                      <path d="m21 11-8-8"></path>
                    </svg>
                    Summarization Style
                  </h3>
                  <p className="text-sm text-muted-foreground">Choose the type of summary that best fits your needs</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-r1"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                  >
                    <span style={{ pointerEvents: 'none' }}>Select summarization style</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Generate Summary Button */}
            <div className="text-center">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 py-3 text-lg"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale h-5 w-5 mr-2">
                  <path d="M16 16 19 8 22 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M2 16 5 8 8 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M7 21h10"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                </svg>
                Generate Summary
              </button>
            </div>

            {/* Feature Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {/* Multi-Format Support */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload h-6 w-6 text-blue-600">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Multi-Format Support</h3>
                <p className="text-sm text-gray-600">Upload PDF, DOC, DOCX, and TXT files with automatic text extraction</p>
              </div>

              {/* GPT-Powered Analysis */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel h-6 w-6 text-green-600">
                    <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
                    <path d="m16 16 6-6"></path>
                    <path d="m8 8 6-6"></path>
                    <path d="m9 7 8 8"></path>
                    <path d="m21 11-8-8"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">GPT-Powered Analysis</h3>
                <p className="text-sm text-gray-600">Advanced AI trained to understand legal terminology and concepts</p>
              </div>

              {/* Interactive Chat */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-6 w-6 text-purple-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Interactive Chat</h3>
                <p className="text-sm text-gray-600">Chat with your summary, highlight key points, and add annotations</p>
              </div>
            </div>
          </div>

        </div>
      </div>
       </div>
    </>
  );
}
