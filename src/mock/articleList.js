import Mock from 'mockjs';

Mock.mock(/mock\/api\/front\/articleList/, 'get', function(){
  const data = Mock.mock({
    "array|3" : [
      {
        title: `ant design part`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      }
    ]
  });
  return data;
});