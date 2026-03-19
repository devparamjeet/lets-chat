import React from 'react'
import RecentChatBox from './RecentChatBox'

const Sidebar = ({ user }) => {


    return (
        <div className="w-[20%] h-screen bg-[#111827] text-white flex flex-col">

            {/* 🔍 Search Bar */}
            <div className="p-3 border-b border-gray-700">
                <input
                    type="search"
                    placeholder="Search chats..."
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* 💬 Recent Chats */}
            <div className="flex-1 overflow-y-auto p-2">
                <h2 className="text-gray-400 text-sm px-2 mb-2">Recent Chats</h2>

                <RecentChatBox name="Rahul" />
                <RecentChatBox name="Aman" />
                <RecentChatBox name="Priya" />
            </div>

            {/* 👤 User Profile */}
            <div className="h-[70px] bg-gray-900 flex items-center gap-3 px-3 border-t border-gray-700">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
                        alt=""
                    />
                </div>
                <h2 className="font-medium">{user.name}</h2>
            </div>

        </div>

    )
}

export default Sidebar
