import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator"

const LoginPage = ({setRightButtonText}) => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui conta? Cadastre-se
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage