module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Be',{
        status:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'bes',
        timestamps:false
    })
    return model
}