import { connection } from "..";

export default async function selectUserById(
    id:string // parametro
){

    const result = await connection('to_do_list')
    .select('*')
    .where({id})
     
    return result[0]

}