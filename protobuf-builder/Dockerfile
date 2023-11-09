FROM alpine:3.11.5
ENV GOOGLEAPIS_DIR=/googleapis
RUN cd /tmp && \
    apk --update --no-cache add git protoc=3.11.2-r1 && \
    git clone https://github.com/googleapis/googleapis.git && \
    mv googleapis /
WORKDIR /workspace/
CMD [ "protoc", "--version" ]
