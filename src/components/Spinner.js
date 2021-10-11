import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center my-4'>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner

/* ajaxload.info */
