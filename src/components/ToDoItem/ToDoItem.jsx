import React from 'react';
import styles from './ToDoItem.module.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
const ToDoItem = ({ remove, complete, todo, change, setIsActiveModal, ...props }) => {
	const rootStyles = [styles.todo__item];

	if (todo.isCompleted) {
		rootStyles.push(styles.completed);
	}

	return (
		<div className={rootStyles.join(' ')}>
			<div className={styles.todo__item_title}>{todo.title}</div>
			<div className={styles.todo__item_desc}>{todo.description}</div>
			<div className={styles.todo__item_control}>
				<BsCheckCircleFill onClick={() => complete(todo)} className={styles.completed_icon} />
				<AiFillEdit
					onClick={() => {
						change(todo);
						setIsActiveModal(true);
					}}
					className={styles.change_icon}
				/>
				<RiCloseCircleLine onClick={() => remove(todo)} className={styles.delete_icon} />
			</div>
		</div>
	);
};

export default ToDoItem;
