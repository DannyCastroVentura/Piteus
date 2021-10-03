# Choose the Image which has Node installed already
FROM node:alpine

# COPY all the files from Current Directory into the Container
COPY ./ ./

WORKDIR /

# Install the Project Dependencies like Express Framework
RUN npm install

# Tell that this image is going to Open a Port 
EXPOSE 3001

# Default Command to launch the Application
CMD ["npm", "test"]