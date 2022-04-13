import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './ToDoForm.module.css';

const ToDoForm = ({ createTodo }) => {
	const [todo, setTodo] = React.useState({ title: '', description: '' });

	const addNewPost = e => {
		e.preventDefault();
		const newPost = {
			...todo,
			id: Date.now(),
		};
		createTodo(newPost);
		setTodo({ title: '', description: '', isCompleted: false });
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
			<Button onClick={addNewPost} style={{ fontWeight: 'bold' }}>
				Добавить ToDo
			</Button>
		</form>
	);
};

export default ToDoForm;
