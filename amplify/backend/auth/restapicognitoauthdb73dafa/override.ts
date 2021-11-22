import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper'

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  console.log('hello from auth override')
  resources.userPool.emailVerificationSubject =
    'This is an overridden email verification'
}
