import React from 'react'
import { MoreVertical, Send } from 'lucide-react'

const ChatScreen = () => {
  return (
    <div className="border-l border-neutral-600 w-full h-screen flex flex-col bg-[#0f172a] text-white">

      {/* 🔝 Header */}
      <div className="h-[70px] bg-gray-900 flex items-center justify-between px-4 border-b border-gray-700">
        
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Friend&background=random"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-medium">Friend Name</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>

        {/* Menu Icon */}
        <MoreVertical className="cursor-pointer text-gray-300 hover:text-white" />
      </div>


      {/* 💬 Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Friend Message */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Friend" alt="" />
          </div>

          <div className="bg-gray-800 px-3 py-2 rounded-lg max-w-xs">
            <p className="text-sm">Hey bro, kya haal hai?</p>
            <span className="text-[10px] text-gray-400">10:30 AM</span>
          </div>
        </div>

        {/* My Message */}
        <div className="flex items-end justify-end gap-2">
          <div className="bg-blue-600 px-3 py-2 rounded-lg max-w-xs text-right">
            <p className="text-sm">Sab badhiya! Tu bata?</p>
            <span className="text-[10px] text-gray-200">10:32 AM</span>
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Me" alt="" />
          </div>
        </div>

      </div>


      {/* ✍️ Input Section */}
      <div className="h-[70px] bg-gray-900 flex items-center gap-3 px-4 border-t border-gray-700">
        
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition">
          <Send size={20} />
        </button>

      </div>

    </div>
  )
}

export default ChatScreen
