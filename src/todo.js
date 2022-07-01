import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItems: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
    }
    onChangeHandler(event){
       // console.log(event.target);
        var inputval = event.target.value;
        console.log(inputval);
        this.setState(
            {
                item:inputval
            }
        )

    }
    addData(){
        var inputval= this.state.item;
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputval);
        
        this.setState({
           todoItems:itemInstance,
           item:''
        })
//console.log(this.state.todoItems)
    }
    delete(event){
        var id = event.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id,1);
        console.log(id)
        this.setState({
            todoItems:itemInstance,
            item:''
         })
 

    }
    render(){
        var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>{e}
            <button className="btns" onClick={this.delete} id={i}>Remove</button>
            </li>
        )
        return(
        <div>
            <div className="header"><h1> To-do App</h1></div>
            <div className="body">
            <input className="search" type="text" value={this.state.item} onChange={this.onChangeHandler} />
          
            <button className="btn" onClick={this.addData} >Add</button>
            <ul className="rolldown-list" id="myList">
                {itemList}
            </ul>
            </div>
            <div className="footer">
           
            </div>
        </div>
        )
    }
}

export default Todo;