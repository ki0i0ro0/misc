// https://dev.classmethod.jp/articles/add-lambda-authorizer-to-cdk-typescript/

export async function handler(event: AuthorizerEvent): Promise {
  return new Promise((resolve) => {
    resolve(AuthorizationUsecase.authorize(event))
  })
}

export class AuthorizationUsecase {
  public static authorize(event: AuthorizerEvent): PolicyOutput {
    const policyStatement = {
      Action: '*',
      Effect: event.authorizationToken === 'mytoken' ? 'Allow' : 'Deny',
      Resource: event.methodArn,
    }

    const userId = event.authorizationToken === 'mytoken' ? 'my-user-id' : 'null'

    return {
      principalId: 1,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [policyStatement],
      },
      context: {
        authorizedUser: userId,
      },
    }
  }
}

export interface AuthorizerEvent {
  authorizationToken: string
  methodArn: string
}

export interface PolicyOutput {
  principalId: number
  policyDocument: PolicyDocument
  context: any
}

export interface PolicyDocument {
  Version: string
  Statement: PolicyStatement[]
}

export interface PolicyStatement {
  Action: string
  Effect: string
  Resource: string
}
