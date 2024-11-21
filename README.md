# kubernetes-hpa-loadtest
### 1. Build your image.
```
docker build -t load-generator .
```
### 2. Upload image on your Docker Hub.
```
docker tag load-generator your-dockerhub-username/load-generator
docker push your-dockerhub-username/load-generator
```
