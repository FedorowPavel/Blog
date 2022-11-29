import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";

interface PostCreationAttrs {
  title: string,
  content: string,
  summary: string;
  userId: number,
  image: string,
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  summary: string;

  @Column({type: DataType.TEXT, allowNull: false})
  content: string;

  @Column({type: DataType.STRING})
  image: string;

  @Column({type: DataType.INTEGER, defaultValue: 0})
  rating: string;

  // by this key we take data from User table
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  @BelongsTo(() => User)
  author: User;
}
