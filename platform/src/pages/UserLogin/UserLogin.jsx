/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FoundationSymbol from '@icedesign/foundation-symbol';
import { Input, Checkbox, Grid, Form, Message } from '@alifd/next';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import { userLogin } from './actions';
import reducer from './reducer';

import { setAuthority } from '../../utils/authority';
import { reloadAuthorized } from '../../utils/Authorized';
import AbilityIntroduction from './components/AbilityIntroduction';
import LoginIntro from './components/LoginPanel/LoginPanel';
import IntroBanner from './components/IntroBanner';


const Icon = FoundationSymbol;
const { Row, Col } = Grid;
const FormItem = Form.Item;

@withRouter
class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        password: '',
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (values, errors) => {
    console.log('error', errors, 'value', values);
    const { history } = this.props;
    const storage = window.localStorage;
    if (!errors) {
      // 提交当前填写的数据
      axios({
        method: 'post',
        url: 'http://localhost:8280/userservice/users/login',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          phoneNumber: values.phoneNumber,
          password: values.password,
        },
      })
        .then((res) => {
          if (res.data.role === 0) {
            Message.error(res.data.message);
          } else {
            Message.success('登录成功');
            console.log(res.data);
            setAuthority(res.data.role);
            reloadAuthorized();
            storage.setItem('userId', res.data.userId);
            storage.setItem('role', res.data.role);
            history.push('/dashboard/monitor');
          }
        })
        .catch((error) => {
          alert('post失败');
          console.log(error);
        });
    }
    if (errors) {
      console.log('errors', errors);
    }
  };

  render() {
    return (
      <div className="user-login">
        <div style={styles.container}>
          <Row wrap style={styles.row}>
            <Col l="16" style={styles.col}>
              <IntroBanner />
            </Col>
            <Col l="8" style={styles.col}>
              <div style={styles.content}>
                <div className="formContainer">
                  <Form value={this.state.value} onChange={this.formChange}>
                    <FormItem required requiredMessage="必填" className="formItem">
                      <Input
                        innerBefore={
                          <Icon type="person" size="small" className="inputIcon" />
                        }
                        name="phoneNumber"
                        maxLength={20}
                        placeholder="手机号码"
                      />
                    </FormItem>
                    <FormItem required requiredMessage="必填" className="formItem">
                      <Input
                        innerBefore={
                          <Icon type="lock" size="small" className="inputIcon" />
                        }
                        name="password"
                        htmlType="password"
                        placeholder="密码"
                      />
                    </FormItem>
                    <FormItem>
                      <Checkbox name="checkbox" className="checkbox">
                        记住账号
                      </Checkbox>
                    </FormItem>
                    <Row className="formItem">
                      <Form.Submit
                        type="primary"
                        validate
                        onClick={this.handleSubmit}
                        className="submitBtn"
                      >
                        登 录
                      </Form.Submit>
                      <p className="account">
                        <span className="tips-text" style={{ marginRight: '20px' }}>
                         管理员登录：admin/admin
                        </span>
                        <span className="tips-text">用户登录：user/user</span>
                      </p>
                    </Row>

                    <Row className="tips">
                      <Link to="/user/register" className="tips-text">
                        立即注册
                      </Link>
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <AbilityIntroduction />
      </div>
    );
  }
}

const mapDispatchToProps = {
  userLogin,
};

const mapStateToProps = (state) => {
  return { loginResult: state.login };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'login', reducer });

export default compose(
  withReducer,
  withConnect
)(UserLogin);

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '56vh',
  },
  row: {
    padding: '0',
  },
  col: {
    padding: '0',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '56vh',
    background: '#fff',
  },
};
