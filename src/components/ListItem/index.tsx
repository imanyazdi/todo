import { useEffect, useState } from "react"
import "./style.css"
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../../services/Confing"
import test from "node:test";
interface Todo {
  text: string;
  completed: boolean;
  id: string
}
export default function ListItem() {
  const [list, setList] = useState<Todo[]>([])
  useEffect(() => {
    const unsubscrybe = onSnapshot(collection(db, "todos"), (snap) => {
      const information: Todo[] = snap.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
        completed: doc.data().completed
      }) as Todo);
      setList(information)
      console.log(information);
    })
    return unsubscrybe;
  }, [])
  const togglecompleted=async(id:string,completed:boolean)=>{
    try{
      const todoDoc=doc(db,"todos",id)
      await updateDoc(todoDoc,{
        completed:!completed
      })
    }catch(e){
      console.error(e)
    }
  }
  const delet=async(id:string)=>{
    try{
      const deletitem=doc(db,"todos",id)
      await deleteDoc(deletitem)
    }catch(e){
      console.error(e)
    }
  }
  return (
    <div className='Listitem'>
      <h3>Todo List</h3>

      <div className="boxs">
        {list && list.map((data, index) => (
          <div className="box" key={index}>
            <div className="data">{data.text}</div>
            <div className="button">
              <button className="btn btn-danger" onClick={()=>delet(data.id)}>Delete</button>
              <button className="btn btn-success" onClick={()=>togglecompleted(data.id,data.completed)}>
                {data.completed ? "completed" : "not completed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
