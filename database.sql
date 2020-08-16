CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(80) NOT NULL,
	description VARCHAR(200) NOT NULL,
	likes INT(10) NOT NULL DEFAULT 0
);

INSERT INTO gallery (path, description) VALUES
    ('/images/steak.jpeg', '56oz Ribeye from a steakhouse in Indianapolis, Indiana, USA'),
    ('/images/banana.jpeg', 'Fried Banana from street vendor in Penang, Malaysia'),
    ('/images/cafeitaly.jpeg', 'Cafe Correto (or Corrected Coffee), espresso with liqueur from cafe in Montepulciano, Italy'),
    ('/images/cheese.JPG', 'Cheese shop in Paris, France'),
    ('/images/currymee.jpeg', 'Curry Mee and Kopi at a kopitiam in Kuala Lumpur, Malaysia'),
    ('/images/fishandchips.JPG', 'Fish and Chips from a chip shop in London, England'),
    ('/images/nasilemak.jpeg', 'National Dish: Nasi Lemak from a kopitiam in Langkwai, Malaysia'),
    ('/images/noodles.jpeg', 'Wonton Mee Goreng from a noodle shop in Kuala Lumpur, Malaysia'),
    ('/images/nutmeg.jpeg', 'Fresh Nutmeg at a drink stall in Penang, Malaysia'),
    ('/images/pastry.jpeg', 'French Pastries at a patisserie in Tokyo, Japan'),
    ('/images/ramen.jpeg', 'Late night ramen at a ramen shop in Tokyo, Japan');
