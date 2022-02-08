import React, { Component }  from 'react'
import  fruta from './morango.jpg'

class DadosPessoais extends Component {
  state = {
    name:`Stéfany Farias`,
    idade :32,
    comida :`sushi`,
    musica: [`Sia - Chandelier `,`Sia - Cheap Thrills`,`Nando Reis - Relicário`]
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <h3>Comidas Favoritas</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={fruta}/>
      </div>
    );
  }
}

export default DadosPessoais;