import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({ todos, remove, complete, setEditTodo, setIsActiveModal }) => {
	return (
		<div className={styles.todo__list}>
			{todos.length ? (
				todos.map((todo, index) => {
					return (
						<ToDoItem
							todo={todo}
							key={index}
							remove={remove}
							change={setEditTodo}
							setIsActiveModal={setIsActiveModal}
							complete={complete}
						/>
					);
				})
			) : (
				<span style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
					Добавьте Todo
				</span>
			)}
		</div>
	);
};

export default ToDoList;
