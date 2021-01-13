
const {HasManyRelation, ManyToManyRelation} = require('./BaseModel')
const BaseModel = require('./BaseModel')


class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const Relation = require('./Relation')

    return {
      pets:{
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from:'users.id',
          to: 'pets.ownerId'
        },
      },
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join:{
          from:'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'
        },
      },
      parent: {
        relation: ManyToManyRelation,
        modelClass: User,
        join:{
          from:'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id'
        },
      },
      grandparent: {
        relation: ManyToManyRelation,
        modelClass: User,
        join:{
          from:'users.id',
          through: {
            from: 'relations.childId',
            through: {
              from: 'relations.childId',
              to: 'relations.parentId'
            },
            to: 'relations.parentId'
          },
          to: 'users.id'
        },
      },
    }
  }
}

module.exports = User
