// "use client";
// import { SignIn, UserButton } from "@stackframe/stack";
// import Image from "next/image";
// import * as React from "react";
// import { useEdgeStore } from "../lib/edgestore";
// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";

// export default function Home() {
//   const [file, setFile] = React.useState<File | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<{
//     name: string;
//     size: string;
//     url: string;
//   } | null>(null);
//   const { edgestore } = useEdgeStore();
//   const [progress, setProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [abortController, setAbortController] = useState<AbortController>();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   const [selectedSummaryStyle, setSelectedSummaryStyle] = useState<{
//     name: string;
//     description: string;
//     title: string;
//     content: string;
//   } | null>(null);
//   const storeFileMetadata = useMutation(api.edgeStorageFiles.storeFileMetadata);
//   const createWorkspace = useMutation(api.workspaces.createWorkspace);
//   const addFileToWorkspace = useMutation(api.workspaces.addFileToWorkspace);
  
//   const summaryStyles = [
//     {
//       name: "Concise",
//       description: "Brief overview with key points",
//       title: "Concise Summary",
//       content:
//         "Provides a brief overview highlighting the most important aspects of the judgment, including the final decision and key legal principles.",
//     },
//     {
//       name: "Detailed",
//       description: "Comprehensive analysis with context",
//       title: "Detailed Analysis",
//       content:
//         "Offers a comprehensive analysis including background, legal issues, court reasoning, precedents cited, and implications of the decision.",
//     },
//     {
//       name: "Key Arguments",
//       description: "Focus on legal arguments and reasoning",
//       title: "Key Arguments Focus",
//       content:
//         "Focuses specifically on the legal arguments presented by both parties, the court's reasoning, and the legal precedents that influenced the decision.",
//     },
//   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const selectStyle = (style: {
//     name: string;
//     description: string;
//     title: string;
//     content: string;
//   }) => {
//     setSelectedSummaryStyle(style);
//     setIsDropdownOpen(false);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       uploadFile(selectedFile);
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (e.dataTransfer.files?.[0]) {
//       const selectedFile = e.dataTransfer.files[0];
//       setFile(selectedFile);
//       uploadFile(selectedFile);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleClickUpload = () => {
//     fileInputRef.current?.click();
//   };

//   const uploadFile = async (fileToUpload: File) => {
//     setIsUploading(true);
//     setProgress(0);
//     const controller = new AbortController();
//     setAbortController(controller);

//     try {
//       const res = await edgestore.publicFiles.upload({
//         file: fileToUpload,
//         onProgressChange: (progress) => {
//           setProgress(progress);
//         },
//         signal: controller.signal,
//       });

//       setUploadedFile({
//         name: fileToUpload.name,
//         size: (fileToUpload.size / (1024 * 1024)).toFixed(2) + " MB",
//         url: res.url,
//       });
//     } catch (error) {
//       console.error("Upload failed:", error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleGenerateSummary = async () => {
//     if (!uploadedFile || !selectedSummaryStyle) return;

//     // Store data for the next page
//     localStorage.setItem(
//       "summaryData",
//       JSON.stringify({
//         fileUrl: uploadedFile.url,
//         fileName: uploadedFile.name,
//         summaryStyle: selectedSummaryStyle,
//       })
//     );

//     // Redirect to summary page
//     router.push("/summary");
//   };
  

//   return (
//     <>
//       <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ">
//           <div className="container mx-auto px-4 py-8 bg-blue-50">
//             <div className="text-center mb-12">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <div className="p-3 bg-blue-600 rounded-xl">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-scale h-8 w-8 text-white"
//                   >
//                     <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M7 21h10"></path>
//                     <path d="M12 3v18"></path>
//                     <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
//                   </svg>
//                 </div>
//                 <h1 className="text-4xl font-bold text-gray-900">
//                   LegalSummarize
//                 </h1>
//               </div>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 AI-powered legal judgment summarization for legal professionals.
//               </p>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Upload, analyze, and interact with legal documents efficiently.
//               </p>
//             </div>
//             <div className="max-w-4xl mx-auto mb-12"></div>

//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//                   Upload Your Own Document
//                 </h2>
//                 <p className="text-gray-600">
//                   Or upload your own legal judgment for custom analysis
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 {/* Upload Judgment Card */}
//                 <div
//                   className="rounded-lg bg-white shadow-sm border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors"
//                   data-v0-t="card"
//                 >
//                   <div className="flex flex-col space-y-1.5 p-6">
//                     <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-upload h-5 w-5"
//                       >
//                         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                         <polyline points="17 8 12 3 7 8"></polyline>
//                         <line x1="12" x2="12" y1="3" y2="15"></line>
//                       </svg>
//                       Upload Judgment
//                     </h3>
//                     <p className="text-sm text-slate-500">
//                       Upload legal judgment files in PDF, DOC, or TXT format
//                     </p>
//                   </div>
//                   <div className="p-6 pt-0">
//                     <div className="space-y-4">
//                       <div
//                         role="presentation"
//                         tabIndex={0}
//                         className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400"
//                         onClick={handleClickUpload}
//                         onDrop={handleDrop}
//                         onDragOver={handleDragOver}
//                       >
//                         <input
//                           ref={fileInputRef}
//                           accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,text/plain,.txt"
//                           tabIndex={-1}
//                           type="file"
//                           onChange={handleFileChange}
//                           style={{
//                             border: 0,
//                             clip: "rect(0px, 0px, 0px, 0px)",
//                             clipPath: "inset(50%)",
//                             height: 1,
//                             margin: "-1px -1px -1px 0px",
//                             overflow: "hidden",
//                             padding: 0,
//                             position: "absolute",
//                             width: 1,
//                             whiteSpace: "nowrap",
//                           }}
//                         />
//                         <div className="space-y-4">
//                           <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
//                             {isUploading ? (
//                               <div className="w-8 h-8 border-t-2 border-blue-600 rounded-full animate-spin"></div>
//                             ) : (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-upload h-6 w-6 text-gray-600"
//                               >
//                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                                 <polyline points="17 8 12 3 7 8"></polyline>
//                                 <line x1="12" x2="12" y1="3" y2="15"></line>
//                               </svg>
//                             )}
//                           </div>
//                           <div>
//                             <p className="text-lg font-medium text-gray-900">
//                               {isUploading
//                                 ? "Uploading..."
//                                 : "Upload judgment file"}
//                             </p>
//                             <p className="text-sm text-gray-500 mt-1">
//                               Drag and drop or click to browse
//                             </p>
//                             <p className="text-xs text-gray-400 mt-2">
//                               Supports PDF, DOC, DOCX, TXT (max 10MB)
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Upload progress bar */}
//                       {isUploading && (
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div
//                             className="bg-blue-600 h-2 rounded-full"
//                             style={{ width: `${progress}%` }}
//                           ></div>
//                         </div>
//                       )}

