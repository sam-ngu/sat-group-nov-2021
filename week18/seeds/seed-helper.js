async function getRandomModel(Model){
    return (await Model.aggregate([{ $sample: { size: 1 } }]))[0];
}
module.exports = getRandomModel;