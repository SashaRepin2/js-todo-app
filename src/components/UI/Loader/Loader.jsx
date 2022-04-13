import React from 'react';
import styles from './Loader.module.css';

const Loader = props => {
	return <div {...props} className='spinner-border' role='status'></div>;
};

export default Loader;
