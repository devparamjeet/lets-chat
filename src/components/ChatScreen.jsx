import React, { useEffect, useState } from 'react'
import { MoreVertical, Send } from 'lucide-react'
import { useNavigate, useOutletContext } from 'react-router-dom'

const ChatScreen = () => {

  let redirect = useNavigate();
  const { user, chatId, setChatId, friendName } = useOutletContext()


  const [newMessage, setNewMessage] = useState('')
  const [chats, setChats] = useState([])
  const [isNewMessageSent, setIsNewMessageSent] = useState(false)

  useEffect(() => {

    if (!chatId) redirect('/user')

    let token = JSON.parse(localStorage.getItem("user_token"))
    let fetchChats = async () => {
      let resp = await fetch('https://api.skillsvarz.com/api/messages/' + chatId, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      // console.log(resp);
      let res = await resp.json()
      // console.log(res);

      setChats(res);
    }

    fetchChats()
    setIsNewMessageSent(false)
  }, [chatId, isNewMessageSent])

  let you = (value) => {
    return (
      <div className="flex items-end gap-2" >
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={`https://ui-avatars.com/api/?name=${value.sender.name}`} alt={value.sender.name} />
        </div>

        <div className="bg-gray-800 px-3 py-2 rounded-lg max-w-xs">
          <p className="text-sm">{value.content}</p>
          <span className="text-[10px] text-gray-400">{new Date(value.createdAt).toLocaleTimeString()}</span>
        </div>
      </div>
    )
  }

  let me = (value) => {
    return (
      <div className="flex items-end justify-end gap-2" >
        <div className="bg-blue-600 px-3 py-2 rounded-lg max-w-xs text-right">
          <p className="text-sm">{value.content}</p>
          <span className="text-[10px] text-gray-400">{new Date(value.createdAt).toLocaleTimeString()}</span>

        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={`https://ui-avatars.com/api/?name=${value.sender.name}`} alt={value.sender.name} />
        </div>
      </div>
    )
  }

  let sendMessage = async () => {
    let token = JSON.parse(localStorage.getItem("user_token"))
    let resp = await fetch('https://api.skillsvarz.com/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ "chatId": chatId, "content": newMessage })
    })
    let res = await resp.json()

    if (resp.status === 200 || resp.status === 201) {
      setNewMessage("")
      setIsNewMessageSent(true)
    }
  }


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
            <h2 className="font-medium">{friendName}</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>

        {/* Menu Icon */}
        <MoreVertical className="cursor-pointer text-gray-300 hover:text-white" />
      </div>


      {/* 💬 Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {chats.map((value, index) => {
          return (
            <div key={index}>
              {value.sender._id === user._id ? me(value) : you(value)}
            </div>
          )
        })}

      </div>


      {/* ✍️ Input Section */}
      <div className="h-[70px] bg-gray-900 flex items-center gap-3 px-4 border-t border-gray-700">

        <input
          value={newMessage}
          type="text"
          placeholder="Type a message..."
          onChange={(e) => { setNewMessage(e.target.value) }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage()
          }
          }
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition" onClick={sendMessage}>
          <Send size={20} />
        </button>

      </div>

    </div>
  )
}


export default ChatScreen
