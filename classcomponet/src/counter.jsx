import React , {Component}  from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }
    // componentDidMount(){
    //     console.log("mount");
    // }
    // componentDidUpdate(){
    //     console.log("update");
    // }
    // componentWillUnmount(){
    //     console.log("unmount");
    // }
    render(){
        return(
            <>
            <h1>Counter App</h1>
            <h2> Count:{this.state.count}</h2>
            <button onClick={()=>this.decrement()} >-</button> || <button onClick={()=>this.increment()}>+</button>
            </>
        )
    }
}

export default Counter