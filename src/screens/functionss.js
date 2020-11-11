import React from "react";
import { Tabs, Form, Input, Button, DatePicker, Typography, Select} from 'antd';
import moment from 'moment'
const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function callback(key) {
  console.log(key);
}

const validateMessages = {
  required: '${label} is required!',
};

const Functions = (props) => {

  return (
    <Tabs style={props.style} defaultActiveKey="1" onChange={callback}>
      <TabPane tab="CheckAvailability" key="1">
        <Form
          {...layout}
          name="checkAvailability"
          onFinish={props.onCheckAvailabilityFinish}
          onFinishFailed={props.onCheckAvailabilityFinishFailed}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="RoomId"
            name="roomId"
            rules={[{ required: true, message: 'Please input your roomId!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: 'Please input your Time!' }]}
          >
             <RangePicker showTime />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
        <Text type={props.textType}>{props.result}</Text>
      </TabPane>
      <TabPane tab="GetBookingsForWeek" key="2">
      <Form
          {...layout}
          name="GetBookingsForWeek"
          onFinish={props.onGetBookingsForWeekFinish}
          onFinishFailed={props.onGetBookingsForWeekFinishFailed}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="RoomId"
            name="roomId"
            rules={[{ required: true, message: 'Please input your roomId!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Week"
            name="week"
            rules={[{ required: true, message: 'Please select week!' }]}
          >
            <Select>
              <Option value="today">Today</Option>
              <Option value="thisWeek">This Week</Option>
              <Option value="nextWeek">Next Week</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
        {props.resultCheck}
      </TabPane>
    </Tabs>
  )
}

export default Functions