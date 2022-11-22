FROM node:14.21.1

WORKDIR /site

# 将 package.json 先导入并安装依赖，这样会缓存优化

COPY package*.json yarn.lock /site/

RUN npm config set registry https://registry.npmmirror.com/

RUN npm i

COPY . /site

RUN npm run build

EXPOSE 3000

CMD npm run start