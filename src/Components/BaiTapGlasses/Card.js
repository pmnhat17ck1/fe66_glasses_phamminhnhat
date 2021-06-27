import React, { Component } from 'react'
import './styles.css'
export default class Card extends Component {


    arrMangKinh=[
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    handleChangeGlasses = (product) => {
        this.setState({
        "id": product.id,
        "price": product.price,
        "name": product.name,
        "url": product.url,
        "desc": product.desc,
        })
    }

    renderMangKinh = () =>{
        return  this.arrMangKinh.map((product,index)=>{
            return (
                <div className="col-2" key={index} style={{cursor:'pointer'}} onClick={()=>{this.handleChangeGlasses(product)}}>
                    <div style={{border: '1px solid #000',display:'flex',justifyContent:'center',alignItems:'center',padding:5}}>
                        <img src={'./img/'+product.url.substr(2)} width={90}  alt="..." />
                        <p></p>
                        
                    </div>
                </div>
            ) 
        })

        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="glass">
                            <img className="glass__img-BG"  src="./img/glassesImage/model.jpg" alt="..."/>
                            <img className="glass__img" src={`./img/${this.state.url.substr(2)}`} alt="..."/>
                            <div className="glass__content">
                                <h3 className="glass__title">{this.state.name}</h3>
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="glass">
                            <img className="glass__img-BG"  src="./img/glassesImage/model.jpg" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="row mt-5" style={{paddingBottom:'150px'}}>
                    <div className="col-12">
                        <div className="card mt-4">
                            <div className="card-body mt-4">
                                <div className="row">
                                    {this.renderMangKinh()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
