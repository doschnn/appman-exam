import { 
	loginSuccess, 
	loginPending, 
	loginFailure } from '../actions/auth';
import store from '../store';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

export const login = (loginValues) => {
	store.dispatch(loginPending())

	axios.post(BASE_URL + 'api/login', loginValues) 
		.then(response => {
			console.log(response)
            store.dispatch(loginSuccess(response))
            alert('Login Successed')
		})
		.catch(err => {
            console.log(err.response)
			store.dispatch(loginFailure(err.response))
		})
}