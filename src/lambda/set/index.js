const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const params = {
    TableName: 'samples',
    Item: {
      'Id': "2"
    }
  }
  let dynamodbOption = {};

  if (process.env.ENV === "local") {
    dynamodbOption = {
      endpoint: "http://dynamodb:8000",
      region: "local",
      accessKeyId: "local",
      secretAccessKey: "local",
    };
  }

  const docClient = new AWS.DynamoDB.DocumentClient(dynamodbOption);

  await docClient.put(params).promise();

  const responseBody = {
    samples: "",
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
  return response;
};
