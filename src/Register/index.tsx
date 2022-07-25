import React from "react";
import *  as C from './style'
import { AiOutlineUser, AiOutlineMail, AiFillGoogleCircle, AiFillFacebook, AiOutlineGithub} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


const Register=() => {
    return (
        <C.Container>
            <C.Title>Cadastre se</C.Title>

            <C.IconEmail><AiOutlineMail /></C.IconEmail>
            <C.Input type="email" placeholder="Email" ></C.Input>

            <C.IconEmail><AiOutlineUser /></C.IconEmail>
            <C.Input type="name" placeholder="Username" ></C.Input>

            <C.IconEmail><RiLockPasswordLine /></C.IconEmail>
            <C.Input type="password" placeholder="Password" ></C.Input>

            <C.ButtonSingUp type="submit">Sing Up</C.ButtonSingUp>

            <C.Google type="submit"><AiFillGoogleCircle /> Google</C.Google>

            <C.Facebook type="submit" ><AiFillFacebook /> Facebook</C.Facebook>

        </C.Container>
    )
}
export default Register