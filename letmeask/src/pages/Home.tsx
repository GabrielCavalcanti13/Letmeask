import { useHistory } from 'react-router-dom'

import illuestrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import {Button} from '../components/Button'

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'

export function Home() {
    const history = useHistory()
    const {user, signInWithGoogle} = useAuth()

    async function navigateToNewRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }

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
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do google"/>
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="digite o codigo da sala"
                        />
                        <Button type="submit" >
                            entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}