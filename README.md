# Steps to Build & Deploy
1. Run `docker build --platform linux/amd64 -t us-east4-docker.pkg.dev/mayberry-mini-trucks/mayberry-mini-trucks-scheduler/api-job:latest .` to build the latest image.
2. Run `docker push us-east4-docker.pkg.dev/mayberry-mini-trucks/mayberry-mini-trucks-scheduler/api-job:latest` to push the image to GCP Artifact Registry
3. Ensure that you update the latest reference image in GCP Cloud Jobs.