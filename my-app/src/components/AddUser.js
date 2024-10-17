import React from "react";

class AddUser extends React.Component{
	userAdd={}
	constructor(props){
		super(props)
		this.state={
			name:'',
			age:1,
			isHappy: false
		}
	}

	render(){
	return(
		<form ref={(el) => this.myForm = el}>
			<input placeholder="name" onChange={(e) => this.setState({name:e.target.value})}></input>
			<input placeholder="age" 
				type='number' 
				min="1" 
				onChange={(e) => this.setState({age:e.target.value})
			}></input>
			{/* <div className="form-check form-switch">	
				<div className="row">		
					<div className="col-10">
						<label className="form-check-labe" 
							htmlFor="flexSwitchCheckChecked"> поставить галочку если счастлив</label>
					</div>
					<div className="col-2">
						<input className="form-check-input" type="checkbox" id = "flexSwitchCheckChecked"></input>
					</div>
				</div>
			</div> */}
			<div className="row">		
				<div className="col-10">
					<label htmlFor="isHappy"> поставить галочку если счастлив</label>
				</div>
				<div className="col-2 checkbox-container">
    			<input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy:e.target.checked})}/>
				</div>
			</div>
			<button type="button" onClick={()=> {
				// Проверка на заполненность полей
				if (this.state.name.trim() === '' || this.state.age <= 0) {
					alert('Пожалуйста, заполните все поля.');
					return;
				}            
				this.myForm.reset()
				this.userAdd = {
					name: this.state.name,
					age: this.state.age,
					isHappy: this.state.isHappy
				}
				if(this.props.user){//сделано для редактирования пользователя "если пользователь передался то id меняй"
					this.userAdd.id = this.props.user.id
				}
				this.props.onAdd(this.userAdd)}}
				
			> Добавить</button>
		</form>
	)
}}

export default AddUser