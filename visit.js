const CARDS = [
  { id: 1, num: 'I', title: 'Regal', img: '/assets/images/card-1-d198039093.jpg' },
  { id: 2, num: 'II', title: 'Bashful', img: '/assets/images/card-2-8d08aa9ec1.jpg' },
  { id: 3, num: 'III', title: 'Enchanted', img: '/assets/images/card-3-4d67371732.jpg' },
  { id: 4, num: 'IV', title: 'Delighted', img: '/assets/images/card-4-cfb975700e.jpg' },
];

module.exports = (req, res) => {
  res.status(200).json(CARDS);
};
