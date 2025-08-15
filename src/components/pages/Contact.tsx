import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6 text-[#569cd6]">Contact Me</h1>
      
      <div className="mb-6">
        <span className="text-[#608b4e]">// Get in touch</span>
      </div>
      
      <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#9cdcfe] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 bg-[#3c3c3c] border border-[#3e3e42] rounded-md text-[#d4d4d4] focus:outline-none focus:border-[#0078d4]"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#9cdcfe] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 bg-[#3c3c3c] border border-[#3e3e42] rounded-md text-[#d4d4d4] focus:outline-none focus:border-[#0078d4]"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#9cdcfe] mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-3 py-2 bg-[#3c3c3c] border border-[#3e3e42] rounded-md text-[#d4d4d4] focus:outline-none focus:border-[#0078d4] resize-none"
              placeholder="Your message here..."
            />
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-[#0e639c] text-white rounded-md hover:bg-[#1177bb] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-[#9cdcfe]">Other Ways to Connect</h3>
        <div className="space-y-2 text-[#d4d4d4]">
          <p>📧 Email: your.email@example.com</p>
          <p>💼 LinkedIn: linkedin.com/in/yourusername</p>
          <p>🐙 GitHub: github.com/yourusername</p>
          <p>🐦 Twitter: @yourusername</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
