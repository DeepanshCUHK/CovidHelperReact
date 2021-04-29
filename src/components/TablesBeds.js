import {Table} from 'react-bootstrap';

function TablesBeds({data}) {
    return (
        <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Phone Number</th>
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
            {
             data.map((val,index)=>(
                <tr key = {index}>
                    <td>{index+1}</td>
                    <td>{val["title"]}</td>
                    <td>{val["location"]}</td>
                    <td>{val["phoneNumber"]}</td>
                    <td>{val["verifiedTime"]}</td>                
                </tr>

              ))
            }
        </tbody>
      </Table>
    );
  }
  
  export default TablesBeds;