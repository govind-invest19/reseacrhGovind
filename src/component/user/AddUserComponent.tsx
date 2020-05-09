import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
type AppProps = {}
type AppState = {}
class AddUserComponent extends Component<any,any>{

    constructor(props: any){
        super(props);
        this.state ={
            scripId: '',
            symbol: '',
            exchange: '',
            netChangeIndicator: '',
            changeInPrice: '',
            changeInPercentage: '',
            currentReturnInPercentage: '',
            currentReturnInDuration: '',
            currentMarketPrice: '',
            expectedReturnInPercentage: '',
            expectedReturnInDuration: '',
            entryPrice: '',
            targetPrice: '',
            stopLossPrice: '',
            category: '',
            image: '',
            isActive: '',


            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e: any) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e: any) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="Symbol" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange}/>

 

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddUserComponent;