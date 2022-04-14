import React from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import Modal from '../components/UI/Modal/Modal';
import ToDoForm from '../components/ToDoForm/ToDoForm';
import Button from '../components/UI/Button/Button';
import { MdLibraryAdd } from 'react-icons/md';

const ToDosPage = () => {
	const [todos, setTodos] = React.useState([]);
	const [isActiveModal, setIsActiveModal] = React.useState(false);

	React.useEffect(() => {
		const loadedTodos = JSON.parse(localStorage.getItem('todos'));
		console.log(loadedTodos);
		if (loadedTodos) {
			setTodos(loadedTodos);
			console.log(prev => prev.map(item => item));
		}
	}, []);

	React.useEffect(() => {
		console.log('Save todos');
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
	};

	return (
		<div className='App'>
			<Button id={'open-modal'} onClick={() => setIsActiveModal(true)}>
				<MdLibraryAdd />
			</Button>

			<Modal visible={isActiveModal} setVisible={setIsActiveModal}>
				<ToDoForm createTodo={createTodo} />
			</Modal>
			<ToDoList remove={removeTodo} complete={completeTodo} change={changeTodo} todos={todos} />
		</div>
	);
};

export default ToDosPage;
