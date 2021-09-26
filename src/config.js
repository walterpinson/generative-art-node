const layersOrder = [
    { name: 'background', number: 10 },
    { name: 'edition', number: 10 },
    { name: 'logo', number: 9 },
    { name: 'coin', number: 10 },
    { name: 'subs', number: 4 },
    { name: 'signature', number: 3 }

];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };