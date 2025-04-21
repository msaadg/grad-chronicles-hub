import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Folder } from "lucide-react";

const ManageDocuments = () => {
  const [hasDocuments, setHasDocuments] = useState(false);
  const documents = [
    {
      id: "1",
      title: "CS101 Midterm Notes",
      course: "Computer Science 101",
      uploadDate: "2024-02-22",
      downloads: 120,
    },
    // Add more dummy docs for better look if needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-white via-[#f5f0ff] to-[#f6f6f7]">
      <Navbar isLoggedIn={true} />
      <main className="flex-grow pt-7 pb-10">
        <div className="page-container">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Document Manager</h1>
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden mb-12">
            <div className="flex flex-wrap justify-between items-center px-6 pt-6 pb-3 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Your Uploaded Documents</h2>
                <p className="text-gray-500 text-base mt-1">Manage, edit, or delete your shared study materials.</p>
              </div>
              <button className="primary-btn py-2.5 px-7 font-semibold text-base">
                Upload New Document
              </button>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-base">
                <thead>
                  <tr className="bg-[#f7f7f8] text-gray-900 font-extrabold text-[15px] border-b border-gray-100">
                    <th className="px-6 py-4"><input type="checkbox" className="w-4 h-4" /></th>
                    <th className="py-4 text-left">Title</th>
                    <th className="py-4 text-left">Course</th>
                    <th className="py-4 text-left">Upload Date</th>
                    <th className="py-4 text-left">Downloads</th>
                    <th className="py-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {!hasDocuments ? (
                    <tr>
                      <td colSpan={6} className="py-14 text-center">
                        <img
                          src="/lovable-uploads/e1eebe85-ec9f-40d3-bb3c-fbab3cc3c524.png"
                          alt="No documents"
                          className="w-32 h-32 mx-auto mb-3"
                        />
                        <div className="mb-1 text-xl font-semibold text-neutral-700">No Documents Uploaded Yet</div>
                        <p className="text-gray-500 mb-2">
                          Start sharing with your peers! Upload your first set of notes or exams.
                        </p>
                        <button className="primary-btn mt-2">Upload Document</button>
                      </td>
                    </tr>
                  ) : (
                    documents.map((doc) => (
                      <tr key={doc.id} className="border-b border-gray-100">
                        <td className="px-6 py-3">
                          <input type="checkbox" className="w-4 h-4" />
                        </td>
                        <td className="py-3 font-semibold">{doc.title}</td>
                        <td className="py-3">{doc.course}</td>
                        <td className="py-3">{doc.uploadDate}</td>
                        <td className="py-3">{doc.downloads}</td>
                        <td className="py-3 flex gap-2">
                          <button className="px-4 py-1 bg-brand-purple text-white text-sm rounded-full hover:bg-brand-purple-dark font-medium transition-colors">
                            Edit
                          </button>
                          <button className="px-4 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 font-medium transition-colors">
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
