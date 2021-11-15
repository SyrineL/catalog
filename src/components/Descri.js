import React, { Component } from 'react';
import catalogue from '../catalogue.json'

class Descri extends Component {
    render() {
        const {id} = this.props.match.params
        const filtre = catalogue.filter(film => film.id === Number(id))
        return (
            <div>
                <h1>Decription</h1>
                <p>Description des films</p>
                {
                        filtre.map(function(descriptions){
                        return  <> <p className="nav-item">{descriptions.title}<br/><br/>{descriptions.description} </p>
                               <img src={descriptions.image} /> </>
                                
                        })
                }
            </div>
        );
    }
}

export default Descri;