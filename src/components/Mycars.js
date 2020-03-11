import React, { Component } from 'react';
import Car from './Car'

class Mycars extends Component {

    render(){
    console.log(this);
        return (
            <div>
                {/* <h1>Catalogue de voiture </h1> */}
                <h1>{this.props.title}</h1>
                    <Car color='red'>FORD</Car>
                    <Car>TESLA</Car> 
                    <Car color='dark'></Car>
            </div>
        )
    }
}

export default Mycars ;