
import { useState } from 'react';
import { Search, Upload, Folder } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ManageDocuments = () => {
  const [hasDocuments, setHasDocuments] = useState(true);
  
  // Example document data
  const documents = [
    {
      id: '1',
      title: 'CS101 Midterm Notes',
      course: 'Computer Science 101',
      uploadDate: '2024-02-22',
      downloads: 120
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow py-10">
        <div className="page-container">
          <h1 className="text-3xl font-bold mb-8">Manage Your Documents</h1>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your documents by title or course..."
                  className="w-full py-2.5 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            {hasDocuments ? (
              <>
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 text-gray-700 font-medium">
                  <div className="col-span-1"></div>
                  <div className="col-span-5">Title</div>
                  <div className="col-span-2">Course</div>
                  <div className="col-span-2">Upload Date</div>
                  <div className="col-span-1">Downloads</div>
                  <div className="col-span-1">Actions</div>
                </div>
                
                {/* Table Rows */}
                {documents.map(doc => (
                  <div key={doc.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center">
                    <div className="col-span-1">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple/20" />
                    </div>
                    <div className="col-span-5 font-medium">{doc.title}</div>
                    <div className="col-span-2 text-gray-600">{doc.course}</div>
                    <div className="col-span-2 text-gray-600">{doc.uploadDate}</div>
                    <div className="col-span-1 text-gray-600">{doc.downloads} Downloads</div>
                    <div className="col-span-1 flex space-x-2">
                      <button className="px-3 py-1 bg-brand-purple text-white text-sm rounded hover:bg-brand-purple-dark transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                  <Folder className="h-16 w-16 text-brand-purple/30" />
                </div>
                <h3 className="text-xl font-medium mb-2">No documents uploaded yet. Start sharing!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">Upload your study materials to share with the community and help others succeed.</p>
                <button className="bg-brand-purple text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-purple-dark transition-colors">
                  Upload Document
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ManageDocuments;
