import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ToDosPage from './pages/ToDosPage';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Header logo={'Todos App'} />
			<Routes>
				<Route path='/todos' element={<ToDosPage />} />
				<Route
					exact
					path={'*'}
					element={
						<main
							style={{
								padding: '1rem',
								textAlign: 'center',
								color: 'white',
								fontWeight: 'bold',
								fontSize: '25px',
								marginTop: '100px',
							}}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
