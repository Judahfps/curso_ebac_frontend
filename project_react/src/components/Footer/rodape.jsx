import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'

import './rodape.css'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'


const Rodape = () => {

    const rodape = {
        copy: 'Todos os direitos reservados',
        nutri: 'Jaqueline Cavalcante',
        whatssap: '929999-8888'

    }
    return (
        <footer>
            <div className='container-Primary'>
                <div className='footer-contacts'>
                    <h2>Nutricionista</h2>
                    <p>Jaqueline Cavalcante</p>

                    <div id='footer-Midia'>
                        <a href="#" className='footer-Link'></a>
                        <FontAwesomeIcon id='instagram' icon={faInstagram} />

                        <a href="#" className='footer-Link'></a>
                        <FontAwesomeIcon id='facebook' icon={faFacebook} />

                        <a href="#" className='footer-Link'></a>
                        <FontAwesomeIcon id='whatsapp' icon={faWhatsapp} />
                    </div>

                </div>

                <ul className='footer-List'>
                    <li>
                        <h3>Blog</h3>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>Tech</a>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>Adventures</a>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>Music</a>
                    </li>
                </ul>

                <ul className='footer-List'>
                    <li>
                        <h3>Produtos</h3>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>App</a>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>Desktop</a>
                    </li>
                    <li>
                        <a href="#" className='footer-Link'>Cloud</a>
                    </li>
                </ul>

                <div className='footer-Subscribe'>
                    <h2>Agende uma consultoria</h2>
                    <p>Preencha o formulário</p>

                    <div className='input-Group'>
                        <input type="text" id='text' placeholder='Digite seu nome' />
                        <input type="email" id='email' placeholder='Digite seu email' />
                        <input type="tel" id='tel' placeholder='Digite seu telefone' />
                        <button><FontAwesomeIcon icon={faEnvelope} /></button>
                    </div>

                </div>

            </div>

            <div className='footer-CopyrRight'>
                &copy; 2024 - All rights reserv

            </div>

        </footer>
    )
}


export default Rodape