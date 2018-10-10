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

  componentDidMount () {
    Keycloak = require('keycloak-js');
    const keycloak = Keycloak(this.props.keycloak)
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      console.log(authenticated)
      //this.setState({ keycloak: keycloak, authenticated: authenticated })
    }, () => console.log(this.state))
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