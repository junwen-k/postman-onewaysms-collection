function assertSuccessfulResponse() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of credit balance', function () {
    pm.expect(parseInt(pm.response.text())).above(0);
  });
}

function assertAPIUsernameOrPasswordInvalid() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -100', function () {
    pm.expect(parseInt(pm.response.text())).eq(-100);
  });
}

function isSuccessfulRequest() {
  const { query } = pm.request.url;
  return (
    query.get('apiusername') === 'USERNAME' &&
    query.get('apipassword') === 'PASSWORD'
  );
}

function isAPIUsernameOrPasswordInvalidRequest() {
  const { query } = pm.request.url;
  return (
    query.get('apiusername') === 'INVALID_USERNAME' &&
    query.get('apipassword') === 'INVALID_PASSWORD'
  );
}

switch (true) {
  case isAPIUsernameOrPasswordInvalidRequest():
    return assertAPIUsernameOrPasswordInvalid();
  case isSuccessfulRequest():
    return assertSuccessfulResponse();
}
