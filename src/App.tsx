import './App.css';
import { useState, useEffect} from 'react';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]

const form = false;

function App() {
  const [students, setStudents] = useState(data);
  const [showForm, setShowForm] = useState(form);
  const [_name, setName] = useState('');
  const [_age, setAge] = useState('');
  const [_gender, setGender] = useState('');

  function delete_(el: String){
    setStudents(students.filter(obj => obj.name !== el));
  }

  function add(){
    students.push({name: _name, age: parseInt(_age), gender: _gender});
    setStudents(students);
    setShowForm(false);
  }

  function show_set() {
      if (showForm) {
        setShowForm(false);
      }else{
        setShowForm(true);
      }
  }

  return (
    <div className="App">
      <center>
        <h1>Test Tabella</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Delete</th>
          </tr>
          {students.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td><button onClick={() => delete_(val.name)}>Elimina</button></td>
              </tr>
            )
          })}
        </table>
        <div>
          <button onClick={()=> show_set()} className="add" >Inserisci</button>
        </div>
        { showForm &&
          <form method='post' onSubmit={() => add()}>
            <div>
              <label htmlFor="Name">Name</label>
            </div>
            <div>
              <input type="text" id='Name' onChange={(name) => setName(name.target.value)} required/>
            </div>
            <div>
              <label htmlFor="Age" >Age</label>
            </div>
            <div>
              <input type="number" id='Age' onChange={(age) => setAge(age.target.value)} required/>
            </div>
            <div>
            <label htmlFor="Gender">Gender</label>
            </div>
            <div>
              <select id='Gender' onChange={(gender) => setGender(gender.target.value)} required>
                <option value="Female"> Female </option>
                <option value="Male"> Male </option>
              </select>
            </div>
            <div>
              <input type="submit" value={"Conferma"} className="submit_btn"/>
            </div>
          </form>
        }
      </center>
    </div>
  );
}

export default App;
