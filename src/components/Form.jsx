import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export const Form = () => {
  const restaurantformCollectionRef = collection(db, "restaurantform");
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  
  const [bookedTimes, setBookedTimes] = useState([]);

  const getClients = async () => {
    const data = await getDocs(restaurantformCollectionRef);
    const clientsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    
    const bookedTimesData = clientsData.map((client) => {
      const clientTime = new Date(client.startDate.seconds * 1000);
      return {
        start: setMinutes(setHours(clientTime, 0), 0),
        end: setMinutes(setHours(clientTime, 0), 30),
      };
    });
    
    setClients(clientsData);
    setBookedTimes(bookedTimesData);
  };

  const addClient = async () => {
    const selectedTime = setMinutes(setHours(startDate, 0), 0);
    const isTimeBooked = bookedTimes.some((time) => {
      return (
        selectedTime >= time.start &&
        selectedTime <= time.end
      );
    });

    if (!isTimeBooked) {
      await addDoc(restaurantformCollectionRef, { name, email, phone, startDate });
      getClients();
    } else {
      alert('La hora seleccionada ya está reservada. Elige otra hora.');
    }
  };

  const deleteClient = async (id) => {
    const restaurantformDoc = doc(db, "restaurantform", id);
    await deleteDoc(restaurantformDoc);
    getClients();
  };

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
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        minTime={setHours(setMinutes(new Date(), 0), 10)}
        maxTime={setHours(setMinutes(new Date(), 30), 21)}
        dateFormat="dd/MM/yyyy"
        excludeTimes={bookedTimes.map((time) => time.start)}
      />
      <Button variant="success" onClick={addClient}>
        Add
      </Button>
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
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                {new Date(client.startDate.seconds * 1000).toLocaleDateString()}
              </td>
              <td>
                <Button variant="danger" onClick={() => deleteClient(client.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Form;
