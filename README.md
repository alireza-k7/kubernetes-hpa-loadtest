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
### 3. Run the deployment file.
```
kubectl apply -f load-generator-deployment.yaml
```
### 4. Run load test with Apache bench.
```
ab -n 10000 -c 100 http://<Pod-ip>:3000/
```
### 5. You can check the Result with: 
```
kubectl get hpa
kubectl get pods
```
