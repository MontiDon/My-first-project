import React, {useEffect, useState} from "react";

const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType =  {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
export const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}
export const Chat: React.FC = () => {
    return (
        <div>
            <Messages/>
            <MessageForm/>
        </div>
    )
}
export const Messages: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(()=>{
        wsChanel.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m, index) => <Message message={m} key={index}/>)}
        </div>
    )
}
export const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <>
            <img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </>
    )
}


export const MessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        if (!message) {
            return
        } else
        wsChanel.send(message)
        setMessage('')
    }
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}