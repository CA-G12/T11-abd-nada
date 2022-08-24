BEGIN;

DROP TABLE IF EXISTS book,
author CASCADE;

CREATE TABLE author(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL
);

CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    description TEXT,
    author_id INT,
    CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES author(id)
);

INSERT INTO
    author(name)
VALUES
    ('Colleen Hoover'),
    ('Robert Greene'),
    ('Robert T.Kiyosaki');

INSERT INTO
    book(name, description, author_id)
VALUES
    (
        'Verity',
        'Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford.',
        1
    ),
    (
        'The 48 Laws of Power',
        'Amoral, cunning, ruthless, and instructive, this piercing work distills three thousand years of the history of power in to forty - eight well explicated laws.',
        2
    ),
    (
        'RICH DAD, POOR DAD',
        'What the rich teach their kids about money and financial freedom and the poor and middle class do not.GRRR',
        3
    );


COMMIT;