import React, {Component} from 'react'

class Hello2 extends Component {

    constructor() {
        super()
        this.state = {count: 1}
    }

    handleClick = () => {
        console.log('click')
        this.setState({count: ++ this.state.count})
    }

    render () {
        return (
            <>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}> + </button>
            <button> - </button>
            </>
        )
    }

}

export default Hello2