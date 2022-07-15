import React, {Component} from 'react'
import {ThemeContext} from './App' // user {} for non default export, just a name export
export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }
    }
    changeCount = (amt) =>{
        this.setState(prevState => ({
            count: prevState.count + amt
        }))
    }
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    style => (
                        <div>
                            <button style={style} onClick={()=>{
                                    this.changeCount(-1)
                                }} className="btn">-</button>
                            <span>{this.state.count}</span>
                            <button style={style} onClick={()=>{
                                    this.changeCount(1)
                            }}className="btn">+</button>
                        </div>
                    )
                }
              
          </ThemeContext.Consumer>
        )
    }
}