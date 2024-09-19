FROM node:20-alpine
 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
RUN npm install axios 
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]