import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchData}

function dataContainer() {

}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}