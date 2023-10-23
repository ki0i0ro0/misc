package firebase

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

func firebaseInit(ctx context.Context) (*firestore.Client, error) {
	// Use a service account
	sa := option.WithCredentialsFile("path/to/serviceAccount.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
		return nil, err
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
		return nil, err
	}

	return client, nil
}

func Add(table string, key string, value map[string]interface{}) error {
	ctx := context.Background()
	client, err := firebaseInit(ctx)
	if err != nil {
		log.Fatal(err)
	}

	// データ追加
	_, err = client.Collection(table).Doc(key).Set(ctx, value)
	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}

	// 切断
	defer client.Close()

	// エラーなしは成功
	return err
}

func Update(table string, key string, value map[string]interface{}) {
	// 初期化
	ctx := context.Background()
	sa := option.WithCredentialsFile("path/to/serviceAccount.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	// データ更新
	_, updateError := client.Collection(table).Doc(key).Set(ctx, value, firestore.MergeAll)
	if updateError != nil {
		// Handle any errors in an appropriate way, such as returning them.
		log.Printf("An error has occurred: %s", err)
	}

	// 切断
	defer client.Close()
}

func Delete(table string, key string) {
	// 初期化
	ctx := context.Background()
	sa := option.WithCredentialsFile("path/to/serviceAccount.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	// フィールド削除
	_, errorDelete := client.Collection(table).Doc(key).Update(ctx, []firestore.Update{
		{
			Path:  "middle",
			Value: firestore.Delete,
		},
	})
	if errorDelete != nil {
		// Handle any errors in an appropriate way, such as returning them.
		log.Printf("An error has occurred: %s", err)
	}

	// 切断
	defer client.Close()
}
