
DROP TABLE IF EXISTS Author CASCADE;
CREATE TABLE Author (
    authorid SERIAL PRIMARY KEY NOT NULL,
    fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL,
);

DROP TABLE IF EXISTS Book CASCADE;
CREATE TABLE Book(
    isbn SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(225),
    description TEXT,
    pubdate DATE,
    pubid int,
    authorid int,
    cost decimal(8,2),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(pubid) REFERENCES Publisher(pubid),
    FOREIGN KEY(authorid) REFERENCES Author(authorid)
);

DROP TABLE IF EXISTS Publisher CASCADE;
CREATE TABLE Publisher(
    pubid SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    contact VARCHAR(15)
);

