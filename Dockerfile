# Use the official MySQL image as the base image
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_DATABASE=Guatepedia
ENV MYSQL_ROOT_PASSWORD=36L8W7Nm
# Optionally, define the default user and password (if needed)
ENV MYSQL_USER=matiu
ENV MYSQL_PASSWORD=36L8W7Nm

# Add your schema SQL script to the docker-entrypoint-initdb.d directory
COPY schema.sql /docker-entrypoint-initdb.d/

# Expose port 3306 to enable communication to/from the server
EXPOSE 22982

# When the container starts, MySQL will automatically execute
# scripts in /docker-entrypoint-initdb.d/ to initialize the database


