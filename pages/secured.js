import React, { Component } from 'react'
import Link from 'next/link'

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
    try {
    const authenticated = await keycloak.init({ onLoad: 'check-sso' })
      this.setState({
        keycloak, authenticated
      })
    } catch (err) {
      console.error(err)
      this.setState({
        authenticated: false
      })
    }
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