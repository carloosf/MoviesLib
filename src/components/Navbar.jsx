import { useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, BiLogIn } from 'react-icons/bi'

import './Navbar.css'

const Home = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <nav id="navbar">
            <dir>
                <h2>
                    <Link to="/">
                        <BiCameraMovie /> MoviesLib
                    </Link>
                </h2>
            </dir>
            <div className="LoginSearch">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Busque um filme"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 /> </button>
                </form>
                <Link to="/login" className="loginIcon">
                    <h4>Login</h4><BiLogIn className="BiLogIn" />
                </Link>
            </div>
        </nav>
    )
};

export default Home;