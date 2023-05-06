import "../styles/booking.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const TicketForm = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [inputValues, setInputValues] = useState({
        moviename: "",
        username: "",
        email: "",
        phone: "",
        date: "",
        tickets: "",
        message: ""
    })

    const url = `https://api.tvmaze.com/shows/${id}`;
    console.log(url);
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setShow(data)
            setInputValues(prevValues => ({ ...prevValues, moviename: data.name })) // set the initial value of inputValues.moviename to show.name
        })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputValues(prevValues => ({ ...prevValues, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('inputValues', JSON.stringify(inputValues));
    }

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('inputValues'));
        if (storedValues) {
            setInputValues(storedValues);
        }
    }, []);

    if (!show) {
        return <section className="loading_section">
            <div className="loading">Loading...</div>
        </section>
    }

    return (
        <div className="contact_section">
            <h2>Book a Ticket for <span>{!inputValues.moviename ? show.name : inputValues.moviename}</span></h2>

            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="input_field">
                    <label htmlFor="moviename" className="label">
                        Movie Name
                        <input type="text" name="moviename" id="moviename" placeholder="Movie Name" value={inputValues.moviename} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="username" className="label">
                        Enter you name
                        <input type="text" name="username" id="username" placeholder="Enter your name" value={inputValues.username} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="email" className="label">
                        Enter you email
                        <input type="text" name="email" id="email" placeholder="Enter your email" value={inputValues.email} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="phone" className="label">
                        Enter you phone
                        <input type="number" name="phone" id="phone" placeholder="Enter your phone" value={inputValues.phone} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="date" className="label">
                        Booking Date
                        <input type="date" name="date" id="date" placeholder="Pick Your Date" value={inputValues.date} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="tickets" className="label">
                        Number of tickets
                        <input type="number" name="tickets" id="tickets" placeholder="Enter number of tickets" value={inputValues.tickets} onChange={handleChange} required autoComplete="off" />
                    </label>
                </div>

                <div className="input_field">
                    <label htmlFor="message" className="label">
                        Additional Comments
                        <textarea name="message" id="message" placeholder="Enter your Comments" value={inputValues.message} onChange={handleChange} autoComplete="off" rows={5} />
                    </label>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;