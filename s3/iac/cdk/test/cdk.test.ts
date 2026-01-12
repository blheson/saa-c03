import * as cdk from 'aws-cdk-lib/core';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as Cdk from '../lib/cdk-stack';

test('Bucket Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Cdk.CdkStack(app, 'MyTestStack');
  // THEN

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    VersioningConfiguration: {
      Status: 'Enabled'
    }
  });
});
