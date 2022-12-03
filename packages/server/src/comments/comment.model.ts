import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface ComentCreationAttrs {
  text: string,
  userId: string,
  postId: string,
}

@Table({tableName: 'comments'})
export class Coment extends Model<Coment, ComentCreationAttrs> {

  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.TEXT, allowNull: false})
  text: string;

  // by this key we take data from User table
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number

  // by this key we take data from User table
  @ForeignKey(() => Post)
  @Column({type: DataType.INTEGER})
  postId: number

  @BelongsTo(() => User)
  author: User;

  @BelongsTo(() => Post)
  post: Post;
}
