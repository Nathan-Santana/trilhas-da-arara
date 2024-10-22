import Link from "next/link"

export default function pages(){
    return( <html>
            <head>

            </head>
            <body>
                <div className="Nav">
                    <nav className="NavB">
                        <Link href={''}>Pesquisar tudo</Link>
                        <Link href={''}>Hotéis</Link>
                        <Link href={''}>O que Fazer</Link>
                        <Link href={''}>Restaurante</Link>
                        <Link href={''}>Agenda</Link>
                        <button>Entra</button>
                    </nav>
                </div>
                <div className="Perf">
                    <div className="Camp">
                    <img src="./ImgPerf.png" alt="" />
                    <h1>Masum Rana</h1>
                    <p>Gothenburg</p> 
                    <p>15th February</p>
                    <Link href={''}>Informações de usuário:</Link><br />
                    <Link href={''}>Historico de viagens</Link><br />
                    <Link href={''}>Configurações de privacidade</Link><br />
                    <Link href={''}>Gerenciar notificações</Link><br />
                    <Link href={''}>Sair</Link>
                    </div>
                    <div className="CamPreen">
                        <h1>Informações Pessoais</h1>
                        <form action="">
                            <label htmlFor="">Nome:</label><br />
                            <input type="text" /><br />
                            <label htmlFor="">Data  de Nascimento:</label><br />
                            <input type="date" name="" id="" /><br />
                            <label htmlFor="">Telefone:</label><br />
                            <input type="text" /><br />
                            <label htmlFor="">Localização:</label><br />
                            <input type="text" /><br />
                            <button>Salvar</button>
                        </form>
                    </div>
                    <div className="formSeg">
                        <h1>Segurança:</h1>
                       <label htmlFor="">Endereço de email:</label><br />
                       <input type="text" /><br />
                       <label htmlFor="">Senha:</label><br />
                       <input type="text" /><br />
                       <label htmlFor="">Confirmar senha:</label><br />
                       <input type="text" /><br />
                       <button>Salvar</button>
                    </div>
                </div>
            </body>
            <footer>

            </footer>
           </html>

    )
}