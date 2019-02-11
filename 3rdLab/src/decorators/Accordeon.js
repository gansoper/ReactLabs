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
        if (this.state.openElementId === id) {
            this.setState({
                openElementId: null
            })
        }
        else {
            this.setState({
                openElementId: id
            });
        }
    }
}