import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import '../styles/shows.css';


function Shows() {
    const [shows, setShows] = useState([])

    const fetchUserData = () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setShows(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <section className="showSection">
            <div className="container">
                <h1>Popular Shows Airing Tonight</h1>
                <div className="card_section">
                    {shows.map((curElem) => {
                        return <Card key={curElem.id} {...curElem} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Shows;