export default {
  data: {
    list: [
      {
        id: 600110233,
        resName: 'chart',
        resKey: 'echarts',
        resIcon: 'PieChartOutlined',
      },
      {
        id: 100631,
        resName: 'editor',
        resKey: 'editor',
        resIcon: 'FormOutlined',
      },
      {
        id: 10062,
        resName: 'setting',
        resIcon: 'SettingOutlined',
        resKey: 'set$',
        children: [
          {
            id: 10108,
            resName: 'usermanagement',
            resKey: 'set$/userManage',
            resIcon: 'TeamOutlined',
          },
          {
            id: 10109,
            resName: 'rolemanagement',
            resKey: 'set$/roleManage',
            resIcon: 'UsergroupDeleteOutlined',
          },
          {
            id: 10110,
            resName: 'authoritymanagement',
            resKey: 'set$/moduleManage',
            resIcon: 'moduleManage',
          },
        ]
      },
    ],
  },
  msg: '操作成功',
  status: 200,
}
