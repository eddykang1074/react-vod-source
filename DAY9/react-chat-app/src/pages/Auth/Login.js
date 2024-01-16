import React, { useCallback, useEffect } from 'react';

//reactstrap은 bootstrap을 react에서 더 쉽게 사용하기 위한 부트스트랩 지원 리액트 패키지
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup } from 'reactstrap';

//컴포넌트와 리덕스를 연결해주는 connect함수 참조
import { connect, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';


//리덕스내 정의된 해당 액션함수를 참조합니다.
import { userLogin } from "../../redux/actions"

//백엔드통신을 위한 axios 참조하기 
import axios from "axios";


//formik은 리액트에서 form을 다루는 코드들을 쉽게 작성할 수 있도록 도와주는 패키지
import { useFormik } from 'formik';

//폼의 유효성을 검사하는 yup 패키지 참조
import * as Yup from 'yup';

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";


const Login = (props) => {

    //전역 데이터공간 리듀서를 호출하기 위핸 액션함수를 디스패치로 호출하기위해 디스패치 상수를 정의합니다.
    const globalDispatch = useDispatch();

    const navigate = useNavigate();


    //폼 유효성검사 및 폼데이터처리 
    const formik = useFormik({
        initialValues: {
            email: 'admin@themesbrand.com',
            password: '123456'
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Please Enter Your Username'),
            password: Yup.string().required('Please Enter Your Password')
        }),
        onSubmit: values => {
            //props.loginUser(values.email, values.password, props.router.navigate);

            //STEP1: axios 기반으로 백엔드와 연동하여 로그인처리한다.
            //STEP2: 메일주소와 암호가 다른경우에 대한 예외처리 와 정상 로그인시 발급된 토큰값을 웹브라우저의 로컬스토리지에 저장한다.
            //STEP3: 로그인한 사용자 토큰정보를 리덕스 전역상태영역에 저장갱신한다.

            var loginData ={
                "email":values.email,
                "password":values.password
            };

            axios.post("http://localhost:3005/api/member/login",loginData)
            .then((res)=>{
                console.log("회원 로그인 처리 결과 반환값:",res.data);

                if(res.data.code == "200"){
                    //step1: 사용자 웹브라우저의 저장공간인 localStorage공간에 서버에서 보내준 사용자인증 jwt토큰값을 영구보관한다.
                    window.localStorage.setItem("jwttoken",res.data.data.token);

                    //tip: 사용자 웹브라우저에 저장공간인 localStorage공간에 저장된 데이터를 불러오기
                    //const storageToken = window.localStorage.getItem("jwttoken");
                    //console.log("사용자 웹 브라우저에 저장된 JWT사용자토큰값:",storageToken);


                    //dispatch를 이용해 해당 액션함수를 호출해 해당 전역데이터에 관련정보를 업데이트한다.
                    globalDispatch(userLogin(res.data.data));

       
                    navigate('/dashboard');
                }


            }).catch((err)=>{
                console.log("에러발생:",err);
            }); 

        },
    });

    document.title = "로그인 페이지";

    return (
        <React.Fragment>
            <div className="account-pages my-5 pt-sm-5">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5} >
                        <div className="text-center mb-4">
                            <Link to="/" className="auth-logo mb-5 d-block">
                                <img src={logodark} alt="" height="30" className="logo logo-dark" />
                                <img src={logolight} alt="" height="30" className="logo logo-light" />
                            </Link>

                            <h4>Sign in</h4>
                            <p className="text-muted mb-4">Sign in to continue to Chatvia.</p>

                        </div>

                        <Card>
                            <CardBody className="p-4">
                                {
                                    props.error && <Alert color="danger">{props.error}</Alert>
                                }
                                <div className="p-3">

                                    <Form onSubmit={formik.handleSubmit}>

                                        <div className="mb-3">
                                            <Label className="form-label">Username</Label>
                                            <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                <span className="input-group-text text-muted" id="basic-addon3">
                                                    <i className="ri-user-2-line"></i>
                                                </span>
                                                <Input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="form-control form-control-lg border-light bg-soft-light"
                                                    placeholder="Enter email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    invalid={formik.touched.email && formik.errors.email ? true : false}
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </div>

                                        <FormGroup className="mb-4">
                                            <div className="float-end">
                                                <Link to="/forget-password" className="text-muted font-size-13">Forgot password?</Link>
                                            </div>
                                            <Label className="form-label">Password</Label>
                                            <InputGroup className="mb-3 bg-soft-light rounded-3">
                                                <span className="input-group-text text-muted">
                                                    <i className="ri-lock-2-line"></i>
                                                </span>
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control form-control-lg border-light bg-soft-light"
                                                    placeholder="Enter Password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    invalid={formik.touched.password && formik.errors.password ? true : false}
                                                />
                                                {formik.touched.password && formik.errors.password ? (
                                                    <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                ) : null}

                                            </InputGroup>
                                        </FormGroup>

                                        <div className="form-check mb-4">
                                            <Input type="checkbox" className="form-check-input" id="remember-check" />
                                            <Label className="form-check-label" htmlFor="remember-check">Remember me?</Label>
                                        </div>

                                        <div className="d-grid">
                                            <Button color="primary" block className=" waves-effect waves-light" type="submit">Sign in</Button>
                                        </div>

                                    </Form>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p>Don't have an account? <Link to="/register" className="font-weight-medium text-primary">Signup now </Link> </p>
                            <p>© {new Date().getFullYear()} Chatvia.Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    );
};

export default Login;