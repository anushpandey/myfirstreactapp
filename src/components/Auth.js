import React, { Component} from 'react';

class Auth extends Component {
    state ={
        username : '',
        password : '',
        error : false
    }
    authCheckHandler = () => {
        console.log(this.state.username, this.state.password)
        if(this.state.username==="username" & this.state.password==="password"){
            this.setState({error : false})
            this.props.history.push('/fetchdata');
        }
        else{
            this.setState({error : true})
        }
    }
    render(){
        return(
            <div>
                <p><b>Username:  </b></p>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={(e) => {this.setState({username: e.target.value, error: false})}}> 
                </input>
                <br/><br/>
                <p><b>Password:  </b></p>
                <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={(e) => {this.setState({password: e.target.value, error: false})}}> 
                </input>
                <br/><br/>
                <button onClick={this.authCheckHandler}>Login</button>
                {this.state.error ? <p>Wrong Password or email</p> : null}
            </div>
        )
    }
}

export default Auth;