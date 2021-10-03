import { connection } from "..";

export default async function updateUser(
    id:string,
    name?:string,
    nickName?:string,
    email?:string
){
    if(name){
        await connection.raw(`
        UPDATE  to_do_list
        SET name = '${name}'
        where id = '${id}'
        `)
    }

    if(nickName){
        await connection.raw(`
        UPDATE  to_do_list
        SET nickName = '${nickName}'
        where id = '${id}'
        `)
    }

    if(email){
        await connection.raw(`
        UPDATE  to_do_list
        SET email = '${email}'
        where id = '${id}'
        `)
    }
}