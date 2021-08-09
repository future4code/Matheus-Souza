import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroDeCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroDeComentarios] = useState(0)
  const [comentarios , setComentarios] = useState ([])

  const onClickCurtida = () => {
     // verifica se, no estado, cutido é true ou false
     if (curtido) {
      setCurtido(!curtido)
      setNumeroDeCurtidas(-1)
    } else {
      setCurtido(!curtido)
      setNumeroDeCurtidas(+1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    setComentarios:(listaDeComentarios)
    setComentando:(false)
    setNumeroDeComentarios:(numeroComentarios+1)
  }
  const caixaDeComentario =comentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
    // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  const iconeCurtida =curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      
       {caixaDeComentario} 
    </PostContainer>
  )
}

export default Post