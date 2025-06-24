// // app/workspace/[workspaceId]/page.tsx
// "use client";
// import { useQuery } from "convex/react";
// import { api } from "../../../../convex/_generated/api";

// export default function WorkspacePage({ params }: { params: { workspaceId: string } }) {
//   const files = useQuery(api.workspaces.getWorkspaceFiles, {
//     workspaceId: params.workspaceId as any,
//   });

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Workspace Files</h1>
      
//       {files && files.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {files.map(file => (
//             <div key={file._id} className="border rounded-lg p-4">
//               <h3 className="font-semibold truncate">{file.fileName}</h3>
//               <p className="text-sm text-gray-500">
//                 {new Date(file.uploadedAt).toLocaleDateString()}
//               </p>
//               <a 
//                 href={file.fileUrl} 
//                 target="_blank"
//                 className="text-blue-600 hover:underline mt-2 inline-block"
//               >
//                 View File
// app/workspace/[workspaceId]/page.tsx
import WorkspaceClient from "./WorkspaceClient";

export default function WorkspacePage() {
  return <div>Test</div>;
}