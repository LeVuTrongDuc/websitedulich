import React, {useState} from "react"
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Register = () => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });
  
    const onSubmitForm = async (data) => {
      try {
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          alert(responseData.message);
          if (responseData.alert) {
            navigate("/login")
          }
        } else {
          const errorData = await response.json();
          alert.error(errorData);
        }
      } catch (error) {
        console.error(error);
      }};

    return <section>
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={registerImg} />
                        </div>
                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt="" />
                            </div>
                            <h2>Register</h2>
                            <Form onSubmit={handleSubmit(onSubmitForm)}>
                                <FormGroup>
                                    <input type="text" placeholder="Username" {...register("name", {
                                        required: "Thông tin bắt buộc !",
                                        })}/>
                                        <p>
                                        {errors.name && (
                                            <span style={{ color: "red" }}>{errors.name.message}</span>
                                        )}
                                        </p>
                                </FormGroup>
                                <FormGroup>
                                    <input type="email" placeholder="Email" {...register("email", {
                                        required: "Thông tin bắt buộc !",
                                        })} />
                                        <p>
                                        {errors.email && (
                                            <span style={{ color: "red" }}>{errors.email.message}</span>
                                        )}
                                        </p>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="Password"{...register("password", {
                                        required: "Thông tin bắt buộc !",
                                        })}/>
                                        <p>
                                        {errors.password && (
                                            <span style={{ color: "red" }}>{errors.password.message}</span>
                                        )}
                                        </p>
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn"
                                    type="submit">Create Account
                                  </Button>
                            </Form>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

}

export default Register;