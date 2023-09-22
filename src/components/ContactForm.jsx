import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const ContactForm = () => {
    const contactformCollectionRef = collection(db, 'contactform');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'contactform'), formData);
            console.log('Documento agregado con ID: ', docRef.id);
            setFormSubmitted(true);

            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error al agregar documento: ', error);
        }
    };

    return (
        <div className='contacto'>
        {formSubmitted ? (
            <div>
                <h2>¡Gracias por tu mensaje!</h2>
                <button onClick={() => setFormSubmitted(false)}>Enviar otro mensaje</button>
            </div>
        ) : (
        <>
            <h2>Contáctanos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
        )}
        </div>
    );
};
export default ContactForm;
