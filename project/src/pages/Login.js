import React from "react"
import {useForm} from 'react-hook-form'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useNavigate } from "react-router-dom";
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
    const onSubmitForm = async (data) => {
      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          const responseData = await response.json();
          if (responseData.alert) {
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            alert(responseData.message);
          }
        } else {
          alert("check email and password");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return (
    <section>
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={loginImg} />
                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt="" />
                            </div>
                            <h2>Login</h2>
                            <Form onSubmit={handleSubmit(onSubmitForm)}>
                                <FormGroup>
                                <input type="email" placeholder='Email' {...register("email", {
                                    required: "",
                                    })} />
                                    <p>
                                    {errors.email && (
                                        <span style={{ color: "red" }}>{errors.email.message}</span>
                                    )}
                                    </p>
                                </FormGroup>
                                <FormGroup>
                                <input type="password"  placeholder="password" {...register("password", {
                                    required: "",
                                    })}/>
                                    <p>
                                    {errors.password && (
                                        <span style={{ color: "red" }}>{errors.password.message}</span>
                                    )}
                                    </p>  
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn"
                                    type="submit">Login</Button>
                            </Form>
                            <p>Don't have an account? <Link to='/register'>Create</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
  </section>
)}

export default Login;