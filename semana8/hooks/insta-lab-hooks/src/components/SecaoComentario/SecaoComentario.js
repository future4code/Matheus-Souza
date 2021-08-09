import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	
	const [valorInput , setValorInput] = useState('')

	const onChangeComentario = (event) => {
		setValorInput(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={valorInput}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(valorInput) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario