import React from 'react';
import styles from './ToDoItem.module.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDoItem = props => {
	return (
		<div className={styles.todo__item}>
			<div className={styles.todo__item_title}>
				{props.todo.id}. {props.todo.title}
			</div>
			<div className={styles.todo__item_desc}>{props.todo.description}</div>
			<div className={styles.todo__item_control}>
				<TiEdit onClick={() => false} className='edit-icon' />
				<RiCloseCircleLine onClick={() => false} className='delete-icon' />
			</div>
		</div>
	);
};

export default ToDoItem;
