/**
 * Mobifilia Common - AWS SDK wrapper.
 *
 * Simple wrapper over official Amazon AWS SDK.
 * Does the initial global setup of the SDK using the configuration.
 *
 * Configuration -
 *   "aws": {
 *     "accessKeyId": "asdfasfsadf",
 *     "secretAccessKey": "asdfasdfsadfdsreyt5bey5hrthr",
 *     "region": "us-west-2"
 *   }
 * 
 */
const AWS = require('aws-sdk');
const config = require('config');
const logWrapper = require('mf-logwrapper');

const logger = logWrapper.getContextLogger('mf', 'aws');

if (config.has('aws')) {
  const appAwsConfig = config.get('aws');
  AWS.config.update(appAwsConfig);

  logger.trace('configured aws-sdk with following configuration keys', Object.keys(appAwsConfig));
}

module.exports.AWS = AWS;
