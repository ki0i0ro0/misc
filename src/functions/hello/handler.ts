import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

import {
  DynamoDBClient,
  DynamoDBClientConfig,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
const ClientConfig: DynamoDBClientConfig = {
  endpoint: "http://localhost:8000",
};
const dynamodb = new DynamoDBClient(ClientConfig);

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const data = await dynamodb.send(new ScanCommand({
    TableName:"test"
  }))

  return formatJSONResponse({
    data,
    event,
  });
};

export const main = middyfy(hello);
