#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkApigatewayLambda } from "../lib/cdk-apigateway-lambda-stack";

const app = new cdk.App();
new CdkApigatewayLambda(app, "CekStack");
