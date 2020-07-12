module.exports = (sequelize,DataTypes) => {
    const model = ('Comment',{
        text:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'comments',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.Post, {foreignKey:'post_id'})
        model.belongsTo(models.User,{foreignKey:'user_id'})
    }
    return model
}