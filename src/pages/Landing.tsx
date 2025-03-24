
import { Link } from 'react-router-dom';
import { MessageSquare, Download, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center animate-enter">
              <h1 className="text-4xl font-bold mb-6">Your Hub for Collaborative Learning</h1>
              <p className="text-xl text-gray-600 mb-8">Share notes, ask questions, and ace your courses</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link to="/signup" className="primary-btn">
                  Get Started
                </Link>
                <Link to="/features" className="secondary-btn">
                  Learn More
                </Link>
              </div>
              
              <div className="max-w-xl mx-auto">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<MessageSquare className="w-6 h-6" />}
                title="Ask Questions, Get Answers"
                description="Our AI chatbot helps you find answers from uploaded course materials."
              />
              
              <FeatureCard 
                icon={<Download className="w-6 h-6" />}
                title="Share & Discover Resources"
                description="Upload your notes and rate others' contributions to find the best materials."
              />
              
              <FeatureCard 
                icon={<Users className="w-6 h-6" />}
                title="Collaborate with Peers"
                description="Discuss documents, leave comments, and learn together."
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard 
                name="Ali"
                major="CS Major"
                rating={4}
                testimonial="Grad Chronicles helped me ace my midterms!"
              />
              
              <TestimonialCard 
                name="Emma"
                major="Biology Major"
                rating={5}
                testimonial="The best platform for finding quality study materials."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to take your learning to the next level?</h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup" className="primary-btn">
                  Sign Up Now
                </Link>
                <Link to="/features" className="secondary-btn">
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
