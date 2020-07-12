module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Post',{
        content:{
            type:DataTypes.STRING(255)
        },
        picture_url:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'posts',
        timestamps:false
    })
    model.associate = models => {
        model.belongsTo(models.User, {foreignKey:'user_id'})
        model.hasMany(models.Comment,{foreignKey:'post_id'})
    }
    return model
}