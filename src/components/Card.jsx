import React from 'react';

const Card = props => {
	console.log(props);
	return (
		<div className='relative h-[300px] w-[200px] rounded-md'>
			<img
				src={props.data.imageSource}
				alt='AirMax Pro'
				className='z-0 h-full w-full rounded-md object-cover'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
			<div className='absolute bottom-4 left-4 text-left'>
				<h1 className='text-lg font-semibold text-white'>
					{props.data.name}
				</h1>
				<p className='mt-2 text-sm text-gray-300'>{props.data.Desc}</p>
				<button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>
					{props.data.btnText} →
				</button>
			</div>
		</div>
	);
};

export default Card;
