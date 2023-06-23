FROM node:lts
WORKDIR /opt
COPY . .
COPY package.json .
EXPOSE 8080
CMD yarn install &&\
    echo "-----> npx prisma migrate deploy" &&\
    npx prisma migrate deploy &&\
    echo "-----> npx prisma migrate reset --force" &&\
    npx prisma migrate reset --force &&\
    echo "-----> yarn seed:prod" &&\
    node dist/src/main