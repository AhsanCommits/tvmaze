import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.svg';
import '../styles/shows.css';
import { Link } from 'react-router-dom';


function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    const url = `https://api.tvmaze.com/shows/${id}`;
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setShow(data)
        })

    if (!show) {
        return <section className="loading_section">
            <div className="loading">Loading...</div>
        </section>
    }
    const imgURL = show.image ? show.image.original : logo;
    const btn = {
        backgroundColor: "#f44336",
        marginLeft: "1rem"
    };
    return (
        <div className="container">
            <div className='grid_two_section'>
                <div className='image'>
                    <img src={imgURL} alt={show.name} width="100%" height="600px" />
                </div>
                <div className='content'>
                    <h2 className="show_title">Shows / <span>{show.type}</span></h2>
                    <h1>{show.name}</h1>
                    <p>{show.summary.slice(3, -4)}</p>
                    <p><b>Genres:</b> {
                        show.genres.map((curr) => {
                            return curr + " "
                        })
                    }</p>
                    {show.schedule.time.length !== 0 && show.schedule.days.length !== 0 ? (
                        <>
                            <p><b>Time:</b> {show.schedule.time}</p>
                            <p><b>Days:</b> {show.schedule.days}</p>
                        </>
                    ) :

                        (<p><b>Schedule:</b> Not Available</p>)
                    }

                    <div className='buttons_container'>
                        <Link to={`/`}>
                            <button>
                                Back to Home
                            </button>
                        </Link>
                        <Link to={`/booking/${id}`}>
                            <button style={btn}>
                                Book a Ticket
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowDetails