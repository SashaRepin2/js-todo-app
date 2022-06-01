import React, { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import Modal from '../components/UI/Modal/Modal';
import ToDoForm from '../components/ToDoForm/ToDoForm';
import Button from '../components/UI/Button/Button';
import { MdLibraryAdd } from 'react-icons/md';

const ToDosPage = () => {
	const [todos, setTodos] = useState([]);
	const [editTodo, setEditTodo] = useState(null);
	const [isActiveModal, setIsActiveModal] = useState(false);

	useEffect(() => {
		const loadedTodos = JSON.parse(localStorage.getItem('todos'));
		if (loadedTodos) {
			setTodos(loadedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const createTodo = newTodo => {
		setTodos([...todos, newTodo]);
		setIsActiveModal(false);
	};

	const removeTodo = todo => {
		setTodos(todos.filter(item => item.id !== todo.id));
	};

	const completeTodo = todo => {
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) item.isCompleted = !item.isCompleted;
				return item;
			}),
		);
	};

	const changeTodo = todo => {
		setTodos(
			todos.map(item => {
				if (todo.id === item.id) {
					item = todo;
				}
				return item;
			}),
		);
		setIsActiveModal(false);
		setEditTodo(null);
	};

	return (
		<div className='App'>
			<Button id={'open-modal'} onClick={() => setIsActiveModal(true)}>
				<MdLibraryAdd />
			</Button>

			<Modal
				visible={isActiveModal}
				setInvisible={() => {
					setEditTodo(null);
					setIsActiveModal(false);
				}}>
				<ToDoForm createTodo={createTodo} changeTodo={changeTodo} changeableTodo={editTodo} />
			</Modal>
			<ToDoList
				remove={removeTodo}
				complete={completeTodo}
				setEditTodo={setEditTodo}
				setIsActiveModal={setIsActiveModal}
				todos={todos}
			/>
		</div>
	);
};

export default ToDosPage;
