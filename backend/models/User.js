module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('User', {
        username:{
            type:DataTypes.STRING(255)
        },
        password:{
            type:DataTypes.STRING(255)
        },
        name:{
            type:DataTypes.STRING(255)
        },
        profile_url:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'users',
        timestamps:false
    })
    model.associate = models => {
        model.belongsToMany(models.User,{through:models.Be,foreignKey:'user_id'})
        model.hasMany(models.Post,{foreignKey:'user_id'})
        model.hasMany(models.Comment,{foreignKey:'user_id'})
    }
    return model
}