import './App.css';
import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoItem from './components/ToDoItem/ToDoItem';
import Modal from './components/UI/Modal/Modal';
import Loader from './components/UI/Loader/Loader';

const data = [
	{
		id: 1,
		title: 'Tiasdsadatas da sdle',
		description:
			'Descddd dddd ddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
	},
	{
		id: 2,
		title: 'Tiasdsadatas da sdle',
		description:
			'Descddd dddd ddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
	},
	{
		id: 3,
		title: 'Tiasdsadatas da sdle',
		description: 'Descddd dddd dddddddddddd',
	},
];

function App() {
	const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos') || '[]'));
	const [isActiveModal, setIsActiveModal] = React.useState(true);

	React.useEffect(() => {
		console.log('render App');
		console.log(JSON.stringify(data));
	}, []);

	return (
		<div className='App'>
			<Modal visible={isActiveModal} setVisible={setIsActiveModal}>
				{/* <PostForm create={createPost} /> */}
			</Modal>

			<ToDoList>
				{todos.map((todo, index) => {
					return <ToDoItem todo={todo} key={index} />;
				})}
			</ToDoList>
		</div>
	);
}

export default App;
