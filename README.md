# Mobifilia Common - AWS SDK Wrapper
Simple wrapper over official Amazon AWS SDK.
Does the initial global setup of the SDK using the configuration.

## Configuration
  The module reads the configuration of the app if available and configures itself. The configuration can contain any of the keys supported by the AWS.Config() method.
  ```JSON
    "aws": {
      "accessKeyId": "asdfasfsadf",
      "secretAccessKey": "asdfasdfsadfdsreyt5bey5hrthr",
      "region": "us-west-2"
    }
  ```

## Usage
Simply require and use, refer official AWS documentation for API details
  ```JS
  const AWS = require('mf-aws-wrapper').AWS;

  const s3 = new AWS.S3();
  
  const params = {};
  s3.getObject(params, (err, data) => {
    ...
  });
  ```