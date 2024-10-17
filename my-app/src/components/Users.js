import React from "react";
import User from "./User";


class Users extends React.Component{
	render(){
		if (this.props.users.length > 0)
			return(
			<div>
				
				{this.props.users.map((usr) => (
					
					<User onEdit = {this.props.onEdit} onDelete = {this.props.onDelete} key={usr.id} user = {usr}/>
				))}
				
			</div>)
		else
		return(
			<div className="user">
				Пользователей не найдено
			</div>)
	}
}

export default Users