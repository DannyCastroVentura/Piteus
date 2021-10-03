# Choose the Image which has Node installed already
FROM node:alpine

# COPY all the files from Current Directory into the Container
COPY ./ ./

WORKDIR /

# Install the Project Dependencies like Express Framework
RUN npm install

# Making the max old space size equals to 8 gbs but keeps going down after some time :\
# RUN export NODE_OPTIONS="--max-old-space-size=8192"

# Tell that this image is going to Open a Port 
EXPOSE 3001

# Default Command to launch the Application
CMD ["npm", "test"]