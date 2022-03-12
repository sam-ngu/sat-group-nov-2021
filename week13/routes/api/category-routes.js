const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  console.log('first')
  // find all categories
  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  }).then((categories) => {
    res.json(categories);
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then((category) => res.json(category))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
      category_name: req.body.category_name,
  }).then((created) => {
    res.json(created);

  });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id
    }
  }).then((updated) => {
    res.json(updated);
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
