import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorModal from '../../components/UI/Error/ErrorModal';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';
import { AuthContext } from '../../context/authContext';
import {
    validate,
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
} from '../../utils/Validation';

function LogIn(props) {
    return (
       
                    <form onSubmit={onSubmitHandler}>
                        <Input
                            inputtype='input'
                            id='email'
                            type='email'
                            name='email'
                            placeholder='xyz@gmail.com'
                            onChange={inputChangeHandler}
                            autoFocus
                            value={email.value}
                            valid={email.isValid.toString()}
                            touch={email.isTouch.toString()}
                        />
                        <Input
                            inputtype='input'
                            id='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={inputChangeHandler}
                            value={password.value}
                            valid={password.isValid.toString()}
                            touch={password.isTouch.toString()}
                        />
                        <Button
                            disabled={!formValidity}
                            btnType='Success'
                        >
                            Log In
                        </Button>
                        <p>
                            Don't have an account ?&nbsp;
                            <Link style={styleLink} to='/auth/signup'>
                                Sign Up{' '}
                            </Link>
                        </p>
                    </form>
                )}
            

export default connect(mapStateToProps)(LogIn);