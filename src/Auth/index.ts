// event引数、およびレスポンスオブジェクトの定義。
// (どっかに定義ファイルがあるのかも)
export interface AppSyncAuthLambdaEvent {
  authorizationToken: string
  requestContext?: AppSyncAuthLambdaEventRequestContext
}

interface AppSyncAuthLambdaEventRequestContext {
  apiId: string
  accountId: string
  requestId: string
  queryString: string
  operationName: string
  variables: any
}

export interface AppSyncAuthLambdaResponse {
  isAuthorized: boolean
  deniedFields?: string[]
  resolverContext?: any
  ttlOverride?: number
}

import { AppSyncAuthLambdaEvent, AppSyncAuthLambdaResponse } from '../../interface'

// OKにするAuthorizationヘッダの値
const CORRECT_TOKEN: string = 'hogehoge'

// 関数本体
export async function handler(event: AppSyncAuthLambdaEvent): Promise<AppSyncAuthLambdaResponse> {
  console.info('Received event {}', JSON.stringify(event))
  const authToken: string = event.authorizationToken ?? ''

  const response: AppSyncAuthLambdaResponse = {
    isAuthorized: authToken === CORRECT_TOKEN,
  }

  console.info('Response JSON {}', JSON.stringify(response))

  return response
}

// https://makky12.hatenablog.com/entry/2021/09/21/120500
