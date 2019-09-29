import React, { Component } from 'react';
import Search from '../sections/home/search/Search';
import Filter from '../sections/home/filter/Filter';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Search />
                <Filter />
            </div>
        )
    }
}

export default HomePage;
