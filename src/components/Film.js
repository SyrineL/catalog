import React, { Component } from 'react';
import {Link } from "react-router-dom";
import catalogue from '../catalogue.json'

class Film extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                    <h1>Catalogue de Films</h1>    
                <ul className="nav">
                
                        {
                        catalogue.map(function(movies){
                        return  <Link to={`/descri/${movies.id}`} className="nav-item">
                            <p>{movies.title}</p>
                        </Link>
                        })
                        }
                
                </ul>
            </div>
        );
    }
}

export default Film;
