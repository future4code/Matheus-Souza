import { connection } from "..";

export default async function insertUser(
    id:string,
    name:string,
    nickName:string,
    email:string
){
    await connection.insert({
    id,
    name,
    nickName,
    email
    }).into("to_do_list")
}
    