//                       {/* Uploaded file preview */}
//                       {uploadedFile && !isUploading && (
//                         <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <div className="font-medium">
//                                 {uploadedFile.name}
//                               </div>
//                               <div className="text-xs">{uploadedFile.size}</div>
//                             </div>
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="lucide lucide-check-circle h-5 w-5 text-green-600"
//                             >
//                               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                               <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                             </svg>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Summarization Style Card */}
//                 <div
//                   className="rounded-lg border border-slate-300 bg-white text-card-white shadow-sm"
//                   data-v0-t="card"
//                 >
//                   <div className="flex flex-col space-y-1.5 p-6">
//                     <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-gavel h-5 w-5"
//                       >
//                         <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
//                         <path d="m16 16 6-6"></path>
//                         <path d="m8 8 6-6"></path>
//                         <path d="m9 7 8 8"></path>
//                         <path d="m21 11-8-8"></path>
//                       </svg>
//                       Summarization Style
//                     </h3>
//                     <p className="text-sm text-slate-500">
//                       Choose the type of summary that best fits your needs
//                     </p>
//                   </div>
//                   <div className="p-6 pt-0 space-y-4">
//                     <div className="relative">
//                       <button
//                         type="button"
//                         onClick={toggleDropdown}
//                         className="flex h-10 w-full items-center justify-between rounded-md border border-slate-400 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-gray-400 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
//                       >
//                         <span className="text-black">
//                           {selectedSummaryStyle
//                             ? selectedSummaryStyle.name
//                             : "Select summarization style"}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="gray"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-chevron-down-icon h-4 w-4 lucide-chevron-down"
//                         >
//                           <path d="m6 9 6 6 6-6" />
//                         </svg>
//                       </button>
//                       {isDropdownOpen && (
//                         <div className="absolute z-40 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
//                           <ul className="py-1">
//                             {summaryStyles.map((style) => (
//                               <li
//                                 key={style.name}
//                                 onClick={() => selectStyle(style)}
//                                 className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                               >
//                                 <div className="font-medium text-black text-sm">
//                                   {style.name}
//                                 </div>
//                                 <div className="text-xs text-gray-500">
//                                   {style.description}
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                     {selectedSummaryStyle && (
//                       <div className="border border-blue-500 rounded-md p-4 bg-blue-50">
//                         <p className="text-blue-800 font-bold">
//                           {selectedSummaryStyle.title}{" "}
//                         </p>
//                         <p className="text-blue-800">
//                           {selectedSummaryStyle.content}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Generate Summary Button */}
//               <div className="text-center text-black">
//                 <button
//                   className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 py-3 text-lg ${
//                     uploadedFile && selectedSummaryStyle
//                       ? "bg-slate-900 text-white hover:bg-slate-700"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}
//                   disabled={!uploadedFile || !selectedSummaryStyle}
//                   onClick={handleGenerateSummary}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-scale h-5 w-5 mr-2"
//                   >
//                     <path d="M16 16 19 8 22 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M2 16 5 8 8 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M7 21h10"></path>
//                     <path d="M12 3v18"></path>
//                     <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
//                   </svg>
//                   Generate Summary
//                 </button>
//               </div>

//               {/* Feature Cards */}
//               <div className="mt-16 grid md:grid-cols-3 gap-6">
//                 {/* Multi-Format Support */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-upload h-6 w-6 text-blue-600"
//                     >
//                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                       <polyline points="17 8 12 3 7 8"></polyline>
//                       <line x1="12" x2="12" y1="3" y2="15"></line>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">Multi-Format Support</h3>
//                   <p className="text-sm text-gray-600">
//                     Upload PDF, DOC, DOCX, and TXT files with automatic text
//                     extraction
//                   </p>
//                 </div>

//                 {/* GPT-Powered Analysis */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-gavel h-6 w-6 text-green-600"
//                     >
//                       <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
//                       <path d="m16 16 6-6"></path>
//                       <path d="m8 8 6-6"></path>
//                       <path d="m9 7 8 8"></path>
//                       <path d="m21 11-8-8"></path>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">GPT-Powered Analysis</h3>
//                   <p className="text-sm text-gray-600">
//                     Advanced AI trained to understand legal terminology and
//                     concepts
//                   </p>
//                 </div>

//                 {/* Interactive Chat */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-message-square h-6 w-6 text-purple-600"
//                     >
//                       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">Interactive Chat</h3>
//                   <p className="text-sm text-gray-600">
//                     Chat with your summary, highlight key points, and add
//                     annotations
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }"use client";
// import { SignIn, UserButton } from "@stackframe/stack";
// import * as React from "react";
// import { useEdgeStore } from "../lib/edgestore";
// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import { Id } from "../../convex/_generated/dataModel";
// // import { Id } from "../../convex/index";

// export default function Home() {
//   const [file, setFile] = React.useState<File | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<{
//     name: string;
//     size: string;
//     url: string;
//     id?: Id<"edgeStorageFiles">; // Convex file ID
//     workspaceId?: Id<"workspaces">; // Convex workspace ID
//   } | null>(null);
//   const { edgestore } = useEdgeStore();
//   const [progress, setProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [abortController, setAbortController] = useState<AbortController>();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   const [selectedSummaryStyle, setSelectedSummaryStyle] = useState<{
//     name: string;
//     description: string;
//     title: string;
//     content: string;
//   } | null>(null);
  
//   // Convex mutations
//   const createWorkspace = useMutation(api.workspaces.createWorkspace);
//   const createFileMetadata = useMutation(api.edgeStorageFiles.createFileMetadata);
//   const addFileToWorkspace = useMutation(api.workspaces.addFileToWorkspace);
  
//   const summaryStyles = [
//     {
//       name: "Concise",
//       description: "Brief overview with key points",
//       title: "Concise Summary",
//       content:
//         "Provides a brief overview highlighting the most important aspects of the judgment, including the final decision and key legal principles.",
//     },
//     {
//       name: "Detailed",
//       description: "Comprehensive analysis with context",
//       title: "Detailed Analysis",
//       content:
//         "Offers a comprehensive analysis including background, legal issues, court reasoning, precedents cited, and implications of the decision.",
//     },
//     {
//       name: "Key Arguments",
//       description: "Focus on legal arguments and reasoning",
//       title: "Key Arguments Focus",
//       content:
//         "Focuses specifically on the legal arguments presented by both parties, the court's reasoning, and the legal precedents that influenced the decision.",
//     },
//   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const selectStyle = (style: {
//     name: string;
//     description: string;
//     title: string;
//     content: string;
//   }) => {
//     setSelectedSummaryStyle(style);
//     setIsDropdownOpen(false);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       uploadFile(selectedFile);
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (e.dataTransfer.files?.[0]) {
//       const selectedFile = e.dataTransfer.files[0];
//       setFile(selectedFile);
//       uploadFile(selectedFile);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleClickUpload = () => {
//     fileInputRef.current?.click();
//   };

//   const uploadFile = async (fileToUpload: File) => {
//     setIsUploading(true);
//     setProgress(0);
//     const controller = new AbortController();
//     setAbortController(controller);

//     try {
//       // Upload to Edge Storage
//       const res = await edgestore.publicFiles.upload({
//         file: fileToUpload,
//         onProgressChange: (progress) => {
//           setProgress(progress);
//         },
//         signal: controller.signal,
//       });

//       // Create a new workspace for this file
//       const workspaceId = await createWorkspace({
//         name: `Workspace for ${fileToUpload.name}`,
//         edgeStorageUrls: [res.url],
//         edgeStorageFiles: [],
//       });

//       // Create file metadata in Convex
//       const fileId = await createFileMetadata({
//         fileName: fileToUpload.name,
//         fileId: res.url, // Use res.url as the unique file identifier
//         fileUrl: res.url,
//         workspaceId,
//       });

//       // Add file reference to workspace
//       await addFileToWorkspace({
//         workspaceId,
//         fileId,
//       });

//       setUploadedFile({
//         name: fileToUpload.name,
//         size: (fileToUpload.size / (1024 * 1024)).toFixed(2) + " MB",
//         url: res.url,
//         id: fileId,
//         workspaceId,
//       });
//     } catch (error) {
//       console.error("Upload failed:", error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleGenerateSummary = async () => {
//     if (!uploadedFile || !selectedSummaryStyle) return;

//     // Store data for the next page
//     localStorage.setItem(
//       "summaryData",
//       JSON.stringify({
//         fileUrl: uploadedFile.url,
//         fileName: uploadedFile.name,
//         summaryStyle: selectedSummaryStyle,
//         fileId: uploadedFile.id,
//         workspaceId: uploadedFile.workspaceId,
//       })
//     );

//     // Redirect to summary page
//     router.push("/summary");
//   };

//   return (
//     <>
//       <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ">
//           <div className="container mx-auto px-4 py-8 bg-blue-50">
//             <div className="text-center mb-12">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <div className="p-3 bg-blue-600 rounded-xl">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-scale h-8 w-8 text-white"
//                   >
//                     <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M7 21h10"></path>
//                     <path d="M12 3v18"></path>
//                     <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
//                   </svg>
//                 </div>
//                 <h1 className="text-4xl font-bold text-gray-900">
//                   LegalSummarize
//                 </h1>
//               </div>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 AI-powered legal judgment summarization for legal professionals.
//               </p>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Upload, analyze, and interact with legal documents efficiently.
//               </p>
//             </div>
//             <div className="max-w-4xl mx-auto mb-12"></div>

//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-8">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//                   Upload Your Own Document
//                 </h2>
//                 <p className="text-gray-600">
//                   Or upload your own legal judgment for custom analysis
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 mb-8">
//                 {/* Upload Judgment Card */}
//                 <div
//                   className="rounded-lg bg-white shadow-sm border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors"
//                   data-v0-t="card"
//                 >
//                   <div className="flex flex-col space-y-1.5 p-6">
//                     <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-upload h-5 w-5"
//                       >
//                         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                         <polyline points="17 8 12 3 7 8"></polyline>
//                         <line x1="12" x2="12" y1="3" y2="15"></line>
//                       </svg>
//                       Upload Judgment
//                     </h3>
//                     <p className="text-sm text-slate-500">
//                       Upload legal judgment files in PDF, DOC, or TXT format
//                     </p>
//                   </div>
//                   <div className="p-6 pt-0">
//                     <div className="space-y-4">
//                       <div
//                         role="presentation"
//                         tabIndex={0}
//                         className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400"
//                         onClick={handleClickUpload}
//                         onDrop={handleDrop}
//                         onDragOver={handleDragOver}
//                       >
//                         <input
//                           ref={fileInputRef}
//                           accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,text/plain,.txt"
//                           tabIndex={-1}
//                           type="file"
//                           onChange={handleFileChange}
//                           style={{
//                             border: 0,
//                             clip: "rect(0px, 0px, 0px, 0px)",
//                             clipPath: "inset(50%)",
//                             height: 1,
//                             margin: "-1px -1px -1px 0px",
//                             overflow: "hidden",
//                             padding: 0,
//                             position: "absolute",
//                             width: 1,
//                             whiteSpace: "nowrap",
//                           }}
//                         />
//                         <div className="space-y-4">
//                           <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
//                             {isUploading ? (
//                               <div className="w-8 h-8 border-t-2 border-blue-600 rounded-full animate-spin"></div>
//                             ) : (
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="lucide lucide-upload h-6 w-6 text-gray-600"
//                               >
//                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                                 <polyline points="17 8 12 3 7 8"></polyline>
//                                 <line x1="12" x2="12" y1="3" y2="15"></line>
//                               </svg>
//                             )}
//                           </div>
//                           <div>
//                             <p className="text-lg font-medium text-gray-900">
//                               {isUploading
//                                 ? "Uploading..."
//                                 : "Upload judgment file"}
//                             </p>
//                             <p className="text-sm text-gray-500 mt-1">
//                               Drag and drop or click to browse
//                             </p>
//                             <p className="text-xs text-gray-400 mt-2">
//                               Supports PDF, DOC, DOCX, TXT (max 10MB)
//                             </p>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Upload progress bar */}
//                       {isUploading && (
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div
//                             className="bg-blue-600 h-2 rounded-full"
//                             style={{ width: `${progress}%` }}
//                           ></div>
//                         </div>
//                       )}

//                       {/* Uploaded file preview */}
//                       {uploadedFile && !isUploading && (
//                         <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <div className="font-medium">
//                                 {uploadedFile.name}
//                               </div>
//                               <div className="text-xs">{uploadedFile.size}</div>
//                             </div>
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="24"
//                               height="24"
//                               viewBox="0 0 24 24"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               className="lucide lucide-check-circle h-5 w-5 text-green-600"
//                             >
//                               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                               <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                             </svg>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Summarization Style Card */}
//                 <div
//                   className="rounded-lg border border-slate-300 bg-white text-card-white shadow-sm"
//                   data-v0-t="card"
//                 >
//                   <div className="flex flex-col space-y-1.5 p-6">
//                     <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-gavel h-5 w-5"
//                       >
//                         <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
//                         <path d="m16 16 6-6"></path>
//                         <path d="m8 8 6-6"></path>
//                         <path d="m9 7 8 8"></path>
//                         <path d="m21 11-8-8"></path>
//                       </svg>
//                       Summarization Style
//                     </h3>
//                     <p className="text-sm text-slate-500">
//                       Choose the type of summary that best fits your needs
//                     </p>
//                   </div>
//                   <div className="p-6 pt-0 space-y-4">
//                     <div className="relative">
//                       <button
//                         type="button"
//                         onClick={toggleDropdown}
//                         className="flex h-10 w-full items-center justify-between rounded-md border border-slate-400 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-gray-400 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
//                       >
//                         <span className="text-black">
//                           {selectedSummaryStyle
//                             ? selectedSummaryStyle.name
//                             : "Select summarization style"}
//                         </span>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="gray"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="lucide lucide-chevron-down-icon h-4 w-4 lucide-chevron-down"
//                         >
//                           <path d="m6 9 6 6 6-6" />
//                         </svg>
//                       </button>
//                       {isDropdownOpen && (
//                         <div className="absolute z-40 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
//                           <ul className="py-1">
//                             {summaryStyles.map((style) => (
//                               <li
//                                 key={style.name}
//                                 onClick={() => selectStyle(style)}
//                                 className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                               >
//                                 <div className="font-medium text-black text-sm">
//                                   {style.name}
//                                 </div>
//                                 <div className="text-xs text-gray-500">
//                                   {style.description}
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                     {selectedSummaryStyle && (
//                       <div className="border border-blue-500 rounded-md p-4 bg-blue-50">
//                         <p className="text-blue-800 font-bold">
//                           {selectedSummaryStyle.title}{" "}
//                         </p>
//                         <p className="text-blue-800">
//                           {selectedSummaryStyle.content}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Generate Summary Button */}
//               <div className="text-center text-black">
//                 <button
//                   className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 py-3 text-lg ${
//                     uploadedFile && selectedSummaryStyle
//                       ? "bg-slate-900 text-white hover:bg-slate-700"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}
//                   disabled={!uploadedFile || !selectedSummaryStyle}
//                   onClick={handleGenerateSummary}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-scale h-5 w-5 mr-2"
//                   >
//                     <path d="M16 16 19 8 22 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M2 16 5 8 8 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
//                     <path d="M7 21h10"></path>
//                     <path d="M12 3v18"></path>
//                     <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
//                   </svg>
//                   Generate Summary
//                 </button>
//               </div>

//               {/* Feature Cards */}
//               <div className="mt-16 grid md:grid-cols-3 gap-6">
//                 {/* Multi-Format Support */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-upload h-6 w-6 text-blue-600"
//                     >
//                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                       <polyline points="17 8 12 3 7 8"></polyline>
//                       <line x1="12" x2="12" y1="3" y2="15"></line>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">Multi-Format Support</h3>
//                   <p className="text-sm text-gray-600">
//                     Upload PDF, DOC, DOCX, and TXT files with automatic text
//                     extraction
//                   </p>
//                 </div>

//                 {/* GPT-Powered Analysis */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-gavel h-6 w-6 text-green-600"
//                     >
//                       <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
//                       <path d="m16 16 6-6"></path>
//                       <path d="m8 8 6-6"></path>
//                       <path d="m9 7 8 8"></path>
//                       <path d="m21 11-8-8"></path>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">GPT-Powered Analysis</h3>
//                   <p className="text-sm text-gray-600">
//                     Advanced AI trained to understand legal terminology and
//                     concepts
//                   </p>
//                 </div>

//                 {/* Interactive Chat */}
//                 <div className="text-center text-black p-6">
//                   <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-message-square h-6 w-6 text-purple-600"
//                     >
//                       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//                     </svg>
//                   </div>
//                   <h3 className="font-semibold mb-2">Interactive Chat</h3>
//                   <p className="text-sm text-gray-600">
//                     Chat with your summary, highlight key points, and add
//                     annotations
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



"use client";
import * as React from "react";
import { useEdgeStore } from "../lib/edgestore";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";


export default function Home() {
  const [file, setFile] = React.useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    url: string;
    id?: Id<"edgeStorageFiles">;
    workspaceId?: Id<"workspaces">;
  } | null>(null);
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [abortController, setAbortController] = useState<AbortController>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [selectedSummaryStyle, setSelectedSummaryStyle] = useState<{
    name: string;
    description: string;
    title: string;
    content: string;
  } | null>(null);
  
  const createWorkspace = useMutation(api.workspaces.createWorkspace);
  const createFileMetadata = useMutation(api.edgeStorageFiles.createFileMetadata);
  const addFileToWorkspace = useMutation(api.workspaces.addFileToWorkspace);
  
  const summaryStyles = [
    {
      name: "Concise",
      description: "Brief overview with key points",
      title: "Concise Summary",
      content: "Provides a brief overview highlighting the most important aspects of the judgment."
    },
    {
      name: "Detailed",
      description: "Comprehensive analysis with context",
      title: "Detailed Analysis",
      content: "Offers a comprehensive analysis including background, legal issues, and court reasoning."
    },
    {
      name: "Key Arguments",
      description: "Focus on legal arguments and reasoning",
      title: "Key Arguments Focus",
      content: "Focuses specifically on the legal arguments presented by both parties."
    },
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectStyle = (style: {
    name: string;
    description: string;
    title: string;
    content: string;
  }) => {
    setSelectedSummaryStyle(style);
    setIsDropdownOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      uploadFile(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      uploadFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const handleClickUpload = () => fileInputRef.current?.click();

  const uploadFile = async (fileToUpload: File) => {
    setIsUploading(true);
    setProgress(0);
    const controller = new AbortController();
    setAbortController(controller);

    try {
      // Upload to Edge Storage
      const res = await edgestore.publicFiles.upload({
        file: fileToUpload,
        onProgressChange: (progress) => setProgress(progress),
        signal: controller.signal,
      });

      // Create a new workspace for this file
      const workspaceId = await createWorkspace({
        name: `Workspace for ${fileToUpload.name}`,
        edgeStorageUrls: [res.url],
        edgeStorageFiles: [],
      });

      // Create file metadata in Convex
      const fileId = await createFileMetadata({
        fileName: fileToUpload.name,
        fileId: String(res.path),
        fileUrl: res.url,
        workspaceId,
      }) ;
      

      

      // Add file reference to workspace
      await addFileToWorkspace({
        workspaceId,
        fileId,
      });

      setUploadedFile({
        name: fileToUpload.name,
        size: (fileToUpload.size / (1024 * 1024)).toFixed(2) + " MB",
        url: res.url,
        id: fileId,
        workspaceId,
      });
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleGenerateSummary = async () => {
    if (!uploadedFile || !selectedSummaryStyle) return;

    localStorage.setItem("summaryData", JSON.stringify({
      fileUrl: uploadedFile.url,
      fileName: uploadedFile.name,
      summaryStyle: selectedSummaryStyle,
      fileId: uploadedFile.id,
      workspaceId: uploadedFile.workspaceId,
    }));

    router.push("/summary");
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-8 bg-blue-50">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale h-8 w-8 text-white">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                  <path d="M7 21h10"></path>
                  <path d="M12 3v18"></path>
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">LegalSummarize</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered legal judgment summarization for legal professionals.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload, analyze, and interact with legal documents efficiently.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Upload Your Own Document</h2>
              <p className="text-gray-600">Or upload your own legal judgment for custom analysis</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Upload Judgment Card */}
              <div className="rounded-lg bg-white shadow-sm border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors" data-v0-t="card">
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
                    <div
                      role="presentation"
                      tabIndex={0}
                      className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400"
                      onClick={handleClickUpload}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      <input
                        ref={fileInputRef}
                        accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,text/plain,.txt"
                        tabIndex={-1}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="space-y-4">
                        <div className="mx-auto w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          {isUploading ? (
                            <div className="w-8 h-8 border-t-2 border-blue-600 rounded-full animate-spin"></div>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload h-6 w-6 text-gray-600">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" x2="12" y1="3" y2="15"></line>
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-900">
                            {isUploading ? "Uploading..." : "Upload judgment file"}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Drag and drop or click to browse</p>
                          <p className="text-xs text-gray-400 mt-2">Supports PDF, DOC, DOCX, TXT (max 10MB)</p>
                        </div>
                      </div>
                    </div>

                    {isUploading && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                      </div>
                    )}

                    {uploadedFile && !isUploading && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{uploadedFile.name}</div>
                            <div className="text-xs">{uploadedFile.size}</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle h-5 w-5 text-green-600">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Summarization Style Card */}
              <div className="rounded-lg border border-slate-300 bg-white text-card-white shadow-sm" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl text-black font-semibold leading-none tracking-tight flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel h-5 w-5">
                      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
                      <path d="m16 16 6-6"></path>
                      <path d="m8 8 6-6"></path>
                      <path d="m9 7 8 8"></path>
                      <path d="m21 11-8-8"></path>
                    </svg>
                    Summarization Style
                  </h3>
                  <p className="text-sm text-slate-500">Choose the type of summary that best fits your needs</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="flex h-10 w-full items-center justify-between rounded-md border border-slate-400 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-gray-400 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                    >
                      <span className="text-black">
                        {selectedSummaryStyle ? selectedSummaryStyle.name : "Select summarization style"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon h-4 w-4 lucide-chevron-down">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-40 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                        <ul className="py-1">
                          {summaryStyles.map((style) => (
                            <li key={style.name} onClick={() => selectStyle(style)} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                              <div className="font-medium text-black text-sm">{style.name}</div>
                              <div className="text-xs text-gray-500">{style.description}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {selectedSummaryStyle && (
                    <div className="border border-blue-500 rounded-md p-4 bg-blue-50">
                      <p className="text-blue-800 font-bold">{selectedSummaryStyle.title}</p>
                      <p className="text-blue-800">{selectedSummaryStyle.content}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center text-black">
              <button
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 py-3 text-lg ${
                  uploadedFile && selectedSummaryStyle
                    ? "bg-slate-900 text-white hover:bg-slate-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!uploadedFile || !selectedSummaryStyle}
                onClick={handleGenerateSummary}
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

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {/* Feature cards remain the same */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}