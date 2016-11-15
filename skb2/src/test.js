import canonize from './canonize';

const array = [
  'https://vk.com/skillbranch',
  '//vk.com/skillbranch',
  'skillbranch',
  'https://vk.com/skillbranch?w=wall-117903599_1076',
];

array.forEach((url) => {
  const username = canonize(url);
  console.log(username[5]);
});
