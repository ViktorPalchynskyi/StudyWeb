var tmp = 'some';
if (typeof tmp === 'string') {
    console.log(tmp.toUpperCase());
}
var man = {
    sex: 'male',
    legCount: 2,
    isAlive: true,
    organs: ['Brain', 'Heart', 'Stomach', 'Liver', 'Penis']
};
var woman = {
    sex: 'wemale',
    legCount: 2,
    isAlive: true,
    organs: ['Brain', 'Heart', 'Stomach', 'Liver', 'Vagina'],
    hasVagina: true
};
console.log('Man', man);
console.log('Woman', woman);
