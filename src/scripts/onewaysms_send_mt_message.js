function assertSuccessfulResponse() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of mt ID', function () {
    pm.expect(parseInt(pm.response.text())).eq(145712468);
  });
}

function assertSuccessfulResponseWithMultipleMobileNos() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of mt IDs', function () {
    const mtIDs = pm.response.text().split(',').map(parseInt);
    pm.expect(mtIDs).lengthOf(2);
    pm.expect(mtIDs[0]).eq(145712468);
    pm.expect(mtIDs[1]).eq(145712469);
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

function assertSenderIDInvalid() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -200', function () {
    pm.expect(parseInt(pm.response.text())).eq(-200);
  });
}

function assertMobileNoInvalid() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -300', function () {
    pm.expect(parseInt(pm.response.text())).eq(-300);
  });
}

function assertLanguageTypeInvalid() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -400', function () {
    pm.expect(parseInt(pm.response.text())).eq(-400);
  });
}

function assertInvalidCharactersInMessage() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -500', function () {
    pm.expect(parseInt(pm.response.text())).eq(-500);
  });
}

function assertInsufficientCreditBalance() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -600', function () {
    pm.expect(parseInt(pm.response.text())).eq(-600);
  });
}

function isSuccessfulRequest() {
  const { query } = pm.request.url;
  return query.get('message') === 'SUCCESSFUL';
}

function isSuccessfulRequestWithMultipleMobileNos() {
  const { query } = pm.request.url;
  return query.get('message') === 'SUCCESSFUL_MULTIPLE';
}

function isAPIUsernameOrPasswordInvalidRequest() {
  const { query } = pm.request.url;
  return (
    query.get('apiusername') === 'INVALID_USERNAME' &&
    query.get('apipassword') === 'INVALID_PASSWORD'
  );
}

function isSenderIDInvalidRequest() {
  const { query } = pm.request.url;
  return query.get('senderid') === 'INVALID';
}

function isMobileNoInvalidRequest() {
  const { query } = pm.request.url;
  return query.get('mobileno') === 'INVALID';
}

function isLanguageTypeInvalidRequest() {
  const { query } = pm.request.url;
  return query.get('languagetype') === 'INVALID';
}

function isInvalidCharactersInMessageRequest() {
  const { query } = pm.request.url;
  return query.get('message') === 'INVALID';
}

function isInsufficientCreditBalanceRequest() {
  const { query } = pm.request.url;
  return query.get('message') === 'INSUFFICIENT_CREDIT_BALANCE';
}

switch (true) {
  case isSuccessfulRequest():
    return assertSuccessfulResponse();
  case isSuccessfulRequestWithMultipleMobileNos():
    return assertSuccessfulResponseWithMultipleMobileNos();
  case isAPIUsernameOrPasswordInvalidRequest():
    return assertAPIUsernameOrPasswordInvalid();
  case isSenderIDInvalidRequest():
    return assertSenderIDInvalid();
  case isMobileNoInvalidRequest():
    return assertMobileNoInvalid();
  case isLanguageTypeInvalidRequest():
    return assertLanguageTypeInvalid();
  case isInvalidCharactersInMessageRequest():
    return assertInvalidCharactersInMessage();
  case isInsufficientCreditBalanceRequest():
    return assertInsufficientCreditBalance();
}
