import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Todo from "./components/Todo";

const style = {
	bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#6681ad] to-[#6f66ad]`,
	container: `bg-slate-100 w-full m-auto rounded-md shadow-xl text-2xl p-4`,
	heading: `text-4xl font-bold text-center text-gray-800 p-2`,
	form : `flex justify-between p-4`,
	input: `border p-2 w-full text-xl`,
	button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
	count: `text-center p-2`,
}

function App() {
	const [todos, setTodos] = useState(['Learn JS', 'Learn React'])

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
						<Todo key={index} todo={todo} />
					))}
				</ul>
				<p className={style.count}>You have 2 todos</p>
			</div>
		</div>
	);
}

export default App;
