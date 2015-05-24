FROM nginx:latest

# Download packages
RUN apt-get update
RUN apt-get install -y curl \
                       git  \
                       ruby \
                       ruby-dev \
                       build-essential

# Copy angular files
COPY . /usr/share/nginx

# Setup development tools
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs rubygems
RUN apt-get clean

WORKDIR /usr/share/nginx

RUN npm install -g bower
RUN npm install -g grunt-cli
RUN gem install sass
RUN gem install compass

RUN npm cache clean
RUN npm install
RUN bower --allow-root install -g
RUN grunt build

# Open port and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
