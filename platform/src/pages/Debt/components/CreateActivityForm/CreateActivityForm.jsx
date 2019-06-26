import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Checkbox,
  Select,
  DatePicker,
  Switch,
  Radio,
  Grid,
  Form,
} from '@alifd/next';
import axios from 'axios';

const { Row, Col } = Grid;

// FormBinder 用于获取表单组件的数据，通过标准受控 API value 和 onChange 来双向操作数据
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;


const formItemLayout = {
  labelCol: { xxs: '6', s: '2', l: '2' },
  wrapperCol: { s: '12', l: '10' },
};

export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: 'test',
        area: 'location1',
        time: [],
        delivery: false,
        type: ['地推活动'],
        resource: '线下场地免费',
        extra: '',
      },
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {

  };

  submit = (value, error) => {
    console.log('error', error, 'value', value);
    if (error) {
      // 处理表单报错
    } else {
      axios({
        method: 'post',
        url: 'http://localhost:8080/apply/makeApply',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          case_id: value.case_id,
          user_id: value.user_id,
          money: value.money,
          description: value.description,
        },
      })
        .then((res) => {
          console.log(res);
          alert('post成功');
        }).catch((err) => {
          alert('post失败');
          console.log(err);
        });
    }
    // 提交当前填写的数据
  };

  render() {
    return (
      <div className="create-activity-form">
        <IceContainer title="债务申报" style={styles.container}>
          <Form
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <FormItem {...formItemLayout}
              label="案件编号："
              required
              requiredMessage="案件编号必须填写"
            >
              <Input name="case_id" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout}
              label="申请人编号："
              required
              requiredMessage="申请人编号必须填写"
            >
              <Input name="user_id" style={{ width: '100%' }} />
            </FormItem>
            <FormItem {...formItemLayout}
              label="申报金额："
              required
              requiredMessage="申报金额必须填写"
            >
              <Input name="money" style={{ width: '100%' }} />
            </FormItem>

            <FormItem {...formItemLayout} label="债务性质：">
              <CheckboxGroup
                name="type"
                dataSource={[
                    { label: '普通债务', value: '1' },
                    { label: '股票债务', value: '2' },
                    { label: '物料债务', value: '3' },
                    { label: '工资债务', value: '4' },
                  ]}
              />
            </FormItem>

            <FormItem {...formItemLayout} label="债务描述：">
              <Input.TextArea name="description" style={{ width: '100%' }} />
            </FormItem>

            <FormItem {...formItemLayout} label=" ">
              <Form.Submit type="primary" validate onClick={this.submit}>
                  立即创建
              </Form.Submit>
              <Form.Reset style={styles.resetBtn} onClick={this.reset}>
                  重置
              </Form.Reset>
            </FormItem>
          </Form>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
