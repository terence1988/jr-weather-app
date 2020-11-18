import React, { Component } from 'react';
import {Form, Input,Icon,Button} from "antd";


export default class FormPage extends Component {
  render() {
    return (
      <div>
        <h3>FormPage</h3>
        <form>
          <Form.Item>
            <Input placeholder=" Please input your name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder=" Please input your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.submit}>Submit</Button>
          </Form.Item>
        </form>
      </div>
    )
  }
}