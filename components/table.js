import React from 'react'
import { Table, Typography } from 'antd';

export default function Demo(props) {

    return (
      <div>
        <Table
          columns={props.columns}
          dataSource={props.dataSource}
        />
      </div>
    );
  
}