import { useState } from "react"
import "./style.css"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/Confing"
import { clearTodoList } from "./clear"; // وارد کردن تابع پاک کردن همه آیتم‌ها

export default function AddItem() {
  const [task, setTask] = useState("")

  const addinform = async () => {
    if (task) {
      try {
        await addDoc(collection(db, "todos"), {
          text: task,
          completed: false
        });
        setTask("")
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="itemInput">Add Item</label>
        <input type="text"
          className="form-control"
          id="itemInput"
          placeholder="Enter todo"
          onChange={(e) => setTask(e.target.value)}
          value={task} />
        <div className="BtnBox">
          <button className="btn btn-primary" onClick={addinform}>Add to List</button>
          <button className="btn btn-danger" onClick={clearTodoList}>Clear Todo List</button> {/* دکمه پاک کردن همه آیتم‌ها */}
        </div>
      </div>
    </div>
  )
}
