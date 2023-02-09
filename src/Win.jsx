import './App.css'

export default function Win(props){
    return(
        <form>
            <h3>{props.winner} has won!</h3>
            <button className='btn'>Play Again</button>
        </form>
    )
}