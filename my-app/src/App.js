import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			users: [
				{
					id: 1,
					name: 'Nail',
					age: 20,
					isHappy: true
				},
				{
					id: 2,
					name: 'Rasul',
					age: 23,
					isHappy: true
				},
				{
					id: 3,
					name: 'David',
					age: 18,
					isHappy: false
				}
			]
		}
		this.addUsr = this.addUsr.bind(this)
		this.deleteUsr = this.deleteUsr.bind(this)
		this.editUsr = this.editUsr.bind(this)

	}
	render(){
			return (
			<>
			<Header title = "Список пользователей"/>
		<div className="container">
			<div className="row">
				<div className="col-7">
				<main>
						<Users users = {this.state.users} onEdit = {this.editUsr} onDelete = {this.deleteUsr} />
						
					</main>		
				</div>
				<div className="col-2"></div>
				<div className="col-3">
					<aside>
						<AddUser onAdd={this.addUsr}/>
					</aside>
				</div>
			</div>
		</div>
		</>)
	}
	deleteUsr(id){
		this.setState({
			users: this.state.users.filter((el) => el.id !== id)
		})
	}
	editUsr(user){
		let allUsers = this.state.users
		allUsers[user.id -1] = user

		this.setState({users:[]}, ()=>{//сначала обнуляем массив юзеров потом сразу выполняем функцию
			this.setState({users: [...allUsers]})
		})
	}

	addUsr(user) {
		// console.log(user)
		const id = this.state.users.length + 1
		this.setState({users: [...this.state.users, {id, ...user}]})/*добавляет нового чела в users*/
		/*... разворачивает массив this.state.users, добавляя все его элементы 
		в новый массив. Это означает, что все существующие пользователи будут 
		скопированы в новый массив.*/
		/*{id, ...user}: Здесь создаётся новый объект, который содержит 
		свойства из объекта user, а также добавляется свойство id. 
		Оператор ...user также разворачивает все свойства объекта user, 
		добавляя их к новому объекту.*/
	}
}

export default App 