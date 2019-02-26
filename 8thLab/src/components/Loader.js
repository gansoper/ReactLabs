/**
 * Created by Tirion on 15.02.2019.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Loader extends Component {

    static contextTypes = {
        labels: PropTypes.array
    }

    render() {

        return (

            <div>
                <h1>{this.context.labels.loading} ... </h1>
            </div>
        )
    }
}

export default Loader;