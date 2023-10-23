import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'serverless-sample',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    "serverless-dynamodb-local",
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "local",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { hello },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      stages: ["local"],
      start: {
        port: 8000,
        inMemory:true,
        migrate:true,
        seed: true,
      },
      seed: {
        local: {
          sources: [
            {
              table: "test",
              sources: ["./seed/test.json"],
            },
          ],
        },
      },
    },
  },
  resources: {
    Resources: {
      DynamoDBTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "test",
          AttributeDefinitions: [
            {
              AttributeName: "DataType",
              AttributeType: "S",
            },
            {
              AttributeName: "ID",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "DataType",
              KeyType: "HASH",
            },
            {
              AttributeName: "ID",
              KeyType: "RANGE",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
