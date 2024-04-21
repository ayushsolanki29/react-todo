import './Css/todoitems.css';
import tick from './Assets/circle-check-solid.svg'
import close from './Assets/circle-xmark-regular.svg'
import notcheck from './Assets/circle-regular.svg'
function TodoItems({ no, display, text,setTodos }) {
    const deleteID = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos')) 
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }
    const toggle = (no) =>{
        let data = JSON.parse(localStorage.getItem('todos'))
        for(let i =0; i < data.length; i++){
            if (data[i].no === no) {
                if(data[i].display ===""){
                    data[i].display = "line-through";
                }else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
    return (
        <div className='todo-items'>
            <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
                {display === "" ? <img src={notcheck} alt="" /> : <img src={tick} alt="" />}
                <div className="todoitems-text">{text}</div>
            </div>
            <img className='todo-cross' onClick={()=>{deleteID(no)}} src={close} alt="" />
        </div>
    )
}

export default TodoItems
