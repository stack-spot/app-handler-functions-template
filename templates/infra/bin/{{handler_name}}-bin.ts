#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { {{handler_name|title|replace("-", "")}}HandlerStack } from '../lib/{{handler_name}}-handler-stack';

const {CDK_DEFAULT_ACCOUNT: account, CDK_DEFAULT_REGION: region} = process.env;

const app = new cdk.App();
new {{handler_name|title|replace("-", "")}}HandlerStack(app, '{{service_name|title|replace("-", "")}}HandlerStack', {env: {account, region}});
