import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './ToDoForm.module.css';

const ToDoForm = ({ createTodo, changeTodo, changeableTodo }) => {
	const [todo, setTodo] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		if (changeableTodo) {
			setTodo({ title: changeableTodo.title, description: changeableTodo.description });
		} else {
			setTodo({
				title: '',
				description: '',
			});
		}
	}, [changeableTodo]);

	const addNewTodoModal = e => {
		e.preventDefault();
		const newTodo = {
			...todo,
			isCompleted: false,
			id: Date.now(),
		};
		createTodo(newTodo);
		setTodo({ title: '', description: '' });
	};

	const changeTodoModal = e => {
		e.preventDefault();
		const editableTodo = {
			...changeableTodo,
			...todo,
		};
		changeTodo(editableTodo);
		setTodo({ title: '', description: '' });
	};

	return (
		<form className={styles.todo__form}>
			<Input
				value={todo.title}
				style={{ marginBottom: '15px', borderRadius: '10px' }}
				onChange={e => setTodo({ ...todo, title: e.target.value })}
				type='text'
				placeholder='Заголовок'
			/>
			<Input
				value={todo.description}
				style={{ marginBottom: '15px', borderRadius: '10px' }}
				onChange={e => setTodo({ ...todo, description: e.target.value })}
				type='text'
				placeholder='Описание'
			/>

			{changeableTodo ? (
				<Button onClick={changeTodoModal} style={{ fontWeight: 'bold' }}>
					Изменить ToDo
				</Button>
			) : (
				<Button onClick={addNewTodoModal} style={{ fontWeight: 'bold' }}>
					Добавить ToDo
				</Button>
			)}
		</form>
	);
};

export default ToDoForm;
