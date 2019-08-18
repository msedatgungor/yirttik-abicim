const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#449AB4',
            '@blue-6': '#449AB4',
            '@green-6': '#52E052',
            '@red-6': '#EE3B2B',
            '@gold-6': '#F9C753',
            '@black': '#1F292E',
            '@font-family': "'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC',            'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif,         'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            '@pagination-font-family': '@font-family'
        }
    })
);

//ANTD DEFAULT LESS VARIABLES: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less