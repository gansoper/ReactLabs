/**
 * Created by Tirion on 08.02.2019.
 */
import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import PropTypes from 'prop-types'
import Select from 'react-select'
import MyDatePicker from './MyDatePicker'
import 'react-select/dist/react-select.css'




class App extends Component {
    static propTypes = {}

    state = {
        selection: null
    }

    render() {
        const selectOptions = this.props.articles.map(article=>({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <MyDatePicker />
                <UserForm />
                <Select options={selectOptions} value={this.state.selection} onChange={this.changeSelect} multi={true}/>
                <ArticleList articles={this.props.articles}/>
            </div>
        )
    }


    changeSelect = selection=>{
        this.setState({
            selection: selection
        })
    }
}

export default App;