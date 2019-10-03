import React, { Component } from 'react';
import Search from '../sections/home/search/Search';
import Filter from '../sections/home/filter/Filter';
import Layout from '../sections/home/layout/Layout';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Search />
                <Filter />
                <Layout />
            </div>
        )
    }
}

export default HomePage;
