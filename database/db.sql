CREATE DATABASE postsdb;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);