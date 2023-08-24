import { useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


function AddEdit(){
    
    const [Kategori, setCategory] = useState('');
    const [Emri, setName] = useState('');
    const [Pershkrimi, setDescription] = useState('');
    const [Foto, setPhoto] = useState('');

   const handleNameChange=(event)=>{
    const Emri=event.target.value;
    setName(Emri);
   }
   const handleCategoryChange=(event)=>{
    const Kategori=event.target.value;
    setCategory(Kategori);
   }
   const handleDescriptionChange=(event)=>{
    const Pershkrimi=event.target.value;
    setDescription(Pershkrimi);
   }
   const handlePhotoChange=(event)=>{
    const Foto=event.target.value;
    setPhoto(Foto);
   }
//   const[state,setState]=useState(initialState);
    
//   const{name,category,description,photo}=state;


  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:3001/createKurs", {
        Kategori,
        Emri,
        Pershkrimi,
        Foto
      });
    } catch (err) {
      console.log(err.message);
    }
  };


  
    return (
        <div style={{marginTop:'100px'}}>
            <form style={{
                margin:"auto",
                padding:"15px",
                maxWidth: '400px',
                alignContent:'center'
            }}
            onSubmit={handleSubmit}>
                <label htmlFor='Emri'>Emri</label>
                <input
                    type='text'
                    id='Emri'
                    placeholder='Emri i kursit...'
                    value={Emri}
                    onChange={handleNameChange}
                    name='Emri'
                />
                <label htmlFor='Kategori'>Kategoria</label>
                <input
                    type='text'
                    id='Kategori'
                    placeholder='Kategoria e kursit...'
                    value={Kategori}
                    onChange={handleCategoryChange}
                    name='Kategori'
                />
                <label htmlFor='Pershkrimi'>Pershkrimi</label>
                <input
                    type='text'
                    id='Pershkrimi'
                    placeholder='Pershkrimi i kursit...'
                    value={Pershkrimi}
                    onChange={handleDescriptionChange}
                    name='Pershkrimi'
                />
                <label htmlFor='Foto'>Foto</label>
                <input
                    type='text'
                    id='Foto'
                    placeholder='Foto e kursit...'
                    value={Foto}
                    onChange={handlePhotoChange}
                    name='Foto'
                />
                <Link to="/adminKurs">
                  <input type="submit" value="Save"/>
                  <input type="button" value="Back"/>
                </Link>
            </form>
        </div>

    );
}

export default AddEdit;