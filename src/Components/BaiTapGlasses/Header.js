import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
           <nav style={{position:'fix',top:0,right:0,left:0,height:80, backgroundColor:'rgba(0, 0, 0, 0.5)',alignItems:'center',justifyContent:'center',display:'flex'}}>
               <h3 className="text-white" style={{textTransform:'uppercase'}}>try glasses app online</h3>
           </nav>

        )
    }
}
