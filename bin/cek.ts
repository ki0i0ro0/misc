#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CekStack } from '../lib/cek-stack';

const app = new cdk.App();
new CekStack(app, 'CekStack');
