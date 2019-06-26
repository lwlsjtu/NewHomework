import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, Checkbox, Form, NumberPicker, SplitButton } from '@alifd/next';

const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 8, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 }
};

export default class GroupedForm extends Component {
  static displayName = 'GroupedForm';

  reset = () => {
  }

  formChange = (values, field) => {
    console.log(values, field)
  }

  submit = (values, errors) => {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  };

  render() {
    return (
      <div className="grouped-form">
        <IceContainer title="个人信息修改" style={styles.container}>
          <Form onChange={this.formChange}>
            <div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>商品信息</h3>
                <div>
                  <FormItem label="姓名：" {...formItemLayout} required requiredMessage="姓名必须填写">
                    <Input name="name" placeholder="请输入姓名" message="姓名必须填写" />
                  </FormItem>
                  <FormItem label="邮箱：" {...formItemLayout} required requiredMessage="邮箱必须填写">
                    <Input name="mail" placeholder="....@...." message="邮箱必须填写" />
                  </FormItem>
                  <FormItem label="住址：" {...formItemLayout} required requiredMessage="地址必须填写">
                    <Input name="address" placeholder="请输入地址" message="地址" />
                  </FormItem>
                  <FormItem label="账户类型：" {...formItemLayout} required requiredMessage="请选择账户类型">
                    <Select
                      name="applyType"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '债权人', value: 'Normal_user' },
                        { label: '工作人员', value: 'Normal_worker' },
                        { label: '管理', value: 'Super_admin' },
                      ]}
                    />
                  </FormItem>
                </div>
              </div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>工作信息</h3>
                <div>
                  <FormItem label="公司名称：" {...formItemLayout} required requiredMessage="公司必须填写">
                    <Input name="companyName" placeholder="请输入公司名称" message="公司必须填写" />
                  </FormItem>
                  <FormItem label="工作职位：" {...formItemLayout} required requiredMessage="工作必须填写">
                    <Input name="job" placeholder="请输入工作职位" message="工作必须填写" />
                  </FormItem>
                </div>
              </div>

              <FormItem label=" " {...formItemLayout}>
                <Form.Submit type="primary" validate onClick={this.submit}>
                  立即更改
                  </Form.Submit>
                <Form.Reset style={styles.resetBtn} onClick={this.reset}>
                  重置
                  </Form.Reset>
              </FormItem>
            </div>
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
  subForm: {
    marginBottom: '20px',
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    fontSize: '14px',
    borderBottom: '1px solid #eee',
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
