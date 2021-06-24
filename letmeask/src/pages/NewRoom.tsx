import illuestrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import {Button} from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illuestrationImg} alt="Ilustracao simbolizando perguntas e repsostas" />
                <strong>Crie salas de QeA ao vivo</strong>
                <p>Tire as duvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit" >
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar numa sala existente? clique aqui
                    </p>
                </div>
            </main>
        </div>
    )
}