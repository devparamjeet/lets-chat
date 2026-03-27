import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentChatBox = ({ name, email, id, newChat, setChatId, value, setFriendName }) => {

    let redirect = useNavigate()
    // console.log(id);


    return (
        <div onClick={async () => {
            redirect('/user/chat')
            setFriendName(name)

            //jab new chat create hoga toh chat id return me milega
            if (newChat) {
                let chatId = await newChat(id);
                setChatId(chatId)
            }

            // recent chat value._id, set kar rahe hai
            else setChatId(value._id)
        }} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition">

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                    src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                    alt=""
                />
            </div>

            {/* Name + Last Message */}
            <div className="flex-1">
                <h2 className="text-sm font-medium">{name}</h2>
                <p className="text-xs text-gray-400 truncate">
                    {email}
                </p>
            </div>

            {/* Time */}
            <span className="text-xs text-gray-500">2m</span>
        </div>
    )
}

export default RecentChatBox
