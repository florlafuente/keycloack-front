import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

let Keycloak;
const json = import('../json/keycloak.json')

export default class extends Component {
  static async getInitialProps() {
    const data = await json
    return { 
      keycloak: data
    }
  }

  state = {
    keycloak: null,
    authenticated: false
  }

  async componentDidMount () {
    Keycloak = require('keycloak-js');
    const keycloak = await Keycloak(this.props.keycloak)
    this.setState({
      keycloak
    }, () => console.log(this.state.keycloak))
  }

  render () {
    return (
      <div>
        <Link href='/'>
          <button>
            Home
          </button>
        </Link>
        <div>
          Soy una ruta protegida
        </div>
      </div>
    )
  }
}