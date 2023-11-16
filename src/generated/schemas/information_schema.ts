/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
} from "../../types";
import { RequestMessage, ResponseMessage, JSONTypecastMap } from "../../client";

import * as pg_catalog from "./pg_catalog";
import * as public from "./public";
import * as information_schema from "./information_schema";

export type AdministrableRoleAuthorizationsArray =
  Array<information_schema.AdministrableRoleAuthorizations>;

export type ApplicableRolesArray = Array<information_schema.ApplicableRoles>;

export type AttributesArray = Array<information_schema.Attributes>;

export type CardinalNumberArray = Array<information_schema.CardinalNumber>;

export type CharacterDataArray = Array<information_schema.CharacterData>;

export type CharacterSetsArray = Array<information_schema.CharacterSets>;

export type CheckConstraintRoutineUsageArray =
  Array<information_schema.CheckConstraintRoutineUsage>;

export type CheckConstraintsArray = Array<information_schema.CheckConstraints>;

export type CollationCharacterSetApplicabilityArray =
  Array<information_schema.CollationCharacterSetApplicability>;

export type CollationsArray = Array<information_schema.Collations>;

export type ColumnColumnUsageArray =
  Array<information_schema.ColumnColumnUsage>;

export type ColumnDomainUsageArray =
  Array<information_schema.ColumnDomainUsage>;

export type ColumnOptionsArray = Array<information_schema.ColumnOptions>;

export type ColumnPrivilegesArray = Array<information_schema.ColumnPrivileges>;

export type ColumnUdtUsageArray = Array<information_schema.ColumnUdtUsage>;

export type ColumnsArray = Array<information_schema.Columns>;

export type ConstraintColumnUsageArray =
  Array<information_schema.ConstraintColumnUsage>;

export type ConstraintTableUsageArray =
  Array<information_schema.ConstraintTableUsage>;

export type DataTypePrivilegesArray =
  Array<information_schema.DataTypePrivileges>;

export type DomainConstraintsArray =
  Array<information_schema.DomainConstraints>;

export type DomainUdtUsageArray = Array<information_schema.DomainUdtUsage>;

export type DomainsArray = Array<information_schema.Domains>;

export type ElementTypesArray = Array<information_schema.ElementTypes>;

export type EnabledRolesArray = Array<information_schema.EnabledRoles>;

export type ForeignDataWrapperOptionsArray =
  Array<information_schema.ForeignDataWrapperOptions>;

export type ForeignDataWrappersArray =
  Array<information_schema.ForeignDataWrappers>;

export type ForeignServerOptionsArray =
  Array<information_schema.ForeignServerOptions>;

export type ForeignServersArray = Array<information_schema.ForeignServers>;

export type ForeignTableOptionsArray =
  Array<information_schema.ForeignTableOptions>;

export type ForeignTablesArray = Array<information_schema.ForeignTables>;

export type InformationSchemaCatalogNameArray =
  Array<information_schema.InformationSchemaCatalogName>;

export type KeyColumnUsageArray = Array<information_schema.KeyColumnUsage>;

export type ParametersArray = Array<information_schema.Parameters>;

export interface PgForeignDataWrappers {
  oid?: Nullable<pg_catalog.Oid>;
  fdwowner?: Nullable<pg_catalog.Oid>;
  fdwoptions?: Nullable<pg_catalog.TextArray>;
  foreignDataWrapperCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperName?: Nullable<information_schema.SqlIdentifier>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperLanguage?: Nullable<information_schema.CharacterData>;
}

