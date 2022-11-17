import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const env = process.env.ENV || "local";

    // DynamoDBテーブル
    const sampleTable = new dynamodb.Table(this, "sampleTable", {
      tableName: "samples",
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
    });

    // Lambda関数
    const sampleLambda = new lambda.Function(this, "sampleLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("src/lambda/sample"),
      environment: {
        ENV: env,
      },
    });
    sampleTable.grantReadWriteData(sampleLambda);

    // Lambda関数
    const setLambda = new lambda.Function(this, "setLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("src/lambda/set"),
      environment: {
        ENV: env,
      },
    });
    sampleTable.grantReadWriteData(setLambda);

    // API Gateway
    const sampleApi = new apigateway.RestApi(this, "sampleApi", {
      restApiName: "sampleApi",
    });

    const getSamplesIntegration = new apigateway.LambdaIntegration(
      sampleLambda
    );
    const postSetIntegration = new apigateway.LambdaIntegration(setLambda);

    const samplesResource = sampleApi.root.addResource("samples");
    samplesResource.addMethod("GET", getSamplesIntegration);
    samplesResource.addMethod("POST", postSetIntegration);
  }
}
