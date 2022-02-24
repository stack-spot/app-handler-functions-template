#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { {{handler_name|title|replace("-", "")}}HandlerStack } from '../lib/{{handler_name}}-handler-stack';

const app = new cdk.App();
new {{handler_name|title|replace("-", "")}}HandlerStack(app, '{{service_name|title|replace("-", "")}}HandlerStack');
