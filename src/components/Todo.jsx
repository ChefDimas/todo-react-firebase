import React from "react";
import {FaRegTrashAlt} from "react-icons/fa";

const style = {
	li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
	liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
	row: `flex`,
	text: `mx-4 cursor-pointer`,
	textComplete: `mx-4 cursor-pointer line-through`,
	button: `cursor-pointer flex items-center`
}

const Todo = ({todo, toggleComplete, toggleDelete}) => {
	return (
		<li className={todo.completed ? style.liComplete : style.li}>
			<div className={style.row}>
				<input
					type="checkbox"
					checked={todo.completed ? 'checked' : ''}
					onChange={() => toggleComplete(todo)}
				/>
				<p className={todo.completed ? style.textComplete : style.text}
				   onClick={() => toggleComplete(todo)}
				>
					{todo.text}
				</p>
			</div>
			<button onClick={() => toggleDelete(todo.id)}>
				<FaRegTrashAlt />
			</button>
		</li>
	)
};

export default Todo;