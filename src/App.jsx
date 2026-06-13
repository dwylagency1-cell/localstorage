import { use } from "react"

function App() {
  const users = {
    user: 'Dekiru',
    age: 16
  }
  const user = localStorage.setItem('user', JSON.stringify(users))
  const getuser = localStorage.getItem('user')
  console.log(JSON.parse(getuser))
  
  
  return <div>
    <h1>localStorage</h1>
  </div>
}

export default App
