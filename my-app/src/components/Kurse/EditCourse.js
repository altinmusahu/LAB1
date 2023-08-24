import { useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


function Edit(){

    const [Emri, setName] = useState('');
    const [Kategori, setCategory] = useState('');
    const [Pershkrimi, setDescription] = useState('');
    const [Foto, setPhoto] = useState('');

    const {id}=useParams();
      console.log(id);
    useEffect(()=>{
      axios.get(`http://localhost:3001/getCourse/${id}`)
    .then((res) => {console.log(res)
      setName(res.data[0].Emri);
      setCategory(res.data[0].Kategori);
      setDescription(res.data[0].Pershkrimi);
      setPhoto(res.data[0].Foto);
    }) },[id])
    
    
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

//   const history=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.put(`http://localhost:3001/updateCourse/${id}`, {
        Emri,
        Kategori,
        Pershkrimi,
        Foto
            }) .then((res) => {
                // Handle successful update if needed
              })
              .catch((error) => {
                console.log(error);
                // Handle error if needed
              });
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
              <h1 style={{color:"#0d6efd"}}>Update Course</h1>
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
                <input type="submit" value="Update"/>
                <Link to="/">
                <input type="button" value="Back"/>
                </Link>
            </form>
        </div>

    );
 }

export default Edit;