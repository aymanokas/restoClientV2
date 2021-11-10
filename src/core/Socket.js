import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const connectAsync = (url) => {
  return new Promise((resolve, reject) => {
    console.log(url)
    const socket = io(url)
    socket.on('connect', () => {
      resolve(socket)
    })
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`)
      reject(new Error('connect_error'))
      if (!socket.connected) socket.disconnect()
    })
    socket.on('connect_timeout', () => {
      reject(new Error('connect_timeout'))
      if (!socket.connected) socket.disconnect()
    })
    setTimeout(() => {
      reject(new Error('Request timed out'))
      if (!socket.connected) socket.disconnect()
    }, 1000)
  })
}
export const useSocket = () => {
  const [socket, setSocket] = useState(null)
  useEffect(async () => {
    for (let index = 1; index <= 255; index++) {
      try {
        const result = await connectAsync(`http://192.168.1.13:3000`, setSocket)
        setSocket(result)
        console.log(result)
        break
      } catch (err) {
        console.log(err)
      }
    }
  }, [])
  return (socket)
}
