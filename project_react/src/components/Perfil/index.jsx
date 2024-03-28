
import { useState } from 'react'
import './perfil.css'

const Perfil = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [valorIMC, setValorIMC] = useState('');

    // baixo de 17	Muito abaixo do peso
    // Entre 17 e 18,49	Abaixo do peso
    // Entre 18,5 e 24,99	Peso normal
    // Entre 25 e 29,99	Acima do peso
    // Entre 30 e 34,99	Obesidade I
    // Entre 35 e 39,99	Obesidade II (severa)
    // Acima de 40	Obesidade III (mórbida)

    const calcularIMC = (evento) => {
        evento.preventDefault();
        const imc = peso / (altura * altura);
        if (imc < 17) {
            return (

                setValorIMC(imc.toFixed(2) + ' Muito abaixo de peso')
            )
        } else if (imc >= 17 && imc <= 18.49) {
            return (
                setValorIMC(imc.toFixed(2) + ' Abaixo do peso')
            );
        }else if (imc >= 18.5 && imc <= 24.99) {
            return (
                setValorIMC(imc.toFixed(2) + ' Peso normal')
            )
        }else if (imc >= 25 && imc <= 29.99) {
            return (
                setValorIMC(imc.toFixed(2) + ' Acima do peso')
            )
        }else if (imc >= 30 && imc <= 34.99) {
            return (
                setValorIMC(imc.toFixed(2) + ' Obesidade I')
            )
        }else if (imc >= 35 && imc <= 39.99) {
            return (
                setValorIMC(imc.toFixed(2) + ' Obesidade II')
            )
        }else {
            return (
                setValorIMC(imc.toFixed(2) + ' Obesidade III')
            )
        }
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
                        <span>
                            <p><b>Seu IMC:</b></p>{valorIMC}
                        </span>


                    </div>
                </form>
            </div>
        </>
    )
}


export default Perfil