/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component{

    state={
        isOpen : false
    }

    render(){
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}