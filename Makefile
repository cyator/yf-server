dev-build:
	docker build \
	-t yf-api-server-dev:1.6 \
	-f Dockerfile.dev .

staging-build:
	docker build \
	-t yf-server-staging:0.1 \
	.
