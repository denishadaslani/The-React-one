import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';



function App() {
  let [task, setTask] = useState({});
  let [tasklist, setTaskList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [index, setIndex] = useState(-1);
  let [person, setperson] = useState(["manage", "team leader", "developer"]);
  let [member, setmember] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      getlocalStorageData();
    }, 500);
  });

  let getlocalStorageData = (() => {
    let data = JSON.parse(localStorage.getItem("taskdata"));
    if (data != null) {
      setTaskList(data);
      setLoading(true);
    }
    else {
      setTaskList([]);
    }
  })


  let getinputdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newmember = [...member];
    if (name == 'member') {
      if(newmember.includes(value)){
        let pos = newmember.findIndex((v,i)=>v==value);
        if(pos!=-1){
          newmember.splice(pos,1);
        }
      }
      else{
        newmember.push(value);
      }
      setmember(newmember);
      value = newmember;
    }
   
    console.log(newmember);
    setTask({ ...task, [name]: value })
  }


  let submitdata = (e) => {
    e.preventDefault();
    let newlist = [...tasklist];
    if (index != -1) {
      newlist[index] = task;
      toast.success("data updated successfully");
    }
    else {
      task.id = Math.round(Math.random() * 100);
      newlist.push(task);
      toast.success("Data Inserted Successfully", {
        position: "bottom-right",
      })
    }
    localStorage.setItem("taskdata", JSON.stringify(newlist));
    setTaskList(newlist);
    setLoading(true);
    setTask({});
    setmember([]);
    setIndex(-1);
  }
  let deleteData = (id) => {

    let newlist = [...tasklist];
    let pos = newlist.findIndex((v, i) => v.id == id);
    newlist.splice(pos, 1);
    localStorage.setItem("taskdata", JSON.stringify(newlist));
    setTaskList(newlist);
    toast.success("Data Deleted Successfully", {
      position: "top-right",
    })
  }

  let updateData = (id) => {
    let list = [...tasklist];
    let pos = list.findIndex((v, i) => v.id == id);
    if (pos != -1) {
      setTask(list[pos]);
      setIndex(pos);
      // setmember(list[pos].member);
    }
    else {
    }
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Crud Operation </h1>
      <form method='post' onSubmit={(e) => { submitdata(e) }}>
        <table border={1} align='center' cellPadding={10}>
          <tr>
            <td>Image:</td>
            <td><input type="text" name='image' value={task.image ? task.image : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          <tr>
            <td>First Name:</td>
            <td><input type="text" name='fname' value={task.fname ? task.fname : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td><input type="text" name='lname' value={task.lname ? task.lname : ""} onChange={(e) => { getinputdata(e) }} /></td>
          </tr>
          <tr>
            <td>Priority:</td>
            <td>
              <input type="radio" name='priority' value='urgent' checked={task.priority == 'urgent' ? 'checked' : ''} onChange={(e) => getinputdata(e)} />urgent
              <input type="radio" name='priority' value='overdue' checked={task.priority == 'overdue' ? 'checked' : ''} onChange={(e) => getinputdata(e)} />overdue

            </td>
          </tr>

          <tr>
            <td>Team Managment:</td>
            <td>
              <input type="checkbox" name='member' value='mohan' checked={member.includes('mohan')?'checked':''} onChange={(e) => { getinputdata(e) }} />mohan
              <input type="checkbox" name='member' value='johan'checked={member.includes('johan')?'checked':''} onChange={(e) => { getinputdata(e) }} />johan
              <input type="checkbox" name='member' value='rohit'checked={member.includes('rohit')?'checked':''} onChange={(e) => { getinputdata(e) }} />rohit
            </td>
          </tr>

          <tr>
            <td>Complated person:</td>
            <td>
              <select name='person' onChange={(e) => { getinputdata(e) }}>
                <option value="">--selected person</option>
                {person.map((v, i) => {
                  return (
                    <option value={v} selected={task.person == v ? "selected" : ""}>{v}</option>
                  )
                })}
              </select>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              {
                index != -1 ?
                  <button type='submit' name='edit' value='edit'>edit</button>
                  :
                  <button type='submit' name='add' value='add'>add</button>

              }
            </td>
          </tr>
        </table>
        {/* name print  */}
        {/* {task?task.fname:""}
        {task?task.lname:""} */}
      </form>
      <br></br>
      <table border={1} align='center' cellPadding={10}>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Priority</th>
            <th>Member</th>
            <th>Person</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            loading ?
              tasklist ? tasklist.map((v, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td><img src={v.image} height={50} /></td>
                    <td>{v.fname}</td>
                    <td>{v.lname}</td>
                    <td>{v.priority}</td>
                    {/* <td>{v.member}</td> */}
                    <td>{v.member?v.member.toString():""}</td>
                    <td>{v.person}</td>
                    <td>
                      <button onClick={() => { deleteData(v.id) }}>Delete</button>
                      ||
                      <button onClick={() => { updateData(v.id) }}>Update</button>
                    </td>
                  </tr>
                )
              }) : "No Data" : <p>Loading...</p>
          }
        </tbody>
      </table>

      <ToastContainer />
    </>
  )
}

export default App
