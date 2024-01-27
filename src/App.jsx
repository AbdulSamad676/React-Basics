import { useState } from 'react';
import CardsData from './components/CardsData';
import './App.css';
import Card from './components/Card';

function App() {
	console.log(CardsData);
	return (
		<>
			<h1 className='text-3xl mb-4 text-red-500 font-bold'>
				Card in ReactJs
			</h1>
			<div className='flex justify-evenly'>
				{CardsData.map(item => {
					console.log(item);
					return <Card key={item.id} data={item} />;
				})}
			</div>
		</>
	);
}

export default App;
