import './App.css'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001")

function App() {

  const sendMessage = () => {
    socket.emit()
  }

  return (
    <>
      <div>
        <input placeholder="Message" />
        <button onClick={sendMessage}>Send message</button>
      </div>
    </>
  )
}

export default App
