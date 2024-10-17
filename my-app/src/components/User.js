import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import AddUser from "./AddUser";

class User extends React.Component{
	constructor(props){
		super(props)
		this.state={
			editForm: false
		}
	}
	render(){
		return(
		<><div className="user" >
			<RiDeleteBin6Line  onClick = {() => this.props.onDelete(this.props.user.id)} className = "deleteBtn" />
			<FaEdit onClick={()=> this.setState({
				editForm: !this.state.editForm})} className = 'editBtn' />
			<h3>{this.props.user.name}, {this.props.user.age}</h3>
			<b>{this.props.user.isHappy ? ';)': ':('}</b>
			{this.state.editForm && <AddUser user={this.props.user} onAdd={this.props.onEdit}/>}
	</div>
		</>
		)
}}

export default User