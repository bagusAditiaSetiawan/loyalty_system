import { Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'users',
    deletedAt: true,
    updatedAt: true,
    createdAt: true,
})
export class User extends Model {
    id: number;

    email: string;

    password: string;
}