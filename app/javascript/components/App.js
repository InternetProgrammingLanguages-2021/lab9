import React, {useState} from "react"
import PropTypes from "prop-types"
import {Appbar, Form, Container, Input, Panel, Button} from 'muicss/react';
import {nanoid} from "nanoid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: []}
    }
    addNumber = function () {
        this.setState({
            numbers: [...this.state.numbers, {id: nanoid(), value: 0.0}]
        })
    }.bind(this)
    setNumber = function (index, value) {
        this.state.numbers.splice(index, 1, value)
        this.setState({
            numbers: this.state.numbers
        })
    }.bind(this)
    deleteNumber = function (index) {
        this.state.numbers.splice(index, 1)
        this.setState({
            numbers: this.state.numbers
        })
    }.bind(this)

    render() {
        return (
            <React.Fragment>
                <Appbar>
                    <Container>
                        <div className="mui--text-display1">
                            <div className="mui--appbar-line-height ">ЛР 8</div>
                        </div>
                    </Container>
                </Appbar>
                <Container>
                    <Panel style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        {this.state.numbers.map((number, index) => <div style={{display: "flex", flexWrap: "wrap"}}>
                            <Input key={number.id} type="number" value={number.value} onChange={e => this.setNumber(index, {id: number.id, value: e.target.value})}/>
                            <Button color="danger" style={{marginLeft: "20px", marginTop: "15px"}} onClick={() => this.deleteNumber(index)}>Удалить</Button>
                        </div>)}
                        <div>
                            <Button onClick={this.addNumber}>Добавить</Button>
                            <Button color="primary" onClick={this.addNumber}>Отправить</Button>
                        </div>
                    </Panel>
                </Container>
            </React.Fragment>
        );
    }
}

export default App
