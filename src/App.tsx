import './App.css';
import { useState, useEffect } from 'react';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

const form = false;
const btn = false;
const btn_mod = false;
const insert_btn = true;

function App() {
  const [students, setStudents] = useState(data);
  const [showForm, setShowForm] = useState(form);
  const [showBtn, setShowBtn] = useState(btn);
  const [showBtnMod, setShowBtnMod] = useState(btn_mod);
  const [showInsertBtn, setShowInsertBtn] = useState(insert_btn);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [studentToEdit, setStudentToEdit] = useState('');

  function delete_(el: String) {
    setStudents(students.filter(obj => obj.name !== el));
  }

  function add() {
    students.push({ name: name, age: parseInt(age), gender: gender });
    setStudents(students);
    setShowForm(false);
  }

  function show_set() {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }

  function mod() {
    for (let i = 0; i < students.length; i++) {
      if (students[i].name == studentToEdit) {
        students[i].name = name
        students[i].gender = gender
        students[i].age = parseInt(age)
        break;
      }
    }
    setStudents(students)
    show_set()
  }

  function reset_user() {
    var name_ = ''
    var age_ = ''
    var gender_ = ''
    setName(name_)
    setAge(age_)
    setGender(gender_)
  }

  function show_btn() {
    if (showBtn) {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  }

  function show_insert() {
    if (showInsertBtn) {
      setShowInsertBtn(false);
    } else {
      setShowInsertBtn(true);
    }
  }

  function show_btn_mod() {
    if (showBtnMod) {
      setShowBtnMod(false);
    } else {
      setShowBtnMod(true);
    }
  }

  function handleModClick(val: any) {
    setName(val.name)
    setAge(val.age)
    setGender(val.gender)
    setStudentToEdit(val.name)
    show_set();
    show_btn_mod();
    show_insert()
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
            <th>Mod</th>
          </tr>
          {students.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td><button onClick={() => delete_(val.name)}>Elimina</button></td>
                <td> <button onClick={() => { handleModClick(val) }} className="mod">Modifica</button></td>
              </tr>
            )
          })}
        </table>
        {showInsertBtn &&
          <div>
            <button onClick={() => { show_set(); show_btn() }} className="add" >Inserisci</button>
          </div>
        }
        {showForm &&
          <form>
            <div>
              <label htmlFor="Name">Name</label>
            </div>
            <div>
              <input type="text" id='Name' onChange={(name) => setName(name.target.value)} value={name} required />
            </div>
            <div>
              <label htmlFor="Age" >Age</label>
            </div>
            <div>
              <input type="number" id='Age' onChange={(age) => setAge(age.target.value)} value={age} required />
            </div>
            <div>
              <label htmlFor="Gender">Gender</label>
            </div>
            <div>
              <select id='Gender' onChange={(gender) => setGender(gender.target.value)} value={gender} required>
                <option value="Female"> Female </option>
                <option value="Male"> Male </option>
              </select>
            </div>
            {showBtn &&
              <div>
                <input type="button" value={"Inserisci"} className="submit_btn" onClick={() => add()} />
              </div>
            }
            {showBtnMod &&
              <div>
                <input type="button" value={"Modifica"} className="submit_btn" onClick={() => {{mod()}; reset_user(); show_insert(); show_btn_mod();}} />
              </div>
            }
          </form>
        }
      </center>
    </div>
  );
}

export default App;
