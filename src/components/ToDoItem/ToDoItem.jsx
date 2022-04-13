import React from 'react';
import styles from './ToDoItem.module.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs';

const ToDoItem = ({ remove, complete, change, ...props }) => {
	const rootStyles = [styles.todo__item];

	if (props.todo.isCompleted) {
		rootStyles.push(styles.completed);
	}

	return (
		<div className={rootStyles.join(' ')}>
			<div className={styles.todo__item_title}>{props.todo.title}</div>
			<div className={styles.todo__item_desc}>{props.todo.description}</div>
			<div className={styles.todo__item_control}>
				<BsCheckCircleFill onClick={() => complete(props.todo)} className={styles.completed_icon} />
				<RiCloseCircleLine onClick={() => remove(props.todo)} className={styles.delete_icon} />
			</div>
		</div>
	);
};

export default ToDoItem;
