import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, Checkbox, Form, NumberPicker, SplitButton ,Radio} from '@alifd/next';

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
        <IceContainer title="债权申请" style={styles.container}>
          <Form onChange={this.formChange}>
            <div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>基本信息</h3>
                <div>
                  <FormItem label="案件Id：" {...formItemLayout} required requiredMessage="案件Id必须填写">
                    <Input name="caseId" placeholder="请输入案件Id" message="案件Id必须填写" />
                  </FormItem>
                  <FormItem label="受托人Id：" {...formItemLayout}>
                    <Input name="trusteeId" placeholder="无受托人不填写"/>
                  </FormItem>
                </div>
              </div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>债权信息</h3>
                <div>
                  <FormItem label="是否担保：" {...formItemLayout} required requiredMessage="是否担保">
                    <Select
                      name="guarantee"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '是', value: '1' },
                        { label: '否', value: '0' },
                      ]}
                    />
                  </FormItem>
                  <FormItem label="是否抵押：" {...formItemLayout} required requiredMessage="是否担保">
                    <Select
                      name="mortgator"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '是', value: '1' },
                        { label: '否', value: '0' },
                      ]}
                    />
                  </FormItem>
                  <FormItem label="类型：" {...formItemLayout} required requiredMessage="请选择类型">
                    <Select
                      name="type"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '职工债权', value: '职工债权' },
                        { label: '普通债权', value: '普通债权' },
                        { label: '其他债权', value: '其他债权' },
                      ]}
                    />
                  </FormItem>
                </div>
              </div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>金额明细</h3>
                <FormItem label="币种：" {...formItemLayout} required requiredMessage="请选择币种">
                  <Select
                    name="currency"
                    style={{ width: '30%' }}
                    dataSource={[
                      { label: '人命币', value: 'RMB' },
                      { label: '美元', value: 'dollars' },
                    ]}
                  />
                </FormItem>
                <div>
                  <FormItem label="本金：" {...formItemLayout} required requiredMessage="本金必须填写">
                    <Input name="capital" placeholder="请输入本金" message="本金必须填写" />
                  </FormItem>
                  <FormItem label="利息：" {...formItemLayout} required requiredMessage="利息必须填写">
                    <Input name="total" placeholder="请输入利息" message="利息必须填写" />
                  </FormItem>
                  <FormItem label="合计：" {...formItemLayout} required requiredMessage="合计金额必须填写">
                    <Input name="total" placeholder="请输入合计金额" message="合计金额必须填写" />
                  </FormItem>
                </div>
              </div>
              <FormItem label=" " {...formItemLayout}>
                <Form.Submit type="primary" validate onClick={this.submit}>
                  立即申请
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
