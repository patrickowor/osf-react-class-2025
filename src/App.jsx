import './App.css'
import { useState } from 'react';



function App() {

  const [ nameVal, setNameVal] = useState("")
  const [ classVal, setClassVal] = useState("")
  const [ ageVal, setAgeVal] = useState("")
  const [myList, setMyList] = useState([])


  const submitMyForm = (e)=> {
    e.preventDefault()
    if (nameVal != "" && classVal != ""  && ageVal != "") {
      setMyList([...myList, {"name": nameVal , "class": classVal, "age": ageVal}])
      setNameVal("")
      setClassVal("")
      setAgeVal("")
    } else {
      alert("cant submit an empty field")
    }
  }

  const deleteItem = (index) => {
    const copy = [...myList]
    const res = copy.splice(index, 1);
    setMyList(copy)
    alert(`you deleted ${res?.[0].name}`)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>class</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {myList.map((item, index) => <tr key={`myname-list-${index}`}>
            <td>{item.name}</td>
            <td>{item["class"]}</td>
            <td>{item.age}</td>
            <td><button onClick={() => deleteItem(index)}>delete</button></td>
          </tr>)}
        </tbody>
      </table>

      <section>
        <form >
                <h3>Create new student</h3>
                <label htmlFor="name">name: </label>
                <input type="text" placeholder='enter name'   value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
                <br />
                <label htmlFor="age">age: </label>
                <input type="text" placeholder='enter age'   value={ageVal} onChange={(e) => setAgeVal(e.target.value)} />
                <br />
                <label htmlFor="class">class: </label>
                <input type="text" placeholder='enter class'   value={classVal} onChange={(e) => setClassVal(e.target.value)} />
                <br />
                <button type='submit'  onClick={submitMyForm}> submit </button>
        </form>
      </section>

    </>
  )
}

export default App
