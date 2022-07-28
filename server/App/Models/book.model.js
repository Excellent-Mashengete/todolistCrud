module.exports = (sequelize, DataTypes)=>{
  const Author = sequelize.define('Author', {
    authid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    fName: {
      type: DataTypes.STRING
    },
    lName: {
      type: DataTypes.STRING
    },
  });
  return Author;
};

module.exports = (sequelize, DataTypes)=>{
  const Book = sequelize.define('Book', {
    isbn: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    title: {
     
      type: DataTypes.STRING
    },
    description: {
    
      type: DataTypes.STRING
    },
    pubdate: {
    
      type: DataTypes.DATE
    },
    pubid: {
     
      type: DataTypes.BOOLEAN
    },
    authid: {
     
      type: DataTypes.BOOLEAN
    },
    cost: {
      type: DataTypes.BOOLEAN
    },
      timestamps: true,
      classMethods: {
      associate: function (models) {
        Book.hasMany(models.Author, { as: 'authid', foreignKey :'authid' });
      },
      associate: function (models) {
        Book.hasMany(models.Publisher, { as: 'pubid', foreignKey : 'pubid' });
      }
    }
  });
  return Book;
};

module.exports = (sequelize,DataTypes)=>{
  const Publisher = sequelize.define('Publisher', {
    pubid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
      },
    name: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING, 
    },
  });
  return Publisher;
};


