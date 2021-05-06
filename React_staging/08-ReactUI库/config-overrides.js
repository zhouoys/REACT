const { override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override( 
   fixBabelImports('import', { //按需引入样式配置
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({ //自定义主题
    lessOptions:{
        javascriptEnabled: true,
        modifyVars: { '@primary-color': 'green' },
    }
}),
);