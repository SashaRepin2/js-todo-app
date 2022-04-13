import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ logo }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header__logo_text}>
				<Link to={'/todos'}>{logo}</Link>
			</div>
		</div>
	);
};

export default Header;
