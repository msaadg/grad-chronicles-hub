import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import DocumentCard from '@/components/DocumentCard';
import { FileText, Compass, Search, Sparkles, Clock, BookOpen } from 'lucide-react';

const Home = () => {
  const recentlyViewedDocs = [
    {
      id: '1',
      title: 'CS101 Midterm Notes',
      course: 'Computer Science 101',
      rating: 4.5,
      totalRating: 5,
      imageUrl: '/images/cs-notes.jpg'
    },
    {
      id: '2',
      title: 'Math101 Final Exam',
      course: 'Mathematics 101',
      rating: 4.7,
      totalRating: 5,
      imageUrl: '/images/math-exam.jpg'
    },
    {
      id: '3',
      title: 'History202 Project',
      course: 'History 202',
      rating: 4.8,
      totalRating: 5,
      imageUrl: '/images/history-project.jpg'
    }
  ];

  const recommendedDocs = [
    {
      id: '4',
      title: 'CS101: Introduction to Programming',
      course: '15 Notes, 5 Exams',
      rating: 4.9,
      totalRating: 5,
    },
    {
      id: '5',
      title: 'BIO201: Biology Basics',
      course: '10 Notes, 8 Exams',
      rating: 4.5,
      totalRating: 5,
    },
    {
      id: '6',
      title: 'ENG101: English Literature',
      course: '12 Notes, 3 Exams',
      rating: 4.2,
      totalRating: 5,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <main className="flex-grow pb-16">
        <div className="page-container pt-8">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 shadow-sm border border-purple-100 mb-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-brand-purple/10 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-brand-purple" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Hi, Ali! Ready to learn?</h1>
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">Find notes, exams, assignments and collaborate with fellow students.</p>
                <SearchBar hasAdvancedFilters={true} />
              </div>
            </div>
          </div>
          
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Recently Viewed</h2>
            </div>
            
            {recentlyViewedDocs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12">
                <div className="max-w-md mx-auto text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">No Recently Viewed Documents</h3>
                  <p className="text-gray-500 mb-6">
                    You haven't viewed any documents yet. Start your learning journey by exploring our collection!
                  </p>
                  <Link
                    to="/search"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white font-medium rounded-full hover:bg-brand-purple-dark transition-all duration-300 hover:shadow-lg"
                  >
                    Browse Documents
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentlyViewedDocs.map(doc => (
                  <DocumentCard
                    key={doc.id}
                    id={doc.id}
                    title={doc.title}
                    course={doc.course}
                    rating={doc.rating}
                    totalRating={doc.totalRating}
                    imageUrl={doc.imageUrl}
                  />
                ))}
              </div>
            )}
          </section>
          
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Recommended for You</h2>
            </div>
            
            {recommendedDocs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12">
                <div className="max-w-md mx-auto text-center">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Compass className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">No Recommended Courses Yet</h3>
                  <p className="text-gray-500 mb-6">
                    As you explore more content, we'll provide personalized course recommendations just for you!
                  </p>
                  <Link
                    to="/search"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white font-medium rounded-full hover:bg-brand-purple-dark transition-all duration-300 hover:shadow-lg"
                  >
                    Discover Courses
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedDocs.map(doc => (
                  <div 
                    key={doc.id} 
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-semibold text-lg">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{doc.course}</p>
                    <div className="mt-6">
                      <Link
                        to={`/document/${doc.id}`}
                        className="block w-full text-center bg-brand-purple text-white py-2.5 rounded-lg hover:bg-brand-purple-dark transition-all duration-300 hover:shadow-lg"
                      >
                        Explore Course
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
