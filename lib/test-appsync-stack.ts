import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as appsync from "@aws-cdk/aws-appsync-alpha"
import * as path from "path"
import { definition } from "../src/schema"

export class TestAppsyncStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const api = new appsync.GraphqlApi(this, "Api", {
      name: "demo",
      schema: appsync.Schema.fromAsset(path.join(__dirname, "schema.graphql")),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.IAM,
        },
      },
      xrayEnabled: true,
    })

    const demoTable = new cdk.aws_dynamodb.Table(this, "DemoTable", {
      partitionKey: {
        name: "id",
        type: cdk.aws_dynamodb.AttributeType.STRING,
      },
    })

    const demoDS = api.addDynamoDbDataSource("demoDataSource", demoTable)

    // Resolver for the Query "getDemos" that scans the DynamoDb table and returns the entire list.
    // Resolver Mapping Template Reference:
    // https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html
    demoDS.createResolver({
      typeName: "Query",
      fieldName: "getDemos",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
    })

    // Resolver for the Mutation "addDemo" that puts the item into the DynamoDb table.
    demoDS.createResolver({
      typeName: "Mutation",
      fieldName: "addDemo",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(appsync.PrimaryKey.partition("id").auto(), appsync.Values.projecting("input")),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
    })

    //To enable DynamoDB read consistency with the `MappingTemplate`:
    demoDS.createResolver({
      typeName: "Query",
      fieldName: "getDemosConsistent",
      requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(true),
      responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
    })
  }
}
