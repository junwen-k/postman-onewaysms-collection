function assertMessageDeliveredToTelco() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of 100', function () {
    pm.expect(parseInt(pm.response.text())).eq(100);
  });
}

function assertMessageReceivedOnMobileHandset() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of 0', function () {
    pm.expect(parseInt(pm.response.text())).eq(0);
  });
}

function assertMTIDInvalidOrNotFound() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -100', function () {
    pm.expect(parseInt(pm.response.text())).eq(-100);
  });
}

function assertMessageFailedToSend() {
  pm.test('should return status code of 200', function () {
    pm.response.to.have.status(200);
  });
  pm.test('should return response body of -200', function () {
    pm.expect(parseInt(pm.response.text())).eq(-200);
  });
}

function isMessageDeveliveredToTelcoRequest() {
  const { query } = pm.request.url;
  return query.get('mtid') === 'DELIVERED_TO_TELCO';
}

function isMessageReceivedOnMobileHandsetRequest() {
  const { query } = pm.request.url;
  return query.get('mtid') === 'MT_ID';
}

function isMTIDInvalidOrNotFoundRequest() {
  const { query } = pm.request.url;
  return query.get('mtid') === 'INVALID_OR_NOT_FOUND';
}

function isMessageFailedToSendRequest() {
  const { query } = pm.request.url;
  return query.get('mtid') === 'FAILED_TO_SEND';
}

switch (true) {
  case isMessageDeveliveredToTelcoRequest():
    return assertMessageDeliveredToTelco();
  case isMessageReceivedOnMobileHandsetRequest():
    return assertMessageReceivedOnMobileHandset();
  case isMTIDInvalidOrNotFoundRequest():
    return assertMTIDInvalidOrNotFound();
  case isMessageFailedToSendRequest():
    return assertMessageFailedToSend();
}
