import { AppSyncAuthorizerResult, AppSyncAuthorizerEvent } from "aws-lambda";

/** OKにするAuthorizationヘッダの値 */
const CORRECT_TOKEN: string = "hogehoge";

/**
 * エントリーポイント
 * @param event イベント
 * @returns レスポンス
 */
export async function handler(event: AppSyncAuthorizerEvent): Promise<AppSyncAuthorizerResult> {
  console.info("Received event {}", JSON.stringify(event));
  const response = await main(event);
  console.info("Response JSON {}", JSON.stringify(response));
  return response;
}

/**
 * メイン処理
 * @param event イベント
 * @returns レスポンス
 */
const main = (event: AppSyncAuthorizerEvent) => {
  const response = {
    isAuthorized: event.authorizationToken === CORRECT_TOKEN,
  };
  return response;
};

// https://makky12.hatenablog.com/entry/2021/09/21/120500
