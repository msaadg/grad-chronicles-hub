
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Folder } from "lucide-react";

const ManageDocuments = () => {
  const [hasDocuments, setHasDocuments] = useState(false);
  // The document data here should reflect from API in real use
  const documents = [
    {
      id: "1",
      title: "CS101 Midterm Notes",
      course: "Computer Science 101",
      uploadDate: "2024-02-22",
      downloads: 120,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f7]">
      <Navbar isLoggedIn={true} />

      <main className="flex-grow pt-7 pb-8">
        <div className="page-container">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 leading-tight">
            Manage Your Documents
          </h1>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-0">
            {/* Search Bar */}
            <div className="p-5 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your documents by title or course..."
                  className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full mt-0 text-sm">
                <thead>
                  <tr className="bg-[#f7f7f8] text-gray-900 font-bold text-base border-b border-gray-100">
                    <th className="px-6 py-4 w-11">
                      <input type="checkbox" className="w-4 h-4" />
                    </th>
                    <th className="py-4 text-left font-extrabold">Title</th>
                    <th className="py-4 text-left font-extrabold">Course</th>
                    <th className="py-4 text-left font-extrabold">Upload Date</th>
                    <th className="py-4 text-left font-extrabold">Downloads</th>
                    <th className="py-4 text-left font-extrabold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!hasDocuments ? (
                    <tr>
                      <td colSpan={6} className="py-10 text-center">
                        <img
                          src="/lovable-uploads/e1eebe85-ec9f-40d3-bb3c-fbab3cc3c524.png"
                          alt="No documents"
                          className="w-32 h-32 mx-auto mb-5"
                        />
                        <div className="mb-2 text-lg font-medium text-gray-700">No documents uploaded yet. Start sharing!</div>
                        <button className="bg-brand-purple text-white px-7 py-2.5 rounded-full font-medium hover:bg-brand-purple-dark transition-colors mt-3">
                          Upload Document
                        </button>
                      </td>
                    </tr>
                  ) : (
                    documents.map((doc) => (
                      <tr key={doc.id} className="border-b border-gray-100">
                        <td className="px-6 py-4">
                          <input type="checkbox" className="w-4 h-4" />
                        </td>
                        <td className="py-4 font-medium">{doc.title}</td>
                        <td className="py-4">{doc.course}</td>
                        <td className="py-4">{doc.uploadDate}</td>
                        <td className="py-4">{doc.downloads} Downloads</td>
                        <td className="py-4">
                          <button className="px-4 py-1 bg-brand-purple text-white text-sm rounded-full mr-2 hover:bg-brand-purple-dark transition-colors font-medium">
                            Edit
                          </button>
                          <button className="px-4 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition-colors font-medium">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageDocuments;

