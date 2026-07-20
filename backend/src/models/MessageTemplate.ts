import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Default
} from "sequelize-typescript";
import Company from "./Company";

@Table
class MessageTemplate extends Model<MessageTemplate> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(10))
  language: string;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  category: string;

  @AllowNull(false)
  @Default("PENDING")
  @Column(DataType.STRING(20))
  status: string;

  @Column(DataType.TEXT)
  body: string;

  @Column(DataType.JSONB)
  components: object;

  @Column(DataType.JSONB)
  header: object;

  @Column(DataType.JSONB)
  buttons: object;

  @Column(DataType.STRING(255))
  metaTemplateId: string;

  @AllowNull(false)
  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default MessageTemplate;
