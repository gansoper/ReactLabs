/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'

export default (OriginalComponent) => class AccordeonedComponent extends Component {

    state = {
        openElementId: null,
    }

    render() {
        return <OriginalComponent {...this.props} toggleOpen={this.toggleOpenElement}
                                                  elementId={this.state.openElementId}/>
    }


    toggleOpenElement = id => evt => {
        this.setState({
            openElementId: this.state.openElementId === id ? null : id
        })
    }
}