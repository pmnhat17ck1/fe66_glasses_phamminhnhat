import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
export default class BaiTapGlasses extends Component {
    render() {
        return (
            <div className="container-fuild bg-dark" style={{ background: `url("./img/glassesImage/background.jpg")`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }} >
                <Header />
                <Card />
            </div>
        )
    }
}
