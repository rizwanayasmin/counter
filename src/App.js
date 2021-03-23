import React from "react"

import "./App.css"
import {
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Button,
} from "reactstrap";
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"

function App(props) {
  return (
    <div className="App">
      <Card className="card_app">
        <h4>Counter</h4>
        <Label>Count : </Label>
        {props.count} 
        <div className="btn_div">
        <div><Button onClick={() => props.increaseCounter()}>+</Button></div>
        <div><Button onClick={() => props.decreaseCounter()}>-</Button></div>
        </div>
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)