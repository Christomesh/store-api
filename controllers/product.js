
const getAllProducts = async(req, res)=>{
    res.status(200).json({msg:"Product testing route"})
}

const getAllProductsStatic = async(req, res)=>{
    res.status(200).json({msg:"Product static testing route"})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}