import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        console.log(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies > 0 &&
                    topMovies.map((movie) =>
                        <p>{movie.title}</p>
                    )}

            </div>
        </div>

    )
};

export default Home;