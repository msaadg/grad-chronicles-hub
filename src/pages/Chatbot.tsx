
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, Search, FileText } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#f6f6f7]">
      <Navbar isLoggedIn={true} />
      <main className="flex-grow flex flex-col lg:flex-row pt-6 page-container pb-0">
        {/* Chat Area */}
        <div className="bg-white rounded-xl shadow-sm flex flex-col flex-1 mr-0 lg:mr-10 px-0">
          <div className="flex-1 p-6">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-8">
                <div className={`flex ${msg.sender === "user" ? "justify-start" : "justify-start"}`}>
                  {msg.sender === "user" ? (
                    <div>
                      <div className="text-sm font-semibold text-gray-900">You</div>
                      <div className="text-xs text-gray-500">{msg.time}</div>
                      <div className="mt-2 text-base text-gray-900">{msg.text}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center gap-2">
                        <img src="/lovable-uploads/1b34b279-e8d9-4525-b7b6-54954be60966.png" className="w-7 h-7 rounded-full" alt="Chatbot" />
                        <span className="text-sm font-semibold text-gray-900">Chatbot</span>
                      </div>
                      <div className="text-xs text-gray-500">{msg.time}</div>
                      <div className="mt-2 text-base text-gray-900">{msg.text}</div>
                      {/* Demo source/link */}
                      <button className="text-brand-purple underline mt-3 text-sm">Show Sources</button>
                      <div className="mt-2">
                        <div className="font-bold">CS101 Midterm Notes</div>
                        <div className="text-gray-700 text-sm">Recursion is an important concept in midterms. Here are some example questions...</div>
                        <button className="mt-1 px-5 py-2 rounded-full bg-brand-purple text-white hover:bg-brand-purple-dark transition-colors font-medium text-base shadow" style={{marginTop: 10}}>View Document</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-center text-brand-purple text-sm">Chatbot is typing...</div>
            )}
          </div>
          <div className="p-6 border-t border-gray-100">
            <form
              className="flex items-center gap-3"
              onSubmit={e => {
                e.preventDefault();
                if (input.trim() !== "") {
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
                className="flex-1 bg-[#f7f7f8] border border-gray-200 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button
                className="bg-brand-purple text-white rounded-full px-7 py-3 flex items-center gap-2 font-medium hover:bg-brand-purple-dark transition"
                type="submit"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </form>
          </div>
          {/* Responsive hint */}
          <div className="pb-2 text-center text-xs text-brand-purple font-medium">{isTyping && "Chatbot is typing..."}</div>
        </div>
        {/* Info Panel */}
        <aside className="w-full lg:w-96 mt-8 lg:mt-0">
          <div className="bg-[#faf9fb] rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">How Can I Help You?</h2>
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-lg flex items-center gap-4 p-4 shadow-sm">
                <div className="bg-brand-purple/10 p-2 rounded-full">
                  <Search className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Find Relevant Documents</div>
                  <div className="text-sm text-gray-500">
                    Ask questions, and I'll find the most relevant documents for you.
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg flex items-center gap-4 p-4 shadow-sm">
                <div className="bg-brand-purple/10 p-2 rounded-full">
                  <svg width={24} height={24} fill="none" stroke="#9b87f5" strokeWidth={2} viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
                </div>
                <div>
                  <div className="font-semibold">Get Instant Answers</div>
                  <div className="text-sm text-gray-500">
                    I'll provide quick answers based on uploaded course materials.
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg flex items-center gap-4 p-4 shadow-sm">
                <div className="bg-brand-purple/10 p-2 rounded-full">
                  <FileText className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <div className="font-semibold">Cite Sources</div>
                  <div className="text-sm text-gray-500">
                    Every answer includes references to the documents I used.
                  </div>
                </div>
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

