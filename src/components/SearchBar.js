import {Form} from 'react-bootstrap';
function SearchBar({search}) {
   
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search..." onChange = {(e)=>{search(e.target.value)}}/>
            </Form.Group>
        </Form>  
    );
  }
  
  export default SearchBar;