"use server";

export async function testCustomAction() {
  console.log("CustomAction開始");

  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("CustomAction完了");
}
