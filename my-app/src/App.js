import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	let isValueVaild;
	if (value.length < 3) {
		isValueVaild = false;
	} else {
		isValueVaild = true;
	}
	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение:');
		if (promptValue.length < 3) {
			setError('Кол-во символов в значении должно быть 3 или больше!');
		} else {
			setValue(promptValue);
			setError('');
		}
	};
	const onAddButtonClick = () => {
		const updatedList = [...list, { id: Date.now(), value: value }];
		console.log(updatedList);
		setList(updatedList);
		setError('');
		setValue('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={() => onInputButtonClick()}>
					Ввести новое
				</button>
				<button className={styles.button} disabled={!isValueVaild} onClick={() => onAddButtonClick()}>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map((obj) => (
							<li className={styles['list-item']} key={obj.id}>
								{obj.value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
