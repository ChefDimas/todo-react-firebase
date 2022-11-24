import React, {useState, useEffect} from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Todo from "./components/Todo";
import {db} from './firebase'
import {query, collection, onSnapshot, updateDoc, doc} from "firebase/firestore"

const style = {
	bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#6681ad] to-[#6f66ad]`,
	container: `bg-slate-100 w-full m-auto rounded-md shadow-xl text-2xl p-4`,
	heading: `text-4xl font-bold text-center text-gray-800 p-2`,
	form: `flex justify-between p-4`,
	input: `border p-2 w-full text-xl`,
	button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
	count: `text-center p-2`,
}

function App() {
	const [todos, setTodos] = useState([])

	// Create todos
	// Read todos from firebase
	useEffect(() => {
		const q = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({...doc.data(), id: doc.id});
			});
			setTodos(todosArr);
		});
		return () => unsubscribe();
	}, []);

	// Update todos in firebase
	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, 'todos', todo.id), {
			completed: !todo.completed
		})
	}

	// Delete todos

	return (
		<div className={style.bg}>
			<div className={style.container}>
				<h3 className={style.heading}>To do app</h3>
				<form className={style.form}>
					<input className={style.input}
					       type="text"
					       placeholder="Add Todo"/>
					<button className={style.button}>
						<AiOutlinePlus size={30}/>
					</button>
				</form>
				<ul>
					{todos.map((todo, index) => (
						<Todo key={index} todo={todo} toggleComplete={toggleComplete} />
					))}
				</ul>
				<p className={style.count}>You have 2 todos</p>
			</div>
		</div>
	);
}

export default App;
