FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
# Importent to set the environment after install, we need dev dependencies!
ENV NODE_ENV="production"
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html