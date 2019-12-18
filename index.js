import React, { Component } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  state = {
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nome, telefone, email, mensagem } = this.state
    const data = new FormData ()
    data.append ('nome', nome)
    data.append ('telefone', telefone)
    data.append ('email', email)
    data.append ('mensagem', mensagem)
    axios.post('https://cors-anywhere.herokuapp.com/https://minha-api-de-email.com.br/index.php', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  };
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              className="campos"
              type="text"
              id="nome"
              placeholder="Nome"
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
            />
            <input
              className="campos"
              type="text"
              id="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <InputMask
              className="campos"
              mask="(99)999 999 999"
              id="telefone"
              placeholder="Telefone"
              value={this.state.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
            ></InputMask>
            <textarea
            className="campos"
            id="mensagem"
            rows="10"
            value={this.state.mensagem}
            onChange={e => this.setState({ mensagem: e.target.value })}
            placeholder="Sua mensagem" />
            <input className="botao-enviar" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
