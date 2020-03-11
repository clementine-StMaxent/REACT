import React, { Component } from 'react';
import Car from './Car'

class Mycars extends Component {

    render(){
    console.log(this);
        return (
            <div>
                {/* <h1>Catalogue de voiture </h1> */}
                <h1>{this.props.title}</h1>
                    <Car color='red'>FORD</Car><button>Suprimmer</button>
                    <Car>TESLA</Car><button>Suprimmer</button>
                    <Car color='dark'></Car><button>Suprimmer</button>

                    <div>
                    <input type="text" placeholder="Ajouter une voiture"></input>
                        <button>Ajouter</button>
                    </div>
            </div>
        )
    }
}

export default Mycars ;