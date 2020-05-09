import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
class CategoryListUserComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser(userId: any) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter((user: { id: any; }) => user.id !== userId)});
           })
    }

    editUser(id: any) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <Grid>
                 <Typography variant="h4" align="left" style={style}>Category List</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add Category
                </Button>
                <Grid  container   className="listContainer">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Initiator</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users && this.state.users.map((row: { id: {} | null | undefined; name: React.ReactNode; email: React.ReactNode; username: React.ReactNode; age: React.ReactNode; salary: React.ReactNode; }) => (
                            <TableRow>
                                <TableCell scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">13-10-2020</TableCell>
                                <TableCell align="left">10:00 AM</TableCell>
                                <TableCell align="left"><FormControl component="fieldset">
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                    value="top"
                                    control={<Checkbox color="primary" checked />}
                                    label=""
                                    labelPlacement="start"
                                    />

                                </FormGroup>
                                </FormControl>
                                 </TableCell>
                                 
                                <TableCell align="left" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Grid>
            </Grid>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default CategoryListUserComponent;