module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config)
    
    /* Creamos las asocianes que tiene esta tabla
    Si tenemos varias asocianos luego de movie.associate */
    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as:"genres",
            foreignKey: "genre_id"
        })
        Movie.belongsToMany(models.Actor,{
            as:"actors",
            through:"actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }

    return Movie
}