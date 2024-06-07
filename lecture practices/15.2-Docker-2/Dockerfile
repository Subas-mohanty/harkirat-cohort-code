# this is the base image for the node js app, we can use ubuntu:latest, and it will pull the latest ubuntu image
FROM node:20-alpine

# defining working directory
WORKDIR /app

# so why did we copy package and prisma now and all the remaining code later,
# the reason is caching in docker, which ensures that if a file has not been changed, we don't have to re-run that code in the docker file that are cached
# As we don't modify the package files and the prisma files we can first copy them like this, so that they can be cached and npm install and prisma generate will not run everytime we build the image because those are cached

COPY package* .
COPY ./prisma .
RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

# Exposing the port
EXPOSE 3000

# start the container
# the question may why can't we write RUN node dist/index.js, because the above command runs when the image is created but the below command runs when we start the container

CMD ["node", "dist/index.js"]