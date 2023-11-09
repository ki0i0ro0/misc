# ベースとなるDockerイメージ指定
FROM golang:alpine
# コンテナ内に作業ディレクトリを作成
RUN mkdir /go/src/work

RUN apk update
RUN apk add git curl build-base autoconf automake libtool
RUN curl -L -o /tmp/protobuf.tar.gz https://github.com/protocolbuffers/protobuf/releases/download/v3.11.2/protobuf-cpp-3.11.2.tar.gz
RUN cd /tmp && tar xvzf protobuf.tar.gz
RUN cd /tmp/protobuf-3.11.2 && \
 ./autogen.sh && \
 ./configure && \
  make -j 3 && \
  make install

RUN go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc:latest

# コンテナログイン時のディレクトリ指定
WORKDIR /go/src/work
# ホストのファイルをコンテナの作業ディレクトリに移行
ADD . /go/src/work
