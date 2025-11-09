import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  let [task, setTask] = useState({});
  let [tasklist, setTaskList] = useState([]);
  let [index, setIndex] = useState(-1);
  let [loading, setLoading] = useState(false);
  let [person, setperson] = useState(["manage", "team leader", "developer"]);
  let [member, setmember] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getlocalstorageData();
    }, 500);
  }, [setTaskList]);

  let getlocalstorageData = (() => {
    let data = JSON.parse(localStorage.getItem("Data"));
    if (data !== null) {
      setTaskList(data);
      setLoading(true);
    } else {
      setTaskList([]);
    }
  });

  let getinputdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newmember = [...member];

    if (name === 'member') {
      if (newmember.includes(value)) {
        let pos = newmember.findIndex((v) => v === value);
        if (pos !== -1) {
          newmember.splice(pos, 1);
        }
      } else {
        newmember.push(value);
      }
      setmember(newmember);
      value = newmember;
    }

    setTask({ ...task, [name]: value });
  }

  let submitdata = (e) => {
    e.preventDefault();
    let newlist = [...tasklist];

    if (index !== -1) {
      newlist[index] = task;
      toast.success("Data Updated Successfully", { position: "bottom-right" });
    } else {
      task.id = Math.floor(Math.random() * 100);
      newlist.push(task);
      toast.success("Data Inserted Successfully", { position: "bottom-right" });
    }

    localStorage.setItem("Data", JSON.stringify(newlist));
    setTaskList(newlist);
    setLoading(true);
    setTask({});
    setIndex(-1);
    setmember([]);
  }

  let removeData = (id) => {
    let newlist = [...tasklist];
    let pos = newlist.findIndex((v) => v.id === id);
    newlist.splice(pos, 1);
    localStorage.setItem("Data", JSON.stringify(newlist));
    setTaskList(newlist);
    toast.success("Data Deleted Successfully", { position: "top-right" });
  }

  let updateData = (id) => {
    let list = [...tasklist];
    let pos = list.findIndex((v) => v.id === id);
    if (pos !== -1) {
      setTask(list[pos]);
      setIndex(pos);
      setmember(list[pos].member);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Crud</h1>

      <form className="task-form" onSubmit={(e) => submitdata(e)}>
        <div className="form-group">
          <label>Task Name:</label>
          <input type="text" name='task' value={task.task || ""} onChange={getinputdata} />
        </div>

        <div className="form-group">
          <label>Task Type:</label>
          <input type="text" name='last' value={task.last || ""} onChange={getinputdata} />
        </div>

        <div className="form-group">
          <label>Priority:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name='priority' value="urgent" checked={task.priority === 'urgent'} onChange={getinputdata} /> Urgent
            </label>
            <label>
              <input type="radio" name='priority' value="overdue" checked={task.priority === 'overdue'} onChange={getinputdata} /> Overdue
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Member:</label>
          <div className="checkbox-group">
            <label><input type='checkbox' name='member' value="denisha" checked={member.includes('denisha')} onChange={getinputdata} /> denisha</label>
            <label><input type="checkbox" name='member' value='ayushi' checked={member.includes('ayushi')} onChange={getinputdata} /> ayushi</label>
            <label><input type="checkbox" name='member' value='purvisha' checked={member.includes('purvisha')} onChange={getinputdata} /> purvisha</label>
          </div>
        </div>

        <div className="form-group">
          <label>Completed person:</label>
          <select name='person' onChange={getinputdata} value={task.person || ""}>
            <option value="">--select person--</option>
            {person.map((v, i) => (
              <option key={i} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="text" name='img' value={task.img || ""} onChange={getinputdata} />
        </div>

        <div className="form-group">
          <input className="submit-btn" type='submit' value={index !== -1 ? "Edit" : "Add"} />
        </div>
      </form>

      <div className="table-title">Task List</div>
      <table className="task-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Task Name</th>
            <th>Task Type</th>
            <th>Priority</th>
            <th>Member</th>
            <th>Person</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            tasklist.map((v, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td><img src={v.img} height={30} width={30} alt="img" /></td>
                <td>{v.task}</td>
                <td>{v.last}</td>
                <td>{v.priority}</td>
                <td>{v.member ? v.member.toString() : ""}</td>
                <td>{v.person}</td>
                <td className="d-flex">
                  <button className="action-btn delete-btn" onClick={() => removeData(v.id)}>Delete</button>
                  <button className="action-btn update-btn" onClick={() => updateData(v.id)}>Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan={8}>Loading...</td></tr>
          )}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
}

export default App;