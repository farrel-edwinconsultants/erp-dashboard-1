import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    })

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await axios.post('https://rent-car-appx.herokuapp.com/admin/auth/login', formData)
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            navigate('/');
        })
        .catch((err) => {
            setValidation(err.response.data);
        })
    };

  return (
      <section className="login-section">
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded-3 shadow-lg">
                        <div className="card-body">
                            <h4 className="fw-bold text-center">Welcome!</h4>
                            <hr/>
                            {
                                validation.message && (
                                    <div className="alert alert-danger">
                                        {validation.message}
                                    </div>
                                )
                            }
                            <form onSubmit={loginHandler}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">ALAMAT EMAIL</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                </div>
                                {
                                validation.email && (
                                    <div className="alert alert-danger">
                                        {validation.email[0]}
                                    </div>
                                    )
                                }
                                <div className="mb-3">
                                    <label className="form-label fw-bold">PASSWORD</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                </div>
                                {
                                validation.password && (
                                    <div className="alert alert-danger">
                                        {validation.password[0]}
                                    </div>
                                    )
                                }
                                <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Login