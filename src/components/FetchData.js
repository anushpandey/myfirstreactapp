import React, { Component}from 'react'

class FetchData extends Component {
    state = {
        data: null
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({data: JSON.stringify(json)}))
    }
    redirectHandler = () =>{
        this.props.history.push('/showtable');
    }
    render(){
        return(
            <div>
                <button onClick={this.redirectHandler} >SHOW DATA AS A TABLE</button>
                <br></br>
            {this.state.data}
            </div>
        )
    }
}

export default FetchData;