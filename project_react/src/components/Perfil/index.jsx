
import { useState } from 'react'
import './perfil.css'

const Perfil =() => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [valorIMC, setValorIMC] = useState('');



    const calcularIMC =() =>{
        const imc = peso / (altura * altura);
        setValorIMC(imc.toFixed(2))
        console.log(valorIMC)
    }

    const usuario = {
        peso: 'Digite o seu peso',
        altura: 'Digite a sua alutura'

    }

    return (
        <>
            <div className='container'>

                <h1 className="perfil-titulo">Calculadora de IMC</h1>

            </div>
            <div className='container-Form'>
                <form className='Input-Form'>
                    <input className='Id-Input'
                        type="number" name='peso' placeholder={usuario.peso}
                        onChange={e => setPeso(e.target.value)}
                        value={peso} id='peso' />

                    <input className='Id-Input'
                        type="number" name='altura' placeholder={usuario.altura}
                        onChange={e => setAltura(e.target.value)}
                        value={altura} id='altura' />

                    <button onClick={calcularIMC} id='Id-Button'>Calcular</button>
                    <div className='resIMC'>
                        {valorIMC}
                    </div>
                </form>
            </div>
        </>
    )
}


export default Perfil