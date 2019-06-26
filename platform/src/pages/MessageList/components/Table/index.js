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
    label: '信息状态',
    value: ['全部', '已读', '未读'],
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
  const timestamp4 = new Date(parseInt(rowData[dataKey]) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');

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
    getData(len);
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
        </IceContainer>
        <IceContainer >
          <Table data={data} height={400}>
            <Column fix sort resizable>
              <HeaderCell>发送人</HeaderCell>
              <Cell dataKey="name" />
            </Column>
            <Column width={400} sort resizable>
              <HeaderCell>发送内容</HeaderCell>
              <Cell dataKey="adminName" />
            </Column>
            <Column sort resizable>
              <HeaderCell>发送时间</HeaderCell>
              <Cell dataKey="debtorCompany" />
            </Column>
            <Column sort resizable>
              <HeaderCell>状态</HeaderCell>
              <Cell dataKey="debtorCompanyCoporationName" />
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

