import React, { Component } from 'react';
import { moment } from 'moment';
import { Button, Pagination, Dialog, DatePicker, Grid, Select, Message } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import {
  FormBinder as IceFormBinder,
  FormBinderWrapper as IceFormBinderWrapper,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { TablePaginationProps } from 'rsuite/lib/TablePagination';
import 'rsuite-table/lib/less/index.less';
import IceContainer from '@icedesign/container';
import tagStyles from './index.module.scss';

import FooterLinks from '../FooterLinks';
import axios from 'axios';
import { setAuthority } from '../../../../utils/authority';
import { reloadAuthorized } from '../../../../utils/Authorized';
import { formatDate } from 'react-intl/src/format';

const { Row, Col } = Grid;
// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MOCK_DATA = [
  {
    selected: '全部',
    label: '项目状态',
    value: ['全部', '组建项目组中'],
  },
];

// MOCK 数据，实际业务按需进行替换
const getData = (length = 10) => {
  return Array.from({ length }).map(() => {
    return {
      name: ['淘小宝', '淘二宝'][random(0, 1)],
      level: ['普通会员', '白银会员', '黄金会员', 'VIP 会员'][random(0, 3)],
      balance: random(10000, 100000),
      accumulative: random(50000, 100000),
      regdate: `2018-12-1${random(1, 9)}`,
      birthday: `1992-10-1${random(1, 9)}`,
      store: ['余杭盒马店', '滨江盒马店', '西湖盒马店'][random(0, 2)],
    };
  });
};

export const EditCell = ({ rowData, dataKey, onChange, ...props }) => {
  const timestamp4 = new Date(parseInt(rowData[dataKey]) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')

  return (
    <Cell {...props}>{timestamp4}</Cell>
  );
};

export default class GoodsTable extends Component {
  state = {
    current: 1,
    isLoading: false,
    data: [],
    pageSize: 3,
    total: 100,
    tagData: MOCK_DATA,
    filterValue: [],
  };
  handleClick = (value, index) => {
    const { tagData } = this.state;
    tagData[index].selected = value;
    this.setState(
      {
        tagData,
      },
      () => {
        this.fetchData();
      }
    );
  };
  componentDidMount() {
    this.fetchData();
  }


  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  fetchData = (len) => {
    const storage = window.localStorage;
    const userId = storage.getItem('userId');
    console.log('1', this.state.current, this.state.pageSize, this.state.total, userId);
    console.log(this.state.data);
    this.setState(
      {
        isLoading: true,
      },
      () => {
        axios({
          method: 'post',
          url: 'http://localhost:8280/caseservice/case/myProjectList',
          headers: {
            'Content-type': 'application/json',
          },
          data: {
            applicantId: userId,
            pageSize: this.state.pageSize,
            index: this.state.current,
            state: this.state.tagData[0].selected,
          },
        })
          .then((res) => {
            this.setState({
              isLoading: false,
              data: res.data.content,
              total: res.data.totalElements,
            }, () => {
              console.log(this.state.data);
            }
            );
          })
          .catch((error) => {
            alert('post失败');
            console.log(error);
          });
      }
    );
  };

  handlePaginationChange = (current) => {
    this.setState(
      {
        current,
      },
      () => {
        this.fetchData();
      }
    );
  };


  formChange = (value) => {
    console.log(value);
  };


  handleFilterChange = () => {
    this.fetchData(5);
  };

  handleDelete = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除吗',
      onOk: () => {
        this.fetchData(10);
      },
    });
  };

  handleDetail = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持查看详情',
    });
  };


  render() {
    const { isLoading, data, current, pageSize, total, tagData, filterValue } = this.state;

    return (
      <div style={styles.container}>
        <IceContainer>
          <div className={tagStyles.filterContent}>
            {tagData.map((item, index) => {
              const lastItem = index === tagData.length - 1;
              const lastItemStyle = lastItem ? { marginBottom: 10 } : null;
              return (
                <div className={tagStyles.filterItem} style={lastItemStyle} key={index}>
                  <div className={tagStyles.filterLabel}>{item.label}:</div>
                  <div className={tagStyles.filterList}>
                    {item.value.map((text, idx) => {
                      const activeStyle =
                        item.selected === text ? tagStyles.activeText : tagStyles.filterText;
                      return (
                        <span
                          onClick={() => this.handleClick(text, index)}
                          className={activeStyle}
                          key={idx}
                        >
                          {text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <IceFormBinderWrapper
            value={this.state.filterValue}
            onChange={this.formChange}
            ref="form"
          >
            <Row wrap gutter="20" style={styles.formRow}>
              <Col l="24">
                <div style={styles.formItem}>
                  <span style={styles.formLabel}>注册时间：</span>
                  <IceFormBinder triggerType="onBlur" name="regdate">
                    <DatePicker placeholder="请输入" style={{ width: '200px' }} />
                  </IceFormBinder>
                  <div style={styles.formError}>
                    <IceFormError name="regdate" />
                  </div>
                </div>
              </Col>
              <Col l="24">
                <div style={styles.formItem}>
                  <span style={styles.formLabel}>生日时间：</span>
                  <IceFormBinder triggerType="onBlur" name="birthday">
                    <DatePicker placeholder="请输入" style={{ width: '200px' }} />
                  </IceFormBinder>
                  <div style={styles.formError}>
                    <IceFormError name="birthday" />
                  </div>
                </div>
              </Col>
              <Col l="24">
                <div style={styles.formItem}>
                  <span style={styles.formLabel}>归属门店：</span>
                  <IceFormBinder triggerType="onBlur" name="state">
                    <Select style={{ width: '200px' }}>
                      <Select.Option value="1">余杭盒马店</Select.Option>
                      <Select.Option value="2">滨江盒马店</Select.Option>
                      <Select.Option value="3">西湖盒马店</Select.Option>
                    </Select>
                  </IceFormBinder>
                  <div style={styles.formError}>
                    <IceFormError name="type" />
                  </div>
                </div>
              </Col>
            </Row>
          </IceFormBinderWrapper>
        </IceContainer>
        <IceContainer >
          <Table data={data} height={400}>
            <Column fix sort resizable>
              <HeaderCell>项目名称</HeaderCell>
              <Cell dataKey="name" />
            </Column>
            <Column sort resizable>
              <HeaderCell>项目主管</HeaderCell>
              <Cell dataKey="adminName" />
            </Column>
            <Column sort resizable>
              <HeaderCell>债务公司</HeaderCell>
              <Cell dataKey="debtorCompany" />
            </Column>
            <Column sort resizable>
              <HeaderCell>公司法人</HeaderCell>
              <Cell dataKey="debtorCompanyCoporationName" />
            </Column>
            <Column sort resizable>
              <HeaderCell>注册资本</HeaderCell>
              <Cell dataKey="debtorCompanyRegistMoney" />
            </Column>
            <Column sort resizable>
              <HeaderCell>项目状态</HeaderCell>
              <Cell dataKey="state" />
            </Column>
            <Column sort resizable>
              <HeaderCell>创建时间</HeaderCell>
              <EditCell dataKey="createdAt" />
            </Column>
          </Table>
          <Pagination
            style={styles.pagination}
            current={current}
            onChange={this.handlePaginationChange}
            pageSize={pageSize}
            total={total}
          />
        </IceContainer>
        <IceContainer>
          <FooterLinks />
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
  formItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  formLabel: {
    minWidth: '80px',
  },
};

