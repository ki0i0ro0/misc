const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb")

exports.handler = async (event) => {
  const params = new PutItemCommand({
    TableName: 'samples',
    Item: {
      Item: {
        'Id': {S:"2"}
      }
    },
  })

  let dynamodbOption = {};

  if (process.env.ENV === "local") {
    dynamodbOption = {
      endpoint: "http://dynamodb:8000",
      region: "local",
      accessKeyId: "local",
      secretAccessKey: "local",
    };
  }

  const docClient = new DynamoDBClient(dynamodbOption);

  await docClient.send(params);

  const responseBody = {
    samples: "",
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
  return response;
};
