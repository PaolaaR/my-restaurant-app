import React, { useEffect,useState } from 'react'
import { db } from '../firebase'
import { getDocs, collection, addDoc, deleteDoc,doc } from 'firebase/firestore'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


export const Form = () => {
    const restaurantformCollectionRef = collection(db, "restaurantform");
    const [clients, setClients] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [startDate, setStartDate] = useState(new Date());



const getClients = async () => {
   const data = await getDocs (restaurantformCollectionRef);
   setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
}

const addClient = async () => {
    addDoc(restaurantformCollectionRef, { name , email, phone, startDate })
    getClients()
  }
    

const deleteClient = async (id) => {
    const restaurantformDoc= doc(db, "restaurantform", id);
    await deleteDoc(restaurantformDoc);
    getClients();
}


useEffect(() => {
    getClients();
}, []);

return (
    <>
    <input
        type="string"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
    />
     <input
      type="string"
      placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
    />
     <input
        type="string"
        placeholder="Phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
    />
    <Datepicker
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
    />
    <Button variant="success" onClick={addClient}>Add</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date Reservation</th>
        </tr>
      </thead>
      <tbody>
        {
            clients.map((client) => (
            <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{new Date(client.startDate.seconds * 1000).toLocaleDateString()}</td>
                <td>
                    <Button variant="danger" onClick={() => deleteClient(client.id)}>Delete</Button>
                </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </>
  )
}

export default Form;

