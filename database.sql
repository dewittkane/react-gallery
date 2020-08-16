CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(80) NOT NULL,
	description VARCHAR(200) NOT NULL,
	likes INT(10) NOT NULL DEFAULT 0
);

INSERT INTO gallery (path, description) VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');
