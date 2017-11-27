// const sv = require('../index.js');
const getUserMergeAPI = require('../getUserMergeAPI.js');
// const us = require('../getUserAPI.js');
// Success Case  Test for Success
test('Success getUserMergeAPI',() => {
  const newObj = {
    metadata: '1yiyqeiwyqiuey',
    data: 'This contains metadata for TERESA\r\nSample data for TERESA\r\n67 53 98 23 121\r\n12 23 43 12 45'
  };
  const request = {query: {user: 'Teresa'}};
  const reply = jest.fn();
  return getUserMergeAPI(request,reply).then(() => {
    expect(reply).toHaveBeenCalledWith(newObj);
  }
  );
  
});

test('Fail Case ',() => {
  const request = {query: {user: 'xxx'}};
  const reply = jest.fn();
  return getUserMergeAPI(request,reply).catch(() => {
    expect(reply).toHaveBeenCalledWith('No file found for this user');
  });
});