import React from 'react';
import styles from './ToDoList.module.css';

const ToDoList = ({ children, ...props }) => {
	return <div className={styles.todo__list}>{children}</div>;
};

export default ToDoList;
