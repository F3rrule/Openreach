import React, { Component } from 'react';
import Data_List from './components/data_backend';


// This Class just calls the Data_List function from data_backend.js
class pon_list extends Component {
    render() {
        return (
            <div><Data_List /></div>
        );
    }
}
export default pon_list;

