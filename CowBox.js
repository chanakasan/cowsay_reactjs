import { say } from 'cowsay';
import React from "react";
import styled from 'styled-components';

const Well = styled.pre`
  font-size: 36px;
`

const defaultMsg = 'Hey! Type something above'

export default class CowBox extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({ msg: e.target.value })
  }

  render() {
    return (
      <div className="my-cowbox">
        <input type="text" value={this.state.msg} onChange={this.onChange} />
        <Well>
          { say({ text: this.state.msg || defaultMsg }) }
        </Well>
      </div>
    )
  }
}
