import './App.css'
import { useState } from 'react';



function App() {

  const [ inputVal, setInputValue] = useState("")
  const [myList, setMyList] = useState([])


  const submitMyForm = (e)=> {
    e.preventDefault()
    if (inputVal != "") {
      setMyList([...myList, inputVal])
      setInputValue("")
    } else {
      alert("cant submit an empty field")
    }
  }

  return (
    <>
      <div>names of student in attendance:</div>

      <ul>
        {
          myList.map((name, index) => {
              return <li key={`myname-list-${index}`}>{name}     <button>delete</button></li>
          })
        }
      </ul>

      <section>
        <form >
                <h3>Create new student</h3>
                <input type="text" placeholder='enter name'   value={inputVal} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit'  onClick={submitMyForm}> submit </button>
        </form>
      </section>

    </>
  )
}

export default App
