import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styles from '../styles/loginpage.module.css';



export default function LoginPage() {
	const [values, setValues] = useState({username: '',password: ''});
    
	const sendData = event => {
		event.preventDefault();
		// setValues({username: '',password: ''});
		localStorage.setItem('token', values.username);
		// eslint-disable-next-line no-restricted-globals
		location.reload()
	};

	const sendLogin = event => {
		if (event.key === 'Enter') {
			sendData(event)
		}
	};

	return (
		<div className={styles.loginPageContainer}>
			<h1 style={{textAlign:"center"}}>餐饮管理系统</h1>
			<form method='post'>
				<div className={styles.container}>
					<label htmlFor='uname'><p>用户</p></label>
					<input 
						type='text' 
						placeholder='输入用户名'
						value = {values.username}
						onChange={(event) => setValues({
							...values,
							username: event.target.value})}
						name='uname' 
						required/>
					<label htmlFor='psw'><p>密码</p></label>
					<input 
						type='password' 
						placeholder='输入密码'
						value = {values.password}
						onChange={(event) => setValues({
							...values,
							password: event.target.value
						})
						}
						onKeyPress = {(event) => sendLogin(event)}
						name='psw' 
						required/>
                        
					<span className={styles.Login}
						role = 'button'
						onClick = {(event) => sendData(event)}
						onKeyPress = {() => {}}
						tabIndex = '0'>
                            登录
					</span>
				</div>
			</form>
		</div>
	);
}
