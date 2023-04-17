import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useState, useEffect } from 'react';
import axios from '../../lib/axios';

const inter = Inter({subsets: ['latin']})

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [data,setData] = useState([])
  const [editData,setEditData] = useState('')


  useEffect(()=>{
    fetchUserdetails()
  },[])

  // fetching user details
  function fetchUserdetails(){
    axios.get('/api/app').then((res)=>{
      setData(res.data)
      
    })
  }

  // Submit function
  const submitForm = (e) =>{
    e.preventDefault()
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);

    let url = 'api/app';

    if(editData != ''){
      url = 'api/app/' + editData;
      formData.append('_method', 'PUT')
    }
    try {
      axios.post(url, formData).then((res)=>{
        setName('')
        setEmail('')
        setPassword('')
        setImage(null)
        fetchUserdetails()
        setEditData('')
  
      });
    } catch (error) {
      console.error(error);
    }
  }

  // User Edit Function
  function edituserDetails(id){
    setEditData(id)
    data.map((item)=>{
      if(item.id == id){
        setName(item.name)
        setEmail(item.email)
        setPassword(item.password)
        setImage(item.image)
      }
    })

  }

  // Delete Function
  function deleteuserDetails(id){
    let params = {'_method' : 'delete'}
    axios.post('/api/app/' + id, params).then(()=>{
      setName('')
      setEmail('')
      setPassword('')
      setImage(null)
      fetchUserdetails()
      setEditData('')
      
    })
  }

  return (
    <main>
      <br/><br/>
      <form method='POST' onSubmit={submitForm}>
        <div className="form-group justify-content-center">
          <label >Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <br/>
        <div className="form-group">
          <label >Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} required/> <br/>
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <br/>
        <div className="form-group">
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}  />
          </div>
          <br/>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      <br/>


      <table className='table table-border'>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && 

            data.map((item,i)=>(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.image}</td>
                <td>
                  <button className='btn btn-primary btn-sm' onClick={()=> edituserDetails(item.id)}>Edit</button> &nbsp;
                  <button className='btn btn-danger btn-sm' onClick={()=> deleteuserDetails(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          
          }
        </tbody>
      </table>  
    </main>
  );
};

export default MyForm;

