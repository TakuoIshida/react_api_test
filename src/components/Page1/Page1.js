import React from 'react';
import {Cards, Chart, CountryPicker}  from './../../components';
import { fetchData } from '../commons/api/index';
import covid from './../../img/covid.png';
import styles from './Page1.module.css';

class Page1 extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });
    }
    render(){
        const {data, country} = this.state;
        
            return (
                <div className={styles.container}>
                    <img className={ styles.image } src={ covid } alt="covid19"/>
                    <Cards data={ data }/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={ data } country={country} />
                    <div>this is page1</div>
                </div>
            )
    }
}

export default Page1;