export interface PgForeignServers {
  oid?: Nullable<pg_catalog.Oid>;
  srvoptions?: Nullable<pg_catalog.TextArray>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperName?: Nullable<information_schema.SqlIdentifier>;
  foreignServerType?: Nullable<information_schema.CharacterData>;
  foreignServerVersion?: Nullable<information_schema.CharacterData>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface PgForeignTableColumns {
  nspname?: Nullable<pg_catalog.Name>;
  relname?: Nullable<pg_catalog.Name>;
  attname?: Nullable<pg_catalog.Name>;
  attfdwoptions?: Nullable<pg_catalog.TextArray>;
}

export interface PgForeignTables {
  foreignTableCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignTableSchema?: Nullable<information_schema.SqlIdentifier>;
  foreignTableName?: Nullable<information_schema.SqlIdentifier>;
  ftoptions?: Nullable<pg_catalog.TextArray>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface PgUserMappings {
  oid?: Nullable<pg_catalog.Oid>;
  umoptions?: Nullable<pg_catalog.TextArray>;
  umuser?: Nullable<pg_catalog.Oid>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  srvowner?: Nullable<information_schema.SqlIdentifier>;
}

export type ReferentialConstraintsArray =
  Array<information_schema.ReferentialConstraints>;

export type RoleColumnGrantsArray = Array<information_schema.RoleColumnGrants>;

export type RoleRoutineGrantsArray =
  Array<information_schema.RoleRoutineGrants>;

export type RoleTableGrantsArray = Array<information_schema.RoleTableGrants>;

export type RoleUdtGrantsArray = Array<information_schema.RoleUdtGrants>;

export type RoleUsageGrantsArray = Array<information_schema.RoleUsageGrants>;

export type RoutineColumnUsageArray =
  Array<information_schema.RoutineColumnUsage>;

export type RoutinePrivilegesArray =
  Array<information_schema.RoutinePrivileges>;

export type RoutineRoutineUsageArray =
  Array<information_schema.RoutineRoutineUsage>;

export type RoutineSequenceUsageArray =
  Array<information_schema.RoutineSequenceUsage>;

export type RoutineTableUsageArray =
  Array<information_schema.RoutineTableUsage>;

export type RoutinesArray = Array<information_schema.Routines>;

export type SchemataArray = Array<information_schema.Schemata>;

export type SequencesArray = Array<information_schema.Sequences>;

export type SqlFeaturesArray = Array<information_schema.SqlFeatures>;

export type SqlIdentifierArray = Array<information_schema.SqlIdentifier>;

export type SqlImplementationInfoArray =
  Array<information_schema.SqlImplementationInfo>;

export type SqlPartsArray = Array<information_schema.SqlParts>;

export type SqlSizingArray = Array<information_schema.SqlSizing>;

export type TableConstraintsArray = Array<information_schema.TableConstraints>;

export type TablePrivilegesArray = Array<information_schema.TablePrivileges>;

export type TablesArray = Array<information_schema.Tables>;

export type TimeStampArray = Array<information_schema.TimeStamp>;

export type TransformsArray = Array<information_schema.Transforms>;

export type TriggeredUpdateColumnsArray =
  Array<information_schema.TriggeredUpdateColumns>;

export type TriggersArray = Array<information_schema.Triggers>;

export type UdtPrivilegesArray = Array<information_schema.UdtPrivileges>;

export type UsagePrivilegesArray = Array<information_schema.UsagePrivileges>;

export type UserDefinedTypesArray = Array<information_schema.UserDefinedTypes>;

export type UserMappingOptionsArray =
  Array<information_schema.UserMappingOptions>;

export type UserMappingsArray = Array<information_schema.UserMappings>;

export type ViewColumnUsageArray = Array<information_schema.ViewColumnUsage>;

export type ViewRoutineUsageArray = Array<information_schema.ViewRoutineUsage>;

export type ViewTableUsageArray = Array<information_schema.ViewTableUsage>;

export type ViewsArray = Array<information_schema.Views>;

export type YesOrNoArray = Array<information_schema.YesOrNo>;

export interface AdministrableRoleAuthorizations {
  grantee?: Nullable<information_schema.SqlIdentifier>;
  roleName?: Nullable<information_schema.SqlIdentifier>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface ApplicableRoles {
  grantee?: Nullable<information_schema.SqlIdentifier>;
  roleName?: Nullable<information_schema.SqlIdentifier>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface Attributes {
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  attributeName?: Nullable<information_schema.SqlIdentifier>;
  ordinalPosition?: Nullable<information_schema.CardinalNumber>;
  attributeDefault?: Nullable<information_schema.CharacterData>;
  isNullable?: Nullable<information_schema.YesOrNo>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  attributeUdtCatalog?: Nullable<information_schema.SqlIdentifier>;
  attributeUdtSchema?: Nullable<information_schema.SqlIdentifier>;
  attributeUdtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
  isDerivedReferenceAttribute?: Nullable<information_schema.YesOrNo>;
}

export type CardinalNumber = pg_catalog.Int4;

export type CharacterData = pg_catalog.Varchar;

export interface CharacterSets {
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  characterRepertoire?: Nullable<information_schema.SqlIdentifier>;
  formOfUse?: Nullable<information_schema.SqlIdentifier>;
  defaultCollateCatalog?: Nullable<information_schema.SqlIdentifier>;
  defaultCollateSchema?: Nullable<information_schema.SqlIdentifier>;
  defaultCollateName?: Nullable<information_schema.SqlIdentifier>;
}

export interface CheckConstraintRoutineUsage {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
}

export interface CheckConstraints {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  checkClause?: Nullable<information_schema.CharacterData>;
}

export interface CollationCharacterSetApplicability {
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
}

export interface Collations {
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  padAttribute?: Nullable<information_schema.CharacterData>;
}

export interface ColumnColumnUsage {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  dependentColumn?: Nullable<information_schema.SqlIdentifier>;
}

export interface ColumnDomainUsage {
  domainCatalog?: Nullable<information_schema.SqlIdentifier>;
  domainSchema?: Nullable<information_schema.SqlIdentifier>;
  domainName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ColumnOptions {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  optionName?: Nullable<information_schema.SqlIdentifier>;
  optionValue?: Nullable<information_schema.CharacterData>;
}

export interface ColumnPrivileges {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface ColumnUdtUsage {
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
}

export interface Columns {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  ordinalPosition?: Nullable<information_schema.CardinalNumber>;
  columnDefault?: Nullable<information_schema.CharacterData>;
  isNullable?: Nullable<information_schema.YesOrNo>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  domainCatalog?: Nullable<information_schema.SqlIdentifier>;
  domainSchema?: Nullable<information_schema.SqlIdentifier>;
  domainName?: Nullable<information_schema.SqlIdentifier>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
  isSelfReferencing?: Nullable<information_schema.YesOrNo>;
  isIdentity?: Nullable<information_schema.YesOrNo>;
  identityGeneration?: Nullable<information_schema.CharacterData>;
  identityStart?: Nullable<information_schema.CharacterData>;
  identityIncrement?: Nullable<information_schema.CharacterData>;
  identityMaximum?: Nullable<information_schema.CharacterData>;
  identityMinimum?: Nullable<information_schema.CharacterData>;
  identityCycle?: Nullable<information_schema.YesOrNo>;
  isGenerated?: Nullable<information_schema.CharacterData>;
  generationExpression?: Nullable<information_schema.CharacterData>;
  isUpdatable?: Nullable<information_schema.YesOrNo>;
}

export interface ConstraintColumnUsage {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ConstraintTableUsage {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
}

export interface DataTypePrivileges {
  objectCatalog?: Nullable<information_schema.SqlIdentifier>;
  objectSchema?: Nullable<information_schema.SqlIdentifier>;
  objectName?: Nullable<information_schema.SqlIdentifier>;
  objectType?: Nullable<information_schema.CharacterData>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface DomainConstraints {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  domainCatalog?: Nullable<information_schema.SqlIdentifier>;
  domainSchema?: Nullable<information_schema.SqlIdentifier>;
  domainName?: Nullable<information_schema.SqlIdentifier>;
  isDeferrable?: Nullable<information_schema.YesOrNo>;
  initiallyDeferred?: Nullable<information_schema.YesOrNo>;
}

export interface DomainUdtUsage {
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  domainCatalog?: Nullable<information_schema.SqlIdentifier>;
  domainSchema?: Nullable<information_schema.SqlIdentifier>;
  domainName?: Nullable<information_schema.SqlIdentifier>;
}

export interface Domains {
  domainCatalog?: Nullable<information_schema.SqlIdentifier>;
  domainSchema?: Nullable<information_schema.SqlIdentifier>;
  domainName?: Nullable<information_schema.SqlIdentifier>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  domainDefault?: Nullable<information_schema.CharacterData>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface ElementTypes {
  objectCatalog?: Nullable<information_schema.SqlIdentifier>;
  objectSchema?: Nullable<information_schema.SqlIdentifier>;
  objectName?: Nullable<information_schema.SqlIdentifier>;
  objectType?: Nullable<information_schema.CharacterData>;
  collectionTypeIdentifier?: Nullable<information_schema.SqlIdentifier>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  domainDefault?: Nullable<information_schema.CharacterData>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface EnabledRoles {
  roleName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ForeignDataWrapperOptions {
  foreignDataWrapperCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperName?: Nullable<information_schema.SqlIdentifier>;
  optionName?: Nullable<information_schema.SqlIdentifier>;
  optionValue?: Nullable<information_schema.CharacterData>;
}

export interface ForeignDataWrappers {
  foreignDataWrapperCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperName?: Nullable<information_schema.SqlIdentifier>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
  libraryName?: Nullable<information_schema.CharacterData>;
  foreignDataWrapperLanguage?: Nullable<information_schema.CharacterData>;
}

export interface ForeignServerOptions {
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  optionName?: Nullable<information_schema.SqlIdentifier>;
  optionValue?: Nullable<information_schema.CharacterData>;
}

export interface ForeignServers {
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignDataWrapperName?: Nullable<information_schema.SqlIdentifier>;
  foreignServerType?: Nullable<information_schema.CharacterData>;
  foreignServerVersion?: Nullable<information_schema.CharacterData>;
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface ForeignTableOptions {
  foreignTableCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignTableSchema?: Nullable<information_schema.SqlIdentifier>;
  foreignTableName?: Nullable<information_schema.SqlIdentifier>;
  optionName?: Nullable<information_schema.SqlIdentifier>;
  optionValue?: Nullable<information_schema.CharacterData>;
}

export interface ForeignTables {
  foreignTableCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignTableSchema?: Nullable<information_schema.SqlIdentifier>;
  foreignTableName?: Nullable<information_schema.SqlIdentifier>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
}

export interface InformationSchemaCatalogName {
  catalogName?: Nullable<information_schema.SqlIdentifier>;
}

export interface KeyColumnUsage {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  ordinalPosition?: Nullable<information_schema.CardinalNumber>;
  positionInUniqueConstraint?: Nullable<information_schema.CardinalNumber>;
}

export interface Parameters {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  ordinalPosition?: Nullable<information_schema.CardinalNumber>;
  parameterMode?: Nullable<information_schema.CharacterData>;
  isResult?: Nullable<information_schema.YesOrNo>;
  asLocator?: Nullable<information_schema.YesOrNo>;
  parameterName?: Nullable<information_schema.SqlIdentifier>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
  parameterDefault?: Nullable<information_schema.CharacterData>;
}

export interface ReferentialConstraints {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  uniqueConstraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  uniqueConstraintSchema?: Nullable<information_schema.SqlIdentifier>;
  uniqueConstraintName?: Nullable<information_schema.SqlIdentifier>;
  matchOption?: Nullable<information_schema.CharacterData>;
  updateRule?: Nullable<information_schema.CharacterData>;
  deleteRule?: Nullable<information_schema.CharacterData>;
}

export interface RoleColumnGrants {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface RoleRoutineGrants {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface RoleTableGrants {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
  withHierarchy?: Nullable<information_schema.YesOrNo>;
}

export interface RoleUdtGrants {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface RoleUsageGrants {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  objectCatalog?: Nullable<information_schema.SqlIdentifier>;
  objectSchema?: Nullable<information_schema.SqlIdentifier>;
  objectName?: Nullable<information_schema.SqlIdentifier>;
  objectType?: Nullable<information_schema.CharacterData>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface RoutineColumnUsage {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
}

export interface RoutinePrivileges {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface RoutineRoutineUsage {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
}

export interface RoutineSequenceUsage {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  sequenceCatalog?: Nullable<information_schema.SqlIdentifier>;
  sequenceSchema?: Nullable<information_schema.SqlIdentifier>;
  sequenceName?: Nullable<information_schema.SqlIdentifier>;
}

export interface RoutineTableUsage {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
}

export interface Routines {
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  routineCatalog?: Nullable<information_schema.SqlIdentifier>;
  routineSchema?: Nullable<information_schema.SqlIdentifier>;
  routineName?: Nullable<information_schema.SqlIdentifier>;
  routineType?: Nullable<information_schema.CharacterData>;
  moduleCatalog?: Nullable<information_schema.SqlIdentifier>;
  moduleSchema?: Nullable<information_schema.SqlIdentifier>;
  moduleName?: Nullable<information_schema.SqlIdentifier>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  typeUdtCatalog?: Nullable<information_schema.SqlIdentifier>;
  typeUdtSchema?: Nullable<information_schema.SqlIdentifier>;
  typeUdtName?: Nullable<information_schema.SqlIdentifier>;
  scopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  scopeSchema?: Nullable<information_schema.SqlIdentifier>;
  scopeName?: Nullable<information_schema.SqlIdentifier>;
  maximumCardinality?: Nullable<information_schema.CardinalNumber>;
  dtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
  routineBody?: Nullable<information_schema.CharacterData>;
  routineDefinition?: Nullable<information_schema.CharacterData>;
  externalName?: Nullable<information_schema.CharacterData>;
  externalLanguage?: Nullable<information_schema.CharacterData>;
  parameterStyle?: Nullable<information_schema.CharacterData>;
  isDeterministic?: Nullable<information_schema.YesOrNo>;
  sqlDataAccess?: Nullable<information_schema.CharacterData>;
  isNullCall?: Nullable<information_schema.YesOrNo>;
  sqlPath?: Nullable<information_schema.CharacterData>;
  schemaLevelRoutine?: Nullable<information_schema.YesOrNo>;
  maxDynamicResultSets?: Nullable<information_schema.CardinalNumber>;
  isUserDefinedCast?: Nullable<information_schema.YesOrNo>;
  isImplicitlyInvocable?: Nullable<information_schema.YesOrNo>;
  securityType?: Nullable<information_schema.CharacterData>;
  toSqlSpecificCatalog?: Nullable<information_schema.SqlIdentifier>;
  toSqlSpecificSchema?: Nullable<information_schema.SqlIdentifier>;
  toSqlSpecificName?: Nullable<information_schema.SqlIdentifier>;
  asLocator?: Nullable<information_schema.YesOrNo>;
  created?: Nullable<information_schema.TimeStamp>;
  lastAltered?: Nullable<information_schema.TimeStamp>;
  newSavepointLevel?: Nullable<information_schema.YesOrNo>;
  isUdtDependent?: Nullable<information_schema.YesOrNo>;
  resultCastFromDataType?: Nullable<information_schema.CharacterData>;
  resultCastAsLocator?: Nullable<information_schema.YesOrNo>;
  resultCastCharMaxLength?: Nullable<information_schema.CardinalNumber>;
  resultCastCharOctetLength?: Nullable<information_schema.CardinalNumber>;
  resultCastCharSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  resultCastCharSetSchema?: Nullable<information_schema.SqlIdentifier>;
  resultCastCharSetName?: Nullable<information_schema.SqlIdentifier>;
  resultCastCollationCatalog?: Nullable<information_schema.SqlIdentifier>;
  resultCastCollationSchema?: Nullable<information_schema.SqlIdentifier>;
  resultCastCollationName?: Nullable<information_schema.SqlIdentifier>;
  resultCastNumericPrecision?: Nullable<information_schema.CardinalNumber>;
  resultCastNumericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  resultCastNumericScale?: Nullable<information_schema.CardinalNumber>;
  resultCastDatetimePrecision?: Nullable<information_schema.CardinalNumber>;
  resultCastIntervalType?: Nullable<information_schema.CharacterData>;
  resultCastIntervalPrecision?: Nullable<information_schema.CardinalNumber>;
  resultCastTypeUdtCatalog?: Nullable<information_schema.SqlIdentifier>;
  resultCastTypeUdtSchema?: Nullable<information_schema.SqlIdentifier>;
  resultCastTypeUdtName?: Nullable<information_schema.SqlIdentifier>;
  resultCastScopeCatalog?: Nullable<information_schema.SqlIdentifier>;
  resultCastScopeSchema?: Nullable<information_schema.SqlIdentifier>;
  resultCastScopeName?: Nullable<information_schema.SqlIdentifier>;
  resultCastMaximumCardinality?: Nullable<information_schema.CardinalNumber>;
  resultCastDtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface Schemata {
  catalogName?: Nullable<information_schema.SqlIdentifier>;
  schemaName?: Nullable<information_schema.SqlIdentifier>;
  schemaOwner?: Nullable<information_schema.SqlIdentifier>;
  defaultCharacterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  defaultCharacterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  defaultCharacterSetName?: Nullable<information_schema.SqlIdentifier>;
  sqlPath?: Nullable<information_schema.CharacterData>;
}

export interface Sequences {
  sequenceCatalog?: Nullable<information_schema.SqlIdentifier>;
  sequenceSchema?: Nullable<information_schema.SqlIdentifier>;
  sequenceName?: Nullable<information_schema.SqlIdentifier>;
  dataType?: Nullable<information_schema.CharacterData>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  startValue?: Nullable<information_schema.CharacterData>;
  minimumValue?: Nullable<information_schema.CharacterData>;
  maximumValue?: Nullable<information_schema.CharacterData>;
  increment?: Nullable<information_schema.CharacterData>;
  cycleOption?: Nullable<information_schema.YesOrNo>;
}

export interface SqlFeatures {
  featureId?: Nullable<information_schema.CharacterData>;
  featureName?: Nullable<information_schema.CharacterData>;
  subFeatureId?: Nullable<information_schema.CharacterData>;
  subFeatureName?: Nullable<information_schema.CharacterData>;
  isSupported?: Nullable<information_schema.YesOrNo>;
  isVerifiedBy?: Nullable<information_schema.CharacterData>;
  comments?: Nullable<information_schema.CharacterData>;
}

export type SqlIdentifier = pg_catalog.Name;

export interface SqlImplementationInfo {
  implementationInfoId?: Nullable<information_schema.CharacterData>;
  implementationInfoName?: Nullable<information_schema.CharacterData>;
  integerValue?: Nullable<information_schema.CardinalNumber>;
  characterValue?: Nullable<information_schema.CharacterData>;
  comments?: Nullable<information_schema.CharacterData>;
}

export interface SqlParts {
  featureId?: Nullable<information_schema.CharacterData>;
  featureName?: Nullable<information_schema.CharacterData>;
  isSupported?: Nullable<information_schema.YesOrNo>;
  isVerifiedBy?: Nullable<information_schema.CharacterData>;
  comments?: Nullable<information_schema.CharacterData>;
}

export interface SqlSizing {
  sizingId?: Nullable<information_schema.CardinalNumber>;
  sizingName?: Nullable<information_schema.CharacterData>;
  supportedValue?: Nullable<information_schema.CardinalNumber>;
  comments?: Nullable<information_schema.CharacterData>;
}

export interface TableConstraints {
  constraintCatalog?: Nullable<information_schema.SqlIdentifier>;
  constraintSchema?: Nullable<information_schema.SqlIdentifier>;
  constraintName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  constraintType?: Nullable<information_schema.CharacterData>;
  isDeferrable?: Nullable<information_schema.YesOrNo>;
  initiallyDeferred?: Nullable<information_schema.YesOrNo>;
  enforced?: Nullable<information_schema.YesOrNo>;
  nullsDistinct?: Nullable<information_schema.YesOrNo>;
}

export interface TablePrivileges {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
  withHierarchy?: Nullable<information_schema.YesOrNo>;
}

export interface Tables {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  tableType?: Nullable<information_schema.CharacterData>;
  selfReferencingColumnName?: Nullable<information_schema.SqlIdentifier>;
  referenceGeneration?: Nullable<information_schema.CharacterData>;
  userDefinedTypeCatalog?: Nullable<information_schema.SqlIdentifier>;
  userDefinedTypeSchema?: Nullable<information_schema.SqlIdentifier>;
  userDefinedTypeName?: Nullable<information_schema.SqlIdentifier>;
  isInsertableInto?: Nullable<information_schema.YesOrNo>;
  isTyped?: Nullable<information_schema.YesOrNo>;
  commitAction?: Nullable<information_schema.CharacterData>;
}

export type TimeStamp = pg_catalog.Timestamptz;

export interface Transforms {
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
  groupName?: Nullable<information_schema.SqlIdentifier>;
  transformType?: Nullable<information_schema.CharacterData>;
}

export interface TriggeredUpdateColumns {
  triggerCatalog?: Nullable<information_schema.SqlIdentifier>;
  triggerSchema?: Nullable<information_schema.SqlIdentifier>;
  triggerName?: Nullable<information_schema.SqlIdentifier>;
  eventObjectCatalog?: Nullable<information_schema.SqlIdentifier>;
  eventObjectSchema?: Nullable<information_schema.SqlIdentifier>;
  eventObjectTable?: Nullable<information_schema.SqlIdentifier>;
  eventObjectColumn?: Nullable<information_schema.SqlIdentifier>;
}

export interface Triggers {
  triggerCatalog?: Nullable<information_schema.SqlIdentifier>;
  triggerSchema?: Nullable<information_schema.SqlIdentifier>;
  triggerName?: Nullable<information_schema.SqlIdentifier>;
  eventManipulation?: Nullable<information_schema.CharacterData>;
  eventObjectCatalog?: Nullable<information_schema.SqlIdentifier>;
  eventObjectSchema?: Nullable<information_schema.SqlIdentifier>;
  eventObjectTable?: Nullable<information_schema.SqlIdentifier>;
  actionOrder?: Nullable<information_schema.CardinalNumber>;
  actionCondition?: Nullable<information_schema.CharacterData>;
  actionStatement?: Nullable<information_schema.CharacterData>;
  actionOrientation?: Nullable<information_schema.CharacterData>;
  actionTiming?: Nullable<information_schema.CharacterData>;
  actionReferenceOldTable?: Nullable<information_schema.SqlIdentifier>;
  actionReferenceNewTable?: Nullable<information_schema.SqlIdentifier>;
  actionReferenceOldRow?: Nullable<information_schema.SqlIdentifier>;
  actionReferenceNewRow?: Nullable<information_schema.SqlIdentifier>;
  created?: Nullable<information_schema.TimeStamp>;
}

export interface UdtPrivileges {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  udtCatalog?: Nullable<information_schema.SqlIdentifier>;
  udtSchema?: Nullable<information_schema.SqlIdentifier>;
  udtName?: Nullable<information_schema.SqlIdentifier>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface UsagePrivileges {
  grantor?: Nullable<information_schema.SqlIdentifier>;
  grantee?: Nullable<information_schema.SqlIdentifier>;
  objectCatalog?: Nullable<information_schema.SqlIdentifier>;
  objectSchema?: Nullable<information_schema.SqlIdentifier>;
  objectName?: Nullable<information_schema.SqlIdentifier>;
  objectType?: Nullable<information_schema.CharacterData>;
  privilegeType?: Nullable<information_schema.CharacterData>;
  isGrantable?: Nullable<information_schema.YesOrNo>;
}

export interface UserDefinedTypes {
  userDefinedTypeCatalog?: Nullable<information_schema.SqlIdentifier>;
  userDefinedTypeSchema?: Nullable<information_schema.SqlIdentifier>;
  userDefinedTypeName?: Nullable<information_schema.SqlIdentifier>;
  userDefinedTypeCategory?: Nullable<information_schema.CharacterData>;
  isInstantiable?: Nullable<information_schema.YesOrNo>;
  isFinal?: Nullable<information_schema.YesOrNo>;
  orderingForm?: Nullable<information_schema.CharacterData>;
  orderingCategory?: Nullable<information_schema.CharacterData>;
  orderingRoutineCatalog?: Nullable<information_schema.SqlIdentifier>;
  orderingRoutineSchema?: Nullable<information_schema.SqlIdentifier>;
  orderingRoutineName?: Nullable<information_schema.SqlIdentifier>;
  referenceType?: Nullable<information_schema.CharacterData>;
  dataType?: Nullable<information_schema.CharacterData>;
  characterMaximumLength?: Nullable<information_schema.CardinalNumber>;
  characterOctetLength?: Nullable<information_schema.CardinalNumber>;
  characterSetCatalog?: Nullable<information_schema.SqlIdentifier>;
  characterSetSchema?: Nullable<information_schema.SqlIdentifier>;
  characterSetName?: Nullable<information_schema.SqlIdentifier>;
  collationCatalog?: Nullable<information_schema.SqlIdentifier>;
  collationSchema?: Nullable<information_schema.SqlIdentifier>;
  collationName?: Nullable<information_schema.SqlIdentifier>;
  numericPrecision?: Nullable<information_schema.CardinalNumber>;
  numericPrecisionRadix?: Nullable<information_schema.CardinalNumber>;
  numericScale?: Nullable<information_schema.CardinalNumber>;
  datetimePrecision?: Nullable<information_schema.CardinalNumber>;
  intervalType?: Nullable<information_schema.CharacterData>;
  intervalPrecision?: Nullable<information_schema.CardinalNumber>;
  sourceDtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
  refDtdIdentifier?: Nullable<information_schema.SqlIdentifier>;
}

export interface UserMappingOptions {
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
  optionName?: Nullable<information_schema.SqlIdentifier>;
  optionValue?: Nullable<information_schema.CharacterData>;
}

export interface UserMappings {
  authorizationIdentifier?: Nullable<information_schema.SqlIdentifier>;
  foreignServerCatalog?: Nullable<information_schema.SqlIdentifier>;
  foreignServerName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ViewColumnUsage {
  viewCatalog?: Nullable<information_schema.SqlIdentifier>;
  viewSchema?: Nullable<information_schema.SqlIdentifier>;
  viewName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  columnName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ViewRoutineUsage {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  specificCatalog?: Nullable<information_schema.SqlIdentifier>;
  specificSchema?: Nullable<information_schema.SqlIdentifier>;
  specificName?: Nullable<information_schema.SqlIdentifier>;
}

export interface ViewTableUsage {
  viewCatalog?: Nullable<information_schema.SqlIdentifier>;
  viewSchema?: Nullable<information_schema.SqlIdentifier>;
  viewName?: Nullable<information_schema.SqlIdentifier>;
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
}

export interface Views {
  tableCatalog?: Nullable<information_schema.SqlIdentifier>;
  tableSchema?: Nullable<information_schema.SqlIdentifier>;
  tableName?: Nullable<information_schema.SqlIdentifier>;
  viewDefinition?: Nullable<information_schema.CharacterData>;
  checkOption?: Nullable<information_schema.CharacterData>;
  isUpdatable?: Nullable<information_schema.YesOrNo>;
  isInsertableInto?: Nullable<information_schema.YesOrNo>;
  isTriggerUpdatable?: Nullable<information_schema.YesOrNo>;
  isTriggerDeletable?: Nullable<information_schema.YesOrNo>;
  isTriggerInsertableInto?: Nullable<information_schema.YesOrNo>;
}

export type YesOrNo = pg_catalog.Varchar;
