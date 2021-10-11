import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Default,
} from "sequelize-typescript";

@Table({
  tableName: "sample_type",
  timestamps: true,
})
export default class SampleType extends Model<SampleType> {
  @Column
  name!: string;

  @Default(true)
  @Column
  enabled!: boolean;

  @CreatedAt
  createdDate!: Date;

  @UpdatedAt
  updateDate!: Date;
}
