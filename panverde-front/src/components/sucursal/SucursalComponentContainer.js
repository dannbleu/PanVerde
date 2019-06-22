import React, { Component } from 'react';

import { ShowSucursales } from '../../services/sucursal';

import Map from './SucursalComponent';
 
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sucursales: []
        };
    }

    
    componentWillMount() {
      this.getAllSucursales()
    }

    getAllSucursales = () => {
        ShowSucursales().then(res =>

          this.setState({ sucursales: res.sucursales }) 
        ).catch(err =>console.log('err', err))
    }

  render() {

    let { sucursales } = this.state;
    console.log("aasasadad", sucursales);

    return(
      <div style={{ width: "100vw" }}>
        <Map/>
        {/* {sucursales.map(
            (sucursal, i) => 
             <Map key={i}{...sucursal} />
          )
        }        */}
      </div>
    );
  }
}
 
export default MapContainer;