import React, { Component } from 'react'
import {Table,Button} from 'reactstrap';
import axios from 'axios'
import { FormGroup,Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Book extends Component {
    state={
        books:[],
        newBookData:{
            title:'',
            rating:''
        },
        editBookData:{
            id:'',
            title:'',
            rating:''
        },
        newBookModal:false,
        editBookModal:false
    }
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums').then((response)=>{
          this.setState({
              books:response.data
          })
        })
    }

    toggleNewBookModal(){
        this.setState({
            newBookModal:!this.state.newBookModal
        })
    }

    toggleEditBookModal(){
        this.setState({
            editBookModal:!this.state.editBookModal
        })
    }

    addBook(){
        axios.post('https://jsonplaceholder.typicode.com/albums', this.state.newBookData).then((response)=>{
            console.log(response.data)
            let {books}=this.state;
            books.push(response.data);
            this.setState({books, newBookModal:false,  newBookData:{
                title:'',
                rating:''
            }})
        })
    }
    editBook(id, title, rating){
    this.setState({
        editBookData:{id,title,rating},
        editBookModal:! this.state.editBookModal
    })
        };
 
updateBook(){
    let {title, rating}= this.state.editBookData;
     axios.put('https://jsonplaceholder.typicode.com/albums', this.state.editBookModal.id,{
         title, rating
     }).then((response)=>{
         this._refreshBooks();
         this.setState({
           editBookModal:false, editBookData:{id:'', title:'', rating:''}  
         })
     })
    }

 deleteBook(id){
        axios.delete('https://jsonplaceholder.typicode.com/albums'+id).then((response)=>{
            this._refreshBooks();
        });
        };
_refreshBooks(){
    axios.get('https://jsonplaceholder.typicode.com/albums').then((response)=>{
        this.setState({
            books:response.data
        })
    })
};
  render() {
      let books=this.state.books.map((book)=>{
          return(
            <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.rating}</td>
            <td>
              <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this,book.id,book.title,book.rating)}>Edit</Button>
              <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
            </td>

         </tr>
          )
      })
    return (
    <div className="App container">
    <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
    <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)} className={this.props.className}>
      <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
      <ModalBody>
      <FormGroup>
      <Label for="title">Title</Label>
      <Input id="title" value={this.state.newBookData.title} onChange={(e)=>{
          let {newBookData}= this.state;
          newBookData.title=e.target.value;
          this.setState({newBookData:newBookData})
      }}/>
     </FormGroup>
     <FormGroup>
      <Label for="rating">Rating</Label>
      <Input id="rating" value={this.state.newBookData.rating} onChange={(e)=>{
        let {newBookData} = this.state;
        newBookData.rating=e.target.value;
        this.setState({newBookData:newBookData})
      }}/>
    </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
        <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)} className={this.props.className}>
    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Modal title</ModalHeader>
    <ModalBody>
    <FormGroup>
    <Label for="title">Title</Label>
    <Input id="title" value={this.state.editBookData.title} onChange={(e)=>{
        let {editBookData}= this.state;
        editBookData.title=e.target.value;
        this.setState({editBookData:editBookData})
    }}/>
   </FormGroup>
   <FormGroup>
    <Label for="rating">Rating</Label>
    <Input id="rating" value={this.state.editBookData.rating} onChange={(e)=>{
      let {editBookData} = this.state;
      editBookData.rating=e.target.value;
      this.setState({editBookData:editBookData})
    }}/>
  </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
      <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
    </ModalFooter>
  </Modal>

    <Table>
        <thead>

            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
           {books}
        </tbody>
    </Table>
     </div>
    )
  }
}

export default Book;