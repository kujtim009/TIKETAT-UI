import React, { Component } from 'react'
import EditBox from '../EditBox/editbox';
import Label from '../Label/label';
import classes from './regjionprice.module.css';


export default class Regjionprice extends Component {
    state = {
        regjioni:null,
        cmimi: 0.0
    }
    changeHandler=(e)=>{
        this.setState({
            regjioni: this.props.rgnId,
            cmimi: e.target.value
        })
    }

    componentDidUpdate(){
    }

    componentDidMount() {
        this.setState({
            regjioni: this.props.rgnId,
            cmimi: this.props.rgnPrice
        })
    }
    render() {
        const data = {
            "regjioni": this.state.regjioni,
            "cmimi": this.state.cmimi
        }
        return (
            <React.Fragment>
                <td>
                    <Label titulli={this.props.title} />
                </td>
                <td>
                    <EditBox 
                    val={this.state.cmimi} 
                    editsize = "10"
                    change ={this.changeHandler}
                    />
                </td>
                <td>
                    <button className={classes.btn} onClick={() => this.props.click(data)}>Ndrysho</button>
                </td>
                <br/>
            </React.Fragment>
        )
    }
}
