import './Form.css'

const login = () => {
    return (
        <div className="container-formData">
            <form action=""
                method="post"
                className='formData'
            >
                <h2>Login</h2>

                <input type="text"
                    placeholder="Email"
                />
                <input type="password"
                    placeholder="Senha" />

                <input type="button" value="Entrar" />
            </form>
        </div>
    )
}

export default login