import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Filter.css';

function Filter() {
  return (
    <div className='Filterat'>
      <div className='drop1'>
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown1'>
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mathematics</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Programming</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Physics</Dropdown.Item>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Art</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Design</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

   <div className='drop2'>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown1'>
       Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Albanian</Dropdown.Item>
        <Dropdown.Item href="#/action-2">English</Dropdown.Item>
        <Dropdown.Item href="#/action-3">German</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

    <div className='drop3'>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown1'>
         Level
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Advanced</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Begginer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

    <div className='drop4'>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown1'>
       Availability
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Comming Soon</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Enroll now</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Expired</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>

    </div>
  );
}

export default Filter;
