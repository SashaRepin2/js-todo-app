import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({ todos, remove, complete }) => {
	return (
		<div className={styles.todo__list}>
			{!todos.length ? (
				<span style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}>
					Добавьте Todo
				</span>
			) : (
				todos.map((todo, index) => {
					return <ToDoItem todo={todo} key={index} remove={remove} complete={complete} />;
				})
			)}
		</div>
	);
};

export default ToDoList;
