import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Header logo={'Todos App'} />
		<Routes>
			<Route path='/todos' element={<App />} />
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
	</BrowserRouter>,
);
