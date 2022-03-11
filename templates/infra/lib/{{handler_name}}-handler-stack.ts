import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as stkHandler from '@stackspot/cdk-component-handler-core';

export class {{handler_name|title|replace("-", "")|replace("_", "")}}HandlerStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      const handlerCoreProps = {
        sourceDir: '../{{source_dir}}',
        enableTracing: {{tracing_enabled}},
        lambdaRuntime: stkHandler.LambdaRuntime.{{runtime_language}}
      };

      const handlerCore = new stkHandler.StackSpotLambdaHandlerCore(this, '{{handler_name}}', handlerCoreProps);
  }
}
