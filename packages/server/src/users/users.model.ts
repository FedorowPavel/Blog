import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttrs {
  email: string,
  password: string,
  phone: string,
  nickname: string,
  image: string,
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example: '1', description: 'unique ID'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'unique email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '+375291112233', description: 'phone number'})
  @Column({type: DataType.STRING, unique: false, allowNull: true})
  phone: string;

  @ApiProperty({example: 'Jhon', description: 'name to show to other users'})
  @Column({type: DataType.STRING, unique: false, allowNull: true})
  nickname: string;

  @ApiProperty({example: 'image', description: 'avatar'})
  @Column({type: DataType.STRING, unique: false, allowNull: true})
  image: string;

  @ApiProperty({example: '1234', description: 'password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'user is banned'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'bad words', description: 'user is banned for'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}