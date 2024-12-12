import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/Confing";

// تابع برای حذف همه آیتم‌ها
export const clearTodoList = async () => {
  try {
    const todosSnapshot = await getDocs(collection(db, "todos"));
    todosSnapshot.forEach(async (docSnap) => {
      const todoRef = doc(db, "todos", docSnap.id);
      await deleteDoc(todoRef);  // حذف مستند
    });
    console.log("All todos deleted successfully");
  } catch (error) {
    console.error("Error deleting todos: ", error);
  }
};
