import "../styles.css";

export const BoxPaginaPrincipal = (props)=>{
    return (
        <>
         <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={props.reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{props.titulo}</h4>
            </div>
        </>
    )
}