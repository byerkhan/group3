import React, {useEffect, useState} from 'react';
import { 
	Router,
	Switch,
	Route,
	Redirect,
	useParams
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import ContactList from '../components/ContactList';
import Buttons from '../components/Button';
import Balance from '../components/Balance';
import UserProfile from '../components/Profile';
export const history = createBrowserHistory();

function Profile() {
	const { id } = useParams();
	return (
		<UserProfile id = {id.slice(1,)}/>
	);
}

export default function Routes() {
	const [toggle, setToggle] = useState(localStorage.getItem('token'))
	// const toggle = localStorage.getItem('token');
	
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/login/'>
					{(toggle !== null) ? <Redirect exact from = '/login/' to='/main/' /> : <Redirect to='/login/' />}
					<LoginPage />
				</Route>
                <Route exact path='/contactlist/'>
                    {(toggle !== null) ? <ContactList /> : <Redirect exact from = '/contactlist/' to='/login/' />}
                </Route>
				<Route exact path='/main/'>
					{(toggle !== null) ? <Buttons /> : <Redirect exact from = '/main/' to='/login/' />}
				</Route>
				<Route exact path='/account/'>
					{(toggle !== null) ? <Balance /> : <Redirect exact from = '/account/' to='/login/' />}
				</Route>
				<Route exact path='/'>
					<Redirect exact from='/' to='/login/' />
				</Route>
				<Route exact path='/profile/:id/'>
					{(toggle !== null) ? <Profile/> : <Redirect exact from = '/' to='/login/' />}
				</Route>
			</Switch>
		</Router>
	);
}

