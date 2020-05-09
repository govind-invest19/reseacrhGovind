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

class ListUserComponent extends Component<any,any>{

    constructor(props: any){
        super(props)
        this.state = {
            users: [],
            categories:[],
            category: null,
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);

        this.fetchCategoryList = this.fetchCategoryList.bind(this); 

        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
       this.reloadUserList();
     
    var a=  ApiService.fetchCategory(this.requesDATA())
            .then((res) => {
               alert(res.data);
              //  return res.data;
                this.setState({categories: res.data} );
                alert('compdidmount----'+this.state.categories);
            });
           
    //  this.setState({categories:} ) ;
      //  alert('govind'+this.state.categories);
        //console.log('govind'+this.state.categories);
    }
 
requesDATA()
{
    let data1= {"scSymbol":"ACC"};
    return data1;
}

    fetchCategoryList(category: any) {
        ApiService.fetchCategory(category)
            .then((res) => {
               
                return res.data;
               // this.setState({categories: res.data} )
                
            });
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
            <div>
                <Typography variant="h4" style={style}>User Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                    Add User
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>category</TableCell>
                            <TableCell align="right">image</TableCell>
                        </TableRow>
                    </TableHead>
                    {this.state.categories}

              
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListUserComponent;