
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, Search, FileText, Compass } from "lucide-react";

const MOCK_MESSAGES = [
  {
    sender: "user",
    text: "What are the main topics covered in CS101 midterm?",
    time: "2 hours ago"
  },
  {
    sender: "bot",
    text: "The midterm covers topics like data structures, recursion, and sorting algorithms.",
    time: "2 hours ago"
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-white via-[#f5f0ff] to-[#f6f6f7]">
      <Navbar isLoggedIn={true} />
      <main className="flex-grow flex flex-col items-center justify-center page-container pb-0 pt-12">
        {/* Chat Area */}
        <div className="w-full lg:max-w-4xl bg-white rounded-2xl shadow-card flex flex-col min-h-[560px] mx-auto overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-brand-purple/10 to-white flex items-center px-8 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img src="/lovable-uploads/1b34b279-e8d9-4525-b7b6-54954be60966.png" className="w-10 h-10 rounded-full border-2 border-brand-purple" alt="Chatbot" />
              <h2 className="font-bold text-lg text-brand-purple">GradBot</h2>
            </div>
            <span className="ml-auto text-gray-500 text-sm font-medium">AI Study Assistant</span>
          </div>
          <div className="flex-1 px-6 py-6 overflow-y-auto custom-scrollbar bg-white flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}>
                <div className={`max-w-[70%] rounded-xl px-5 py-3 text-base ${msg.sender === "user" 
                  ? "bg-brand-purple text-white rounded-br-md shadow-lg"
                  : "bg-gray-100 text-gray-900 rounded-bl-md border border-gray-100 shadow"}`}>
                  <div className="flex items-center gap-1.5">
                    {msg.sender === "bot" && (
                      <img src="/lovable-uploads/1b34b279-e8d9-4525-b7b6-54954be60966.png" className="w-7 h-7 rounded-full" alt="Bot" />
                    )}
                    <span className="font-semibold">{msg.sender === "user" ? "You" : "GradBot"}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{msg.time}</div>
                  <div className="text-base">{msg.text}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-pulse mt-2">
                <div className="bg-gray-200 rounded-lg px-4 py-2 text-brand-purple">GradBot is typing...</div>
              </div>
            )}
          </div>
          <form
            className="flex gap-3 items-end p-6 border-t border-gray-100 bg-[#faf9fb]"
            onSubmit={e => {
              e.preventDefault();
              if (input.trim()) {
                setMessages([
                  ...messages,
                  { sender: "user", text: input, time: "now" },
                ]);
                setInput("");
                setIsTyping(true);
                setTimeout(() => setIsTyping(false), 1200);
              }
            }}
          >
            <input
              placeholder="Ask a question about your course..."
              className="flex-1 bg-[#f7f7f8] border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 text-base"
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
            />
            <button
              className="primary-btn flex items-center gap-2 text-white px-7 py-3 font-semibold rounded-full shadow hover:bg-brand-purple-dark transition"
              type="submit"
              disabled={!input.trim()}
            >
              <span>Send</span>
            </button>
          </form>
        </div>
        {/* Info Panel */}
        <aside className="w-full max-w-4xl mt-10">
          <div className="bg-white rounded-xl shadow-sm p-8 grid md:grid-cols-3 gap-7">
            <div className="flex flex-col items-center">
              <div className="bg-brand-purple/10 p-3 rounded-full mb-2">
                <Search className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="font-semibold text-lg">Find Relevant Documents</div>
              <div className="text-gray-500 text-sm mt-1 text-center">
                Ask questions and I'll help you find the perfect study notes fast.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-purple/10 p-3 rounded-full mb-2">
                <FileText className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="font-semibold text-lg">Get Summaries</div>
              <div className="text-gray-500 text-sm mt-1 text-center">
                I can generate quick, informative summaries from your course docs.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-brand-purple/10 p-3 rounded-full mb-2">
                <Compass className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="font-semibold text-lg">Show Sources</div>
              <div className="text-gray-500 text-sm mt-1 text-center">
                Every answer shows which documents were referenced for transparency.
              </div>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;

