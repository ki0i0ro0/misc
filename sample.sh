# Docker内でprotoファイルからcommonjs用のファイルを作成
docker-compose run --rm protobuf protoc --proto_path=./ --js_out=import_style=commonjs,binary:. person.proto
