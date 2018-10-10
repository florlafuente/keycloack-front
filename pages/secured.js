import React, { Component } from 'react'
import Link from 'next/link'
const keycloak = import('../json/keycloak.json')

export default class extends Component {
  static async getInitialProps() {
    const data = await keycloak
    return { 
      keycloak: data
    }
  }

  state = {
    keycloak: null,
    authenticated: false
  }
  
  render () {
    return (
      <div>
        {console.log(this.props.keycloak)}
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