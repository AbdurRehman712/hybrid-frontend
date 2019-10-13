import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Search from '../sections/home/search/Search';
import Filter from '../sections/home/filter/Filter';
import Layout from '../sections/home/layout/Layout';

class HomePage extends Component {
    render() {
        return (
            <div> 
                <Search />
                <StickyContainer>
                    <Sticky>
                        {({
                            style
                        }) => (
                            <Filter  style={style} />
                        )}
                    </Sticky>
                    <Layout />
                </StickyContainer>
            </div>
        )
    }
}

export default HomePage;
