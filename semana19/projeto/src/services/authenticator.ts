import { config } from "dotenv"
import { sign, verify } from "jsonwebtoken"
import { authenticationData } from "../types"

config()



export class authenticator {

    public generateToken = (payload: authenticationData): string => {
        const token = sign(
            payload,
            process.env.JWT_KEY,
            { expiresIn: "10h" }
        )
        return token
    }


    public getTokenData = (token: string): authenticationData | null => {

        try {

            const tokenData = verify(
                token,
                process.env.JWT_KEY
            ) as authenticationData

            return{
                id:tokenData.id
            }

        } catch (error) {
            console.log(error)
            return null
        }
    }
}