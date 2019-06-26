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
        <IceContainer title="项目信息" style={styles.container}>
          <Form onChange={this.formChange}>
            <div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>商品信息</h3>
                <div>
                  <FormItem label="项目名称：" {...formItemLayout} required requiredMessage="项目名称必须填写">
                    <Input name="name" placeholder="请输入项目名称" message="项目名称必须填写" />
                  </FormItem>
                  <FormItem label="项目类型：" {...formItemLayout} required requiredMessage="项目类型">
                    <Select
                      name="type"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '重整', value: '1' },
                        { label: '和解', value: '2' },
                        { label: '清算', value: '3' },
                      ]}
                    />
                  </FormItem>
                </div>
              </div>
              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>公司信息</h3>
                <div>
                  <FormItem label="公司名称：" {...formItemLayout} required requiredMessage="公司名称必须填写">
                    <Input name="companyName" placeholder="请输入项目名称" message="公司名称必须填写" />
                  </FormItem>
                  <FormItem label="公司法人：" {...formItemLayout} required requiredMessage="公司法人必须填写">
                    <Input name="corporationName" placeholder="请输入公司法人" message="公司法人必须填写" />
                  </FormItem>
                  <FormItem label="公司地址：" {...formItemLayout} required requiredMessage="公司地址必须填写">
                    <Input name="companyAddress" placeholder="请输入公司地址" message="公司地址必须填写" />
                  </FormItem>
                  <FormItem label="注册资本：" {...formItemLayout} required requiredMessage="注册资本">
                    <Input name="registryMoney" placeholder="注册资本" message="注册资本" />单位：元
                  </FormItem>
                  <FormItem label="经营范围：" {...formItemLayout} required requiredMessage="项目类型">
                    <Select
                      name="area"
                      style={{ width: '30%' }}
                      dataSource={[
                        { label: '电子商务', value: '电子商务' },
                        { label: '房地产', value: '房地产' },
                        { label: '证券行业', value: '证券行业' },
                      ]}
                    />
                  </FormItem>
                </div>
              </div>

              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>项目负责人</h3>
                <div>
                  <FormItem label="负责人Id：" {...formItemLayout} required requiredMessage="负责人Id必须填写">
                    <Input name="adminId" placeholder="负责人Id" message="负责人Id" />
                  </FormItem>
                  <FormItem label="负责人姓名：" {...formItemLayout} required requiredMessage="负责人姓名必须填写">
                    <Input name="adminName" placeholder="负责人姓名" message="负责人姓名" />
                  </FormItem>
                  <FormItem label="联系方式：" {...formItemLayout} required requiredMessage="联系方式必须填写">
                    <Input name="adminPhone" placeholder="电话" message="电话" />
                  </FormItem>
                  <FormItem label="联系地址：" {...formItemLayout} required requiredMessage="联系地址必须填写">
                    <Input name="adminAddress" placeholder="地址" message="地址" />
                  </FormItem>
                </div>
              </div>

              <FormItem label=" " {...formItemLayout}>
                <Form.Submit type="primary" validate onClick={this.submit}>
                  立即创建
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
