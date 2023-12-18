// ⚠️ generated - do not modify ⚠️

/**
 * BEGIN - shared types generated from schema.
 *
 * These types are node/browser isomorphic and are used by all other
 * EmbraceSQL generated code.
 */

/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UUID,
  JsDate,
  JSONValue,
  JSONObject,
  Empty,
  Nullable,
  undefinedIsNull,
} from "@embracesql/shared";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentToPostgres = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArgumentFromPostgres = any;
type Typecast = (x: ArgumentToPostgres) => ArgumentFromPostgres;
export interface PostgresTypecasts {
  pg_catalog__aclitem: Typecast;
  pg_catalog__bit: Typecast;
  pg_catalog__bool: Typecast;
  pg_catalog__box: Typecast;
  pg_catalog__bpchar: Typecast;
  pg_catalog__bytea: Typecast;
  pg_catalog__char: Typecast;
  pg_catalog__cid: Typecast;
  pg_catalog__cidr: Typecast;
  pg_catalog__circle: Typecast;
  pg_catalog__cstring: Typecast;
  pg_catalog__date: Typecast;
  pg_catalog__datemultirange: Typecast;
  pg_catalog__daterange: Typecast;
  pg_catalog__float4: Typecast;
  pg_catalog__float8: Typecast;
  pg_catalog__gtsvector: Typecast;
  pg_catalog__inet: Typecast;
  pg_catalog__int2: Typecast;
  pg_catalog__int2vector: Typecast;
  pg_catalog__int4: Typecast;
  pg_catalog__int4multirange: Typecast;
  pg_catalog__int4range: Typecast;
  pg_catalog__int8: Typecast;
  pg_catalog__int8multirange: Typecast;
  pg_catalog__int8range: Typecast;
  pg_catalog__interval: Typecast;
  pg_catalog__json: Typecast;
  pg_catalog__jsonb: Typecast;
  pg_catalog__jsonpath: Typecast;
  pg_catalog__line: Typecast;
  pg_catalog__lseg: Typecast;
  pg_catalog__macaddr: Typecast;
  pg_catalog__macaddr8: Typecast;
  pg_catalog__money: Typecast;
  pg_catalog__name: Typecast;
  pg_catalog__numeric: Typecast;
  pg_catalog__nummultirange: Typecast;
  pg_catalog__numrange: Typecast;
  pg_catalog__oid: Typecast;
  pg_catalog__oidvector: Typecast;
  pg_catalog__path: Typecast;
  pg_catalog__pg_aggregate: Typecast;
  pg_catalog__pg_am: Typecast;
  pg_catalog__pg_amop: Typecast;
  pg_catalog__pg_amproc: Typecast;
  pg_catalog__pg_attrdef: Typecast;
  pg_catalog__pg_attribute: Typecast;
  pg_catalog__pg_auth_members: Typecast;
  pg_catalog__pg_authid: Typecast;
  pg_catalog__pg_available_extension_versions: Typecast;
  pg_catalog__pg_available_extensions: Typecast;
  pg_catalog__pg_backend_memory_contexts: Typecast;
  pg_catalog__pg_cast: Typecast;
  pg_catalog__pg_class: Typecast;
  pg_catalog__pg_collation: Typecast;
  pg_catalog__pg_config: Typecast;
  pg_catalog__pg_constraint: Typecast;
  pg_catalog__pg_conversion: Typecast;
  pg_catalog__pg_cursors: Typecast;
  pg_catalog__pg_database: Typecast;
  pg_catalog__pg_db_role_setting: Typecast;
  pg_catalog__pg_default_acl: Typecast;
  pg_catalog__pg_depend: Typecast;
  pg_catalog__pg_description: Typecast;
  pg_catalog__pg_enum: Typecast;
  pg_catalog__pg_event_trigger: Typecast;
  pg_catalog__pg_extension: Typecast;
  pg_catalog__pg_file_settings: Typecast;
  pg_catalog__pg_foreign_data_wrapper: Typecast;
  pg_catalog__pg_foreign_server: Typecast;
  pg_catalog__pg_foreign_table: Typecast;
  pg_catalog__pg_group: Typecast;
  pg_catalog__pg_hba_file_rules: Typecast;
  pg_catalog__pg_ident_file_mappings: Typecast;
  pg_catalog__pg_index: Typecast;
  pg_catalog__pg_indexes: Typecast;
  pg_catalog__pg_inherits: Typecast;
  pg_catalog__pg_init_privs: Typecast;
  pg_catalog__pg_language: Typecast;
  pg_catalog__pg_largeobject: Typecast;
  pg_catalog__pg_largeobject_metadata: Typecast;
  pg_catalog__pg_locks: Typecast;
  pg_catalog__pg_lsn: Typecast;
  pg_catalog__pg_matviews: Typecast;
  pg_catalog__pg_namespace: Typecast;
  pg_catalog__pg_opclass: Typecast;
  pg_catalog__pg_operator: Typecast;
  pg_catalog__pg_opfamily: Typecast;
  pg_catalog__pg_parameter_acl: Typecast;
  pg_catalog__pg_partitioned_table: Typecast;
  pg_catalog__pg_policies: Typecast;
  pg_catalog__pg_policy: Typecast;
  pg_catalog__pg_prepared_statements: Typecast;
  pg_catalog__pg_prepared_xacts: Typecast;
  pg_catalog__pg_proc: Typecast;
  pg_catalog__pg_publication: Typecast;
  pg_catalog__pg_publication_namespace: Typecast;
  pg_catalog__pg_publication_rel: Typecast;
  pg_catalog__pg_publication_tables: Typecast;
  pg_catalog__pg_range: Typecast;
  pg_catalog__pg_replication_origin: Typecast;
  pg_catalog__pg_replication_origin_status: Typecast;
  pg_catalog__pg_replication_slots: Typecast;
  pg_catalog__pg_rewrite: Typecast;
  pg_catalog__pg_roles: Typecast;
  pg_catalog__pg_rules: Typecast;
  pg_catalog__pg_seclabel: Typecast;
  pg_catalog__pg_seclabels: Typecast;
  pg_catalog__pg_sequence: Typecast;
  pg_catalog__pg_sequences: Typecast;
  pg_catalog__pg_settings: Typecast;
  pg_catalog__pg_shadow: Typecast;
  pg_catalog__pg_shdepend: Typecast;
  pg_catalog__pg_shdescription: Typecast;
  pg_catalog__pg_shmem_allocations: Typecast;
  pg_catalog__pg_shseclabel: Typecast;
  pg_catalog__pg_snapshot: Typecast;
  pg_catalog__pg_stat_activity: Typecast;
  pg_catalog__pg_stat_all_indexes: Typecast;
  pg_catalog__pg_stat_all_tables: Typecast;
  pg_catalog__pg_stat_archiver: Typecast;
  pg_catalog__pg_stat_bgwriter: Typecast;
  pg_catalog__pg_stat_database: Typecast;
  pg_catalog__pg_stat_database_conflicts: Typecast;
  pg_catalog__pg_stat_gssapi: Typecast;
  pg_catalog__pg_stat_io: Typecast;
  pg_catalog__pg_stat_progress_analyze: Typecast;
  pg_catalog__pg_stat_progress_basebackup: Typecast;
  pg_catalog__pg_stat_progress_cluster: Typecast;
  pg_catalog__pg_stat_progress_copy: Typecast;
  pg_catalog__pg_stat_progress_create_index: Typecast;
  pg_catalog__pg_stat_progress_vacuum: Typecast;
  pg_catalog__pg_stat_recovery_prefetch: Typecast;
  pg_catalog__pg_stat_replication: Typecast;
  pg_catalog__pg_stat_replication_slots: Typecast;
  pg_catalog__pg_stat_slru: Typecast;
  pg_catalog__pg_stat_ssl: Typecast;
  pg_catalog__pg_stat_subscription: Typecast;
  pg_catalog__pg_stat_subscription_stats: Typecast;
  pg_catalog__pg_stat_sys_indexes: Typecast;
  pg_catalog__pg_stat_sys_tables: Typecast;
  pg_catalog__pg_stat_user_functions: Typecast;
  pg_catalog__pg_stat_user_indexes: Typecast;
  pg_catalog__pg_stat_user_tables: Typecast;
  pg_catalog__pg_stat_wal: Typecast;
  pg_catalog__pg_stat_wal_receiver: Typecast;
  pg_catalog__pg_stat_xact_all_tables: Typecast;
  pg_catalog__pg_stat_xact_sys_tables: Typecast;
  pg_catalog__pg_stat_xact_user_functions: Typecast;
  pg_catalog__pg_stat_xact_user_tables: Typecast;
  pg_catalog__pg_statio_all_indexes: Typecast;
  pg_catalog__pg_statio_all_sequences: Typecast;
  pg_catalog__pg_statio_all_tables: Typecast;
  pg_catalog__pg_statio_sys_indexes: Typecast;
  pg_catalog__pg_statio_sys_sequences: Typecast;
  pg_catalog__pg_statio_sys_tables: Typecast;
  pg_catalog__pg_statio_user_indexes: Typecast;
  pg_catalog__pg_statio_user_sequences: Typecast;
  pg_catalog__pg_statio_user_tables: Typecast;
  pg_catalog__pg_statistic: Typecast;
  pg_catalog__pg_statistic_ext: Typecast;
  pg_catalog__pg_statistic_ext_data: Typecast;
  pg_catalog__pg_stats: Typecast;
  pg_catalog__pg_stats_ext: Typecast;
  pg_catalog__pg_stats_ext_exprs: Typecast;
  pg_catalog__pg_subscription: Typecast;
  pg_catalog__pg_subscription_rel: Typecast;
  pg_catalog__pg_tables: Typecast;
  pg_catalog__pg_tablespace: Typecast;
  pg_catalog__pg_timezone_abbrevs: Typecast;
  pg_catalog__pg_timezone_names: Typecast;
  pg_catalog__pg_transform: Typecast;
  pg_catalog__pg_trigger: Typecast;
  pg_catalog__pg_ts_config: Typecast;
  pg_catalog__pg_ts_config_map: Typecast;
  pg_catalog__pg_ts_dict: Typecast;
  pg_catalog__pg_ts_parser: Typecast;
  pg_catalog__pg_ts_template: Typecast;
  pg_catalog__pg_type: Typecast;
  pg_catalog__pg_user: Typecast;
  pg_catalog__pg_user_mapping: Typecast;
  pg_catalog__pg_user_mappings: Typecast;
  pg_catalog__pg_views: Typecast;
  pg_catalog__point: Typecast;
  pg_catalog__polygon: Typecast;
  pg_catalog__record: Typecast;
  pg_catalog__refcursor: Typecast;
  pg_catalog__regclass: Typecast;
  pg_catalog__regcollation: Typecast;
  pg_catalog__regconfig: Typecast;
  pg_catalog__regdictionary: Typecast;
  pg_catalog__regnamespace: Typecast;
  pg_catalog__regoper: Typecast;
  pg_catalog__regoperator: Typecast;
  pg_catalog__regproc: Typecast;
  pg_catalog__regprocedure: Typecast;
  pg_catalog__regrole: Typecast;
  pg_catalog__regtype: Typecast;
  pg_catalog__text: Typecast;
  pg_catalog__tid: Typecast;
  pg_catalog__time: Typecast;
  pg_catalog__timestamp: Typecast;
  pg_catalog__timestamptz: Typecast;
  pg_catalog__timetz: Typecast;
  pg_catalog__tsmultirange: Typecast;
  pg_catalog__tsquery: Typecast;
  pg_catalog__tsrange: Typecast;
  pg_catalog__tstzmultirange: Typecast;
  pg_catalog__tstzrange: Typecast;
  pg_catalog__tsvector: Typecast;
  pg_catalog__txid_snapshot: Typecast;
  pg_catalog__uuid: Typecast;
  pg_catalog__varbit: Typecast;
  pg_catalog__varchar: Typecast;
  pg_catalog__xid: Typecast;
  pg_catalog__xid8: Typecast;
  pg_catalog__xml: Typecast;
  pg_catalog_aclitem: Typecast;
  pg_catalog_any: Typecast;
  pg_catalog_anyarray: Typecast;
  pg_catalog_anycompatible: Typecast;
  pg_catalog_anycompatiblearray: Typecast;
  pg_catalog_anycompatiblemultirange: Typecast;
  pg_catalog_anycompatiblenonarray: Typecast;
  pg_catalog_anycompatiblerange: Typecast;
  pg_catalog_anyelement: Typecast;
  pg_catalog_anyenum: Typecast;
  pg_catalog_anymultirange: Typecast;
  pg_catalog_anynonarray: Typecast;
  pg_catalog_anyrange: Typecast;
  pg_catalog_bit: Typecast;
  pg_catalog_bool: Typecast;
  pg_catalog_box: Typecast;
  pg_catalog_bpchar: Typecast;
  pg_catalog_bytea: Typecast;
  pg_catalog_char: Typecast;
  pg_catalog_cid: Typecast;
  pg_catalog_cidr: Typecast;
  pg_catalog_circle: Typecast;
  pg_catalog_cstring: Typecast;
  pg_catalog_date: Typecast;
  pg_catalog_datemultirange: Typecast;
  pg_catalog_daterange: Typecast;
  pg_catalog_event_trigger: Typecast;
  pg_catalog_fdw_handler: Typecast;
  pg_catalog_float4: Typecast;
  pg_catalog_float8: Typecast;
  pg_catalog_gtsvector: Typecast;
  pg_catalog_index_am_handler: Typecast;
  pg_catalog_inet: Typecast;
  pg_catalog_int2: Typecast;
  pg_catalog_int2vector: Typecast;
  pg_catalog_int4: Typecast;
  pg_catalog_int4multirange: Typecast;
  pg_catalog_int4range: Typecast;
  pg_catalog_int8: Typecast;
  pg_catalog_int8multirange: Typecast;
  pg_catalog_int8range: Typecast;
  pg_catalog_internal: Typecast;
  pg_catalog_interval: Typecast;
  pg_catalog_json: Typecast;
  pg_catalog_jsonb: Typecast;
  pg_catalog_jsonpath: Typecast;
  pg_catalog_language_handler: Typecast;
  pg_catalog_line: Typecast;
  pg_catalog_lseg: Typecast;
  pg_catalog_macaddr: Typecast;
  pg_catalog_macaddr8: Typecast;
  pg_catalog_money: Typecast;
  pg_catalog_name: Typecast;
  pg_catalog_numeric: Typecast;
  pg_catalog_nummultirange: Typecast;
  pg_catalog_numrange: Typecast;
  pg_catalog_oid: Typecast;
  pg_catalog_oidvector: Typecast;
  pg_catalog_path: Typecast;
  pg_catalog_pg_aggregate: Typecast;
  pg_catalog_pg_am: Typecast;
  pg_catalog_pg_amop: Typecast;
  pg_catalog_pg_amproc: Typecast;
  pg_catalog_pg_attrdef: Typecast;
  pg_catalog_pg_attribute: Typecast;
  pg_catalog_pg_auth_members: Typecast;
  pg_catalog_pg_authid: Typecast;
  pg_catalog_pg_available_extension_versions: Typecast;
  pg_catalog_pg_available_extensions: Typecast;
  pg_catalog_pg_backend_memory_contexts: Typecast;
  pg_catalog_pg_brin_bloom_summary: Typecast;
  pg_catalog_pg_brin_minmax_multi_summary: Typecast;
  pg_catalog_pg_cast: Typecast;
  pg_catalog_pg_class: Typecast;
  pg_catalog_pg_collation: Typecast;
  pg_catalog_pg_config: Typecast;
  pg_catalog_pg_constraint: Typecast;
  pg_catalog_pg_conversion: Typecast;
  pg_catalog_pg_cursors: Typecast;
  pg_catalog_pg_database: Typecast;
  pg_catalog_pg_db_role_setting: Typecast;
  pg_catalog_pg_ddl_command: Typecast;
  pg_catalog_pg_default_acl: Typecast;
  pg_catalog_pg_depend: Typecast;
  pg_catalog_pg_dependencies: Typecast;
  pg_catalog_pg_description: Typecast;
  pg_catalog_pg_enum: Typecast;
  pg_catalog_pg_event_trigger: Typecast;
  pg_catalog_pg_extension: Typecast;
  pg_catalog_pg_file_settings: Typecast;
  pg_catalog_pg_foreign_data_wrapper: Typecast;
  pg_catalog_pg_foreign_server: Typecast;
  pg_catalog_pg_foreign_table: Typecast;
  pg_catalog_pg_group: Typecast;
  pg_catalog_pg_hba_file_rules: Typecast;
  pg_catalog_pg_ident_file_mappings: Typecast;
  pg_catalog_pg_index: Typecast;
  pg_catalog_pg_indexes: Typecast;
  pg_catalog_pg_inherits: Typecast;
  pg_catalog_pg_init_privs: Typecast;
  pg_catalog_pg_language: Typecast;
  pg_catalog_pg_largeobject: Typecast;
  pg_catalog_pg_largeobject_metadata: Typecast;
  pg_catalog_pg_locks: Typecast;
  pg_catalog_pg_lsn: Typecast;
  pg_catalog_pg_matviews: Typecast;
  pg_catalog_pg_mcv_list: Typecast;
  pg_catalog_pg_namespace: Typecast;
  pg_catalog_pg_ndistinct: Typecast;
  pg_catalog_pg_node_tree: Typecast;
  pg_catalog_pg_opclass: Typecast;
  pg_catalog_pg_operator: Typecast;
  pg_catalog_pg_opfamily: Typecast;
  pg_catalog_pg_parameter_acl: Typecast;
  pg_catalog_pg_partitioned_table: Typecast;
  pg_catalog_pg_policies: Typecast;
  pg_catalog_pg_policy: Typecast;
  pg_catalog_pg_prepared_statements: Typecast;
  pg_catalog_pg_prepared_xacts: Typecast;
  pg_catalog_pg_proc: Typecast;
  pg_catalog_pg_publication: Typecast;
  pg_catalog_pg_publication_namespace: Typecast;
  pg_catalog_pg_publication_rel: Typecast;
  pg_catalog_pg_publication_tables: Typecast;
  pg_catalog_pg_range: Typecast;
  pg_catalog_pg_replication_origin: Typecast;
  pg_catalog_pg_replication_origin_status: Typecast;
  pg_catalog_pg_replication_slots: Typecast;
  pg_catalog_pg_rewrite: Typecast;
  pg_catalog_pg_roles: Typecast;
  pg_catalog_pg_rules: Typecast;
  pg_catalog_pg_seclabel: Typecast;
  pg_catalog_pg_seclabels: Typecast;
  pg_catalog_pg_sequence: Typecast;
  pg_catalog_pg_sequences: Typecast;
  pg_catalog_pg_settings: Typecast;
  pg_catalog_pg_shadow: Typecast;
  pg_catalog_pg_shdepend: Typecast;
  pg_catalog_pg_shdescription: Typecast;
  pg_catalog_pg_shmem_allocations: Typecast;
  pg_catalog_pg_shseclabel: Typecast;
  pg_catalog_pg_snapshot: Typecast;
  pg_catalog_pg_stat_activity: Typecast;
  pg_catalog_pg_stat_all_indexes: Typecast;
  pg_catalog_pg_stat_all_tables: Typecast;
  pg_catalog_pg_stat_archiver: Typecast;
  pg_catalog_pg_stat_bgwriter: Typecast;
  pg_catalog_pg_stat_database: Typecast;
  pg_catalog_pg_stat_database_conflicts: Typecast;
  pg_catalog_pg_stat_gssapi: Typecast;
  pg_catalog_pg_stat_io: Typecast;
  pg_catalog_pg_stat_progress_analyze: Typecast;
  pg_catalog_pg_stat_progress_basebackup: Typecast;
  pg_catalog_pg_stat_progress_cluster: Typecast;
  pg_catalog_pg_stat_progress_copy: Typecast;
  pg_catalog_pg_stat_progress_create_index: Typecast;
  pg_catalog_pg_stat_progress_vacuum: Typecast;
  pg_catalog_pg_stat_recovery_prefetch: Typecast;
  pg_catalog_pg_stat_replication: Typecast;
  pg_catalog_pg_stat_replication_slots: Typecast;
  pg_catalog_pg_stat_slru: Typecast;
  pg_catalog_pg_stat_ssl: Typecast;
  pg_catalog_pg_stat_subscription: Typecast;
  pg_catalog_pg_stat_subscription_stats: Typecast;
  pg_catalog_pg_stat_sys_indexes: Typecast;
  pg_catalog_pg_stat_sys_tables: Typecast;
  pg_catalog_pg_stat_user_functions: Typecast;
  pg_catalog_pg_stat_user_indexes: Typecast;
  pg_catalog_pg_stat_user_tables: Typecast;
  pg_catalog_pg_stat_wal: Typecast;
  pg_catalog_pg_stat_wal_receiver: Typecast;
  pg_catalog_pg_stat_xact_all_tables: Typecast;
  pg_catalog_pg_stat_xact_sys_tables: Typecast;
  pg_catalog_pg_stat_xact_user_functions: Typecast;
  pg_catalog_pg_stat_xact_user_tables: Typecast;
  pg_catalog_pg_statio_all_indexes: Typecast;
  pg_catalog_pg_statio_all_sequences: Typecast;
  pg_catalog_pg_statio_all_tables: Typecast;
  pg_catalog_pg_statio_sys_indexes: Typecast;
  pg_catalog_pg_statio_sys_sequences: Typecast;
  pg_catalog_pg_statio_sys_tables: Typecast;
  pg_catalog_pg_statio_user_indexes: Typecast;
  pg_catalog_pg_statio_user_sequences: Typecast;
  pg_catalog_pg_statio_user_tables: Typecast;
  pg_catalog_pg_statistic: Typecast;
  pg_catalog_pg_statistic_ext: Typecast;
  pg_catalog_pg_statistic_ext_data: Typecast;
  pg_catalog_pg_stats: Typecast;
  pg_catalog_pg_stats_ext: Typecast;
  pg_catalog_pg_stats_ext_exprs: Typecast;
  pg_catalog_pg_subscription: Typecast;
  pg_catalog_pg_subscription_rel: Typecast;
  pg_catalog_pg_tables: Typecast;
  pg_catalog_pg_tablespace: Typecast;
  pg_catalog_pg_timezone_abbrevs: Typecast;
  pg_catalog_pg_timezone_names: Typecast;
  pg_catalog_pg_transform: Typecast;
  pg_catalog_pg_trigger: Typecast;
  pg_catalog_pg_ts_config: Typecast;
  pg_catalog_pg_ts_config_map: Typecast;
  pg_catalog_pg_ts_dict: Typecast;
  pg_catalog_pg_ts_parser: Typecast;
  pg_catalog_pg_ts_template: Typecast;
  pg_catalog_pg_type: Typecast;
  pg_catalog_pg_user: Typecast;
  pg_catalog_pg_user_mapping: Typecast;
  pg_catalog_pg_user_mappings: Typecast;
  pg_catalog_pg_views: Typecast;
  pg_catalog_point: Typecast;
  pg_catalog_polygon: Typecast;
  pg_catalog_record: Typecast;
  pg_catalog_refcursor: Typecast;
  pg_catalog_regclass: Typecast;
  pg_catalog_regcollation: Typecast;
  pg_catalog_regconfig: Typecast;
  pg_catalog_regdictionary: Typecast;
  pg_catalog_regnamespace: Typecast;
  pg_catalog_regoper: Typecast;
  pg_catalog_regoperator: Typecast;
  pg_catalog_regproc: Typecast;
  pg_catalog_regprocedure: Typecast;
  pg_catalog_regrole: Typecast;
  pg_catalog_regtype: Typecast;
  pg_catalog_table_am_handler: Typecast;
  pg_catalog_text: Typecast;
  pg_catalog_tid: Typecast;
  pg_catalog_time: Typecast;
  pg_catalog_timestamp: Typecast;
  pg_catalog_timestamptz: Typecast;
  pg_catalog_timetz: Typecast;
  pg_catalog_trigger: Typecast;
  pg_catalog_tsm_handler: Typecast;
  pg_catalog_tsmultirange: Typecast;
  pg_catalog_tsquery: Typecast;
  pg_catalog_tsrange: Typecast;
  pg_catalog_tstzmultirange: Typecast;
  pg_catalog_tstzrange: Typecast;
  pg_catalog_tsvector: Typecast;
  pg_catalog_txid_snapshot: Typecast;
  pg_catalog_unknown: Typecast;
  pg_catalog_uuid: Typecast;
  pg_catalog_varbit: Typecast;
  pg_catalog_varchar: Typecast;
  pg_catalog_void: Typecast;
  pg_catalog_xid: Typecast;
  pg_catalog_xid8: Typecast;
  pg_catalog_xml: Typecast;
  public__actor: Typecast;
  public__actor_info: Typecast;
  public__address: Typecast;
  public__category: Typecast;
  public__city: Typecast;
  public__country: Typecast;
  public__customer: Typecast;
  public__customer_list: Typecast;
  public__film: Typecast;
  public__film_actor: Typecast;
  public__film_category: Typecast;
  public__film_list: Typecast;
  public__inventory: Typecast;
  public__language: Typecast;
  public__mpaa_rating: Typecast;
  public__nicer_but_slower_film_list: Typecast;
  public__payment: Typecast;
  public__rental: Typecast;
  public__sales_by_film_category: Typecast;
  public__sales_by_store: Typecast;
  public__staff: Typecast;
  public__staff_list: Typecast;
  public__store: Typecast;
  public__year: Typecast;
  public_actor: Typecast;
  public_actor_info: Typecast;
  public_address: Typecast;
  public_category: Typecast;
  public_city: Typecast;
  public_country: Typecast;
  public_customer: Typecast;
  public_customer_list: Typecast;
  public_film: Typecast;
  public_film_actor: Typecast;
  public_film_category: Typecast;
  public_film_list: Typecast;
  public_inventory: Typecast;
  public_language: Typecast;
  public_mpaa_rating: Typecast;
  public_nicer_but_slower_film_list: Typecast;
  public_payment: Typecast;
  public_rental: Typecast;
  public_sales_by_film_category: Typecast;
  public_sales_by_store: Typecast;
  public_staff: Typecast;
  public_staff_list: Typecast;
  public_store: Typecast;
  public_year: Typecast;
  information_schema__administrable_role_authorizations: Typecast;
  information_schema__applicable_roles: Typecast;
  information_schema__attributes: Typecast;
  information_schema__cardinal_number: Typecast;
  information_schema__character_data: Typecast;
  information_schema__character_sets: Typecast;
  information_schema__check_constraint_routine_usage: Typecast;
  information_schema__check_constraints: Typecast;
  information_schema__collation_character_set_applicability: Typecast;
  information_schema__collations: Typecast;
  information_schema__column_column_usage: Typecast;
  information_schema__column_domain_usage: Typecast;
  information_schema__column_options: Typecast;
  information_schema__column_privileges: Typecast;
  information_schema__column_udt_usage: Typecast;
  information_schema__columns: Typecast;
  information_schema__constraint_column_usage: Typecast;
  information_schema__constraint_table_usage: Typecast;
  information_schema__data_type_privileges: Typecast;
  information_schema__domain_constraints: Typecast;
  information_schema__domain_udt_usage: Typecast;
  information_schema__domains: Typecast;
  information_schema__element_types: Typecast;
  information_schema__enabled_roles: Typecast;
  information_schema__foreign_data_wrapper_options: Typecast;
  information_schema__foreign_data_wrappers: Typecast;
  information_schema__foreign_server_options: Typecast;
  information_schema__foreign_servers: Typecast;
  information_schema__foreign_table_options: Typecast;
  information_schema__foreign_tables: Typecast;
  information_schema__information_schema_catalog_name: Typecast;
  information_schema__key_column_usage: Typecast;
  information_schema__parameters: Typecast;
  information_schema__pg_foreign_data_wrappers: Typecast;
  information_schema__pg_foreign_servers: Typecast;
  information_schema__pg_foreign_table_columns: Typecast;
  information_schema__pg_foreign_tables: Typecast;
  information_schema__pg_user_mappings: Typecast;
  information_schema__referential_constraints: Typecast;
  information_schema__role_column_grants: Typecast;
  information_schema__role_routine_grants: Typecast;
  information_schema__role_table_grants: Typecast;
  information_schema__role_udt_grants: Typecast;
  information_schema__role_usage_grants: Typecast;
  information_schema__routine_column_usage: Typecast;
  information_schema__routine_privileges: Typecast;
  information_schema__routine_routine_usage: Typecast;
  information_schema__routine_sequence_usage: Typecast;
  information_schema__routine_table_usage: Typecast;
  information_schema__routines: Typecast;
  information_schema__schemata: Typecast;
  information_schema__sequences: Typecast;
  information_schema__sql_features: Typecast;
  information_schema__sql_identifier: Typecast;
  information_schema__sql_implementation_info: Typecast;
  information_schema__sql_parts: Typecast;
  information_schema__sql_sizing: Typecast;
  information_schema__table_constraints: Typecast;
  information_schema__table_privileges: Typecast;
  information_schema__tables: Typecast;
  information_schema__time_stamp: Typecast;
  information_schema__transforms: Typecast;
  information_schema__triggered_update_columns: Typecast;
  information_schema__triggers: Typecast;
  information_schema__udt_privileges: Typecast;
  information_schema__usage_privileges: Typecast;
  information_schema__user_defined_types: Typecast;
  information_schema__user_mapping_options: Typecast;
  information_schema__user_mappings: Typecast;
  information_schema__view_column_usage: Typecast;
  information_schema__view_routine_usage: Typecast;
  information_schema__view_table_usage: Typecast;
  information_schema__views: Typecast;
  information_schema__yes_or_no: Typecast;
  information_schema_administrable_role_authorizations: Typecast;
  information_schema_applicable_roles: Typecast;
  information_schema_attributes: Typecast;
  information_schema_cardinal_number: Typecast;
  information_schema_character_data: Typecast;
  information_schema_character_sets: Typecast;
  information_schema_check_constraint_routine_usage: Typecast;
  information_schema_check_constraints: Typecast;
  information_schema_collation_character_set_applicability: Typecast;
  information_schema_collations: Typecast;
  information_schema_column_column_usage: Typecast;
  information_schema_column_domain_usage: Typecast;
  information_schema_column_options: Typecast;
  information_schema_column_privileges: Typecast;
  information_schema_column_udt_usage: Typecast;
  information_schema_columns: Typecast;
  information_schema_constraint_column_usage: Typecast;
  information_schema_constraint_table_usage: Typecast;
  information_schema_data_type_privileges: Typecast;
  information_schema_domain_constraints: Typecast;
  information_schema_domain_udt_usage: Typecast;
  information_schema_domains: Typecast;
  information_schema_element_types: Typecast;
  information_schema_enabled_roles: Typecast;
  information_schema_foreign_data_wrapper_options: Typecast;
  information_schema_foreign_data_wrappers: Typecast;
  information_schema_foreign_server_options: Typecast;
  information_schema_foreign_servers: Typecast;
  information_schema_foreign_table_options: Typecast;
  information_schema_foreign_tables: Typecast;
  information_schema_information_schema_catalog_name: Typecast;
  information_schema_key_column_usage: Typecast;
  information_schema_parameters: Typecast;
  information_schema_referential_constraints: Typecast;
  information_schema_role_column_grants: Typecast;
  information_schema_role_routine_grants: Typecast;
  information_schema_role_table_grants: Typecast;
  information_schema_role_udt_grants: Typecast;
  information_schema_role_usage_grants: Typecast;
  information_schema_routine_column_usage: Typecast;
  information_schema_routine_privileges: Typecast;
  information_schema_routine_routine_usage: Typecast;
  information_schema_routine_sequence_usage: Typecast;
  information_schema_routine_table_usage: Typecast;
  information_schema_routines: Typecast;
  information_schema_schemata: Typecast;
  information_schema_sequences: Typecast;
  information_schema_sql_features: Typecast;
  information_schema_sql_identifier: Typecast;
  information_schema_sql_implementation_info: Typecast;
  information_schema_sql_parts: Typecast;
  information_schema_sql_sizing: Typecast;
  information_schema_table_constraints: Typecast;
  information_schema_table_privileges: Typecast;
  information_schema_tables: Typecast;
  information_schema_time_stamp: Typecast;
  information_schema_transforms: Typecast;
  information_schema_triggered_update_columns: Typecast;
  information_schema_triggers: Typecast;
  information_schema_udt_privileges: Typecast;
  information_schema_usage_privileges: Typecast;
  information_schema_user_defined_types: Typecast;
  information_schema_user_mapping_options: Typecast;
  information_schema_user_mappings: Typecast;
  information_schema_view_column_usage: Typecast;
  information_schema_view_routine_usage: Typecast;
  information_schema_view_table_usage: Typecast;
  information_schema_views: Typecast;
  information_schema_yes_or_no: Typecast;
}

export namespace PgCatalog {
  export type AclitemArray = Array<Aclitem>;

  export type BitArray = Array<Bit>;

  export type BoolArray = Array<Bool>;

  export type BoxArray = Array<Box>;

  export type BpcharArray = Array<Bpchar>;

  export type ByteaArray = Array<Bytea>;

  export type CharArray = Array<Char>;

  export type CidArray = Array<Cid>;

  export type CidrArray = Array<Cidr>;

  export type CircleArray = Array<Circle>;

  export type CstringArray = Array<Cstring>;

  export type DateArray = Array<Date>;

  export type DatemultirangeArray = Array<Datemultirange>;

  export type DaterangeArray = Array<Daterange>;

  export type Float4Array = Array<Float4>;

  export type Float8Array = Array<Float8>;

  export type GtsvectorArray = Array<Gtsvector>;

  export type InetArray = Array<Inet>;

  export type Int2Array = Array<Int2>;

  export type Int2vectorArray = Array<Int2vector>;

  export type Int4Array = Array<Int4>;

  export type Int4multirangeArray = Array<Int4multirange>;

  export type Int4rangeArray = Array<Int4range>;

  export type Int8Array = Array<Int8>;

  export type Int8multirangeArray = Array<Int8multirange>;

  export type Int8rangeArray = Array<Int8range>;

  export type IntervalArray = Array<Interval>;

  export type JsonArray = Array<Json>;

  export type JsonbArray = Array<Jsonb>;

  export type JsonpathArray = Array<Jsonpath>;

  export type LineArray = Array<Line>;

  export type LsegArray = Array<Lseg>;

  export type MacaddrArray = Array<Macaddr>;

  export type Macaddr8Array = Array<Macaddr8>;

  export type MoneyArray = Array<Money>;

  export type NameArray = Array<Name>;

  export type NumericArray = Array<Numeric>;

  export type NummultirangeArray = Array<Nummultirange>;

  export type NumrangeArray = Array<Numrange>;

  export type OidArray = Array<Oid>;

  export type OidvectorArray = Array<Oidvector>;

  export type PathArray = Array<Path>;

  export type PgAggregateArray = Array<PgAggregate>;

  export type PgAmArray = Array<PgAm>;

  export type PgAmopArray = Array<PgAmop>;

  export type PgAmprocArray = Array<PgAmproc>;

  export type PgAttrdefArray = Array<PgAttrdef>;

  export type PgAttributeArray = Array<PgAttribute>;

  export type PgAuthMembersArray = Array<PgAuthMembers>;

  export type PgAuthidArray = Array<PgAuthid>;

  export type PgAvailableExtensionVersionsArray =
    Array<PgAvailableExtensionVersions>;

  export type PgAvailableExtensionsArray = Array<PgAvailableExtensions>;

  export type PgBackendMemoryContextsArray = Array<PgBackendMemoryContexts>;

  export type PgCastArray = Array<PgCast>;

  export type PgClassArray = Array<PgClass>;

  export type PgCollationArray = Array<PgCollation>;

  export type PgConfigArray = Array<PgConfig>;

  export type PgConstraintArray = Array<PgConstraint>;

  export type PgConversionArray = Array<PgConversion>;

  export type PgCursorsArray = Array<PgCursors>;

  export type PgDatabaseArray = Array<PgDatabase>;

  export type PgDbRoleSettingArray = Array<PgDbRoleSetting>;

  export type PgDefaultAclArray = Array<PgDefaultAcl>;

  export type PgDependArray = Array<PgDepend>;

  export type PgDescriptionArray = Array<PgDescription>;

  export type PgEnumArray = Array<PgEnum>;

  export type PgEventTriggerArray = Array<PgEventTrigger>;

  export type PgExtensionArray = Array<PgExtension>;

  export type PgFileSettingsArray = Array<PgFileSettings>;

  export type PgForeignDataWrapperArray = Array<PgForeignDataWrapper>;

  export type PgForeignServerArray = Array<PgForeignServer>;

  export type PgForeignTableArray = Array<PgForeignTable>;

  export type PgGroupArray = Array<PgGroup>;

  export type PgHbaFileRulesArray = Array<PgHbaFileRules>;

  export type PgIdentFileMappingsArray = Array<PgIdentFileMappings>;

  export type PgIndexArray = Array<PgIndex>;

  export type PgIndexesArray = Array<PgIndexes>;

  export type PgInheritsArray = Array<PgInherits>;

  export type PgInitPrivsArray = Array<PgInitPrivs>;

  export type PgLanguageArray = Array<PgLanguage>;

  export type PgLargeobjectArray = Array<PgLargeobject>;

  export type PgLargeobjectMetadataArray = Array<PgLargeobjectMetadata>;

  export type PgLocksArray = Array<PgLocks>;

  export type PgLsnArray = Array<PgLsn>;

  export type PgMatviewsArray = Array<PgMatviews>;

  export type PgNamespaceArray = Array<PgNamespace>;

  export type PgOpclassArray = Array<PgOpclass>;

  export type PgOperatorArray = Array<PgOperator>;

  export type PgOpfamilyArray = Array<PgOpfamily>;

  export type PgParameterAclArray = Array<PgParameterAcl>;

  export type PgPartitionedTableArray = Array<PgPartitionedTable>;

  export type PgPoliciesArray = Array<PgPolicies>;

  export type PgPolicyArray = Array<PgPolicy>;

  export type PgPreparedStatementsArray = Array<PgPreparedStatements>;

  export type PgPreparedXactsArray = Array<PgPreparedXacts>;

  export type PgProcArray = Array<PgProc>;

  export type PgPublicationArray = Array<PgPublication>;

  export type PgPublicationNamespaceArray = Array<PgPublicationNamespace>;

  export type PgPublicationRelArray = Array<PgPublicationRel>;

  export type PgPublicationTablesArray = Array<PgPublicationTables>;

  export type PgRangeArray = Array<PgRange>;

  export type PgReplicationOriginArray = Array<PgReplicationOrigin>;

  export type PgReplicationOriginStatusArray = Array<PgReplicationOriginStatus>;

  export type PgReplicationSlotsArray = Array<PgReplicationSlots>;

  export type PgRewriteArray = Array<PgRewrite>;

  export type PgRolesArray = Array<PgRoles>;

  export type PgRulesArray = Array<PgRules>;

  export type PgSeclabelArray = Array<PgSeclabel>;

  export type PgSeclabelsArray = Array<PgSeclabels>;

  export type PgSequenceArray = Array<PgSequence>;

  export type PgSequencesArray = Array<PgSequences>;

  export type PgSettingsArray = Array<PgSettings>;

  export type PgShadowArray = Array<PgShadow>;

  export type PgShdependArray = Array<PgShdepend>;

  export type PgShdescriptionArray = Array<PgShdescription>;

  export type PgShmemAllocationsArray = Array<PgShmemAllocations>;

  export type PgShseclabelArray = Array<PgShseclabel>;

  export type PgSnapshotArray = Array<PgSnapshot>;

  export type PgStatActivityArray = Array<PgStatActivity>;

  export type PgStatAllIndexesArray = Array<PgStatAllIndexes>;

  export type PgStatAllTablesArray = Array<PgStatAllTables>;

  export type PgStatArchiverArray = Array<PgStatArchiver>;

  export type PgStatBgwriterArray = Array<PgStatBgwriter>;

  export type PgStatDatabaseArray = Array<PgStatDatabase>;

  export type PgStatDatabaseConflictsArray = Array<PgStatDatabaseConflicts>;

  export type PgStatGssapiArray = Array<PgStatGssapi>;

  export type PgStatIoArray = Array<PgStatIo>;

  export type PgStatProgressAnalyzeArray = Array<PgStatProgressAnalyze>;

  export type PgStatProgressBasebackupArray = Array<PgStatProgressBasebackup>;

  export type PgStatProgressClusterArray = Array<PgStatProgressCluster>;

  export type PgStatProgressCopyArray = Array<PgStatProgressCopy>;

  export type PgStatProgressCreateIndexArray = Array<PgStatProgressCreateIndex>;

  export type PgStatProgressVacuumArray = Array<PgStatProgressVacuum>;

  export type PgStatRecoveryPrefetchArray = Array<PgStatRecoveryPrefetch>;

  export type PgStatReplicationArray = Array<PgStatReplication>;

  export type PgStatReplicationSlotsArray = Array<PgStatReplicationSlots>;

  export type PgStatSlruArray = Array<PgStatSlru>;

  export type PgStatSslArray = Array<PgStatSsl>;

  export type PgStatSubscriptionArray = Array<PgStatSubscription>;

  export type PgStatSubscriptionStatsArray = Array<PgStatSubscriptionStats>;

  export type PgStatSysIndexesArray = Array<PgStatSysIndexes>;

  export type PgStatSysTablesArray = Array<PgStatSysTables>;

  export type PgStatUserFunctionsArray = Array<PgStatUserFunctions>;

  export type PgStatUserIndexesArray = Array<PgStatUserIndexes>;

  export type PgStatUserTablesArray = Array<PgStatUserTables>;

  export type PgStatWalArray = Array<PgStatWal>;

  export type PgStatWalReceiverArray = Array<PgStatWalReceiver>;

  export type PgStatXactAllTablesArray = Array<PgStatXactAllTables>;

  export type PgStatXactSysTablesArray = Array<PgStatXactSysTables>;

  export type PgStatXactUserFunctionsArray = Array<PgStatXactUserFunctions>;

  export type PgStatXactUserTablesArray = Array<PgStatXactUserTables>;

  export type PgStatioAllIndexesArray = Array<PgStatioAllIndexes>;

  export type PgStatioAllSequencesArray = Array<PgStatioAllSequences>;

  export type PgStatioAllTablesArray = Array<PgStatioAllTables>;

  export type PgStatioSysIndexesArray = Array<PgStatioSysIndexes>;

  export type PgStatioSysSequencesArray = Array<PgStatioSysSequences>;

  export type PgStatioSysTablesArray = Array<PgStatioSysTables>;

  export type PgStatioUserIndexesArray = Array<PgStatioUserIndexes>;

  export type PgStatioUserSequencesArray = Array<PgStatioUserSequences>;

  export type PgStatioUserTablesArray = Array<PgStatioUserTables>;

  export type PgStatisticArray = Array<PgStatistic>;

  export type PgStatisticExtArray = Array<PgStatisticExt>;

  export type PgStatisticExtDataArray = Array<PgStatisticExtData>;

  export type PgStatsArray = Array<PgStats>;

  export type PgStatsExtArray = Array<PgStatsExt>;

  export type PgStatsExtExprsArray = Array<PgStatsExtExprs>;

  export type PgSubscriptionArray = Array<PgSubscription>;

  export type PgSubscriptionRelArray = Array<PgSubscriptionRel>;

  export type PgTablesArray = Array<PgTables>;

  export type PgTablespaceArray = Array<PgTablespace>;

  export type PgTimezoneAbbrevsArray = Array<PgTimezoneAbbrevs>;

  export type PgTimezoneNamesArray = Array<PgTimezoneNames>;

  export type PgTransformArray = Array<PgTransform>;

  export type PgTriggerArray = Array<PgTrigger>;

  export type PgTsConfigArray = Array<PgTsConfig>;

  export type PgTsConfigMapArray = Array<PgTsConfigMap>;

  export type PgTsDictArray = Array<PgTsDict>;

  export type PgTsParserArray = Array<PgTsParser>;

  export type PgTsTemplateArray = Array<PgTsTemplate>;

  export type PgTypeArray = Array<PgType>;

  export type PgUserArray = Array<PgUser>;

  export type PgUserMappingArray = Array<PgUserMapping>;

  export type PgUserMappingsArray = Array<PgUserMappings>;

  export type PgViewsArray = Array<PgViews>;

  export type PointArray = Array<Point>;

  export type PolygonArray = Array<Polygon>;

  export type RecordArray = Array<Record>;

  export type RefcursorArray = Array<Refcursor>;

  export type RegclassArray = Array<Regclass>;

  export type RegcollationArray = Array<Regcollation>;

  export type RegconfigArray = Array<Regconfig>;

  export type RegdictionaryArray = Array<Regdictionary>;

  export type RegnamespaceArray = Array<Regnamespace>;

  export type RegoperArray = Array<Regoper>;

  export type RegoperatorArray = Array<Regoperator>;

  export type RegprocArray = Array<Regproc>;

  export type RegprocedureArray = Array<Regprocedure>;

  export type RegroleArray = Array<Regrole>;

  export type RegtypeArray = Array<Regtype>;

  export type TextArray = Array<Text>;

  export type TidArray = Array<Tid>;

  export type TimeArray = Array<Time>;

  export type TimestampArray = Array<Timestamp>;

  export type TimestamptzArray = Array<Timestamptz>;

  export type TimetzArray = Array<Timetz>;

  export type TsmultirangeArray = Array<Tsmultirange>;

  export type TsqueryArray = Array<Tsquery>;

  export type TsrangeArray = Array<Tsrange>;

  export type TstzmultirangeArray = Array<Tstzmultirange>;

  export type TstzrangeArray = Array<Tstzrange>;

  export type TsvectorArray = Array<Tsvector>;

  export type TxidSnapshotArray = Array<TxidSnapshot>;

  export type UuidArray = Array<Uuid>;

  export type VarbitArray = Array<Varbit>;

  export type VarcharArray = Array<Varchar>;

  export type XidArray = Array<Xid>;

  export type Xid8Array = Array<Xid8>;

  export type XmlArray = Array<Xml>;

  export type Aclitem = string;

  export type Any = void;

  export type Anyarray = void;

  export type Anycompatible = void;

  export type Anycompatiblearray = void;

  export type Anycompatiblemultirange = void;

  export type Anycompatiblenonarray = void;

  export type Anycompatiblerange = void;

  export type Anyelement = void;

  export type Anyenum = void;

  export type Anymultirange = void;

  export type Anynonarray = void;

  export type Anyrange = void;

  export type Bit = boolean;

  export type Bool = boolean;

  export type Box = {
    upperRight: Point;
    lowerLeft: Point;
  };

  export type Bpchar = string;

  export type Bytea = Uint8Array;

  export type Char = string;

  export type Cid = string;

  export type Cidr = Uint8Array;

  export type Circle = {
    center: Point;
    radius: number;
  };

  export type Cstring = void;

  export type Date = JsDate;

  export type Datemultirange = void;

  export type Daterange = [Date, Date];

  export type EventTrigger = void;

  export type FdwHandler = void;

  export type Float4 = number;

  export type Float8 = number;

  export type Gtsvector = Array<string>;

  export type IndexAmHandler = void;

  export type Inet = string;

  export type Int2 = number;

  export type Int2vector = Uint16Array;

  export type Int4 = number;

  export type Int4multirange = void;

  export type Int4range = [Int4, Int4];

  export type Int8 = number;

  export type Int8multirange = void;

  export type Int8range = [Int8, Int8];

  export type Internal = void;

  export type Interval = number;

  export type Json = JSONObject;

  export type Jsonb = JSONObject;

  export type Jsonpath = string;

  export type LanguageHandler = void;

  export type Line = {
    a: number;
    b: number;
    c: number;
  };

  export type Lseg = {
    from: Point;
    to: Point;
  };

  export type Macaddr = Uint8Array;

  export type Macaddr8 = Uint8Array;

  export type Money = number;

  export type Name = string;

  export type Numeric = number;

  export type Nummultirange = void;

  export type Numrange = [Numeric, Numeric];

  export type Oid = number;

  export type Oidvector = Array<Oid>;

  export type Path = Array<Point>;

  export interface PgAggregate {
    aggfnoid: Regproc;
    aggkind: Char;
    aggnumdirectargs: Int2;
    aggtransfn: Regproc;
    aggfinalfn: Regproc;
    aggcombinefn: Regproc;
    aggserialfn: Regproc;
    aggdeserialfn: Regproc;
    aggmtransfn: Regproc;
    aggminvtransfn: Regproc;
    aggmfinalfn: Regproc;
    aggfinalextra: Bool;
    aggmfinalextra: Bool;
    aggfinalmodify: Char;
    aggmfinalmodify: Char;
    aggsortop: Oid;
    aggtranstype: Oid;
    aggtransspace: Int4;
    aggmtranstype: Oid;
    aggmtransspace: Int4;
    agginitval?: Nullable<Text>;
    aggminitval?: Nullable<Text>;
  }

  export interface PgAggregateNotPrimaryKey {
    aggkind: Char;
    aggnumdirectargs: Int2;
    aggtransfn: Regproc;
    aggfinalfn: Regproc;
    aggcombinefn: Regproc;
    aggserialfn: Regproc;
    aggdeserialfn: Regproc;
    aggmtransfn: Regproc;
    aggminvtransfn: Regproc;
    aggmfinalfn: Regproc;
    aggfinalextra: Bool;
    aggmfinalextra: Bool;
    aggfinalmodify: Char;
    aggmfinalmodify: Char;
    aggsortop: Oid;
    aggtranstype: Oid;
    aggtransspace: Int4;
    aggmtranstype: Oid;
    aggmtransspace: Int4;
    agginitval?: Nullable<Text>;
    aggminitval?: Nullable<Text>;
  }

  export function includesPgAggregatePrimaryKey(
    value: Partial<PgAggregate>,
  ): value is PgAggregate {
    return value.aggfnoid !== undefined;
  }

  export interface PgAm {
    oid: Oid;
    amname: Name;
    amhandler: Regproc;
    amtype: Char;
  }

  export interface PgAmNotPrimaryKey {
    amname: Name;
    amhandler: Regproc;
    amtype: Char;
  }

  export function includesPgAmPrimaryKey(value: Partial<PgAm>): value is PgAm {
    return value.oid !== undefined;
  }

  export interface PgAmop {
    oid: Oid;
    amopfamily: Oid;
    amoplefttype: Oid;
    amoprighttype: Oid;
    amopstrategy: Int2;
    amoppurpose: Char;
    amopopr: Oid;
    amopmethod: Oid;
    amopsortfamily: Oid;
  }

  export interface PgAmopNotPrimaryKey {
    amopfamily: Oid;
    amoplefttype: Oid;
    amoprighttype: Oid;
    amopstrategy: Int2;
    amoppurpose: Char;
    amopopr: Oid;
    amopmethod: Oid;
    amopsortfamily: Oid;
  }

  export function includesPgAmopPrimaryKey(
    value: Partial<PgAmop>,
  ): value is PgAmop {
    return value.oid !== undefined;
  }

  export interface PgAmproc {
    oid: Oid;
    amprocfamily: Oid;
    amproclefttype: Oid;
    amprocrighttype: Oid;
    amprocnum: Int2;
    amproc: Regproc;
  }

  export interface PgAmprocNotPrimaryKey {
    amprocfamily: Oid;
    amproclefttype: Oid;
    amprocrighttype: Oid;
    amprocnum: Int2;
    amproc: Regproc;
  }

  export function includesPgAmprocPrimaryKey(
    value: Partial<PgAmproc>,
  ): value is PgAmproc {
    return value.oid !== undefined;
  }

  export interface PgAttrdef {
    oid: Oid;
    adrelid: Oid;
    adnum: Int2;
    adbin: PgNodeTree;
  }

  export interface PgAttrdefNotPrimaryKey {
    adrelid: Oid;
    adnum: Int2;
    adbin: PgNodeTree;
  }

  export function includesPgAttrdefPrimaryKey(
    value: Partial<PgAttrdef>,
  ): value is PgAttrdef {
    return value.oid !== undefined;
  }

  export interface PgAttribute {
    attrelid: Oid;
    attname: Name;
    atttypid: Oid;
    attlen: Int2;
    attnum: Int2;
    attcacheoff: Int4;
    atttypmod: Int4;
    attndims: Int2;
    attbyval: Bool;
    attalign: Char;
    attstorage: Char;
    attcompression: Char;
    attnotnull: Bool;
    atthasdef: Bool;
    atthasmissing: Bool;
    attidentity: Char;
    attgenerated: Char;
    attisdropped: Bool;
    attislocal: Bool;
    attinhcount: Int2;
    attstattarget: Int2;
    attcollation: Oid;
    attacl?: Nullable<AclitemArray>;
    attoptions?: Nullable<TextArray>;
    attfdwoptions?: Nullable<TextArray>;
    attmissingval?: Nullable<Anyarray>;
  }

  export interface PgAttributeNotPrimaryKey {
    attname: Name;
    atttypid: Oid;
    attlen: Int2;
    attcacheoff: Int4;
    atttypmod: Int4;
    attndims: Int2;
    attbyval: Bool;
    attalign: Char;
    attstorage: Char;
    attcompression: Char;
    attnotnull: Bool;
    atthasdef: Bool;
    atthasmissing: Bool;
    attidentity: Char;
    attgenerated: Char;
    attisdropped: Bool;
    attislocal: Bool;
    attinhcount: Int2;
    attstattarget: Int2;
    attcollation: Oid;
    attacl?: Nullable<AclitemArray>;
    attoptions?: Nullable<TextArray>;
    attfdwoptions?: Nullable<TextArray>;
    attmissingval?: Nullable<Anyarray>;
  }

  export function includesPgAttributePrimaryKey(
    value: Partial<PgAttribute>,
  ): value is PgAttribute {
    return value.attrelid !== undefined && value.attnum !== undefined;
  }

  export interface PgAuthMembers {
    oid: Oid;
    roleid: Oid;
    member: Oid;
    grantor: Oid;
    adminOption: Bool;
    inheritOption: Bool;
    setOption: Bool;
  }

  export interface PgAuthMembersNotPrimaryKey {
    roleid: Oid;
    member: Oid;
    grantor: Oid;
    adminOption: Bool;
    inheritOption: Bool;
    setOption: Bool;
  }

  export function includesPgAuthMembersPrimaryKey(
    value: Partial<PgAuthMembers>,
  ): value is PgAuthMembers {
    return value.oid !== undefined;
  }

  export interface PgAuthid {
    oid: Oid;
    rolname: Name;
    rolsuper: Bool;
    rolinherit: Bool;
    rolcreaterole: Bool;
    rolcreatedb: Bool;
    rolcanlogin: Bool;
    rolreplication: Bool;
    rolbypassrls: Bool;
    rolconnlimit: Int4;
    rolpassword?: Nullable<Text>;
    rolvaliduntil?: Nullable<Timestamptz>;
  }

  export interface PgAuthidNotPrimaryKey {
    rolname: Name;
    rolsuper: Bool;
    rolinherit: Bool;
    rolcreaterole: Bool;
    rolcreatedb: Bool;
    rolcanlogin: Bool;
    rolreplication: Bool;
    rolbypassrls: Bool;
    rolconnlimit: Int4;
    rolpassword?: Nullable<Text>;
    rolvaliduntil?: Nullable<Timestamptz>;
  }

  export function includesPgAuthidPrimaryKey(
    value: Partial<PgAuthid>,
  ): value is PgAuthid {
    return value.oid !== undefined;
  }

  export interface PgAvailableExtensionVersions {
    name?: Nullable<Name>;
    version?: Nullable<Text>;
    installed?: Nullable<Bool>;
    superuser?: Nullable<Bool>;
    trusted?: Nullable<Bool>;
    relocatable?: Nullable<Bool>;
    schema?: Nullable<Name>;
    requires?: Nullable<NameArray>;
    comment?: Nullable<Text>;
  }

  export interface PgAvailableExtensions {
    name?: Nullable<Name>;
    defaultVersion?: Nullable<Text>;
    installedVersion?: Nullable<Text>;
    comment?: Nullable<Text>;
  }

  export interface PgBackendMemoryContexts {
    name?: Nullable<Text>;
    ident?: Nullable<Text>;
    parent?: Nullable<Text>;
    level?: Nullable<Int4>;
    totalBytes?: Nullable<Int8>;
    totalNblocks?: Nullable<Int8>;
    freeBytes?: Nullable<Int8>;
    freeChunks?: Nullable<Int8>;
    usedBytes?: Nullable<Int8>;
  }

  export type PgBrinBloomSummary = string;

  export type PgBrinMinmaxMultiSummary = string;

  export interface PgCast {
    oid: Oid;
    castsource: Oid;
    casttarget: Oid;
    castfunc: Oid;
    castcontext: Char;
    castmethod: Char;
  }

  export interface PgCastNotPrimaryKey {
    castsource: Oid;
    casttarget: Oid;
    castfunc: Oid;
    castcontext: Char;
    castmethod: Char;
  }

  export function includesPgCastPrimaryKey(
    value: Partial<PgCast>,
  ): value is PgCast {
    return value.oid !== undefined;
  }

  export interface PgClass {
    oid: Oid;
    relname: Name;
    relnamespace: Oid;
    reltype: Oid;
    reloftype: Oid;
    relowner: Oid;
    relam: Oid;
    relfilenode: Oid;
    reltablespace: Oid;
    relpages: Int4;
    reltuples: Float4;
    relallvisible: Int4;
    reltoastrelid: Oid;
    relhasindex: Bool;
    relisshared: Bool;
    relpersistence: Char;
    relkind: Char;
    relnatts: Int2;
    relchecks: Int2;
    relhasrules: Bool;
    relhastriggers: Bool;
    relhassubclass: Bool;
    relrowsecurity: Bool;
    relforcerowsecurity: Bool;
    relispopulated: Bool;
    relreplident: Char;
    relispartition: Bool;
    relrewrite: Oid;
    relfrozenxid: Xid;
    relminmxid: Xid;
    relacl?: Nullable<AclitemArray>;
    reloptions?: Nullable<TextArray>;
    relpartbound?: Nullable<PgNodeTree>;
  }

  export interface PgClassNotPrimaryKey {
    relname: Name;
    relnamespace: Oid;
    reltype: Oid;
    reloftype: Oid;
    relowner: Oid;
    relam: Oid;
    relfilenode: Oid;
    reltablespace: Oid;
    relpages: Int4;
    reltuples: Float4;
    relallvisible: Int4;
    reltoastrelid: Oid;
    relhasindex: Bool;
    relisshared: Bool;
    relpersistence: Char;
    relkind: Char;
    relnatts: Int2;
    relchecks: Int2;
    relhasrules: Bool;
    relhastriggers: Bool;
    relhassubclass: Bool;
    relrowsecurity: Bool;
    relforcerowsecurity: Bool;
    relispopulated: Bool;
    relreplident: Char;
    relispartition: Bool;
    relrewrite: Oid;
    relfrozenxid: Xid;
    relminmxid: Xid;
    relacl?: Nullable<AclitemArray>;
    reloptions?: Nullable<TextArray>;
    relpartbound?: Nullable<PgNodeTree>;
  }

  export function includesPgClassPrimaryKey(
    value: Partial<PgClass>,
  ): value is PgClass {
    return value.oid !== undefined;
  }

  export interface PgCollation {
    oid: Oid;
    collname: Name;
    collnamespace: Oid;
    collowner: Oid;
    collprovider: Char;
    collisdeterministic: Bool;
    collencoding: Int4;
    collcollate?: Nullable<Text>;
    collctype?: Nullable<Text>;
    colliculocale?: Nullable<Text>;
    collicurules?: Nullable<Text>;
    collversion?: Nullable<Text>;
  }

  export interface PgCollationNotPrimaryKey {
    collname: Name;
    collnamespace: Oid;
    collowner: Oid;
    collprovider: Char;
    collisdeterministic: Bool;
    collencoding: Int4;
    collcollate?: Nullable<Text>;
    collctype?: Nullable<Text>;
    colliculocale?: Nullable<Text>;
    collicurules?: Nullable<Text>;
    collversion?: Nullable<Text>;
  }

  export function includesPgCollationPrimaryKey(
    value: Partial<PgCollation>,
  ): value is PgCollation {
    return value.oid !== undefined;
  }

  export interface PgConfig {
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
  }

  export interface PgConstraint {
    oid: Oid;
    conname: Name;
    connamespace: Oid;
    contype: Char;
    condeferrable: Bool;
    condeferred: Bool;
    convalidated: Bool;
    conrelid: Oid;
    contypid: Oid;
    conindid: Oid;
    conparentid: Oid;
    confrelid: Oid;
    confupdtype: Char;
    confdeltype: Char;
    confmatchtype: Char;
    conislocal: Bool;
    coninhcount: Int2;
    connoinherit: Bool;
    conkey?: Nullable<Int2Array>;
    confkey?: Nullable<Int2Array>;
    conpfeqop?: Nullable<OidArray>;
    conppeqop?: Nullable<OidArray>;
    conffeqop?: Nullable<OidArray>;
    confdelsetcols?: Nullable<Int2Array>;
    conexclop?: Nullable<OidArray>;
    conbin?: Nullable<PgNodeTree>;
  }

  export interface PgConstraintNotPrimaryKey {
    conname: Name;
    connamespace: Oid;
    contype: Char;
    condeferrable: Bool;
    condeferred: Bool;
    convalidated: Bool;
    conrelid: Oid;
    contypid: Oid;
    conindid: Oid;
    conparentid: Oid;
    confrelid: Oid;
    confupdtype: Char;
    confdeltype: Char;
    confmatchtype: Char;
    conislocal: Bool;
    coninhcount: Int2;
    connoinherit: Bool;
    conkey?: Nullable<Int2Array>;
    confkey?: Nullable<Int2Array>;
    conpfeqop?: Nullable<OidArray>;
    conppeqop?: Nullable<OidArray>;
    conffeqop?: Nullable<OidArray>;
    confdelsetcols?: Nullable<Int2Array>;
    conexclop?: Nullable<OidArray>;
    conbin?: Nullable<PgNodeTree>;
  }

  export function includesPgConstraintPrimaryKey(
    value: Partial<PgConstraint>,
  ): value is PgConstraint {
    return value.oid !== undefined;
  }

  export interface PgConversion {
    oid: Oid;
    conname: Name;
    connamespace: Oid;
    conowner: Oid;
    conforencoding: Int4;
    contoencoding: Int4;
    conproc: Regproc;
    condefault: Bool;
  }

  export interface PgConversionNotPrimaryKey {
    conname: Name;
    connamespace: Oid;
    conowner: Oid;
    conforencoding: Int4;
    contoencoding: Int4;
    conproc: Regproc;
    condefault: Bool;
  }

  export function includesPgConversionPrimaryKey(
    value: Partial<PgConversion>,
  ): value is PgConversion {
    return value.oid !== undefined;
  }

  export interface PgCursors {
    name?: Nullable<Text>;
    statement?: Nullable<Text>;
    isHoldable?: Nullable<Bool>;
    isBinary?: Nullable<Bool>;
    isScrollable?: Nullable<Bool>;
    creationTime?: Nullable<Timestamptz>;
  }

  export interface PgDatabase {
    oid: Oid;
    datname: Name;
    datdba: Oid;
    encoding: Int4;
    datlocprovider: Char;
    datistemplate: Bool;
    datallowconn: Bool;
    datconnlimit: Int4;
    datfrozenxid: Xid;
    datminmxid: Xid;
    dattablespace: Oid;
    datcollate: Text;
    datctype: Text;
    daticulocale?: Nullable<Text>;
    daticurules?: Nullable<Text>;
    datcollversion?: Nullable<Text>;
    datacl?: Nullable<AclitemArray>;
  }

  export interface PgDatabaseNotPrimaryKey {
    datname: Name;
    datdba: Oid;
    encoding: Int4;
    datlocprovider: Char;
    datistemplate: Bool;
    datallowconn: Bool;
    datconnlimit: Int4;
    datfrozenxid: Xid;
    datminmxid: Xid;
    dattablespace: Oid;
    datcollate: Text;
    datctype: Text;
    daticulocale?: Nullable<Text>;
    daticurules?: Nullable<Text>;
    datcollversion?: Nullable<Text>;
    datacl?: Nullable<AclitemArray>;
  }

  export function includesPgDatabasePrimaryKey(
    value: Partial<PgDatabase>,
  ): value is PgDatabase {
    return value.oid !== undefined;
  }

  export interface PgDbRoleSetting {
    setdatabase: Oid;
    setrole: Oid;
    setconfig?: Nullable<TextArray>;
  }

  export interface PgDbRoleSettingNotPrimaryKey {
    setconfig?: Nullable<TextArray>;
  }

  export function includesPgDbRoleSettingPrimaryKey(
    value: Partial<PgDbRoleSetting>,
  ): value is PgDbRoleSetting {
    return value.setdatabase !== undefined && value.setrole !== undefined;
  }

  export type PgDdlCommand = void;

  export interface PgDefaultAcl {
    oid: Oid;
    defaclrole: Oid;
    defaclnamespace: Oid;
    defaclobjtype: Char;
    defaclacl: AclitemArray;
  }

  export interface PgDefaultAclNotPrimaryKey {
    defaclrole: Oid;
    defaclnamespace: Oid;
    defaclobjtype: Char;
    defaclacl: AclitemArray;
  }

  export function includesPgDefaultAclPrimaryKey(
    value: Partial<PgDefaultAcl>,
  ): value is PgDefaultAcl {
    return value.oid !== undefined;
  }

  export interface PgDepend {
    classid: Oid;
    objid: Oid;
    objsubid: Int4;
    refclassid: Oid;
    refobjid: Oid;
    refobjsubid: Int4;
    deptype: Char;
  }

  export type PgDependencies = string;

  export interface PgDescription {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    description: Text;
  }

  export interface PgDescriptionNotPrimaryKey {
    description: Text;
  }

  export function includesPgDescriptionPrimaryKey(
    value: Partial<PgDescription>,
  ): value is PgDescription {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined
    );
  }

  export interface PgEnum {
    oid: Oid;
    enumtypid: Oid;
    enumsortorder: Float4;
    enumlabel: Name;
  }

  export interface PgEnumNotPrimaryKey {
    enumtypid: Oid;
    enumsortorder: Float4;
    enumlabel: Name;
  }

  export function includesPgEnumPrimaryKey(
    value: Partial<PgEnum>,
  ): value is PgEnum {
    return value.oid !== undefined;
  }

  export interface PgEventTrigger {
    oid: Oid;
    evtname: Name;
    evtevent: Name;
    evtowner: Oid;
    evtfoid: Oid;
    evtenabled: Char;
    evttags?: Nullable<TextArray>;
  }

  export interface PgEventTriggerNotPrimaryKey {
    evtname: Name;
    evtevent: Name;
    evtowner: Oid;
    evtfoid: Oid;
    evtenabled: Char;
    evttags?: Nullable<TextArray>;
  }

  export function includesPgEventTriggerPrimaryKey(
    value: Partial<PgEventTrigger>,
  ): value is PgEventTrigger {
    return value.oid !== undefined;
  }

  export interface PgExtension {
    oid: Oid;
    extname: Name;
    extowner: Oid;
    extnamespace: Oid;
    extrelocatable: Bool;
    extversion: Text;
    extconfig?: Nullable<OidArray>;
    extcondition?: Nullable<TextArray>;
  }

  export interface PgExtensionNotPrimaryKey {
    extname: Name;
    extowner: Oid;
    extnamespace: Oid;
    extrelocatable: Bool;
    extversion: Text;
    extconfig?: Nullable<OidArray>;
    extcondition?: Nullable<TextArray>;
  }

  export function includesPgExtensionPrimaryKey(
    value: Partial<PgExtension>,
  ): value is PgExtension {
    return value.oid !== undefined;
  }

  export interface PgFileSettings {
    sourcefile?: Nullable<Text>;
    sourceline?: Nullable<Int4>;
    seqno?: Nullable<Int4>;
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
    applied?: Nullable<Bool>;
    error?: Nullable<Text>;
  }

  export interface PgForeignDataWrapper {
    oid: Oid;
    fdwname: Name;
    fdwowner: Oid;
    fdwhandler: Oid;
    fdwvalidator: Oid;
    fdwacl?: Nullable<AclitemArray>;
    fdwoptions?: Nullable<TextArray>;
  }

  export interface PgForeignDataWrapperNotPrimaryKey {
    fdwname: Name;
    fdwowner: Oid;
    fdwhandler: Oid;
    fdwvalidator: Oid;
    fdwacl?: Nullable<AclitemArray>;
    fdwoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignDataWrapperPrimaryKey(
    value: Partial<PgForeignDataWrapper>,
  ): value is PgForeignDataWrapper {
    return value.oid !== undefined;
  }

  export interface PgForeignServer {
    oid: Oid;
    srvname: Name;
    srvowner: Oid;
    srvfdw: Oid;
    srvtype?: Nullable<Text>;
    srvversion?: Nullable<Text>;
    srvacl?: Nullable<AclitemArray>;
    srvoptions?: Nullable<TextArray>;
  }

  export interface PgForeignServerNotPrimaryKey {
    srvname: Name;
    srvowner: Oid;
    srvfdw: Oid;
    srvtype?: Nullable<Text>;
    srvversion?: Nullable<Text>;
    srvacl?: Nullable<AclitemArray>;
    srvoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignServerPrimaryKey(
    value: Partial<PgForeignServer>,
  ): value is PgForeignServer {
    return value.oid !== undefined;
  }

  export interface PgForeignTable {
    ftrelid: Oid;
    ftserver: Oid;
    ftoptions?: Nullable<TextArray>;
  }

  export interface PgForeignTableNotPrimaryKey {
    ftserver: Oid;
    ftoptions?: Nullable<TextArray>;
  }

  export function includesPgForeignTablePrimaryKey(
    value: Partial<PgForeignTable>,
  ): value is PgForeignTable {
    return value.ftrelid !== undefined;
  }

  export interface PgGroup {
    groname?: Nullable<Name>;
    grosysid?: Nullable<Oid>;
    grolist?: Nullable<OidArray>;
  }

  export interface PgHbaFileRules {
    ruleNumber?: Nullable<Int4>;
    fileName?: Nullable<Text>;
    lineNumber?: Nullable<Int4>;
    type?: Nullable<Text>;
    database?: Nullable<TextArray>;
    userName?: Nullable<TextArray>;
    address?: Nullable<Text>;
    netmask?: Nullable<Text>;
    authMethod?: Nullable<Text>;
    options?: Nullable<TextArray>;
    error?: Nullable<Text>;
  }

  export interface PgIdentFileMappings {
    mapNumber?: Nullable<Int4>;
    fileName?: Nullable<Text>;
    lineNumber?: Nullable<Int4>;
    mapName?: Nullable<Text>;
    sysName?: Nullable<Text>;
    pgUsername?: Nullable<Text>;
    error?: Nullable<Text>;
  }

  export interface PgIndex {
    indexrelid: Oid;
    indrelid: Oid;
    indnatts: Int2;
    indnkeyatts: Int2;
    indisunique: Bool;
    indnullsnotdistinct: Bool;
    indisprimary: Bool;
    indisexclusion: Bool;
    indimmediate: Bool;
    indisclustered: Bool;
    indisvalid: Bool;
    indcheckxmin: Bool;
    indisready: Bool;
    indislive: Bool;
    indisreplident: Bool;
    indkey: Int2vector;
    indcollation: Oidvector;
    indclass: Oidvector;
    indoption: Int2vector;
    indexprs?: Nullable<PgNodeTree>;
    indpred?: Nullable<PgNodeTree>;
  }

  export interface PgIndexNotPrimaryKey {
    indrelid: Oid;
    indnatts: Int2;
    indnkeyatts: Int2;
    indisunique: Bool;
    indnullsnotdistinct: Bool;
    indisprimary: Bool;
    indisexclusion: Bool;
    indimmediate: Bool;
    indisclustered: Bool;
    indisvalid: Bool;
    indcheckxmin: Bool;
    indisready: Bool;
    indislive: Bool;
    indisreplident: Bool;
    indkey: Int2vector;
    indcollation: Oidvector;
    indclass: Oidvector;
    indoption: Int2vector;
    indexprs?: Nullable<PgNodeTree>;
    indpred?: Nullable<PgNodeTree>;
  }

  export function includesPgIndexPrimaryKey(
    value: Partial<PgIndex>,
  ): value is PgIndex {
    return value.indexrelid !== undefined;
  }

  export interface PgIndexes {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    indexname?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    indexdef?: Nullable<Text>;
  }

  export interface PgInherits {
    inhrelid: Oid;
    inhparent: Oid;
    inhseqno: Int4;
    inhdetachpending: Bool;
  }

  export interface PgInheritsNotPrimaryKey {
    inhparent: Oid;
    inhdetachpending: Bool;
  }

  export function includesPgInheritsPrimaryKey(
    value: Partial<PgInherits>,
  ): value is PgInherits {
    return value.inhrelid !== undefined && value.inhseqno !== undefined;
  }

  export interface PgInitPrivs {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    privtype: Char;
    initprivs: AclitemArray;
  }

  export interface PgInitPrivsNotPrimaryKey {
    privtype: Char;
    initprivs: AclitemArray;
  }

  export function includesPgInitPrivsPrimaryKey(
    value: Partial<PgInitPrivs>,
  ): value is PgInitPrivs {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined
    );
  }

  export interface PgLanguage {
    oid: Oid;
    lanname: Name;
    lanowner: Oid;
    lanispl: Bool;
    lanpltrusted: Bool;
    lanplcallfoid: Oid;
    laninline: Oid;
    lanvalidator: Oid;
    lanacl?: Nullable<AclitemArray>;
  }

  export interface PgLanguageNotPrimaryKey {
    lanname: Name;
    lanowner: Oid;
    lanispl: Bool;
    lanpltrusted: Bool;
    lanplcallfoid: Oid;
    laninline: Oid;
    lanvalidator: Oid;
    lanacl?: Nullable<AclitemArray>;
  }

  export function includesPgLanguagePrimaryKey(
    value: Partial<PgLanguage>,
  ): value is PgLanguage {
    return value.oid !== undefined;
  }

  export interface PgLargeobject {
    loid: Oid;
    pageno: Int4;
    data: Bytea;
  }

  export interface PgLargeobjectNotPrimaryKey {
    data: Bytea;
  }

  export function includesPgLargeobjectPrimaryKey(
    value: Partial<PgLargeobject>,
  ): value is PgLargeobject {
    return value.loid !== undefined && value.pageno !== undefined;
  }

  export interface PgLargeobjectMetadata {
    oid: Oid;
    lomowner: Oid;
    lomacl?: Nullable<AclitemArray>;
  }

  export interface PgLargeobjectMetadataNotPrimaryKey {
    lomowner: Oid;
    lomacl?: Nullable<AclitemArray>;
  }

  export function includesPgLargeobjectMetadataPrimaryKey(
    value: Partial<PgLargeobjectMetadata>,
  ): value is PgLargeobjectMetadata {
    return value.oid !== undefined;
  }

  export interface PgLocks {
    locktype?: Nullable<Text>;
    database?: Nullable<Oid>;
    relation?: Nullable<Oid>;
    page?: Nullable<Int4>;
    tuple?: Nullable<Int2>;
    virtualxid?: Nullable<Text>;
    transactionid?: Nullable<Xid>;
    classid?: Nullable<Oid>;
    objid?: Nullable<Oid>;
    objsubid?: Nullable<Int2>;
    virtualtransaction?: Nullable<Text>;
    pid?: Nullable<Int4>;
    mode?: Nullable<Text>;
    granted?: Nullable<Bool>;
    fastpath?: Nullable<Bool>;
    waitstart?: Nullable<Timestamptz>;
  }

  export type PgLsn = bigint;

  export interface PgMatviews {
    schemaname?: Nullable<Name>;
    matviewname?: Nullable<Name>;
    matviewowner?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    hasindexes?: Nullable<Bool>;
    ispopulated?: Nullable<Bool>;
    definition?: Nullable<Text>;
  }

  export type PgMcvList = string;

  export interface PgNamespace {
    oid: Oid;
    nspname: Name;
    nspowner: Oid;
    nspacl?: Nullable<AclitemArray>;
  }

  export interface PgNamespaceNotPrimaryKey {
    nspname: Name;
    nspowner: Oid;
    nspacl?: Nullable<AclitemArray>;
  }

  export function includesPgNamespacePrimaryKey(
    value: Partial<PgNamespace>,
  ): value is PgNamespace {
    return value.oid !== undefined;
  }

  export type PgNdistinct = string;

  export type PgNodeTree = string;

  export interface PgOpclass {
    oid: Oid;
    opcmethod: Oid;
    opcname: Name;
    opcnamespace: Oid;
    opcowner: Oid;
    opcfamily: Oid;
    opcintype: Oid;
    opcdefault: Bool;
    opckeytype: Oid;
  }

  export interface PgOpclassNotPrimaryKey {
    opcmethod: Oid;
    opcname: Name;
    opcnamespace: Oid;
    opcowner: Oid;
    opcfamily: Oid;
    opcintype: Oid;
    opcdefault: Bool;
    opckeytype: Oid;
  }

  export function includesPgOpclassPrimaryKey(
    value: Partial<PgOpclass>,
  ): value is PgOpclass {
    return value.oid !== undefined;
  }

  export interface PgOperator {
    oid: Oid;
    oprname: Name;
    oprnamespace: Oid;
    oprowner: Oid;
    oprkind: Char;
    oprcanmerge: Bool;
    oprcanhash: Bool;
    oprleft: Oid;
    oprright: Oid;
    oprresult: Oid;
    oprcom: Oid;
    oprnegate: Oid;
    oprcode: Regproc;
    oprrest: Regproc;
    oprjoin: Regproc;
  }

  export interface PgOperatorNotPrimaryKey {
    oprname: Name;
    oprnamespace: Oid;
    oprowner: Oid;
    oprkind: Char;
    oprcanmerge: Bool;
    oprcanhash: Bool;
    oprleft: Oid;
    oprright: Oid;
    oprresult: Oid;
    oprcom: Oid;
    oprnegate: Oid;
    oprcode: Regproc;
    oprrest: Regproc;
    oprjoin: Regproc;
  }

  export function includesPgOperatorPrimaryKey(
    value: Partial<PgOperator>,
  ): value is PgOperator {
    return value.oid !== undefined;
  }

  export interface PgOpfamily {
    oid: Oid;
    opfmethod: Oid;
    opfname: Name;
    opfnamespace: Oid;
    opfowner: Oid;
  }

  export interface PgOpfamilyNotPrimaryKey {
    opfmethod: Oid;
    opfname: Name;
    opfnamespace: Oid;
    opfowner: Oid;
  }

  export function includesPgOpfamilyPrimaryKey(
    value: Partial<PgOpfamily>,
  ): value is PgOpfamily {
    return value.oid !== undefined;
  }

  export interface PgParameterAcl {
    oid: Oid;
    parname: Text;
    paracl?: Nullable<AclitemArray>;
  }

  export interface PgParameterAclNotPrimaryKey {
    parname: Text;
    paracl?: Nullable<AclitemArray>;
  }

  export function includesPgParameterAclPrimaryKey(
    value: Partial<PgParameterAcl>,
  ): value is PgParameterAcl {
    return value.oid !== undefined;
  }

  export interface PgPartitionedTable {
    partrelid: Oid;
    partstrat: Char;
    partnatts: Int2;
    partdefid: Oid;
    partattrs: Int2vector;
    partclass: Oidvector;
    partcollation: Oidvector;
    partexprs?: Nullable<PgNodeTree>;
  }

  export interface PgPartitionedTableNotPrimaryKey {
    partstrat: Char;
    partnatts: Int2;
    partdefid: Oid;
    partattrs: Int2vector;
    partclass: Oidvector;
    partcollation: Oidvector;
    partexprs?: Nullable<PgNodeTree>;
  }

  export function includesPgPartitionedTablePrimaryKey(
    value: Partial<PgPartitionedTable>,
  ): value is PgPartitionedTable {
    return value.partrelid !== undefined;
  }

  export interface PgPolicies {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    policyname?: Nullable<Name>;
    permissive?: Nullable<Text>;
    roles?: Nullable<NameArray>;
    cmd?: Nullable<Text>;
    qual?: Nullable<Text>;
    withCheck?: Nullable<Text>;
  }

  export interface PgPolicy {
    oid: Oid;
    polname: Name;
    polrelid: Oid;
    polcmd: Char;
    polpermissive: Bool;
    polroles: OidArray;
    polqual?: Nullable<PgNodeTree>;
    polwithcheck?: Nullable<PgNodeTree>;
  }

  export interface PgPolicyNotPrimaryKey {
    polname: Name;
    polrelid: Oid;
    polcmd: Char;
    polpermissive: Bool;
    polroles: OidArray;
    polqual?: Nullable<PgNodeTree>;
    polwithcheck?: Nullable<PgNodeTree>;
  }

  export function includesPgPolicyPrimaryKey(
    value: Partial<PgPolicy>,
  ): value is PgPolicy {
    return value.oid !== undefined;
  }

  export interface PgPreparedStatements {
    name?: Nullable<Text>;
    statement?: Nullable<Text>;
    prepareTime?: Nullable<Timestamptz>;
    parameterTypes?: Nullable<RegtypeArray>;
    resultTypes?: Nullable<RegtypeArray>;
    fromSql?: Nullable<Bool>;
    genericPlans?: Nullable<Int8>;
    customPlans?: Nullable<Int8>;
  }

  export interface PgPreparedXacts {
    transaction?: Nullable<Xid>;
    gid?: Nullable<Text>;
    prepared?: Nullable<Timestamptz>;
    owner?: Nullable<Name>;
    database?: Nullable<Name>;
  }

  export interface PgProc {
    oid: Oid;
    proname: Name;
    pronamespace: Oid;
    proowner: Oid;
    prolang: Oid;
    procost: Float4;
    prorows: Float4;
    provariadic: Oid;
    prosupport: Regproc;
    prokind: Char;
    prosecdef: Bool;
    proleakproof: Bool;
    proisstrict: Bool;
    proretset: Bool;
    provolatile: Char;
    proparallel: Char;
    pronargs: Int2;
    pronargdefaults: Int2;
    prorettype: Oid;
    proargtypes: Oidvector;
    proallargtypes?: Nullable<OidArray>;
    proargmodes?: Nullable<CharArray>;
    proargnames?: Nullable<TextArray>;
    proargdefaults?: Nullable<PgNodeTree>;
    protrftypes?: Nullable<OidArray>;
    prosrc: Text;
    probin?: Nullable<Text>;
    prosqlbody?: Nullable<PgNodeTree>;
    proconfig?: Nullable<TextArray>;
    proacl?: Nullable<AclitemArray>;
  }

  export interface PgProcNotPrimaryKey {
    proname: Name;
    pronamespace: Oid;
    proowner: Oid;
    prolang: Oid;
    procost: Float4;
    prorows: Float4;
    provariadic: Oid;
    prosupport: Regproc;
    prokind: Char;
    prosecdef: Bool;
    proleakproof: Bool;
    proisstrict: Bool;
    proretset: Bool;
    provolatile: Char;
    proparallel: Char;
    pronargs: Int2;
    pronargdefaults: Int2;
    prorettype: Oid;
    proargtypes: Oidvector;
    proallargtypes?: Nullable<OidArray>;
    proargmodes?: Nullable<CharArray>;
    proargnames?: Nullable<TextArray>;
    proargdefaults?: Nullable<PgNodeTree>;
    protrftypes?: Nullable<OidArray>;
    prosrc: Text;
    probin?: Nullable<Text>;
    prosqlbody?: Nullable<PgNodeTree>;
    proconfig?: Nullable<TextArray>;
    proacl?: Nullable<AclitemArray>;
  }

  export function includesPgProcPrimaryKey(
    value: Partial<PgProc>,
  ): value is PgProc {
    return value.oid !== undefined;
  }

  export interface PgPublication {
    oid: Oid;
    pubname: Name;
    pubowner: Oid;
    puballtables: Bool;
    pubinsert: Bool;
    pubupdate: Bool;
    pubdelete: Bool;
    pubtruncate: Bool;
    pubviaroot: Bool;
  }

  export interface PgPublicationNotPrimaryKey {
    pubname: Name;
    pubowner: Oid;
    puballtables: Bool;
    pubinsert: Bool;
    pubupdate: Bool;
    pubdelete: Bool;
    pubtruncate: Bool;
    pubviaroot: Bool;
  }

  export function includesPgPublicationPrimaryKey(
    value: Partial<PgPublication>,
  ): value is PgPublication {
    return value.oid !== undefined;
  }

  export interface PgPublicationNamespace {
    oid: Oid;
    pnpubid: Oid;
    pnnspid: Oid;
  }

  export interface PgPublicationNamespaceNotPrimaryKey {
    pnpubid: Oid;
    pnnspid: Oid;
  }

  export function includesPgPublicationNamespacePrimaryKey(
    value: Partial<PgPublicationNamespace>,
  ): value is PgPublicationNamespace {
    return value.oid !== undefined;
  }

  export interface PgPublicationRel {
    oid: Oid;
    prpubid: Oid;
    prrelid: Oid;
    prqual?: Nullable<PgNodeTree>;
    prattrs?: Nullable<Int2vector>;
  }

  export interface PgPublicationRelNotPrimaryKey {
    prpubid: Oid;
    prrelid: Oid;
    prqual?: Nullable<PgNodeTree>;
    prattrs?: Nullable<Int2vector>;
  }

  export function includesPgPublicationRelPrimaryKey(
    value: Partial<PgPublicationRel>,
  ): value is PgPublicationRel {
    return value.oid !== undefined;
  }

  export interface PgPublicationTables {
    pubname?: Nullable<Name>;
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    attnames?: Nullable<NameArray>;
    rowfilter?: Nullable<Text>;
  }

  export interface PgRange {
    rngtypid: Oid;
    rngsubtype: Oid;
    rngmultitypid: Oid;
    rngcollation: Oid;
    rngsubopc: Oid;
    rngcanonical: Regproc;
    rngsubdiff: Regproc;
  }

  export interface PgRangeNotPrimaryKey {
    rngsubtype: Oid;
    rngmultitypid: Oid;
    rngcollation: Oid;
    rngsubopc: Oid;
    rngcanonical: Regproc;
    rngsubdiff: Regproc;
  }

  export function includesPgRangePrimaryKey(
    value: Partial<PgRange>,
  ): value is PgRange {
    return value.rngtypid !== undefined;
  }

  export interface PgReplicationOrigin {
    roident: Oid;
    roname: Text;
  }

  export interface PgReplicationOriginNotPrimaryKey {
    roname: Text;
  }

  export function includesPgReplicationOriginPrimaryKey(
    value: Partial<PgReplicationOrigin>,
  ): value is PgReplicationOrigin {
    return value.roident !== undefined;
  }

  export interface PgReplicationOriginStatus {
    localId?: Nullable<Oid>;
    externalId?: Nullable<Text>;
    remoteLsn?: Nullable<PgLsn>;
    localLsn?: Nullable<PgLsn>;
  }

  export interface PgReplicationSlots {
    slotName?: Nullable<Name>;
    plugin?: Nullable<Name>;
    slotType?: Nullable<Text>;
    datoid?: Nullable<Oid>;
    database?: Nullable<Name>;
    temporary?: Nullable<Bool>;
    active?: Nullable<Bool>;
    activePid?: Nullable<Int4>;
    xmin?: Nullable<Xid>;
    catalogXmin?: Nullable<Xid>;
    restartLsn?: Nullable<PgLsn>;
    confirmedFlushLsn?: Nullable<PgLsn>;
    walStatus?: Nullable<Text>;
    safeWalSize?: Nullable<Int8>;
    twoPhase?: Nullable<Bool>;
    conflicting?: Nullable<Bool>;
  }

  export interface PgRewrite {
    oid: Oid;
    rulename: Name;
    evClass: Oid;
    evType: Char;
    evEnabled: Char;
    isInstead: Bool;
    evQual: PgNodeTree;
    evAction: PgNodeTree;
  }

  export interface PgRewriteNotPrimaryKey {
    rulename: Name;
    evClass: Oid;
    evType: Char;
    evEnabled: Char;
    isInstead: Bool;
    evQual: PgNodeTree;
    evAction: PgNodeTree;
  }

  export function includesPgRewritePrimaryKey(
    value: Partial<PgRewrite>,
  ): value is PgRewrite {
    return value.oid !== undefined;
  }

  export interface PgRoles {
    rolname?: Nullable<Name>;
    rolsuper?: Nullable<Bool>;
    rolinherit?: Nullable<Bool>;
    rolcreaterole?: Nullable<Bool>;
    rolcreatedb?: Nullable<Bool>;
    rolcanlogin?: Nullable<Bool>;
    rolreplication?: Nullable<Bool>;
    rolconnlimit?: Nullable<Int4>;
    rolpassword?: Nullable<Text>;
    rolvaliduntil?: Nullable<Timestamptz>;
    rolbypassrls?: Nullable<Bool>;
    rolconfig?: Nullable<TextArray>;
    oid?: Nullable<Oid>;
  }

  export interface PgRules {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    rulename?: Nullable<Name>;
    definition?: Nullable<Text>;
  }

  export interface PgSeclabel {
    objoid: Oid;
    classoid: Oid;
    objsubid: Int4;
    provider: Text;
    label: Text;
  }

  export interface PgSeclabelNotPrimaryKey {
    label: Text;
  }

  export function includesPgSeclabelPrimaryKey(
    value: Partial<PgSeclabel>,
  ): value is PgSeclabel {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.objsubid !== undefined &&
      value.provider !== undefined
    );
  }

  export interface PgSeclabels {
    objoid?: Nullable<Oid>;
    classoid?: Nullable<Oid>;
    objsubid?: Nullable<Int4>;
    objtype?: Nullable<Text>;
    objnamespace?: Nullable<Oid>;
    objname?: Nullable<Text>;
    provider?: Nullable<Text>;
    label?: Nullable<Text>;
  }

  export interface PgSequence {
    seqrelid: Oid;
    seqtypid: Oid;
    seqstart: Int8;
    seqincrement: Int8;
    seqmax: Int8;
    seqmin: Int8;
    seqcache: Int8;
    seqcycle: Bool;
  }

  export interface PgSequenceNotPrimaryKey {
    seqtypid: Oid;
    seqstart: Int8;
    seqincrement: Int8;
    seqmax: Int8;
    seqmin: Int8;
    seqcache: Int8;
    seqcycle: Bool;
  }

  export function includesPgSequencePrimaryKey(
    value: Partial<PgSequence>,
  ): value is PgSequence {
    return value.seqrelid !== undefined;
  }

  export interface PgSequences {
    schemaname?: Nullable<Name>;
    sequencename?: Nullable<Name>;
    sequenceowner?: Nullable<Name>;
    dataType?: Nullable<Regtype>;
    startValue?: Nullable<Int8>;
    minValue?: Nullable<Int8>;
    maxValue?: Nullable<Int8>;
    incrementBy?: Nullable<Int8>;
    cycle?: Nullable<Bool>;
    cacheSize?: Nullable<Int8>;
    lastValue?: Nullable<Int8>;
  }

  export interface PgSettings {
    name?: Nullable<Text>;
    setting?: Nullable<Text>;
    unit?: Nullable<Text>;
    category?: Nullable<Text>;
    shortDesc?: Nullable<Text>;
    extraDesc?: Nullable<Text>;
    context?: Nullable<Text>;
    vartype?: Nullable<Text>;
    source?: Nullable<Text>;
    minVal?: Nullable<Text>;
    maxVal?: Nullable<Text>;
    enumvals?: Nullable<TextArray>;
    bootVal?: Nullable<Text>;
    resetVal?: Nullable<Text>;
    sourcefile?: Nullable<Text>;
    sourceline?: Nullable<Int4>;
    pendingRestart?: Nullable<Bool>;
  }

  export interface PgShadow {
    usename?: Nullable<Name>;
    usesysid?: Nullable<Oid>;
    usecreatedb?: Nullable<Bool>;
    usesuper?: Nullable<Bool>;
    userepl?: Nullable<Bool>;
    usebypassrls?: Nullable<Bool>;
    passwd?: Nullable<Text>;
    valuntil?: Nullable<Timestamptz>;
    useconfig?: Nullable<TextArray>;
  }

  export interface PgShdepend {
    dbid: Oid;
    classid: Oid;
    objid: Oid;
    objsubid: Int4;
    refclassid: Oid;
    refobjid: Oid;
    deptype: Char;
  }

  export interface PgShdescription {
    objoid: Oid;
    classoid: Oid;
    description: Text;
  }

  export interface PgShdescriptionNotPrimaryKey {
    description: Text;
  }

  export function includesPgShdescriptionPrimaryKey(
    value: Partial<PgShdescription>,
  ): value is PgShdescription {
    return value.objoid !== undefined && value.classoid !== undefined;
  }

  export interface PgShmemAllocations {
    name?: Nullable<Text>;
    off?: Nullable<Int8>;
    size?: Nullable<Int8>;
    allocatedSize?: Nullable<Int8>;
  }

  export interface PgShseclabel {
    objoid: Oid;
    classoid: Oid;
    provider: Text;
    label: Text;
  }

  export interface PgShseclabelNotPrimaryKey {
    label: Text;
  }

  export function includesPgShseclabelPrimaryKey(
    value: Partial<PgShseclabel>,
  ): value is PgShseclabel {
    return (
      value.objoid !== undefined &&
      value.classoid !== undefined &&
      value.provider !== undefined
    );
  }

  export type PgSnapshot = string;

  export interface PgStatActivity {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    pid?: Nullable<Int4>;
    leaderPid?: Nullable<Int4>;
    usesysid?: Nullable<Oid>;
    usename?: Nullable<Name>;
    applicationName?: Nullable<Text>;
    clientAddr?: Nullable<Inet>;
    clientHostname?: Nullable<Text>;
    clientPort?: Nullable<Int4>;
    backendStart?: Nullable<Timestamptz>;
    xactStart?: Nullable<Timestamptz>;
    queryStart?: Nullable<Timestamptz>;
    stateChange?: Nullable<Timestamptz>;
    waitEventType?: Nullable<Text>;
    waitEvent?: Nullable<Text>;
    state?: Nullable<Text>;
    backendXid?: Nullable<Xid>;
    backendXmin?: Nullable<Xid>;
    queryId?: Nullable<Int8>;
    query?: Nullable<Text>;
    backendType?: Nullable<Text>;
  }

  export interface PgStatAllIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatArchiver {
    archivedCount?: Nullable<Int8>;
    lastArchivedWal?: Nullable<Text>;
    lastArchivedTime?: Nullable<Timestamptz>;
    failedCount?: Nullable<Int8>;
    lastFailedWal?: Nullable<Text>;
    lastFailedTime?: Nullable<Timestamptz>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatBgwriter {
    checkpointsTimed?: Nullable<Int8>;
    checkpointsReq?: Nullable<Int8>;
    checkpointWriteTime?: Nullable<Float8>;
    checkpointSyncTime?: Nullable<Float8>;
    buffersCheckpoint?: Nullable<Int8>;
    buffersClean?: Nullable<Int8>;
    maxwrittenClean?: Nullable<Int8>;
    buffersBackend?: Nullable<Int8>;
    buffersBackendFsync?: Nullable<Int8>;
    buffersAlloc?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatDatabase {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    numbackends?: Nullable<Int4>;
    xactCommit?: Nullable<Int8>;
    xactRollback?: Nullable<Int8>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
    tupReturned?: Nullable<Int8>;
    tupFetched?: Nullable<Int8>;
    tupInserted?: Nullable<Int8>;
    tupUpdated?: Nullable<Int8>;
    tupDeleted?: Nullable<Int8>;
    conflicts?: Nullable<Int8>;
    tempFiles?: Nullable<Int8>;
    tempBytes?: Nullable<Int8>;
    deadlocks?: Nullable<Int8>;
    checksumFailures?: Nullable<Int8>;
    checksumLastFailure?: Nullable<Timestamptz>;
    blkReadTime?: Nullable<Float8>;
    blkWriteTime?: Nullable<Float8>;
    sessionTime?: Nullable<Float8>;
    activeTime?: Nullable<Float8>;
    idleInTransactionTime?: Nullable<Float8>;
    sessions?: Nullable<Int8>;
    sessionsAbandoned?: Nullable<Int8>;
    sessionsFatal?: Nullable<Int8>;
    sessionsKilled?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatDatabaseConflicts {
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    conflTablespace?: Nullable<Int8>;
    conflLock?: Nullable<Int8>;
    conflSnapshot?: Nullable<Int8>;
    conflBufferpin?: Nullable<Int8>;
    conflDeadlock?: Nullable<Int8>;
    conflActiveLogicalslot?: Nullable<Int8>;
  }

  export interface PgStatGssapi {
    pid?: Nullable<Int4>;
    gssAuthenticated?: Nullable<Bool>;
    principal?: Nullable<Text>;
    encrypted?: Nullable<Bool>;
    credentialsDelegated?: Nullable<Bool>;
  }

  export interface PgStatIo {
    backendType?: Nullable<Text>;
    object?: Nullable<Text>;
    context?: Nullable<Text>;
    reads?: Nullable<Int8>;
    readTime?: Nullable<Float8>;
    writes?: Nullable<Int8>;
    writeTime?: Nullable<Float8>;
    writebacks?: Nullable<Int8>;
    writebackTime?: Nullable<Float8>;
    extends?: Nullable<Int8>;
    extendTime?: Nullable<Float8>;
    opBytes?: Nullable<Int8>;
    hits?: Nullable<Int8>;
    evictions?: Nullable<Int8>;
    reuses?: Nullable<Int8>;
    fsyncs?: Nullable<Int8>;
    fsyncTime?: Nullable<Float8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatProgressAnalyze {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    phase?: Nullable<Text>;
    sampleBlksTotal?: Nullable<Int8>;
    sampleBlksScanned?: Nullable<Int8>;
    extStatsTotal?: Nullable<Int8>;
    extStatsComputed?: Nullable<Int8>;
    childTablesTotal?: Nullable<Int8>;
    childTablesDone?: Nullable<Int8>;
    currentChildTableRelid?: Nullable<Oid>;
  }

  export interface PgStatProgressBasebackup {
    pid?: Nullable<Int4>;
    phase?: Nullable<Text>;
    backupTotal?: Nullable<Int8>;
    backupStreamed?: Nullable<Int8>;
    tablespacesTotal?: Nullable<Int8>;
    tablespacesStreamed?: Nullable<Int8>;
  }

  export interface PgStatProgressCluster {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    command?: Nullable<Text>;
    phase?: Nullable<Text>;
    clusterIndexRelid?: Nullable<Oid>;
    heapTuplesScanned?: Nullable<Int8>;
    heapTuplesWritten?: Nullable<Int8>;
    heapBlksTotal?: Nullable<Int8>;
    heapBlksScanned?: Nullable<Int8>;
    indexRebuildCount?: Nullable<Int8>;
  }

  export interface PgStatProgressCopy {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    command?: Nullable<Text>;
    type?: Nullable<Text>;
    bytesProcessed?: Nullable<Int8>;
    bytesTotal?: Nullable<Int8>;
    tuplesProcessed?: Nullable<Int8>;
    tuplesExcluded?: Nullable<Int8>;
  }

  export interface PgStatProgressCreateIndex {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    indexRelid?: Nullable<Oid>;
    command?: Nullable<Text>;
    phase?: Nullable<Text>;
    lockersTotal?: Nullable<Int8>;
    lockersDone?: Nullable<Int8>;
    currentLockerPid?: Nullable<Int8>;
    blocksTotal?: Nullable<Int8>;
    blocksDone?: Nullable<Int8>;
    tuplesTotal?: Nullable<Int8>;
    tuplesDone?: Nullable<Int8>;
    partitionsTotal?: Nullable<Int8>;
    partitionsDone?: Nullable<Int8>;
  }

  export interface PgStatProgressVacuum {
    pid?: Nullable<Int4>;
    datid?: Nullable<Oid>;
    datname?: Nullable<Name>;
    relid?: Nullable<Oid>;
    phase?: Nullable<Text>;
    heapBlksTotal?: Nullable<Int8>;
    heapBlksScanned?: Nullable<Int8>;
    heapBlksVacuumed?: Nullable<Int8>;
    indexVacuumCount?: Nullable<Int8>;
    maxDeadTuples?: Nullable<Int8>;
    numDeadTuples?: Nullable<Int8>;
  }

  export interface PgStatRecoveryPrefetch {
    statsReset?: Nullable<Timestamptz>;
    prefetch?: Nullable<Int8>;
    hit?: Nullable<Int8>;
    skipInit?: Nullable<Int8>;
    skipNew?: Nullable<Int8>;
    skipFpw?: Nullable<Int8>;
    skipRep?: Nullable<Int8>;
    walDistance?: Nullable<Int4>;
    blockDistance?: Nullable<Int4>;
    ioDepth?: Nullable<Int4>;
  }

  export interface PgStatReplication {
    pid?: Nullable<Int4>;
    usesysid?: Nullable<Oid>;
    usename?: Nullable<Name>;
    applicationName?: Nullable<Text>;
    clientAddr?: Nullable<Inet>;
    clientHostname?: Nullable<Text>;
    clientPort?: Nullable<Int4>;
    backendStart?: Nullable<Timestamptz>;
    backendXmin?: Nullable<Xid>;
    state?: Nullable<Text>;
    sentLsn?: Nullable<PgLsn>;
    writeLsn?: Nullable<PgLsn>;
    flushLsn?: Nullable<PgLsn>;
    replayLsn?: Nullable<PgLsn>;
    writeLag?: Nullable<Interval>;
    flushLag?: Nullable<Interval>;
    replayLag?: Nullable<Interval>;
    syncPriority?: Nullable<Int4>;
    syncState?: Nullable<Text>;
    replyTime?: Nullable<Timestamptz>;
  }

  export interface PgStatReplicationSlots {
    slotName?: Nullable<Text>;
    spillTxns?: Nullable<Int8>;
    spillCount?: Nullable<Int8>;
    spillBytes?: Nullable<Int8>;
    streamTxns?: Nullable<Int8>;
    streamCount?: Nullable<Int8>;
    streamBytes?: Nullable<Int8>;
    totalTxns?: Nullable<Int8>;
    totalBytes?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSlru {
    name?: Nullable<Text>;
    blksZeroed?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
    blksRead?: Nullable<Int8>;
    blksWritten?: Nullable<Int8>;
    blksExists?: Nullable<Int8>;
    flushes?: Nullable<Int8>;
    truncates?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSsl {
    pid?: Nullable<Int4>;
    ssl?: Nullable<Bool>;
    version?: Nullable<Text>;
    cipher?: Nullable<Text>;
    bits?: Nullable<Int4>;
    clientDn?: Nullable<Text>;
    clientSerial?: Nullable<Numeric>;
    issuerDn?: Nullable<Text>;
  }

  export interface PgStatSubscription {
    subid?: Nullable<Oid>;
    subname?: Nullable<Name>;
    pid?: Nullable<Int4>;
    leaderPid?: Nullable<Int4>;
    relid?: Nullable<Oid>;
    receivedLsn?: Nullable<PgLsn>;
    lastMsgSendTime?: Nullable<Timestamptz>;
    lastMsgReceiptTime?: Nullable<Timestamptz>;
    latestEndLsn?: Nullable<PgLsn>;
    latestEndTime?: Nullable<Timestamptz>;
  }

  export interface PgStatSubscriptionStats {
    subid?: Nullable<Oid>;
    subname?: Nullable<Name>;
    applyErrorCount?: Nullable<Int8>;
    syncErrorCount?: Nullable<Int8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatSysIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatUserFunctions {
    funcid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    funcname?: Nullable<Name>;
    calls?: Nullable<Int8>;
    totalTime?: Nullable<Float8>;
    selfTime?: Nullable<Float8>;
  }

  export interface PgStatUserIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupRead?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
  }

  export interface PgStatUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    lastSeqScan?: Nullable<Timestamptz>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    lastIdxScan?: Nullable<Timestamptz>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
    nLiveTup?: Nullable<Int8>;
    nDeadTup?: Nullable<Int8>;
    nModSinceAnalyze?: Nullable<Int8>;
    nInsSinceVacuum?: Nullable<Int8>;
    lastVacuum?: Nullable<Timestamptz>;
    lastAutovacuum?: Nullable<Timestamptz>;
    lastAnalyze?: Nullable<Timestamptz>;
    lastAutoanalyze?: Nullable<Timestamptz>;
    vacuumCount?: Nullable<Int8>;
    autovacuumCount?: Nullable<Int8>;
    analyzeCount?: Nullable<Int8>;
    autoanalyzeCount?: Nullable<Int8>;
  }

  export interface PgStatWal {
    walRecords?: Nullable<Int8>;
    walFpi?: Nullable<Int8>;
    walBytes?: Nullable<Numeric>;
    walBuffersFull?: Nullable<Int8>;
    walWrite?: Nullable<Int8>;
    walSync?: Nullable<Int8>;
    walWriteTime?: Nullable<Float8>;
    walSyncTime?: Nullable<Float8>;
    statsReset?: Nullable<Timestamptz>;
  }

  export interface PgStatWalReceiver {
    pid?: Nullable<Int4>;
    status?: Nullable<Text>;
    receiveStartLsn?: Nullable<PgLsn>;
    receiveStartTli?: Nullable<Int4>;
    writtenLsn?: Nullable<PgLsn>;
    flushedLsn?: Nullable<PgLsn>;
    receivedTli?: Nullable<Int4>;
    lastMsgSendTime?: Nullable<Timestamptz>;
    lastMsgReceiptTime?: Nullable<Timestamptz>;
    latestEndLsn?: Nullable<PgLsn>;
    latestEndTime?: Nullable<Timestamptz>;
    slotName?: Nullable<Text>;
    senderHost?: Nullable<Text>;
    senderPort?: Nullable<Int4>;
    conninfo?: Nullable<Text>;
  }

  export interface PgStatXactAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatXactSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatXactUserFunctions {
    funcid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    funcname?: Nullable<Name>;
    calls?: Nullable<Int8>;
    totalTime?: Nullable<Float8>;
    selfTime?: Nullable<Float8>;
  }

  export interface PgStatXactUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    seqScan?: Nullable<Int8>;
    seqTupRead?: Nullable<Int8>;
    idxScan?: Nullable<Int8>;
    idxTupFetch?: Nullable<Int8>;
    nTupIns?: Nullable<Int8>;
    nTupUpd?: Nullable<Int8>;
    nTupDel?: Nullable<Int8>;
    nTupHotUpd?: Nullable<Int8>;
    nTupNewpageUpd?: Nullable<Int8>;
  }

  export interface PgStatioAllIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioAllSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioAllTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioSysTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserIndexes {
    relid?: Nullable<Oid>;
    indexrelid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    indexrelname?: Nullable<Name>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserSequences {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    blksRead?: Nullable<Int8>;
    blksHit?: Nullable<Int8>;
  }

  export interface PgStatioUserTables {
    relid?: Nullable<Oid>;
    schemaname?: Nullable<Name>;
    relname?: Nullable<Name>;
    heapBlksRead?: Nullable<Int8>;
    heapBlksHit?: Nullable<Int8>;
    idxBlksRead?: Nullable<Int8>;
    idxBlksHit?: Nullable<Int8>;
    toastBlksRead?: Nullable<Int8>;
    toastBlksHit?: Nullable<Int8>;
    tidxBlksRead?: Nullable<Int8>;
    tidxBlksHit?: Nullable<Int8>;
  }

  export interface PgStatistic {
    starelid: Oid;
    staattnum: Int2;
    stainherit: Bool;
    stanullfrac: Float4;
    stawidth: Int4;
    stadistinct: Float4;
    stakind1: Int2;
    stakind2: Int2;
    stakind3: Int2;
    stakind4: Int2;
    stakind5: Int2;
    staop1: Oid;
    staop2: Oid;
    staop3: Oid;
    staop4: Oid;
    staop5: Oid;
    stacoll1: Oid;
    stacoll2: Oid;
    stacoll3: Oid;
    stacoll4: Oid;
    stacoll5: Oid;
    stanumbers1?: Nullable<Float4Array>;
    stanumbers2?: Nullable<Float4Array>;
    stanumbers3?: Nullable<Float4Array>;
    stanumbers4?: Nullable<Float4Array>;
    stanumbers5?: Nullable<Float4Array>;
    stavalues1?: Nullable<Anyarray>;
    stavalues2?: Nullable<Anyarray>;
    stavalues3?: Nullable<Anyarray>;
    stavalues4?: Nullable<Anyarray>;
    stavalues5?: Nullable<Anyarray>;
  }

  export interface PgStatisticNotPrimaryKey {
    stanullfrac: Float4;
    stawidth: Int4;
    stadistinct: Float4;
    stakind1: Int2;
    stakind2: Int2;
    stakind3: Int2;
    stakind4: Int2;
    stakind5: Int2;
    staop1: Oid;
    staop2: Oid;
    staop3: Oid;
    staop4: Oid;
    staop5: Oid;
    stacoll1: Oid;
    stacoll2: Oid;
    stacoll3: Oid;
    stacoll4: Oid;
    stacoll5: Oid;
    stanumbers1?: Nullable<Float4Array>;
    stanumbers2?: Nullable<Float4Array>;
    stanumbers3?: Nullable<Float4Array>;
    stanumbers4?: Nullable<Float4Array>;
    stanumbers5?: Nullable<Float4Array>;
    stavalues1?: Nullable<Anyarray>;
    stavalues2?: Nullable<Anyarray>;
    stavalues3?: Nullable<Anyarray>;
    stavalues4?: Nullable<Anyarray>;
    stavalues5?: Nullable<Anyarray>;
  }

  export function includesPgStatisticPrimaryKey(
    value: Partial<PgStatistic>,
  ): value is PgStatistic {
    return (
      value.starelid !== undefined &&
      value.staattnum !== undefined &&
      value.stainherit !== undefined
    );
  }

  export interface PgStatisticExt {
    oid: Oid;
    stxrelid: Oid;
    stxname: Name;
    stxnamespace: Oid;
    stxowner: Oid;
    stxstattarget: Int4;
    stxkeys: Int2vector;
    stxkind: CharArray;
    stxexprs?: Nullable<PgNodeTree>;
  }

  export interface PgStatisticExtNotPrimaryKey {
    stxrelid: Oid;
    stxname: Name;
    stxnamespace: Oid;
    stxowner: Oid;
    stxstattarget: Int4;
    stxkeys: Int2vector;
    stxkind: CharArray;
    stxexprs?: Nullable<PgNodeTree>;
  }

  export function includesPgStatisticExtPrimaryKey(
    value: Partial<PgStatisticExt>,
  ): value is PgStatisticExt {
    return value.oid !== undefined;
  }

  export interface PgStatisticExtData {
    stxoid: Oid;
    stxdinherit: Bool;
    stxdndistinct?: Nullable<PgNdistinct>;
    stxddependencies?: Nullable<PgDependencies>;
    stxdmcv?: Nullable<PgMcvList>;
    stxdexpr?: Nullable<PgStatisticArray>;
  }

  export interface PgStatisticExtDataNotPrimaryKey {
    stxdndistinct?: Nullable<PgNdistinct>;
    stxddependencies?: Nullable<PgDependencies>;
    stxdmcv?: Nullable<PgMcvList>;
    stxdexpr?: Nullable<PgStatisticArray>;
  }

  export function includesPgStatisticExtDataPrimaryKey(
    value: Partial<PgStatisticExtData>,
  ): value is PgStatisticExtData {
    return value.stxoid !== undefined && value.stxdinherit !== undefined;
  }

  export interface PgStats {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    attname?: Nullable<Name>;
    inherited?: Nullable<Bool>;
    nullFrac?: Nullable<Float4>;
    avgWidth?: Nullable<Int4>;
    nDistinct?: Nullable<Float4>;
    mostCommonVals?: Nullable<Anyarray>;
    mostCommonFreqs?: Nullable<Float4Array>;
    histogramBounds?: Nullable<Anyarray>;
    correlation?: Nullable<Float4>;
    mostCommonElems?: Nullable<Anyarray>;
    mostCommonElemFreqs?: Nullable<Float4Array>;
    elemCountHistogram?: Nullable<Float4Array>;
  }

  export interface PgStatsExt {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    statisticsSchemaname?: Nullable<Name>;
    statisticsName?: Nullable<Name>;
    statisticsOwner?: Nullable<Name>;
    attnames?: Nullable<NameArray>;
    exprs?: Nullable<TextArray>;
    kinds?: Nullable<CharArray>;
    inherited?: Nullable<Bool>;
    nDistinct?: Nullable<PgNdistinct>;
    dependencies?: Nullable<PgDependencies>;
    mostCommonVals?: Nullable<TextArray>;
    mostCommonValNulls?: Nullable<BoolArray>;
    mostCommonFreqs?: Nullable<Float8Array>;
    mostCommonBaseFreqs?: Nullable<Float8Array>;
  }

  export interface PgStatsExtExprs {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    statisticsSchemaname?: Nullable<Name>;
    statisticsName?: Nullable<Name>;
    statisticsOwner?: Nullable<Name>;
    expr?: Nullable<Text>;
    inherited?: Nullable<Bool>;
    nullFrac?: Nullable<Float4>;
    avgWidth?: Nullable<Int4>;
    nDistinct?: Nullable<Float4>;
    mostCommonVals?: Nullable<Anyarray>;
    mostCommonFreqs?: Nullable<Float4Array>;
    histogramBounds?: Nullable<Anyarray>;
    correlation?: Nullable<Float4>;
    mostCommonElems?: Nullable<Anyarray>;
    mostCommonElemFreqs?: Nullable<Float4Array>;
    elemCountHistogram?: Nullable<Float4Array>;
  }

  export interface PgSubscription {
    oid: Oid;
    subdbid: Oid;
    subskiplsn: PgLsn;
    subname: Name;
    subowner: Oid;
    subenabled: Bool;
    subbinary: Bool;
    substream: Char;
    subtwophasestate: Char;
    subdisableonerr: Bool;
    subpasswordrequired: Bool;
    subrunasowner: Bool;
    subconninfo: Text;
    subslotname?: Nullable<Name>;
    subsynccommit: Text;
    subpublications: TextArray;
    suborigin?: Nullable<Text>;
  }

  export interface PgSubscriptionNotPrimaryKey {
    subdbid: Oid;
    subskiplsn: PgLsn;
    subname: Name;
    subowner: Oid;
    subenabled: Bool;
    subbinary: Bool;
    substream: Char;
    subtwophasestate: Char;
    subdisableonerr: Bool;
    subpasswordrequired: Bool;
    subrunasowner: Bool;
    subconninfo: Text;
    subslotname?: Nullable<Name>;
    subsynccommit: Text;
    subpublications: TextArray;
    suborigin?: Nullable<Text>;
  }

  export function includesPgSubscriptionPrimaryKey(
    value: Partial<PgSubscription>,
  ): value is PgSubscription {
    return value.oid !== undefined;
  }

  export interface PgSubscriptionRel {
    srsubid: Oid;
    srrelid: Oid;
    srsubstate: Char;
    srsublsn?: Nullable<PgLsn>;
  }

  export interface PgSubscriptionRelNotPrimaryKey {
    srsubstate: Char;
    srsublsn?: Nullable<PgLsn>;
  }

  export function includesPgSubscriptionRelPrimaryKey(
    value: Partial<PgSubscriptionRel>,
  ): value is PgSubscriptionRel {
    return value.srrelid !== undefined && value.srsubid !== undefined;
  }

  export interface PgTables {
    schemaname?: Nullable<Name>;
    tablename?: Nullable<Name>;
    tableowner?: Nullable<Name>;
    tablespace?: Nullable<Name>;
    hasindexes?: Nullable<Bool>;
    hasrules?: Nullable<Bool>;
    hastriggers?: Nullable<Bool>;
    rowsecurity?: Nullable<Bool>;
  }

  export interface PgTablespace {
    oid: Oid;
    spcname: Name;
    spcowner: Oid;
    spcacl?: Nullable<AclitemArray>;
    spcoptions?: Nullable<TextArray>;
  }

  export interface PgTablespaceNotPrimaryKey {
    spcname: Name;
    spcowner: Oid;
    spcacl?: Nullable<AclitemArray>;
    spcoptions?: Nullable<TextArray>;
  }

  export function includesPgTablespacePrimaryKey(
    value: Partial<PgTablespace>,
  ): value is PgTablespace {
    return value.oid !== undefined;
  }

  export interface PgTimezoneAbbrevs {
    abbrev?: Nullable<Text>;
    utcOffset?: Nullable<Interval>;
    isDst?: Nullable<Bool>;
  }

  export interface PgTimezoneNames {
    name?: Nullable<Text>;
    abbrev?: Nullable<Text>;
    utcOffset?: Nullable<Interval>;
    isDst?: Nullable<Bool>;
  }

  export interface PgTransform {
    oid: Oid;
    trftype: Oid;
    trflang: Oid;
    trffromsql: Regproc;
    trftosql: Regproc;
  }

  export interface PgTransformNotPrimaryKey {
    trftype: Oid;
    trflang: Oid;
    trffromsql: Regproc;
    trftosql: Regproc;
  }

  export function includesPgTransformPrimaryKey(
    value: Partial<PgTransform>,
  ): value is PgTransform {
    return value.oid !== undefined;
  }

  export interface PgTrigger {
    oid: Oid;
    tgrelid: Oid;
    tgparentid: Oid;
    tgname: Name;
    tgfoid: Oid;
    tgtype: Int2;
    tgenabled: Char;
    tgisinternal: Bool;
    tgconstrrelid: Oid;
    tgconstrindid: Oid;
    tgconstraint: Oid;
    tgdeferrable: Bool;
    tginitdeferred: Bool;
    tgnargs: Int2;
    tgattr: Int2vector;
    tgargs: Bytea;
    tgqual?: Nullable<PgNodeTree>;
    tgoldtable?: Nullable<Name>;
    tgnewtable?: Nullable<Name>;
  }

  export interface PgTriggerNotPrimaryKey {
    tgrelid: Oid;
    tgparentid: Oid;
    tgname: Name;
    tgfoid: Oid;
    tgtype: Int2;
    tgenabled: Char;
    tgisinternal: Bool;
    tgconstrrelid: Oid;
    tgconstrindid: Oid;
    tgconstraint: Oid;
    tgdeferrable: Bool;
    tginitdeferred: Bool;
    tgnargs: Int2;
    tgattr: Int2vector;
    tgargs: Bytea;
    tgqual?: Nullable<PgNodeTree>;
    tgoldtable?: Nullable<Name>;
    tgnewtable?: Nullable<Name>;
  }

  export function includesPgTriggerPrimaryKey(
    value: Partial<PgTrigger>,
  ): value is PgTrigger {
    return value.oid !== undefined;
  }

  export interface PgTsConfig {
    oid: Oid;
    cfgname: Name;
    cfgnamespace: Oid;
    cfgowner: Oid;
    cfgparser: Oid;
  }

  export interface PgTsConfigNotPrimaryKey {
    cfgname: Name;
    cfgnamespace: Oid;
    cfgowner: Oid;
    cfgparser: Oid;
  }

  export function includesPgTsConfigPrimaryKey(
    value: Partial<PgTsConfig>,
  ): value is PgTsConfig {
    return value.oid !== undefined;
  }

  export interface PgTsConfigMap {
    mapcfg: Oid;
    maptokentype: Int4;
    mapseqno: Int4;
    mapdict: Oid;
  }

  export interface PgTsConfigMapNotPrimaryKey {
    mapdict: Oid;
  }

  export function includesPgTsConfigMapPrimaryKey(
    value: Partial<PgTsConfigMap>,
  ): value is PgTsConfigMap {
    return (
      value.mapcfg !== undefined &&
      value.maptokentype !== undefined &&
      value.mapseqno !== undefined
    );
  }

  export interface PgTsDict {
    oid: Oid;
    dictname: Name;
    dictnamespace: Oid;
    dictowner: Oid;
    dicttemplate: Oid;
    dictinitoption?: Nullable<Text>;
  }

  export interface PgTsDictNotPrimaryKey {
    dictname: Name;
    dictnamespace: Oid;
    dictowner: Oid;
    dicttemplate: Oid;
    dictinitoption?: Nullable<Text>;
  }

  export function includesPgTsDictPrimaryKey(
    value: Partial<PgTsDict>,
  ): value is PgTsDict {
    return value.oid !== undefined;
  }

  export interface PgTsParser {
    oid: Oid;
    prsname: Name;
    prsnamespace: Oid;
    prsstart: Regproc;
    prstoken: Regproc;
    prsend: Regproc;
    prsheadline: Regproc;
    prslextype: Regproc;
  }

  export interface PgTsParserNotPrimaryKey {
    prsname: Name;
    prsnamespace: Oid;
    prsstart: Regproc;
    prstoken: Regproc;
    prsend: Regproc;
    prsheadline: Regproc;
    prslextype: Regproc;
  }

  export function includesPgTsParserPrimaryKey(
    value: Partial<PgTsParser>,
  ): value is PgTsParser {
    return value.oid !== undefined;
  }

  export interface PgTsTemplate {
    oid: Oid;
    tmplname: Name;
    tmplnamespace: Oid;
    tmplinit: Regproc;
    tmpllexize: Regproc;
  }

  export interface PgTsTemplateNotPrimaryKey {
    tmplname: Name;
    tmplnamespace: Oid;
    tmplinit: Regproc;
    tmpllexize: Regproc;
  }

  export function includesPgTsTemplatePrimaryKey(
    value: Partial<PgTsTemplate>,
  ): value is PgTsTemplate {
    return value.oid !== undefined;
  }

  export interface PgType {
    oid: Oid;
    typname: Name;
    typnamespace: Oid;
    typowner: Oid;
    typlen: Int2;
    typbyval: Bool;
    typtype: Char;
    typcategory: Char;
    typispreferred: Bool;
    typisdefined: Bool;
    typdelim: Char;
    typrelid: Oid;
    typsubscript: Regproc;
    typelem: Oid;
    typarray: Oid;
    typinput: Regproc;
    typoutput: Regproc;
    typreceive: Regproc;
    typsend: Regproc;
    typmodin: Regproc;
    typmodout: Regproc;
    typanalyze: Regproc;
    typalign: Char;
    typstorage: Char;
    typnotnull: Bool;
    typbasetype: Oid;
    typtypmod: Int4;
    typndims: Int4;
    typcollation: Oid;
    typdefaultbin?: Nullable<PgNodeTree>;
    typdefault?: Nullable<Text>;
    typacl?: Nullable<AclitemArray>;
  }

  export interface PgTypeNotPrimaryKey {
    typname: Name;
    typnamespace: Oid;
    typowner: Oid;
    typlen: Int2;
    typbyval: Bool;
    typtype: Char;
    typcategory: Char;
    typispreferred: Bool;
    typisdefined: Bool;
    typdelim: Char;
    typrelid: Oid;
    typsubscript: Regproc;
    typelem: Oid;
    typarray: Oid;
    typinput: Regproc;
    typoutput: Regproc;
    typreceive: Regproc;
    typsend: Regproc;
    typmodin: Regproc;
    typmodout: Regproc;
    typanalyze: Regproc;
    typalign: Char;
    typstorage: Char;
    typnotnull: Bool;
    typbasetype: Oid;
    typtypmod: Int4;
    typndims: Int4;
    typcollation: Oid;
    typdefaultbin?: Nullable<PgNodeTree>;
    typdefault?: Nullable<Text>;
    typacl?: Nullable<AclitemArray>;
  }

  export function includesPgTypePrimaryKey(
    value: Partial<PgType>,
  ): value is PgType {
    return value.oid !== undefined;
  }

  export interface PgUser {
    usename?: Nullable<Name>;
    usesysid?: Nullable<Oid>;
    usecreatedb?: Nullable<Bool>;
    usesuper?: Nullable<Bool>;
    userepl?: Nullable<Bool>;
    usebypassrls?: Nullable<Bool>;
    passwd?: Nullable<Text>;
    valuntil?: Nullable<Timestamptz>;
    useconfig?: Nullable<TextArray>;
  }

  export interface PgUserMapping {
    oid: Oid;
    umuser: Oid;
    umserver: Oid;
    umoptions?: Nullable<TextArray>;
  }

  export interface PgUserMappingNotPrimaryKey {
    umuser: Oid;
    umserver: Oid;
    umoptions?: Nullable<TextArray>;
  }

  export function includesPgUserMappingPrimaryKey(
    value: Partial<PgUserMapping>,
  ): value is PgUserMapping {
    return value.oid !== undefined;
  }

  export interface PgUserMappings {
    umid?: Nullable<Oid>;
    srvid?: Nullable<Oid>;
    srvname?: Nullable<Name>;
    umuser?: Nullable<Oid>;
    usename?: Nullable<Name>;
    umoptions?: Nullable<TextArray>;
  }

  export interface PgViews {
    schemaname?: Nullable<Name>;
    viewname?: Nullable<Name>;
    viewowner?: Nullable<Name>;
    definition?: Nullable<Text>;
  }

  export type Point = {
    x: number;
    y: number;
  };

  export type Polygon = string;

  export type Record = void;

  export type Refcursor = string;

  export type Regclass = number;

  export type Regcollation = number;

  export type Regconfig = number;

  export type Regdictionary = number;

  export type Regnamespace = number;

  export type Regoper = number;

  export type Regoperator = number;

  export type Regproc = number;

  export type Regprocedure = number;

  export type Regrole = number;

  export type Regtype = number;

  export type TableAmHandler = void;

  export type Text = string;

  export type Tid = {
    blockNumber: number;
    tupleIndex: number;
  };

  export type Time = JsDate;

  export type Timestamp = JsDate;

  export type Timestamptz = JsDate;

  export type Timetz = JsDate;

  export type Trigger = void;

  export type TsmHandler = void;

  export type Tsmultirange = void;

  export type Tsquery = string;

  export type Tsrange = [Timestamp, Timestamp];

  export type Tstzmultirange = void;

  export type Tstzrange = [Timestamptz, Timestamptz];

  export type Tsvector = string;

  export type TxidSnapshot = string;

  export type Unknown = void;

  export type Uuid = UUID;

  export type Varbit = boolean;

  export type Varchar = string;

  export type Void = void;

  export type Xid = string;

  export type Xid8 = string;

  export type Xml = string;

  export namespace Tables {
    export namespace PgStatistic {
      export interface ByStarelidStaattnumStainherit {
        starelid: Nullable<Oid>;
        staattnum: Nullable<Int2>;
        stainherit: Nullable<Bool>;
      }
    }

    export namespace PgType {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTypnameTypnamespace {
        typname: Nullable<Cstring>;
        typnamespace: Nullable<Oid>;
      }
    }

    export namespace PgForeignTable {
      export interface ByFtrelid {
        ftrelid: Nullable<Oid>;
      }
    }

    export namespace PgAuthid {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRolname {
        rolname: Nullable<Cstring>;
      }
    }

    export namespace PgStatisticExtData {
      export interface ByStxoidStxdinherit {
        stxoid: Nullable<Oid>;
        stxdinherit: Nullable<Bool>;
      }
    }

    export namespace PgUserMapping {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByUmuserUmserver {
        umuser: Nullable<Oid>;
        umserver: Nullable<Oid>;
      }
    }

    export namespace PgSubscription {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySubdbidSubname {
        subdbid: Nullable<Oid>;
        subname: Nullable<Cstring>;
      }
    }

    export namespace PgAttribute {
      export interface ByAttrelidAttname {
        attrelid: Nullable<Oid>;
        attname: Nullable<Cstring>;
      }

      export interface ByAttrelidAttnum {
        attrelid: Nullable<Oid>;
        attnum: Nullable<Int2>;
      }
    }

    export namespace PgProc {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPronameProargtypesPronamespace {
        proname: Nullable<Cstring>;
        proargtypes: Nullable<Oidvector>;
        pronamespace: Nullable<Oid>;
      }
    }

    export namespace PgClass {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRelnameRelnamespace {
        relname: Nullable<Cstring>;
        relnamespace: Nullable<Oid>;
      }

      export interface ByReltablespaceRelfilenode {
        reltablespace: Nullable<Oid>;
        relfilenode: Nullable<Oid>;
      }
    }

    export namespace PgAttrdef {
      export interface ByAdrelidAdnum {
        adrelid: Nullable<Oid>;
        adnum: Nullable<Int2>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgConstraint {
      export interface ByConnameConnamespace {
        conname: Nullable<Cstring>;
        connamespace: Nullable<Oid>;
      }

      export interface ByConparentid {
        conparentid: Nullable<Oid>;
      }

      export interface ByConrelidContypidConname {
        conrelid: Nullable<Oid>;
        contypid: Nullable<Oid>;
        conname: Nullable<Cstring>;
      }

      export interface ByContypid {
        contypid: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgInherits {
      export interface ByInhparent {
        inhparent: Nullable<Oid>;
      }

      export interface ByInhrelidInhseqno {
        inhrelid: Nullable<Oid>;
        inhseqno: Nullable<Int4>;
      }
    }

    export namespace PgIndex {
      export interface ByIndexrelid {
        indexrelid: Nullable<Oid>;
      }

      export interface ByIndrelid {
        indrelid: Nullable<Oid>;
      }
    }

    export namespace PgOperator {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOprnameOprleftOprrightOprnamespace {
        oprname: Nullable<Cstring>;
        oprleft: Nullable<Oid>;
        oprright: Nullable<Oid>;
        oprnamespace: Nullable<Oid>;
      }
    }

    export namespace PgOpfamily {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOpfmethodOpfnameOpfnamespace {
        opfmethod: Nullable<Oid>;
        opfname: Nullable<Cstring>;
        opfnamespace: Nullable<Oid>;
      }
    }

    export namespace PgOpclass {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByOpcmethodOpcnameOpcnamespace {
        opcmethod: Nullable<Oid>;
        opcname: Nullable<Cstring>;
        opcnamespace: Nullable<Oid>;
      }
    }

    export namespace PgAm {
      export interface ByAmname {
        amname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAmop {
      export interface ByAmopfamilyAmoplefttypeAmoprighttypeAmopstrategy {
        amopfamily: Nullable<Oid>;
        amoplefttype: Nullable<Oid>;
        amoprighttype: Nullable<Oid>;
        amopstrategy: Nullable<Int2>;
      }

      export interface ByAmopoprAmoppurposeAmopfamily {
        amopopr: Nullable<Oid>;
        amoppurpose: Nullable<Char>;
        amopfamily: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAmproc {
      export interface ByAmprocfamilyAmproclefttypeAmprocrighttypeAmprocnum {
        amprocfamily: Nullable<Oid>;
        amproclefttype: Nullable<Oid>;
        amprocrighttype: Nullable<Oid>;
        amprocnum: Nullable<Int2>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgLanguage {
      export interface ByLanname {
        lanname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgLargeobjectMetadata {
      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgAggregate {
      export interface ByAggfnoid {
        aggfnoid: Nullable<Regproc>;
      }
    }

    export namespace PgStatisticExt {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByStxnameStxnamespace {
        stxname: Nullable<Cstring>;
        stxnamespace: Nullable<Oid>;
      }

      export interface ByStxrelid {
        stxrelid: Nullable<Oid>;
      }
    }

    export namespace PgRewrite {
      export interface ByEvClassRulename {
        evClass: Nullable<Oid>;
        rulename: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTrigger {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTgconstraint {
        tgconstraint: Nullable<Oid>;
      }

      export interface ByTgrelidTgname {
        tgrelid: Nullable<Oid>;
        tgname: Nullable<Cstring>;
      }
    }

    export namespace PgEventTrigger {
      export interface ByEvtname {
        evtname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDescription {
      export interface ByObjoidClassoidObjsubid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }
    }

    export namespace PgCast {
      export interface ByCastsourceCasttarget {
        castsource: Nullable<Oid>;
        casttarget: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgEnum {
      export interface ByEnumtypidEnumlabel {
        enumtypid: Nullable<Oid>;
        enumlabel: Nullable<Cstring>;
      }

      export interface ByEnumtypidEnumsortorder {
        enumtypid: Nullable<Oid>;
        enumsortorder: Nullable<Float4>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgNamespace {
      export interface ByNspname {
        nspname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgConversion {
      export interface ByConnameConnamespace {
        conname: Nullable<Cstring>;
        connamespace: Nullable<Oid>;
      }

      export interface ByConnamespaceConforencodingContoencodingOid {
        connamespace: Nullable<Oid>;
        conforencoding: Nullable<Int4>;
        contoencoding: Nullable<Int4>;
        oid: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDepend {
      export interface ByClassidObjidObjsubid {
        classid: Nullable<Oid>;
        objid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }

      export interface ByRefclassidRefobjidRefobjsubid {
        refclassid: Nullable<Oid>;
        refobjid: Nullable<Oid>;
        refobjsubid: Nullable<Int4>;
      }
    }

    export namespace PgDatabase {
      export interface ByDatname {
        datname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgDbRoleSetting {
      export interface BySetdatabaseSetrole {
        setdatabase: Nullable<Oid>;
        setrole: Nullable<Oid>;
      }
    }

    export namespace PgTablespace {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySpcname {
        spcname: Nullable<Cstring>;
      }
    }

    export namespace PgAuthMembers {
      export interface ByGrantor {
        grantor: Nullable<Oid>;
      }

      export interface ByMemberRoleidGrantor {
        member: Nullable<Oid>;
        roleid: Nullable<Oid>;
        grantor: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByRoleidMemberGrantor {
        roleid: Nullable<Oid>;
        member: Nullable<Oid>;
        grantor: Nullable<Oid>;
      }
    }

    export namespace PgShdepend {
      export interface ByDbidClassidObjidObjsubid {
        dbid: Nullable<Oid>;
        classid: Nullable<Oid>;
        objid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }

      export interface ByRefclassidRefobjid {
        refclassid: Nullable<Oid>;
        refobjid: Nullable<Oid>;
      }
    }

    export namespace PgShdescription {
      export interface ByObjoidClassoid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
      }
    }

    export namespace PgTsConfig {
      export interface ByCfgnameCfgnamespace {
        cfgname: Nullable<Cstring>;
        cfgnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTsConfigMap {
      export interface ByMapcfgMaptokentypeMapseqno {
        mapcfg: Nullable<Oid>;
        maptokentype: Nullable<Int4>;
        mapseqno: Nullable<Int4>;
      }
    }

    export namespace PgTsDict {
      export interface ByDictnameDictnamespace {
        dictname: Nullable<Cstring>;
        dictnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgTsParser {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPrsnamePrsnamespace {
        prsname: Nullable<Cstring>;
        prsnamespace: Nullable<Oid>;
      }
    }

    export namespace PgTsTemplate {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTmplnameTmplnamespace {
        tmplname: Nullable<Cstring>;
        tmplnamespace: Nullable<Oid>;
      }
    }

    export namespace PgExtension {
      export interface ByExtname {
        extname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgForeignDataWrapper {
      export interface ByFdwname {
        fdwname: Nullable<Cstring>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgForeignServer {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface BySrvname {
        srvname: Nullable<Cstring>;
      }
    }

    export namespace PgPolicy {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPolrelidPolname {
        polrelid: Nullable<Oid>;
        polname: Nullable<Cstring>;
      }
    }

    export namespace PgReplicationOrigin {
      export interface ByRoident {
        roident: Nullable<Oid>;
      }

      export interface ByRoname {
        roname: Nullable<Text>;
      }
    }

    export namespace PgDefaultAcl {
      export interface ByDefaclroleDefaclnamespaceDefaclobjtype {
        defaclrole: Nullable<Oid>;
        defaclnamespace: Nullable<Oid>;
        defaclobjtype: Nullable<Char>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgInitPrivs {
      export interface ByObjoidClassoidObjsubid {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
      }
    }

    export namespace PgSeclabel {
      export interface ByObjoidClassoidObjsubidProvider {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        objsubid: Nullable<Int4>;
        provider: Nullable<Text>;
      }
    }

    export namespace PgShseclabel {
      export interface ByObjoidClassoidProvider {
        objoid: Nullable<Oid>;
        classoid: Nullable<Oid>;
        provider: Nullable<Text>;
      }
    }

    export namespace PgCollation {
      export interface ByCollnameCollencodingCollnamespace {
        collname: Nullable<Cstring>;
        collencoding: Nullable<Int4>;
        collnamespace: Nullable<Oid>;
      }

      export interface ByOid {
        oid: Nullable<Oid>;
      }
    }

    export namespace PgParameterAcl {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByParname {
        parname: Nullable<Text>;
      }
    }

    export namespace PgPartitionedTable {
      export interface ByPartrelid {
        partrelid: Nullable<Oid>;
      }
    }

    export namespace PgRange {
      export interface ByRngmultitypid {
        rngmultitypid: Nullable<Oid>;
      }

      export interface ByRngtypid {
        rngtypid: Nullable<Oid>;
      }
    }

    export namespace PgTransform {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByTrftypeTrflang {
        trftype: Nullable<Oid>;
        trflang: Nullable<Oid>;
      }
    }

    export namespace PgSequence {
      export interface BySeqrelid {
        seqrelid: Nullable<Oid>;
      }
    }

    export namespace PgPublication {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPubname {
        pubname: Nullable<Cstring>;
      }
    }

    export namespace PgPublicationNamespace {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPnnspidPnpubid {
        pnnspid: Nullable<Oid>;
        pnpubid: Nullable<Oid>;
      }
    }

    export namespace PgPublicationRel {
      export interface ByOid {
        oid: Nullable<Oid>;
      }

      export interface ByPrpubid {
        prpubid: Nullable<Oid>;
      }

      export interface ByPrrelidPrpubid {
        prrelid: Nullable<Oid>;
        prpubid: Nullable<Oid>;
      }
    }

    export namespace PgSubscriptionRel {
      export interface BySrrelidSrsubid {
        srrelid: Nullable<Oid>;
        srsubid: Nullable<Oid>;
      }
    }

    export namespace PgLargeobject {
      export interface ByLoidPageno {
        loid: Nullable<Oid>;
        pageno: Nullable<Int4>;
      }
    }
  }
}

export namespace Public {
  export type ActorArray = Array<Actor>;

  export type ActorInfoArray = Array<ActorInfo>;

  export type AddressArray = Array<Address>;

  export type CategoryArray = Array<Category>;

  export type CityArray = Array<City>;

  export type CountryArray = Array<Country>;

  export type CustomerArray = Array<Customer>;

  export type CustomerListArray = Array<CustomerList>;

  export type FilmArray = Array<Film>;

  export type FilmActorArray = Array<FilmActor>;

  export type FilmCategoryArray = Array<FilmCategory>;

  export type FilmListArray = Array<FilmList>;

  export type InventoryArray = Array<Inventory>;

  export type LanguageArray = Array<Language>;

  export type MpaaRatingArray = Array<MpaaRating>;

  export type NicerButSlowerFilmListArray = Array<NicerButSlowerFilmList>;

  export type PaymentArray = Array<Payment>;

  export type RentalArray = Array<Rental>;

  export type SalesByFilmCategoryArray = Array<SalesByFilmCategory>;

  export type SalesByStoreArray = Array<SalesByStore>;

  export type StaffArray = Array<Staff>;

  export type StaffListArray = Array<StaffList>;

  export type StoreArray = Array<Store>;

  export type YearArray = Array<Year>;

  export interface Actor {
    actorId?: PgCatalog.Int4;
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface ActorNotPrimaryKey {
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesActorPrimaryKey(
    value: Partial<Actor>,
  ): value is Actor {
    return value.actorId !== undefined;
  }

  export interface ActorInfo {
    actorId?: Nullable<PgCatalog.Int4>;
    firstName?: Nullable<PgCatalog.Varchar>;
    lastName?: Nullable<PgCatalog.Varchar>;
    filmInfo?: Nullable<PgCatalog.Text>;
  }

  export interface Address {
    addressId?: PgCatalog.Int4;
    address: PgCatalog.Varchar;
    address2?: Nullable<PgCatalog.Varchar>;
    district: PgCatalog.Varchar;
    cityId: PgCatalog.Int2;
    postalCode?: Nullable<PgCatalog.Varchar>;
    phone: PgCatalog.Varchar;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface AddressNotPrimaryKey {
    address: PgCatalog.Varchar;
    address2?: Nullable<PgCatalog.Varchar>;
    district: PgCatalog.Varchar;
    cityId: PgCatalog.Int2;
    postalCode?: Nullable<PgCatalog.Varchar>;
    phone: PgCatalog.Varchar;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesAddressPrimaryKey(
    value: Partial<Address>,
  ): value is Address {
    return value.addressId !== undefined;
  }

  export interface Category {
    categoryId?: PgCatalog.Int4;
    name: PgCatalog.Varchar;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface CategoryNotPrimaryKey {
    name: PgCatalog.Varchar;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesCategoryPrimaryKey(
    value: Partial<Category>,
  ): value is Category {
    return value.categoryId !== undefined;
  }

  export interface City {
    cityId?: PgCatalog.Int4;
    city: PgCatalog.Varchar;
    countryId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface CityNotPrimaryKey {
    city: PgCatalog.Varchar;
    countryId: PgCatalog.Int2;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesCityPrimaryKey(value: Partial<City>): value is City {
    return value.cityId !== undefined;
  }

  export interface Country {
    countryId?: PgCatalog.Int4;
    country: PgCatalog.Varchar;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface CountryNotPrimaryKey {
    country: PgCatalog.Varchar;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesCountryPrimaryKey(
    value: Partial<Country>,
  ): value is Country {
    return value.countryId !== undefined;
  }

  export interface Customer {
    customerId?: PgCatalog.Int4;
    storeId: PgCatalog.Int2;
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    email?: Nullable<PgCatalog.Varchar>;
    addressId: PgCatalog.Int2;
    activebool?: PgCatalog.Bool;
    createDate?: PgCatalog.Date;
    lastUpdate?: Nullable<PgCatalog.Timestamp>;
    active?: Nullable<PgCatalog.Int4>;
  }

  export interface CustomerNotPrimaryKey {
    storeId: PgCatalog.Int2;
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    email?: Nullable<PgCatalog.Varchar>;
    addressId: PgCatalog.Int2;
    activebool: PgCatalog.Bool;
    createDate: PgCatalog.Date;
    lastUpdate?: Nullable<PgCatalog.Timestamp>;
    active?: Nullable<PgCatalog.Int4>;
  }

  export function includesCustomerPrimaryKey(
    value: Partial<Customer>,
  ): value is Customer {
    return value.customerId !== undefined;
  }

  export interface CustomerList {
    id?: Nullable<PgCatalog.Int4>;
    name?: Nullable<PgCatalog.Text>;
    address?: Nullable<PgCatalog.Varchar>;
    zipCode?: Nullable<PgCatalog.Varchar>;
    phone?: Nullable<PgCatalog.Varchar>;
    city?: Nullable<PgCatalog.Varchar>;
    country?: Nullable<PgCatalog.Varchar>;
    notes?: Nullable<PgCatalog.Text>;
    sid?: Nullable<PgCatalog.Int2>;
  }

  export interface Film {
    filmId?: PgCatalog.Int4;
    title: PgCatalog.Varchar;
    description?: Nullable<PgCatalog.Text>;
    releaseYear?: Nullable<Year>;
    languageId: PgCatalog.Int2;
    rentalDuration?: PgCatalog.Int2;
    rentalRate?: PgCatalog.Numeric;
    length?: Nullable<PgCatalog.Int2>;
    replacementCost?: PgCatalog.Numeric;
    rating?: Nullable<MpaaRating>;
    lastUpdate?: PgCatalog.Timestamp;
    specialFeatures?: Nullable<PgCatalog.TextArray>;
    fulltext: PgCatalog.Tsvector;
  }

  export interface FilmNotPrimaryKey {
    title: PgCatalog.Varchar;
    description?: Nullable<PgCatalog.Text>;
    releaseYear?: Nullable<Year>;
    languageId: PgCatalog.Int2;
    rentalDuration: PgCatalog.Int2;
    rentalRate: PgCatalog.Numeric;
    length?: Nullable<PgCatalog.Int2>;
    replacementCost: PgCatalog.Numeric;
    rating?: Nullable<MpaaRating>;
    lastUpdate: PgCatalog.Timestamp;
    specialFeatures?: Nullable<PgCatalog.TextArray>;
    fulltext: PgCatalog.Tsvector;
  }

  export function includesFilmPrimaryKey(value: Partial<Film>): value is Film {
    return value.filmId !== undefined;
  }

  export interface FilmActor {
    actorId: PgCatalog.Int2;
    filmId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface FilmActorNotPrimaryKey {
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesFilmActorPrimaryKey(
    value: Partial<FilmActor>,
  ): value is FilmActor {
    return value.actorId !== undefined && value.filmId !== undefined;
  }

  export interface FilmCategory {
    filmId: PgCatalog.Int2;
    categoryId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface FilmCategoryNotPrimaryKey {
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesFilmCategoryPrimaryKey(
    value: Partial<FilmCategory>,
  ): value is FilmCategory {
    return value.filmId !== undefined && value.categoryId !== undefined;
  }

  export interface FilmList {
    fid?: Nullable<PgCatalog.Int4>;
    title?: Nullable<PgCatalog.Varchar>;
    description?: Nullable<PgCatalog.Text>;
    category?: Nullable<PgCatalog.Varchar>;
    price?: Nullable<PgCatalog.Numeric>;
    length?: Nullable<PgCatalog.Int2>;
    rating?: Nullable<MpaaRating>;
    actors?: Nullable<PgCatalog.Text>;
  }

  export interface Inventory {
    inventoryId?: PgCatalog.Int4;
    filmId: PgCatalog.Int2;
    storeId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface InventoryNotPrimaryKey {
    filmId: PgCatalog.Int2;
    storeId: PgCatalog.Int2;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesInventoryPrimaryKey(
    value: Partial<Inventory>,
  ): value is Inventory {
    return value.inventoryId !== undefined;
  }

  export interface Language {
    languageId?: PgCatalog.Int4;
    name: PgCatalog.Bpchar;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface LanguageNotPrimaryKey {
    name: PgCatalog.Bpchar;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesLanguagePrimaryKey(
    value: Partial<Language>,
  ): value is Language {
    return value.languageId !== undefined;
  }

  export enum MpaaRating {
    G = "G",
    PG = "PG",
    PG_13 = "PG-13",
    R = "R",
    NC_17 = "NC-17",
  }

  export interface NicerButSlowerFilmList {
    fid?: Nullable<PgCatalog.Int4>;
    title?: Nullable<PgCatalog.Varchar>;
    description?: Nullable<PgCatalog.Text>;
    category?: Nullable<PgCatalog.Varchar>;
    price?: Nullable<PgCatalog.Numeric>;
    length?: Nullable<PgCatalog.Int2>;
    rating?: Nullable<MpaaRating>;
    actors?: Nullable<PgCatalog.Text>;
  }

  export interface Payment {
    paymentId?: PgCatalog.Int4;
    customerId: PgCatalog.Int2;
    staffId: PgCatalog.Int2;
    rentalId: PgCatalog.Int4;
    amount: PgCatalog.Numeric;
    paymentDate: PgCatalog.Timestamp;
  }

  export interface PaymentNotPrimaryKey {
    customerId: PgCatalog.Int2;
    staffId: PgCatalog.Int2;
    rentalId: PgCatalog.Int4;
    amount: PgCatalog.Numeric;
    paymentDate: PgCatalog.Timestamp;
  }

  export function includesPaymentPrimaryKey(
    value: Partial<Payment>,
  ): value is Payment {
    return value.paymentId !== undefined;
  }

  export interface Rental {
    rentalId?: PgCatalog.Int4;
    rentalDate: PgCatalog.Timestamp;
    inventoryId: PgCatalog.Int4;
    customerId: PgCatalog.Int2;
    returnDate?: Nullable<PgCatalog.Timestamp>;
    staffId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface RentalNotPrimaryKey {
    rentalDate: PgCatalog.Timestamp;
    inventoryId: PgCatalog.Int4;
    customerId: PgCatalog.Int2;
    returnDate?: Nullable<PgCatalog.Timestamp>;
    staffId: PgCatalog.Int2;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesRentalPrimaryKey(
    value: Partial<Rental>,
  ): value is Rental {
    return value.rentalId !== undefined;
  }

  export interface SalesByFilmCategory {
    category?: Nullable<PgCatalog.Varchar>;
    totalSales?: Nullable<PgCatalog.Numeric>;
  }

  export interface SalesByStore {
    store?: Nullable<PgCatalog.Text>;
    manager?: Nullable<PgCatalog.Text>;
    totalSales?: Nullable<PgCatalog.Numeric>;
  }

  export interface Staff {
    staffId?: PgCatalog.Int4;
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    addressId: PgCatalog.Int2;
    email?: Nullable<PgCatalog.Varchar>;
    storeId: PgCatalog.Int2;
    active?: PgCatalog.Bool;
    username: PgCatalog.Varchar;
    password?: Nullable<PgCatalog.Varchar>;
    lastUpdate?: PgCatalog.Timestamp;
    picture?: Nullable<PgCatalog.Bytea>;
  }

  export interface StaffNotPrimaryKey {
    firstName: PgCatalog.Varchar;
    lastName: PgCatalog.Varchar;
    addressId: PgCatalog.Int2;
    email?: Nullable<PgCatalog.Varchar>;
    storeId: PgCatalog.Int2;
    active: PgCatalog.Bool;
    username: PgCatalog.Varchar;
    password?: Nullable<PgCatalog.Varchar>;
    lastUpdate: PgCatalog.Timestamp;
    picture?: Nullable<PgCatalog.Bytea>;
  }

  export function includesStaffPrimaryKey(
    value: Partial<Staff>,
  ): value is Staff {
    return value.staffId !== undefined;
  }

  export interface StaffList {
    id?: Nullable<PgCatalog.Int4>;
    name?: Nullable<PgCatalog.Text>;
    address?: Nullable<PgCatalog.Varchar>;
    zipCode?: Nullable<PgCatalog.Varchar>;
    phone?: Nullable<PgCatalog.Varchar>;
    city?: Nullable<PgCatalog.Varchar>;
    country?: Nullable<PgCatalog.Varchar>;
    sid?: Nullable<PgCatalog.Int2>;
  }

  export interface Store {
    storeId?: PgCatalog.Int4;
    managerStaffId: PgCatalog.Int2;
    addressId: PgCatalog.Int2;
    lastUpdate?: PgCatalog.Timestamp;
  }

  export interface StoreNotPrimaryKey {
    managerStaffId: PgCatalog.Int2;
    addressId: PgCatalog.Int2;
    lastUpdate: PgCatalog.Timestamp;
  }

  export function includesStorePrimaryKey(
    value: Partial<Store>,
  ): value is Store {
    return value.storeId !== undefined;
  }

  export type Year = PgCatalog.Int4;

  export interface FilmInStockArguments {
    pFilmId: Nullable<PgCatalog.Int4>;
    pStoreId: Nullable<PgCatalog.Int4>;
  }

  interface FilmInStockResponseRecord {
    pFilmCount: PgCatalog.Int4;
  }
  export type FilmInStockSingleResultsetRecord = FilmInStockResponseRecord;

  export type FilmInStockResultset = FilmInStockSingleResultsetRecord[];

  export interface FilmNotInStockArguments {
    pFilmId: Nullable<PgCatalog.Int4>;
    pStoreId: Nullable<PgCatalog.Int4>;
  }

  interface FilmNotInStockResponseRecord {
    pFilmCount: PgCatalog.Int4;
  }
  export type FilmNotInStockSingleResultsetRecord =
    FilmNotInStockResponseRecord;

  export type FilmNotInStockResultset = FilmNotInStockSingleResultsetRecord[];

  export interface GetCustomerBalanceArguments {
    pCustomerId: Nullable<PgCatalog.Int4>;
    pEffectiveDate: Nullable<PgCatalog.Timestamp>;
  }

  export type GetCustomerBalanceSingleResultsetRecord = PgCatalog.Numeric;

  export type GetCustomerBalanceResultset =
    GetCustomerBalanceSingleResultsetRecord[];

  export interface InventoryHeldByCustomerArguments {
    pInventoryId: Nullable<PgCatalog.Int4>;
  }

  export type InventoryHeldByCustomerSingleResultsetRecord = PgCatalog.Int4;

  export type InventoryHeldByCustomerResultset =
    InventoryHeldByCustomerSingleResultsetRecord[];

  export interface InventoryInStockArguments {
    pInventoryId: Nullable<PgCatalog.Int4>;
  }

  export type InventoryInStockSingleResultsetRecord = PgCatalog.Bool;

  export type InventoryInStockResultset =
    InventoryInStockSingleResultsetRecord[];

  export interface LastDayArguments {
    _0: Nullable<PgCatalog.Timestamp>;
  }

  export type LastDaySingleResultsetRecord = PgCatalog.Date;

  export type LastDayResultset = LastDaySingleResultsetRecord[];

  export interface RewardsReportArguments {
    minMonthlyPurchases: Nullable<PgCatalog.Int4>;
    minDollarAmountPurchased: Nullable<PgCatalog.Numeric>;
  }

  export type RewardsReportSingleResultsetRecord = Customer;

  export type RewardsReportResultset = RewardsReportSingleResultsetRecord[];

  export namespace Tables {
    export namespace FilmActor {
      export interface ByActorIdFilmId {
        actorId: Nullable<PgCatalog.Int2>;
        filmId: Nullable<PgCatalog.Int2>;
      }

      export interface ByFilmId {
        filmId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Address {
      export interface ByAddressId {
        addressId: Nullable<PgCatalog.Int4>;
      }

      export interface ByCityId {
        cityId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace City {
      export interface ByCityId {
        cityId: Nullable<PgCatalog.Int4>;
      }

      export interface ByCountryId {
        countryId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Customer {
      export interface ByAddressId {
        addressId: Nullable<PgCatalog.Int2>;
      }

      export interface ByCustomerId {
        customerId: Nullable<PgCatalog.Int4>;
      }

      export interface ByLastName {
        lastName: Nullable<PgCatalog.Varchar>;
      }

      export interface ByStoreId {
        storeId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Actor {
      export interface ByActorId {
        actorId: Nullable<PgCatalog.Int4>;
      }

      export interface ByLastName {
        lastName: Nullable<PgCatalog.Varchar>;
      }
    }

    export namespace FilmCategory {
      export interface ByFilmIdCategoryId {
        filmId: Nullable<PgCatalog.Int2>;
        categoryId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Inventory {
      export interface ByInventoryId {
        inventoryId: Nullable<PgCatalog.Int4>;
      }

      export interface ByStoreIdFilmId {
        storeId: Nullable<PgCatalog.Int2>;
        filmId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Category {
      export interface ByCategoryId {
        categoryId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Country {
      export interface ByCountryId {
        countryId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Language {
      export interface ByLanguageId {
        languageId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Rental {
      export interface ByInventoryId {
        inventoryId: Nullable<PgCatalog.Int4>;
      }

      export interface ByRentalDateInventoryIdCustomerId {
        rentalDate: Nullable<PgCatalog.Timestamp>;
        inventoryId: Nullable<PgCatalog.Int4>;
        customerId: Nullable<PgCatalog.Int2>;
      }

      export interface ByRentalId {
        rentalId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Staff {
      export interface ByStaffId {
        staffId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Store {
      export interface ByManagerStaffId {
        managerStaffId: Nullable<PgCatalog.Int2>;
      }

      export interface ByStoreId {
        storeId: Nullable<PgCatalog.Int4>;
      }
    }

    export namespace Payment {
      export interface ByCustomerId {
        customerId: Nullable<PgCatalog.Int2>;
      }

      export interface ByPaymentId {
        paymentId: Nullable<PgCatalog.Int4>;
      }

      export interface ByRentalId {
        rentalId: Nullable<PgCatalog.Int4>;
      }

      export interface ByStaffId {
        staffId: Nullable<PgCatalog.Int2>;
      }
    }

    export namespace Film {
      export interface ByFilmId {
        filmId: Nullable<PgCatalog.Int4>;
      }

      export interface ByFulltext {
        fulltext: Nullable<PgCatalog.Gtsvector>;
      }

      export interface ByLanguageId {
        languageId: Nullable<PgCatalog.Int2>;
      }

      export interface ByTitle {
        title: Nullable<PgCatalog.Varchar>;
      }
    }
  }
}

export namespace InformationSchema {
  export type AdministrableRoleAuthorizationsArray =
    Array<AdministrableRoleAuthorizations>;

  export type ApplicableRolesArray = Array<ApplicableRoles>;

  export type AttributesArray = Array<Attributes>;

  export type CardinalNumberArray = Array<CardinalNumber>;

  export type CharacterDataArray = Array<CharacterData>;

  export type CharacterSetsArray = Array<CharacterSets>;

  export type CheckConstraintRoutineUsageArray =
    Array<CheckConstraintRoutineUsage>;

  export type CheckConstraintsArray = Array<CheckConstraints>;

  export type CollationCharacterSetApplicabilityArray =
    Array<CollationCharacterSetApplicability>;

  export type CollationsArray = Array<Collations>;

  export type ColumnColumnUsageArray = Array<ColumnColumnUsage>;

  export type ColumnDomainUsageArray = Array<ColumnDomainUsage>;

  export type ColumnOptionsArray = Array<ColumnOptions>;

  export type ColumnPrivilegesArray = Array<ColumnPrivileges>;

  export type ColumnUdtUsageArray = Array<ColumnUdtUsage>;

  export type ColumnsArray = Array<Columns>;

  export type ConstraintColumnUsageArray = Array<ConstraintColumnUsage>;

  export type ConstraintTableUsageArray = Array<ConstraintTableUsage>;

  export type DataTypePrivilegesArray = Array<DataTypePrivileges>;

  export type DomainConstraintsArray = Array<DomainConstraints>;

  export type DomainUdtUsageArray = Array<DomainUdtUsage>;

  export type DomainsArray = Array<Domains>;

  export type ElementTypesArray = Array<ElementTypes>;

  export type EnabledRolesArray = Array<EnabledRoles>;

  export type ForeignDataWrapperOptionsArray = Array<ForeignDataWrapperOptions>;

  export type ForeignDataWrappersArray = Array<ForeignDataWrappers>;

  export type ForeignServerOptionsArray = Array<ForeignServerOptions>;

  export type ForeignServersArray = Array<ForeignServers>;

  export type ForeignTableOptionsArray = Array<ForeignTableOptions>;

  export type ForeignTablesArray = Array<ForeignTables>;

  export type InformationSchemaCatalogNameArray =
    Array<InformationSchemaCatalogName>;

  export type KeyColumnUsageArray = Array<KeyColumnUsage>;

  export type ParametersArray = Array<Parameters>;

  export interface PgForeignDataWrappers {
    oid?: Nullable<PgCatalog.Oid>;
    fdwowner?: Nullable<PgCatalog.Oid>;
    fdwoptions?: Nullable<PgCatalog.TextArray>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignDataWrapperLanguage?: Nullable<CharacterData>;
  }

  export interface PgForeignServers {
    oid?: Nullable<PgCatalog.Oid>;
    srvoptions?: Nullable<PgCatalog.TextArray>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    foreignServerType?: Nullable<CharacterData>;
    foreignServerVersion?: Nullable<CharacterData>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface PgForeignTableColumns {
    nspname?: Nullable<PgCatalog.Name>;
    relname?: Nullable<PgCatalog.Name>;
    attname?: Nullable<PgCatalog.Name>;
    attfdwoptions?: Nullable<PgCatalog.TextArray>;
  }

  export interface PgForeignTables {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    ftoptions?: Nullable<PgCatalog.TextArray>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface PgUserMappings {
    oid?: Nullable<PgCatalog.Oid>;
    umoptions?: Nullable<PgCatalog.TextArray>;
    umuser?: Nullable<PgCatalog.Oid>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    srvowner?: Nullable<SqlIdentifier>;
  }

  export type ReferentialConstraintsArray = Array<ReferentialConstraints>;

  export type RoleColumnGrantsArray = Array<RoleColumnGrants>;

  export type RoleRoutineGrantsArray = Array<RoleRoutineGrants>;

  export type RoleTableGrantsArray = Array<RoleTableGrants>;

  export type RoleUdtGrantsArray = Array<RoleUdtGrants>;

  export type RoleUsageGrantsArray = Array<RoleUsageGrants>;

  export type RoutineColumnUsageArray = Array<RoutineColumnUsage>;

  export type RoutinePrivilegesArray = Array<RoutinePrivileges>;

  export type RoutineRoutineUsageArray = Array<RoutineRoutineUsage>;

  export type RoutineSequenceUsageArray = Array<RoutineSequenceUsage>;

  export type RoutineTableUsageArray = Array<RoutineTableUsage>;

  export type RoutinesArray = Array<Routines>;

  export type SchemataArray = Array<Schemata>;

  export type SequencesArray = Array<Sequences>;

  export type SqlFeaturesArray = Array<SqlFeatures>;

  export type SqlIdentifierArray = Array<SqlIdentifier>;

  export type SqlImplementationInfoArray = Array<SqlImplementationInfo>;

  export type SqlPartsArray = Array<SqlParts>;

  export type SqlSizingArray = Array<SqlSizing>;

  export type TableConstraintsArray = Array<TableConstraints>;

  export type TablePrivilegesArray = Array<TablePrivileges>;

  export type TablesArray = Array<Tables>;

  export type TimeStampArray = Array<TimeStamp>;

  export type TransformsArray = Array<Transforms>;

  export type TriggeredUpdateColumnsArray = Array<TriggeredUpdateColumns>;

  export type TriggersArray = Array<Triggers>;

  export type UdtPrivilegesArray = Array<UdtPrivileges>;

  export type UsagePrivilegesArray = Array<UsagePrivileges>;

  export type UserDefinedTypesArray = Array<UserDefinedTypes>;

  export type UserMappingOptionsArray = Array<UserMappingOptions>;

  export type UserMappingsArray = Array<UserMappings>;

  export type ViewColumnUsageArray = Array<ViewColumnUsage>;

  export type ViewRoutineUsageArray = Array<ViewRoutineUsage>;

  export type ViewTableUsageArray = Array<ViewTableUsage>;

  export type ViewsArray = Array<Views>;

  export type YesOrNoArray = Array<YesOrNo>;

  export interface AdministrableRoleAuthorizations {
    grantee?: Nullable<SqlIdentifier>;
    roleName?: Nullable<SqlIdentifier>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface ApplicableRoles {
    grantee?: Nullable<SqlIdentifier>;
    roleName?: Nullable<SqlIdentifier>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface Attributes {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    attributeName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    attributeDefault?: Nullable<CharacterData>;
    isNullable?: Nullable<YesOrNo>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    attributeUdtCatalog?: Nullable<SqlIdentifier>;
    attributeUdtSchema?: Nullable<SqlIdentifier>;
    attributeUdtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    isDerivedReferenceAttribute?: Nullable<YesOrNo>;
  }

  export type CardinalNumber = PgCatalog.Int4;

  export type CharacterData = PgCatalog.Varchar;

  export interface CharacterSets {
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    characterRepertoire?: Nullable<SqlIdentifier>;
    formOfUse?: Nullable<SqlIdentifier>;
    defaultCollateCatalog?: Nullable<SqlIdentifier>;
    defaultCollateSchema?: Nullable<SqlIdentifier>;
    defaultCollateName?: Nullable<SqlIdentifier>;
  }

  export interface CheckConstraintRoutineUsage {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
  }

  export interface CheckConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    checkClause?: Nullable<CharacterData>;
  }

  export interface CollationCharacterSetApplicability {
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
  }

  export interface Collations {
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    padAttribute?: Nullable<CharacterData>;
  }

  export interface ColumnColumnUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    dependentColumn?: Nullable<SqlIdentifier>;
  }

  export interface ColumnDomainUsage {
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface ColumnOptions {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ColumnPrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface ColumnUdtUsage {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface Columns {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    columnDefault?: Nullable<CharacterData>;
    isNullable?: Nullable<YesOrNo>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    isSelfReferencing?: Nullable<YesOrNo>;
    isIdentity?: Nullable<YesOrNo>;
    identityGeneration?: Nullable<CharacterData>;
    identityStart?: Nullable<CharacterData>;
    identityIncrement?: Nullable<CharacterData>;
    identityMaximum?: Nullable<CharacterData>;
    identityMinimum?: Nullable<CharacterData>;
    identityCycle?: Nullable<YesOrNo>;
    isGenerated?: Nullable<CharacterData>;
    generationExpression?: Nullable<CharacterData>;
    isUpdatable?: Nullable<YesOrNo>;
  }

  export interface ConstraintColumnUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
  }

  export interface ConstraintTableUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
  }

  export interface DataTypePrivileges {
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface DomainConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    isDeferrable?: Nullable<YesOrNo>;
    initiallyDeferred?: Nullable<YesOrNo>;
  }

  export interface DomainUdtUsage {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
  }

  export interface Domains {
    domainCatalog?: Nullable<SqlIdentifier>;
    domainSchema?: Nullable<SqlIdentifier>;
    domainName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    domainDefault?: Nullable<CharacterData>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface ElementTypes {
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    collectionTypeIdentifier?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    domainDefault?: Nullable<CharacterData>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface EnabledRoles {
    roleName?: Nullable<SqlIdentifier>;
  }

  export interface ForeignDataWrapperOptions {
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignDataWrappers {
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    libraryName?: Nullable<CharacterData>;
    foreignDataWrapperLanguage?: Nullable<CharacterData>;
  }

  export interface ForeignServerOptions {
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignServers {
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    foreignDataWrapperCatalog?: Nullable<SqlIdentifier>;
    foreignDataWrapperName?: Nullable<SqlIdentifier>;
    foreignServerType?: Nullable<CharacterData>;
    foreignServerVersion?: Nullable<CharacterData>;
    authorizationIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface ForeignTableOptions {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface ForeignTables {
    foreignTableCatalog?: Nullable<SqlIdentifier>;
    foreignTableSchema?: Nullable<SqlIdentifier>;
    foreignTableName?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
  }

  export interface InformationSchemaCatalogName {
    catalogName?: Nullable<SqlIdentifier>;
  }

  export interface KeyColumnUsage {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    positionInUniqueConstraint?: Nullable<CardinalNumber>;
  }

  export interface Parameters {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    ordinalPosition?: Nullable<CardinalNumber>;
    parameterMode?: Nullable<CharacterData>;
    isResult?: Nullable<YesOrNo>;
    asLocator?: Nullable<YesOrNo>;
    parameterName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    parameterDefault?: Nullable<CharacterData>;
  }

  export interface ReferentialConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    uniqueConstraintCatalog?: Nullable<SqlIdentifier>;
    uniqueConstraintSchema?: Nullable<SqlIdentifier>;
    uniqueConstraintName?: Nullable<SqlIdentifier>;
    matchOption?: Nullable<CharacterData>;
    updateRule?: Nullable<CharacterData>;
    deleteRule?: Nullable<CharacterData>;
  }

  export interface RoleColumnGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleRoutineGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleTableGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
    withHierarchy?: Nullable<YesOrNo>;
  }

  export interface RoleUdtGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoleUsageGrants {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoutineColumnUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface RoutinePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface RoutineRoutineUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
  }

  export interface RoutineSequenceUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    sequenceCatalog?: Nullable<SqlIdentifier>;
    sequenceSchema?: Nullable<SqlIdentifier>;
    sequenceName?: Nullable<SqlIdentifier>;
  }

  export interface RoutineTableUsage {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
  }

  export interface Routines {
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    routineCatalog?: Nullable<SqlIdentifier>;
    routineSchema?: Nullable<SqlIdentifier>;
    routineName?: Nullable<SqlIdentifier>;
    routineType?: Nullable<CharacterData>;
    moduleCatalog?: Nullable<SqlIdentifier>;
    moduleSchema?: Nullable<SqlIdentifier>;
    moduleName?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    typeUdtCatalog?: Nullable<SqlIdentifier>;
    typeUdtSchema?: Nullable<SqlIdentifier>;
    typeUdtName?: Nullable<SqlIdentifier>;
    scopeCatalog?: Nullable<SqlIdentifier>;
    scopeSchema?: Nullable<SqlIdentifier>;
    scopeName?: Nullable<SqlIdentifier>;
    maximumCardinality?: Nullable<CardinalNumber>;
    dtdIdentifier?: Nullable<SqlIdentifier>;
    routineBody?: Nullable<CharacterData>;
    routineDefinition?: Nullable<CharacterData>;
    externalName?: Nullable<CharacterData>;
    externalLanguage?: Nullable<CharacterData>;
    parameterStyle?: Nullable<CharacterData>;
    isDeterministic?: Nullable<YesOrNo>;
    sqlDataAccess?: Nullable<CharacterData>;
    isNullCall?: Nullable<YesOrNo>;
    sqlPath?: Nullable<CharacterData>;
    schemaLevelRoutine?: Nullable<YesOrNo>;
    maxDynamicResultSets?: Nullable<CardinalNumber>;
    isUserDefinedCast?: Nullable<YesOrNo>;
    isImplicitlyInvocable?: Nullable<YesOrNo>;
    securityType?: Nullable<CharacterData>;
    toSqlSpecificCatalog?: Nullable<SqlIdentifier>;
    toSqlSpecificSchema?: Nullable<SqlIdentifier>;
    toSqlSpecificName?: Nullable<SqlIdentifier>;
    asLocator?: Nullable<YesOrNo>;
    created?: Nullable<TimeStamp>;
    lastAltered?: Nullable<TimeStamp>;
    newSavepointLevel?: Nullable<YesOrNo>;
    isUdtDependent?: Nullable<YesOrNo>;
    resultCastFromDataType?: Nullable<CharacterData>;
    resultCastAsLocator?: Nullable<YesOrNo>;
    resultCastCharMaxLength?: Nullable<CardinalNumber>;
    resultCastCharOctetLength?: Nullable<CardinalNumber>;
    resultCastCharSetCatalog?: Nullable<SqlIdentifier>;
    resultCastCharSetSchema?: Nullable<SqlIdentifier>;
    resultCastCharSetName?: Nullable<SqlIdentifier>;
    resultCastCollationCatalog?: Nullable<SqlIdentifier>;
    resultCastCollationSchema?: Nullable<SqlIdentifier>;
    resultCastCollationName?: Nullable<SqlIdentifier>;
    resultCastNumericPrecision?: Nullable<CardinalNumber>;
    resultCastNumericPrecisionRadix?: Nullable<CardinalNumber>;
    resultCastNumericScale?: Nullable<CardinalNumber>;
    resultCastDatetimePrecision?: Nullable<CardinalNumber>;
    resultCastIntervalType?: Nullable<CharacterData>;
    resultCastIntervalPrecision?: Nullable<CardinalNumber>;
    resultCastTypeUdtCatalog?: Nullable<SqlIdentifier>;
    resultCastTypeUdtSchema?: Nullable<SqlIdentifier>;
    resultCastTypeUdtName?: Nullable<SqlIdentifier>;
    resultCastScopeCatalog?: Nullable<SqlIdentifier>;
    resultCastScopeSchema?: Nullable<SqlIdentifier>;
    resultCastScopeName?: Nullable<SqlIdentifier>;
    resultCastMaximumCardinality?: Nullable<CardinalNumber>;
    resultCastDtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface Schemata {
    catalogName?: Nullable<SqlIdentifier>;
    schemaName?: Nullable<SqlIdentifier>;
    schemaOwner?: Nullable<SqlIdentifier>;
    defaultCharacterSetCatalog?: Nullable<SqlIdentifier>;
    defaultCharacterSetSchema?: Nullable<SqlIdentifier>;
    defaultCharacterSetName?: Nullable<SqlIdentifier>;
    sqlPath?: Nullable<CharacterData>;
  }

  export interface Sequences {
    sequenceCatalog?: Nullable<SqlIdentifier>;
    sequenceSchema?: Nullable<SqlIdentifier>;
    sequenceName?: Nullable<SqlIdentifier>;
    dataType?: Nullable<CharacterData>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    startValue?: Nullable<CharacterData>;
    minimumValue?: Nullable<CharacterData>;
    maximumValue?: Nullable<CharacterData>;
    increment?: Nullable<CharacterData>;
    cycleOption?: Nullable<YesOrNo>;
  }

  export interface SqlFeatures {
    featureId?: Nullable<CharacterData>;
    featureName?: Nullable<CharacterData>;
    subFeatureId?: Nullable<CharacterData>;
    subFeatureName?: Nullable<CharacterData>;
    isSupported?: Nullable<YesOrNo>;
    isVerifiedBy?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export type SqlIdentifier = PgCatalog.Name;

  export interface SqlImplementationInfo {
    implementationInfoId?: Nullable<CharacterData>;
    implementationInfoName?: Nullable<CharacterData>;
    integerValue?: Nullable<CardinalNumber>;
    characterValue?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export interface SqlParts {
    featureId?: Nullable<CharacterData>;
    featureName?: Nullable<CharacterData>;
    isSupported?: Nullable<YesOrNo>;
    isVerifiedBy?: Nullable<CharacterData>;
    comments?: Nullable<CharacterData>;
  }

  export interface SqlSizing {
    sizingId?: Nullable<CardinalNumber>;
    sizingName?: Nullable<CharacterData>;
    supportedValue?: Nullable<CardinalNumber>;
    comments?: Nullable<CharacterData>;
  }

  export interface TableConstraints {
    constraintCatalog?: Nullable<SqlIdentifier>;
    constraintSchema?: Nullable<SqlIdentifier>;
    constraintName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    constraintType?: Nullable<CharacterData>;
    isDeferrable?: Nullable<YesOrNo>;
    initiallyDeferred?: Nullable<YesOrNo>;
    enforced?: Nullable<YesOrNo>;
    nullsDistinct?: Nullable<YesOrNo>;
  }

  export interface TablePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
    withHierarchy?: Nullable<YesOrNo>;
  }

  export interface Tables {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    tableType?: Nullable<CharacterData>;
    selfReferencingColumnName?: Nullable<SqlIdentifier>;
    referenceGeneration?: Nullable<CharacterData>;
    userDefinedTypeCatalog?: Nullable<SqlIdentifier>;
    userDefinedTypeSchema?: Nullable<SqlIdentifier>;
    userDefinedTypeName?: Nullable<SqlIdentifier>;
    isInsertableInto?: Nullable<YesOrNo>;
    isTyped?: Nullable<YesOrNo>;
    commitAction?: Nullable<CharacterData>;
  }

  export type TimeStamp = PgCatalog.Timestamptz;

  export interface Transforms {
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
    groupName?: Nullable<SqlIdentifier>;
    transformType?: Nullable<CharacterData>;
  }

  export interface TriggeredUpdateColumns {
    triggerCatalog?: Nullable<SqlIdentifier>;
    triggerSchema?: Nullable<SqlIdentifier>;
    triggerName?: Nullable<SqlIdentifier>;
    eventObjectCatalog?: Nullable<SqlIdentifier>;
    eventObjectSchema?: Nullable<SqlIdentifier>;
    eventObjectTable?: Nullable<SqlIdentifier>;
    eventObjectColumn?: Nullable<SqlIdentifier>;
  }

  export interface Triggers {
    triggerCatalog?: Nullable<SqlIdentifier>;
    triggerSchema?: Nullable<SqlIdentifier>;
    triggerName?: Nullable<SqlIdentifier>;
    eventManipulation?: Nullable<CharacterData>;
    eventObjectCatalog?: Nullable<SqlIdentifier>;
    eventObjectSchema?: Nullable<SqlIdentifier>;
    eventObjectTable?: Nullable<SqlIdentifier>;
    actionOrder?: Nullable<CardinalNumber>;
    actionCondition?: Nullable<CharacterData>;
    actionStatement?: Nullable<CharacterData>;
    actionOrientation?: Nullable<CharacterData>;
    actionTiming?: Nullable<CharacterData>;
    actionReferenceOldTable?: Nullable<SqlIdentifier>;
    actionReferenceNewTable?: Nullable<SqlIdentifier>;
    actionReferenceOldRow?: Nullable<SqlIdentifier>;
    actionReferenceNewRow?: Nullable<SqlIdentifier>;
    created?: Nullable<TimeStamp>;
  }

  export interface UdtPrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    udtCatalog?: Nullable<SqlIdentifier>;
    udtSchema?: Nullable<SqlIdentifier>;
    udtName?: Nullable<SqlIdentifier>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface UsagePrivileges {
    grantor?: Nullable<SqlIdentifier>;
    grantee?: Nullable<SqlIdentifier>;
    objectCatalog?: Nullable<SqlIdentifier>;
    objectSchema?: Nullable<SqlIdentifier>;
    objectName?: Nullable<SqlIdentifier>;
    objectType?: Nullable<CharacterData>;
    privilegeType?: Nullable<CharacterData>;
    isGrantable?: Nullable<YesOrNo>;
  }

  export interface UserDefinedTypes {
    userDefinedTypeCatalog?: Nullable<SqlIdentifier>;
    userDefinedTypeSchema?: Nullable<SqlIdentifier>;
    userDefinedTypeName?: Nullable<SqlIdentifier>;
    userDefinedTypeCategory?: Nullable<CharacterData>;
    isInstantiable?: Nullable<YesOrNo>;
    isFinal?: Nullable<YesOrNo>;
    orderingForm?: Nullable<CharacterData>;
    orderingCategory?: Nullable<CharacterData>;
    orderingRoutineCatalog?: Nullable<SqlIdentifier>;
    orderingRoutineSchema?: Nullable<SqlIdentifier>;
    orderingRoutineName?: Nullable<SqlIdentifier>;
    referenceType?: Nullable<CharacterData>;
    dataType?: Nullable<CharacterData>;
    characterMaximumLength?: Nullable<CardinalNumber>;
    characterOctetLength?: Nullable<CardinalNumber>;
    characterSetCatalog?: Nullable<SqlIdentifier>;
    characterSetSchema?: Nullable<SqlIdentifier>;
    characterSetName?: Nullable<SqlIdentifier>;
    collationCatalog?: Nullable<SqlIdentifier>;
    collationSchema?: Nullable<SqlIdentifier>;
    collationName?: Nullable<SqlIdentifier>;
    numericPrecision?: Nullable<CardinalNumber>;
    numericPrecisionRadix?: Nullable<CardinalNumber>;
    numericScale?: Nullable<CardinalNumber>;
    datetimePrecision?: Nullable<CardinalNumber>;
    intervalType?: Nullable<CharacterData>;
    intervalPrecision?: Nullable<CardinalNumber>;
    sourceDtdIdentifier?: Nullable<SqlIdentifier>;
    refDtdIdentifier?: Nullable<SqlIdentifier>;
  }

  export interface UserMappingOptions {
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
    optionName?: Nullable<SqlIdentifier>;
    optionValue?: Nullable<CharacterData>;
  }

  export interface UserMappings {
    authorizationIdentifier?: Nullable<SqlIdentifier>;
    foreignServerCatalog?: Nullable<SqlIdentifier>;
    foreignServerName?: Nullable<SqlIdentifier>;
  }

  export interface ViewColumnUsage {
    viewCatalog?: Nullable<SqlIdentifier>;
    viewSchema?: Nullable<SqlIdentifier>;
    viewName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    columnName?: Nullable<SqlIdentifier>;
  }

  export interface ViewRoutineUsage {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    specificCatalog?: Nullable<SqlIdentifier>;
    specificSchema?: Nullable<SqlIdentifier>;
    specificName?: Nullable<SqlIdentifier>;
  }

  export interface ViewTableUsage {
    viewCatalog?: Nullable<SqlIdentifier>;
    viewSchema?: Nullable<SqlIdentifier>;
    viewName?: Nullable<SqlIdentifier>;
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
  }

  export interface Views {
    tableCatalog?: Nullable<SqlIdentifier>;
    tableSchema?: Nullable<SqlIdentifier>;
    tableName?: Nullable<SqlIdentifier>;
    viewDefinition?: Nullable<CharacterData>;
    checkOption?: Nullable<CharacterData>;
    isUpdatable?: Nullable<YesOrNo>;
    isInsertableInto?: Nullable<YesOrNo>;
    isTriggerUpdatable?: Nullable<YesOrNo>;
    isTriggerDeletable?: Nullable<YesOrNo>;
    isTriggerInsertableInto?: Nullable<YesOrNo>;
  }

  export type YesOrNo = PgCatalog.Varchar;

  export namespace Tables {
    export namespace SqlFeatures {}

    export namespace SqlImplementationInfo {}

    export namespace SqlParts {}

    export namespace SqlSizing {}
  }
}

// begin string parsers
export namespace PgCatalog {
  export namespace Types {
    export namespace AclitemArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Aclitem.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BitArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoolArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bool.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BoxArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Box.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace BpcharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bpchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ByteaArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Bytea.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Char.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CidrArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cidr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CircleArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Circle.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CstringArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Cstring.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Date.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DatemultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Datemultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DaterangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Daterange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float4Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Float4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Float8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Float8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace GtsvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Gtsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InetArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Inet.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int2.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int2vectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int2vector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4multirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int4rangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int4range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8multirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8multirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Int8rangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Int8range.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace IntervalArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Interval.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Json.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonbArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Jsonb.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace JsonpathArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Jsonpath.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LineArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Line.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LsegArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Lseg.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MacaddrArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Macaddr.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Macaddr8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Macaddr8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MoneyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Money.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NameArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Name.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumericArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Numeric.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NummultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Nummultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NumrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Numrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace OidvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oidvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PathArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Path.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAggregateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAggregate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAm.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmopArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAmop.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAmprocArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAmproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttrdefArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAttrdef.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAttributeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAttribute.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthMembersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAuthMembers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAuthidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAuthid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionVersionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAvailableExtensionVersions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgAvailableExtensionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgAvailableExtensions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgBackendMemoryContextsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgBackendMemoryContexts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCastArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCast.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgClassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgClass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCollationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConstraintArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConstraint.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgConversionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgConversion.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgCursorsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgCursors.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDatabaseArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDbRoleSettingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDbRoleSetting.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDefaultAclArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDefaultAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDependArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgDescriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgDescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEnumArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgEnum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgEventTriggerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgEventTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgExtensionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgExtension.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgFileSettingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgFileSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrapperArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignDataWrapper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignServerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignServer.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignTableArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgForeignTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgGroupArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgGroup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgHbaFileRulesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgHbaFileRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIdentFileMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIdentFileMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInheritsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgInherits.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgInitPrivsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgInitPrivs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLanguageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLanguage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLargeobject.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLargeobjectMetadataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLargeobjectMetadata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLocksArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLocks.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgLsnArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgLsn.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgMatviewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgMatviews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgNamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpclassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOpclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOperatorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgOpfamilyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgOpfamily.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgParameterAclArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgParameterAcl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPartitionedTableArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPartitionedTable.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPoliciesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPolicies.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPolicyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPolicy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedStatementsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPreparedStatements.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPreparedXactsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPreparedXacts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgProcArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgProc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationNamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationNamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationRelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgPublicationTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgPublicationTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationOrigin.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationOriginStatusArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationOriginStatus.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgReplicationSlotsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRewriteArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRewrite.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgRulesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgRules.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSeclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSeclabelsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSeclabels.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequenceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSequence.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSettingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSettings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShadowArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShadow.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdependArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShdepend.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShdescriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShdescription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShmemAllocationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShmemAllocations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgShseclabelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgShseclabel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSnapshotArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatActivityArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatActivity.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatArchiverArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatArchiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatBgwriterArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatBgwriter.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatDatabase.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatDatabaseConflictsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatDatabaseConflicts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatGssapiArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatGssapi.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatIoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatIo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressAnalyzeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressAnalyze.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressBasebackupArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressBasebackup.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressClusterArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCluster.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCopyArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCopy.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressCreateIndexArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressCreateIndex.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatProgressVacuumArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatProgressVacuum.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatRecoveryPrefetchArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatRecoveryPrefetch.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatReplication.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatReplicationSlotsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatReplicationSlots.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSlruArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSlru.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSslArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSsl.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSubscriptionStatsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSubscriptionStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserFunctionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatWal.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatWalReceiverArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatWalReceiver.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserFunctionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactUserFunctions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatXactUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatXactUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioAllTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioAllTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioSysTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioSysTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserIndexesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserIndexes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserSequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserSequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatioUserTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatioUserTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatistic.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatisticExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatisticExtDataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatisticExtData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStats.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatsExt.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgStatsExtExprsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgStatsExtExprs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSubscription.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgSubscriptionRelArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgSubscriptionRel.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTablespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTablespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneAbbrevsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTimezoneAbbrevs.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTimezoneNamesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTimezoneNames.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTransformArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTransform.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTriggerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTrigger.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsConfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsConfigMapArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsConfigMap.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsDictArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsDict.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsParserArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsParser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTsTemplateArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgTsTemplate.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgTypeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgType.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUser.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUserMapping.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgUserMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgUserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgViewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return PgViews.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PointArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Point.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PolygonArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Polygon.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RecordArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Record.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RefcursorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Refcursor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegclassArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regclass.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegcollationArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regcollation.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegconfigArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regconfig.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegdictionaryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regdictionary.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegnamespaceArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regnamespace.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regoper.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegoperatorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regoperator.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regproc.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegprocedureArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regprocedure.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegroleArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regrole.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RegtypeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Regtype.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TextArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Text.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Time.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestampArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timestamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimestamptzArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timestamptz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimetzArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Timetz.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsmultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsqueryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsquery.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzmultirangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tstzmultirange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TstzrangeArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tstzrange.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TsvectorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tsvector.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TxidSnapshotArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TxidSnapshot.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UuidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Uuid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarbitArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Varbit.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace VarcharArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Varchar.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XidArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Xid8Array {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xid8.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace XmlArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Xml.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Aclitem {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Any {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatible {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblearray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblemultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblenonarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anycompatiblerange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyelement {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyenum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anymultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anynonarray {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Anyrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bit {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Bool {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Box {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bpchar {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Bytea {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Char {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cidr {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Circle {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Cstring {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Date {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Datemultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Daterange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace EventTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace FdwHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Float4 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Float8 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Gtsvector {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace IndexAmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Inet {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int2 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int2vector {
      export function parse(from: string | null) {
        if (from === null) return null;
        const source = Array.isArray(from)
          ? new Uint16Array(from)
          : JSON.parse(from);
        return new Uint16Array(source);
      }
    }
    export namespace Int4 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int4multirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int4range {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int8 {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Int8multirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Int8range {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Internal {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Interval {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Json {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Jsonb {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Jsonpath {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace LanguageHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Line {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Lseg {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Macaddr {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Macaddr8 {
      export function parse(from: string | null) {
        return from ? new Uint8Array(JSON.parse(from)) : null;
      }
    }
    export namespace Money {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Name {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Numeric {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Nummultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Numrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Oid {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Oidvector {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Oid.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Path {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAggregate {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAm {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAmop {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAmproc {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAttrdef {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAttribute {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAuthMembers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAuthid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAvailableExtensionVersions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgAvailableExtensions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBackendMemoryContexts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBrinBloomSummary {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgBrinMinmaxMultiSummary {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCast {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgClass {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCollation {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConfig {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConstraint {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgConversion {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgCursors {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDatabase {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDbRoleSetting {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDdlCommand {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDefaultAcl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDepend {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDependencies {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgDescription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgEnum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgEventTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgExtension {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgFileSettings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignDataWrapper {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignServer {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTable {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgGroup {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgHbaFileRules {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIdentFileMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIndex {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgInherits {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgInitPrivs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLanguage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLargeobject {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLargeobjectMetadata {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLocks {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgLsn {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (from === "") return null;
        return BigInt(from);
      }
    }
    export namespace PgMatviews {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgMcvList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNamespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNdistinct {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgNodeTree {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOpclass {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOperator {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgOpfamily {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgParameterAcl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPartitionedTable {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPolicies {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPolicy {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPreparedStatements {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPreparedXacts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgProc {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublication {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationNamespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationRel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgPublicationTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationOrigin {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationOriginStatus {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgReplicationSlots {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRewrite {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgRules {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSeclabel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSeclabels {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSequence {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSettings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShadow {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShdepend {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShdescription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShmemAllocations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgShseclabel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSnapshot {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatActivity {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatAllIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatArchiver {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatBgwriter {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatDatabase {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatDatabaseConflicts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatGssapi {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatIo {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressAnalyze {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressBasebackup {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCluster {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCopy {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressCreateIndex {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatProgressVacuum {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatRecoveryPrefetch {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatReplication {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatReplicationSlots {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSlru {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSsl {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSubscription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSubscriptionStats {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSysIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserFunctions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatWal {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatWalReceiver {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactUserFunctions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatXactUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioAllTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioSysTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserIndexes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserSequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatioUserTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatistic {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatisticExt {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatisticExtData {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStats {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatsExt {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgStatsExtExprs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSubscription {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgSubscriptionRel {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTablespace {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTimezoneAbbrevs {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTimezoneNames {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTransform {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTrigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsConfig {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsConfigMap {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsDict {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsParser {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgTsTemplate {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgType {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUser {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMapping {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgViews {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Point {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Polygon {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Record {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Refcursor {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Regclass {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regcollation {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regconfig {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regdictionary {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regnamespace {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoper {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regoperator {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regproc {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regprocedure {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regrole {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace Regtype {
      export function parse(from: string | null) {
        if (from === null) return null;
        return Number.parseFloat(from);
      }
    }
    export namespace TableAmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Text {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Time {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamp {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timestamptz {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Timetz {
      export function parse(from: string | null) {
        if (from === null) return null;
        if ((from as unknown) instanceof global.Date) return from;
        return new global.Date(from);
      }
    }
    export namespace Trigger {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TsmHandler {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsmultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsquery {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tstzmultirange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tstzrange {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tsvector {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TxidSnapshot {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Unknown {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Uuid {
      export function parse(from: string | null) {
        return from ? new UUID(from) : null;
      }
    }
    export namespace Varbit {
      export function parse(from: string | null) {
        if (from === null) return null;
        if (["t", "T", "true", "True"].includes(from)) return true;
        try {
          if (Number.parseFloat(from) > 0) return true;
        } catch (e) {
          // eat
        }
        return false;
      }
    }
    export namespace Varchar {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Void {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xid {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xid8 {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Xml {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
export namespace Public {
  export namespace Types {
    export namespace ActorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Actor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ActorInfoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ActorInfo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AddressArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Address.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CategoryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Category.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CityArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return City.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CountryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Country.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CustomerArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Customer.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CustomerListArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CustomerList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Film.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmActorArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmActor.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmCategoryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmCategory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace FilmListArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return FilmList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InventoryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Inventory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace LanguageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Language.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace MpaaRatingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return MpaaRating.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace NicerButSlowerFilmListArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return NicerButSlowerFilmList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PaymentArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Payment.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RentalArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Rental.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SalesByFilmCategoryArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SalesByFilmCategory.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SalesByStoreArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SalesByStore.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StaffArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Staff.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StaffListArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return StaffList.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace StoreArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Store.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace YearArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Year.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace Actor {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ActorInfo {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Address {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Category {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace City {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Country {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Customer {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CustomerList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Film {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace FilmActor {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace FilmCategory {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace FilmList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Inventory {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Language {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace MpaaRating {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace NicerButSlowerFilmList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Payment {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Rental {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SalesByFilmCategory {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SalesByStore {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Staff {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace StaffList {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Store {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Year {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
export namespace InformationSchema {
  export namespace Types {
    export namespace AdministrableRoleAuthorizationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return AdministrableRoleAuthorizations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ApplicableRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ApplicableRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AttributesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Attributes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CardinalNumberArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CardinalNumber.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterDataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CharacterData.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CharacterSetsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CharacterSets.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CheckConstraintRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CheckConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CheckConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationCharacterSetApplicabilityArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return CollationCharacterSetApplicability.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace CollationsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Collations.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnDomainUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnDomainUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnPrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnUdtUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ColumnUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ColumnsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Columns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ConstraintColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ConstraintTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ConstraintTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DataTypePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DataTypePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DomainConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainUdtUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return DomainUdtUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace DomainsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Domains.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ElementTypesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ElementTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace EnabledRolesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return EnabledRoles.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrapperOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignDataWrapperOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignDataWrappersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignDataWrappers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServerOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignServerOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignServersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignServers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTableOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignTableOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ForeignTablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ForeignTables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace InformationSchemaCatalogNameArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return InformationSchemaCatalogName.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace KeyColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return KeyColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ParametersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Parameters.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace PgForeignDataWrappers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignServers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTableColumns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgForeignTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace PgUserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ReferentialConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ReferentialConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleColumnGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleColumnGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleRoutineGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleRoutineGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleTableGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleTableGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUdtGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleUdtGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoleUsageGrantsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoleUsageGrants.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutinePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineSequenceUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineSequenceUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutineTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return RoutineTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace RoutinesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Routines.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SchemataArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Schemata.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SequencesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Sequences.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlFeaturesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlFeatures.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlIdentifierArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlIdentifier.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlImplementationInfoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlImplementationInfo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlPartsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlParts.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace SqlSizingArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return SqlSizing.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TableConstraintsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TableConstraints.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TablePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TablesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Tables.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TimeStampArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TimeStamp.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TransformsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Transforms.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggeredUpdateColumnsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return TriggeredUpdateColumns.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace TriggersArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Triggers.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UdtPrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UdtPrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UsagePrivilegesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UsagePrivileges.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserDefinedTypesArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserDefinedTypes.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingOptionsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserMappingOptions.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace UserMappingsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return UserMappings.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewColumnUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewColumnUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewRoutineUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewRoutineUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewTableUsageArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return ViewTableUsage.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace ViewsArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return Views.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace YesOrNoArray {
      export function parse(from: string | null) {
        if (from === null) return null;
        const rawArray = JSON.parse(from);
        return rawArray.map((e: unknown) => {
          return YesOrNo.parse(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${e}`,
          );
        });
      }
    }
    export namespace AdministrableRoleAuthorizations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ApplicableRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Attributes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CardinalNumber {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CharacterData {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CharacterSets {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CheckConstraintRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CheckConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace CollationCharacterSetApplicability {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Collations {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnDomainUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnPrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ColumnUdtUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Columns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ConstraintColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ConstraintTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DataTypePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DomainConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace DomainUdtUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Domains {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ElementTypes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace EnabledRoles {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignDataWrapperOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignDataWrappers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignServerOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignServers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignTableOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ForeignTables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace InformationSchemaCatalogName {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace KeyColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Parameters {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ReferentialConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleColumnGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleRoutineGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleTableGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleUdtGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoleUsageGrants {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutinePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineSequenceUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace RoutineTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Routines {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Schemata {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Sequences {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlFeatures {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlIdentifier {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlImplementationInfo {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlParts {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace SqlSizing {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TableConstraints {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TablePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Tables {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TimeStamp {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Transforms {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace TriggeredUpdateColumns {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Triggers {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UdtPrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UsagePrivileges {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserDefinedTypes {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserMappingOptions {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace UserMappings {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewColumnUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewRoutineUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace ViewTableUsage {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace Views {
      export function parse(from: string | null) {
        return from;
      }
    }
    export namespace YesOrNo {
      export function parse(from: string | null) {
        return from;
      }
    }
  }
}
// begin table column parser mapping
export namespace PgCatalog {
  export namespace Tables {
    export namespace PgStatistic {
      export namespace Starelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staattnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stainherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Stanullfrac {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Stawidth {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Stadistinct {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Stakind1 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind2 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind3 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind4 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Stakind5 {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Staop1 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop2 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop3 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop4 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Staop5 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll1 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll2 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll3 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll4 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stacoll5 {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stanumbers1 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers2 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers3 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers4 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stanumbers5 {
        export const parse = PgCatalog.Types.Float4Array.parse;
      }
      export namespace Stavalues1 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues2 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues3 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues4 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
      export namespace Stavalues5 {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
    }
    export namespace PgType {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Typnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typlen {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Typbyval {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typcategory {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typispreferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typisdefined {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typdelim {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typsubscript {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typelem {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typarray {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typinput {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typoutput {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typreceive {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typsend {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typmodin {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typmodout {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typanalyze {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Typalign {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typstorage {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Typnotnull {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Typbasetype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typtypmod {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Typndims {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Typcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Typdefaultbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Typdefault {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Typacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgForeignTable {
      export namespace Ftrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Ftserver {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Ftoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgAuthid {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rolname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Rolsuper {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcreaterole {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcreatedb {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolcanlogin {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolreplication {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolbypassrls {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Rolconnlimit {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Rolpassword {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Rolvaliduntil {
        export const parse = PgCatalog.Types.Timestamptz.parse;
      }
    }
    export namespace PgStatisticExtData {
      export namespace Stxoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxdinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Stxdndistinct {
        export const parse = PgCatalog.Types.PgNdistinct.parse;
      }
      export namespace Stxddependencies {
        export const parse = PgCatalog.Types.PgDependencies.parse;
      }
      export namespace Stxdmcv {
        export const parse = PgCatalog.Types.PgMcvList.parse;
      }
      export namespace Stxdexpr {
        export const parse = PgCatalog.Types.PgStatisticArray.parse;
      }
    }
    export namespace PgUserMapping {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umuser {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umserver {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Umoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgSubscription {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subdbid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subskiplsn {
        export const parse = PgCatalog.Types.PgLsn.parse;
      }
      export namespace Subname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Subowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Subenabled {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subbinary {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Substream {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Subtwophasestate {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Subdisableonerr {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subpasswordrequired {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subrunasowner {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Subconninfo {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Subslotname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Subsynccommit {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Subpublications {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Suborigin {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgAttribute {
      export namespace Attrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Atttypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attlen {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attcacheoff {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Atttypmod {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Attndims {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attbyval {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attalign {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attstorage {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attcompression {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attnotnull {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Atthasdef {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Atthasmissing {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attidentity {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attgenerated {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Attisdropped {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attislocal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Attinhcount {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attstattarget {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Attcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Attacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Attoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Attfdwoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Attmissingval {
        export const parse = PgCatalog.Types.Anyarray.parse;
      }
    }
    export namespace PgProc {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Pronamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prolang {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Procost {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Prorows {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Provariadic {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prosupport {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prokind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Prosecdef {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proleakproof {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proisstrict {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Proretset {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Provolatile {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Proparallel {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Pronargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Pronargdefaults {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Prorettype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Proargtypes {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Proallargtypes {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Proargmodes {
        export const parse = PgCatalog.Types.CharArray.parse;
      }
      export namespace Proargnames {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Proargdefaults {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Protrftypes {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Prosrc {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Probin {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Prosqlbody {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Proconfig {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Proacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgClass {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Relnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reltype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reloftype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relam {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relfilenode {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Reltablespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relpages {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Reltuples {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Relallvisible {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Reltoastrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relhasindex {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relisshared {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relpersistence {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Relchecks {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Relhasrules {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relhastriggers {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relhassubclass {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relrowsecurity {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relforcerowsecurity {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relispopulated {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relreplident {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Relispartition {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Relrewrite {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Relfrozenxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Relminmxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Relacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Reloptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Relpartbound {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgAttrdef {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Adrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Adnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Adbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgConstraint {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Connamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Contype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Condeferrable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Condeferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Convalidated {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Conrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Contypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conindid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conparentid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Confrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Confupdtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Confdeltype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Confmatchtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Conislocal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Coninhcount {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Connoinherit {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Conkey {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Confkey {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Conpfeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conppeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conffeqop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Confdelsetcols {
        export const parse = PgCatalog.Types.Int2Array.parse;
      }
      export namespace Conexclop {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Conbin {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgInherits {
      export namespace Inhrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Inhparent {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Inhseqno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Inhdetachpending {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgIndex {
      export namespace Indexrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Indrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Indnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Indnkeyatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Indisunique {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indnullsnotdistinct {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisprimary {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisexclusion {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indimmediate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisclustered {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisvalid {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indcheckxmin {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisready {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indislive {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indisreplident {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Indkey {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Indcollation {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Indclass {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Indoption {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Indexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Indpred {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgOperator {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Oprnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Oprcanmerge {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Oprcanhash {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Oprleft {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprright {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprresult {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprcom {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprnegate {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Oprcode {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Oprrest {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Oprjoin {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgOpfamily {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Opfnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opfowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgOpclass {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Opcnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcintype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Opcdefault {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Opckeytype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgAm {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Amhandler {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Amtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgAmop {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amoplefttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amoprighttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopstrategy {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Amoppurpose {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Amopopr {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopmethod {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amopsortfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgAmproc {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocfamily {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amproclefttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocrighttype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Amprocnum {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Amproc {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgLanguage {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Lanowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanispl {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Lanpltrusted {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Lanplcallfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Laninline {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanvalidator {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lanacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgLargeobjectMetadata {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lomowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Lomacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgAggregate {
      export namespace Aggfnoid {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggkind {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggnumdirectargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Aggtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggfinalfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggcombinefn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggserialfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggdeserialfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggmtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggminvtransfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggmfinalfn {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Aggfinalextra {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Aggmfinalextra {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Aggfinalmodify {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggmfinalmodify {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Aggsortop {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggtranstype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggtransspace {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Aggmtranstype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Aggmtransspace {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Agginitval {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Aggminitval {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgStatisticExt {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Stxnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Stxstattarget {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Stxkeys {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Stxkind {
        export const parse = PgCatalog.Types.CharArray.parse;
      }
      export namespace Stxexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgRewrite {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rulename {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace EvClass {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace EvType {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace EvEnabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace IsInstead {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace EvQual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace EvAction {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgTrigger {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgparentid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tgfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgtype {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Tgenabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Tgisinternal {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tgconstrrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgconstrindid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgconstraint {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tgdeferrable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tginitdeferred {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Tgnargs {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Tgattr {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Tgargs {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
      export namespace Tgqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Tgoldtable {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tgnewtable {
        export const parse = PgCatalog.Types.Name.parse;
      }
    }
    export namespace PgEventTrigger {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Evtevent {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Evtowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtfoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Evtenabled {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Evttags {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgDescription {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgCast {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castsource {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Casttarget {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castfunc {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Castcontext {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Castmethod {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgEnum {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Enumtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Enumsortorder {
        export const parse = PgCatalog.Types.Float4.parse;
      }
      export namespace Enumlabel {
        export const parse = PgCatalog.Types.Name.parse;
      }
    }
    export namespace PgNamespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Nspname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Nspowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Nspacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgConversion {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Connamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Conforencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Contoencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Conproc {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Condefault {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgDepend {
      export namespace Classid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Refclassid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Deptype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgDatabase {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Datname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Datdba {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Encoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Datlocprovider {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Datistemplate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Datallowconn {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Datconnlimit {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Datfrozenxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Datminmxid {
        export const parse = PgCatalog.Types.Xid.parse;
      }
      export namespace Dattablespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Datcollate {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datctype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Daticulocale {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Daticurules {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datcollversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Datacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgDbRoleSetting {
      export namespace Setdatabase {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Setrole {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Setconfig {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgTablespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Spcname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Spcowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Spcacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Spcoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgAuthMembers {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Roleid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Member {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Grantor {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace AdminOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace InheritOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace SetOption {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgShdepend {
      export namespace Dbid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Refclassid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Refobjid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Deptype {
        export const parse = PgCatalog.Types.Char.parse;
      }
    }
    export namespace PgShdescription {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgTsConfig {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Cfgnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Cfgparser {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgTsConfigMap {
      export namespace Mapcfg {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Maptokentype {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Mapseqno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Mapdict {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgTsDict {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Dictnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dicttemplate {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Dictinitoption {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgTsParser {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prsname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Prsnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prsstart {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prstoken {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prsend {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prsheadline {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Prslextype {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgTsTemplate {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tmplname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Tmplnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Tmplinit {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Tmpllexize {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgExtension {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Extowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Extrelocatable {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Extversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Extconfig {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Extcondition {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgForeignDataWrapper {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Fdwowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwhandler {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwvalidator {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Fdwacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Fdwoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgForeignServer {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Srvowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvfdw {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srvtype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Srvversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Srvacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
      export namespace Srvoptions {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
    }
    export namespace PgPolicy {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Polname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Polrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Polcmd {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Polpermissive {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Polroles {
        export const parse = PgCatalog.Types.OidArray.parse;
      }
      export namespace Polqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Polwithcheck {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgReplicationOrigin {
      export namespace Roident {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Roname {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgDefaultAcl {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclrole {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Defaclobjtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Defaclacl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgInitPrivs {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Privtype {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Initprivs {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgSeclabel {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Objsubid {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Provider {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Label {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgShseclabel {
      export namespace Objoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Classoid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Provider {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Label {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgCollation {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Collnamespace {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Collprovider {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Collisdeterministic {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Collencoding {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Collcollate {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collctype {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Colliculocale {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collicurules {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Collversion {
        export const parse = PgCatalog.Types.Text.parse;
      }
    }
    export namespace PgParameterAcl {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Parname {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace Paracl {
        export const parse = PgCatalog.Types.AclitemArray.parse;
      }
    }
    export namespace PgPartitionedTable {
      export namespace Partrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Partstrat {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Partnatts {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Partdefid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Partattrs {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
      export namespace Partclass {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Partcollation {
        export const parse = PgCatalog.Types.Oidvector.parse;
      }
      export namespace Partexprs {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
    }
    export namespace PgRange {
      export namespace Rngtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngsubtype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngmultitypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngcollation {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngsubopc {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Rngcanonical {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Rngsubdiff {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgTransform {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trftype {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trflang {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Trffromsql {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
      export namespace Trftosql {
        export const parse = PgCatalog.Types.Regproc.parse;
      }
    }
    export namespace PgSequence {
      export namespace Seqrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Seqtypid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Seqstart {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqincrement {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqmax {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqmin {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqcache {
        export const parse = PgCatalog.Types.Int8.parse;
      }
      export namespace Seqcycle {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgPublication {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pubname {
        export const parse = PgCatalog.Types.Name.parse;
      }
      export namespace Pubowner {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Puballtables {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubinsert {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubupdate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubdelete {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubtruncate {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Pubviaroot {
        export const parse = PgCatalog.Types.Bool.parse;
      }
    }
    export namespace PgPublicationNamespace {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pnpubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pnnspid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
    }
    export namespace PgPublicationRel {
      export namespace Oid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prpubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Prqual {
        export const parse = PgCatalog.Types.PgNodeTree.parse;
      }
      export namespace Prattrs {
        export const parse = PgCatalog.Types.Int2vector.parse;
      }
    }
    export namespace PgSubscriptionRel {
      export namespace Srsubid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srrelid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Srsubstate {
        export const parse = PgCatalog.Types.Char.parse;
      }
      export namespace Srsublsn {
        export const parse = PgCatalog.Types.PgLsn.parse;
      }
    }
    export namespace PgLargeobject {
      export namespace Loid {
        export const parse = PgCatalog.Types.Oid.parse;
      }
      export namespace Pageno {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Data {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
    }
  }
}
export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export namespace ActorId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Address {
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Address {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Address2 {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace District {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace CityId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace PostalCode {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Phone {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace City {
      export namespace CityId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace City {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace CountryId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Customer {
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Email {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Activebool {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace CreateDate {
        export const parse = PgCatalog.Types.Date.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace Active {
        export const parse = PgCatalog.Types.Int4.parse;
      }
    }
    export namespace Actor {
      export namespace ActorId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace FilmCategory {
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace CategoryId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Inventory {
      export namespace InventoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Category {
      export namespace CategoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Name {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Country {
      export namespace CountryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Country {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Language {
      export namespace LanguageId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Name {
        export const parse = PgCatalog.Types.Bpchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Rental {
      export namespace RentalId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace RentalDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace InventoryId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace ReturnDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Staff {
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace FirstName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastName {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Email {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace Active {
        export const parse = PgCatalog.Types.Bool.parse;
      }
      export namespace Username {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Password {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace Picture {
        export const parse = PgCatalog.Types.Bytea.parse;
      }
    }
    export namespace Store {
      export namespace StoreId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace ManagerStaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace AddressId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Payment {
      export namespace PaymentId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace CustomerId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace StaffId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Amount {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace PaymentDate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
    }
    export namespace Film {
      export namespace FilmId {
        export const parse = PgCatalog.Types.Int4.parse;
      }
      export namespace Title {
        export const parse = PgCatalog.Types.Varchar.parse;
      }
      export namespace Description {
        export const parse = PgCatalog.Types.Text.parse;
      }
      export namespace ReleaseYear {
        export const parse = Public.Types.Year.parse;
      }
      export namespace LanguageId {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalDuration {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace RentalRate {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace Length {
        export const parse = PgCatalog.Types.Int2.parse;
      }
      export namespace ReplacementCost {
        export const parse = PgCatalog.Types.Numeric.parse;
      }
      export namespace Rating {
        export const parse = Public.Types.MpaaRating.parse;
      }
      export namespace LastUpdate {
        export const parse = PgCatalog.Types.Timestamp.parse;
      }
      export namespace SpecialFeatures {
        export const parse = PgCatalog.Types.TextArray.parse;
      }
      export namespace Fulltext {
        export const parse = PgCatalog.Types.Tsvector.parse;
      }
    }
  }
}
export namespace InformationSchema {
  export namespace Tables {
    export namespace SqlFeatures {
      export namespace FeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace FeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SubFeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SubFeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IsSupported {
        export const parse = InformationSchema.Types.YesOrNo.parse;
      }
      export namespace IsVerifiedBy {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlImplementationInfo {
      export namespace ImplementationInfoId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace ImplementationInfoName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IntegerValue {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace CharacterValue {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlParts {
      export namespace FeatureId {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace FeatureName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace IsSupported {
        export const parse = InformationSchema.Types.YesOrNo.parse;
      }
      export namespace IsVerifiedBy {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
    export namespace SqlSizing {
      export namespace SizingId {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace SizingName {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
      export namespace SupportedValue {
        export const parse = InformationSchema.Types.CardinalNumber.parse;
      }
      export namespace Comments {
        export const parse = InformationSchema.Types.CharacterData.parse;
      }
    }
  }
}
// end string parsers

// begin primary key pickers
export namespace Public {
  export namespace FilmActor {
    export function primaryKeyFrom(value: FilmActor): string {
      return JSON.stringify({
        actorId: value.actorId,
        filmId: value.filmId,
      });
    }
  }
  export namespace Address {
    export function primaryKeyFrom(value: Address): string {
      return JSON.stringify({
        addressId: value.addressId,
      });
    }
  }
  export namespace City {
    export function primaryKeyFrom(value: City): string {
      return JSON.stringify({
        cityId: value.cityId,
      });
    }
  }
  export namespace Customer {
    export function primaryKeyFrom(value: Customer): string {
      return JSON.stringify({
        customerId: value.customerId,
      });
    }
  }
  export namespace Actor {
    export function primaryKeyFrom(value: Actor): string {
      return JSON.stringify({
        actorId: value.actorId,
      });
    }
  }
  export namespace FilmCategory {
    export function primaryKeyFrom(value: FilmCategory): string {
      return JSON.stringify({
        filmId: value.filmId,
        categoryId: value.categoryId,
      });
    }
  }
  export namespace Inventory {
    export function primaryKeyFrom(value: Inventory): string {
      return JSON.stringify({
        inventoryId: value.inventoryId,
      });
    }
  }
  export namespace Category {
    export function primaryKeyFrom(value: Category): string {
      return JSON.stringify({
        categoryId: value.categoryId,
      });
    }
  }
  export namespace Country {
    export function primaryKeyFrom(value: Country): string {
      return JSON.stringify({
        countryId: value.countryId,
      });
    }
  }
  export namespace Language {
    export function primaryKeyFrom(value: Language): string {
      return JSON.stringify({
        languageId: value.languageId,
      });
    }
  }
  export namespace Rental {
    export function primaryKeyFrom(value: Rental): string {
      return JSON.stringify({
        rentalId: value.rentalId,
      });
    }
  }
  export namespace Staff {
    export function primaryKeyFrom(value: Staff): string {
      return JSON.stringify({
        staffId: value.staffId,
      });
    }
  }
  export namespace Store {
    export function primaryKeyFrom(value: Store): string {
      return JSON.stringify({
        storeId: value.storeId,
      });
    }
  }
  export namespace Payment {
    export function primaryKeyFrom(value: Payment): string {
      return JSON.stringify({
        paymentId: value.paymentId,
      });
    }
  }
  export namespace Film {
    export function primaryKeyFrom(value: Film): string {
      return JSON.stringify({
        filmId: value.filmId,
      });
    }
  }
}
// end primary key pickers

// begin table type aliases
export namespace PgCatalog {
  export namespace Tables {
    export namespace PgStatistic {
      export type Record = PgCatalog.PgStatistic;
      export type RecordNotPrimaryKey = PgCatalog.PgStatisticNotPrimaryKey;
    }
    export namespace PgType {
      export type Record = PgCatalog.PgType;
      export type RecordNotPrimaryKey = PgCatalog.PgTypeNotPrimaryKey;
    }
    export namespace PgForeignTable {
      export type Record = PgCatalog.PgForeignTable;
      export type RecordNotPrimaryKey = PgCatalog.PgForeignTableNotPrimaryKey;
    }
    export namespace PgAuthid {
      export type Record = PgCatalog.PgAuthid;
      export type RecordNotPrimaryKey = PgCatalog.PgAuthidNotPrimaryKey;
    }
    export namespace PgStatisticExtData {
      export type Record = PgCatalog.PgStatisticExtData;
      export type RecordNotPrimaryKey =
        PgCatalog.PgStatisticExtDataNotPrimaryKey;
    }
    export namespace PgUserMapping {
      export type Record = PgCatalog.PgUserMapping;
      export type RecordNotPrimaryKey = PgCatalog.PgUserMappingNotPrimaryKey;
    }
    export namespace PgSubscription {
      export type Record = PgCatalog.PgSubscription;
      export type RecordNotPrimaryKey = PgCatalog.PgSubscriptionNotPrimaryKey;
    }
    export namespace PgAttribute {
      export type Record = PgCatalog.PgAttribute;
      export type RecordNotPrimaryKey = PgCatalog.PgAttributeNotPrimaryKey;
    }
    export namespace PgProc {
      export type Record = PgCatalog.PgProc;
      export type RecordNotPrimaryKey = PgCatalog.PgProcNotPrimaryKey;
    }
    export namespace PgClass {
      export type Record = PgCatalog.PgClass;
      export type RecordNotPrimaryKey = PgCatalog.PgClassNotPrimaryKey;
    }
    export namespace PgAttrdef {
      export type Record = PgCatalog.PgAttrdef;
      export type RecordNotPrimaryKey = PgCatalog.PgAttrdefNotPrimaryKey;
    }
    export namespace PgConstraint {
      export type Record = PgCatalog.PgConstraint;
      export type RecordNotPrimaryKey = PgCatalog.PgConstraintNotPrimaryKey;
    }
    export namespace PgInherits {
      export type Record = PgCatalog.PgInherits;
      export type RecordNotPrimaryKey = PgCatalog.PgInheritsNotPrimaryKey;
    }
    export namespace PgIndex {
      export type Record = PgCatalog.PgIndex;
      export type RecordNotPrimaryKey = PgCatalog.PgIndexNotPrimaryKey;
    }
    export namespace PgOperator {
      export type Record = PgCatalog.PgOperator;
      export type RecordNotPrimaryKey = PgCatalog.PgOperatorNotPrimaryKey;
    }
    export namespace PgOpfamily {
      export type Record = PgCatalog.PgOpfamily;
      export type RecordNotPrimaryKey = PgCatalog.PgOpfamilyNotPrimaryKey;
    }
    export namespace PgOpclass {
      export type Record = PgCatalog.PgOpclass;
      export type RecordNotPrimaryKey = PgCatalog.PgOpclassNotPrimaryKey;
    }
    export namespace PgAm {
      export type Record = PgCatalog.PgAm;
      export type RecordNotPrimaryKey = PgCatalog.PgAmNotPrimaryKey;
    }
    export namespace PgAmop {
      export type Record = PgCatalog.PgAmop;
      export type RecordNotPrimaryKey = PgCatalog.PgAmopNotPrimaryKey;
    }
    export namespace PgAmproc {
      export type Record = PgCatalog.PgAmproc;
      export type RecordNotPrimaryKey = PgCatalog.PgAmprocNotPrimaryKey;
    }
    export namespace PgLanguage {
      export type Record = PgCatalog.PgLanguage;
      export type RecordNotPrimaryKey = PgCatalog.PgLanguageNotPrimaryKey;
    }
    export namespace PgLargeobjectMetadata {
      export type Record = PgCatalog.PgLargeobjectMetadata;
      export type RecordNotPrimaryKey =
        PgCatalog.PgLargeobjectMetadataNotPrimaryKey;
    }
    export namespace PgAggregate {
      export type Record = PgCatalog.PgAggregate;
      export type RecordNotPrimaryKey = PgCatalog.PgAggregateNotPrimaryKey;
    }
    export namespace PgStatisticExt {
      export type Record = PgCatalog.PgStatisticExt;
      export type RecordNotPrimaryKey = PgCatalog.PgStatisticExtNotPrimaryKey;
    }
    export namespace PgRewrite {
      export type Record = PgCatalog.PgRewrite;
      export type RecordNotPrimaryKey = PgCatalog.PgRewriteNotPrimaryKey;
    }
    export namespace PgTrigger {
      export type Record = PgCatalog.PgTrigger;
      export type RecordNotPrimaryKey = PgCatalog.PgTriggerNotPrimaryKey;
    }
    export namespace PgEventTrigger {
      export type Record = PgCatalog.PgEventTrigger;
      export type RecordNotPrimaryKey = PgCatalog.PgEventTriggerNotPrimaryKey;
    }
    export namespace PgDescription {
      export type Record = PgCatalog.PgDescription;
      export type RecordNotPrimaryKey = PgCatalog.PgDescriptionNotPrimaryKey;
    }
    export namespace PgCast {
      export type Record = PgCatalog.PgCast;
      export type RecordNotPrimaryKey = PgCatalog.PgCastNotPrimaryKey;
    }
    export namespace PgEnum {
      export type Record = PgCatalog.PgEnum;
      export type RecordNotPrimaryKey = PgCatalog.PgEnumNotPrimaryKey;
    }
    export namespace PgNamespace {
      export type Record = PgCatalog.PgNamespace;
      export type RecordNotPrimaryKey = PgCatalog.PgNamespaceNotPrimaryKey;
    }
    export namespace PgConversion {
      export type Record = PgCatalog.PgConversion;
      export type RecordNotPrimaryKey = PgCatalog.PgConversionNotPrimaryKey;
    }
    export namespace PgDepend {
      export type Record = PgCatalog.PgDepend;
    }
    export namespace PgDatabase {
      export type Record = PgCatalog.PgDatabase;
      export type RecordNotPrimaryKey = PgCatalog.PgDatabaseNotPrimaryKey;
    }
    export namespace PgDbRoleSetting {
      export type Record = PgCatalog.PgDbRoleSetting;
      export type RecordNotPrimaryKey = PgCatalog.PgDbRoleSettingNotPrimaryKey;
    }
    export namespace PgTablespace {
      export type Record = PgCatalog.PgTablespace;
      export type RecordNotPrimaryKey = PgCatalog.PgTablespaceNotPrimaryKey;
    }
    export namespace PgAuthMembers {
      export type Record = PgCatalog.PgAuthMembers;
      export type RecordNotPrimaryKey = PgCatalog.PgAuthMembersNotPrimaryKey;
    }
    export namespace PgShdepend {
      export type Record = PgCatalog.PgShdepend;
    }
    export namespace PgShdescription {
      export type Record = PgCatalog.PgShdescription;
      export type RecordNotPrimaryKey = PgCatalog.PgShdescriptionNotPrimaryKey;
    }
    export namespace PgTsConfig {
      export type Record = PgCatalog.PgTsConfig;
      export type RecordNotPrimaryKey = PgCatalog.PgTsConfigNotPrimaryKey;
    }
    export namespace PgTsConfigMap {
      export type Record = PgCatalog.PgTsConfigMap;
      export type RecordNotPrimaryKey = PgCatalog.PgTsConfigMapNotPrimaryKey;
    }
    export namespace PgTsDict {
      export type Record = PgCatalog.PgTsDict;
      export type RecordNotPrimaryKey = PgCatalog.PgTsDictNotPrimaryKey;
    }
    export namespace PgTsParser {
      export type Record = PgCatalog.PgTsParser;
      export type RecordNotPrimaryKey = PgCatalog.PgTsParserNotPrimaryKey;
    }
    export namespace PgTsTemplate {
      export type Record = PgCatalog.PgTsTemplate;
      export type RecordNotPrimaryKey = PgCatalog.PgTsTemplateNotPrimaryKey;
    }
    export namespace PgExtension {
      export type Record = PgCatalog.PgExtension;
      export type RecordNotPrimaryKey = PgCatalog.PgExtensionNotPrimaryKey;
    }
    export namespace PgForeignDataWrapper {
      export type Record = PgCatalog.PgForeignDataWrapper;
      export type RecordNotPrimaryKey =
        PgCatalog.PgForeignDataWrapperNotPrimaryKey;
    }
    export namespace PgForeignServer {
      export type Record = PgCatalog.PgForeignServer;
      export type RecordNotPrimaryKey = PgCatalog.PgForeignServerNotPrimaryKey;
    }
    export namespace PgPolicy {
      export type Record = PgCatalog.PgPolicy;
      export type RecordNotPrimaryKey = PgCatalog.PgPolicyNotPrimaryKey;
    }
    export namespace PgReplicationOrigin {
      export type Record = PgCatalog.PgReplicationOrigin;
      export type RecordNotPrimaryKey =
        PgCatalog.PgReplicationOriginNotPrimaryKey;
    }
    export namespace PgDefaultAcl {
      export type Record = PgCatalog.PgDefaultAcl;
      export type RecordNotPrimaryKey = PgCatalog.PgDefaultAclNotPrimaryKey;
    }
    export namespace PgInitPrivs {
      export type Record = PgCatalog.PgInitPrivs;
      export type RecordNotPrimaryKey = PgCatalog.PgInitPrivsNotPrimaryKey;
    }
    export namespace PgSeclabel {
      export type Record = PgCatalog.PgSeclabel;
      export type RecordNotPrimaryKey = PgCatalog.PgSeclabelNotPrimaryKey;
    }
    export namespace PgShseclabel {
      export type Record = PgCatalog.PgShseclabel;
      export type RecordNotPrimaryKey = PgCatalog.PgShseclabelNotPrimaryKey;
    }
    export namespace PgCollation {
      export type Record = PgCatalog.PgCollation;
      export type RecordNotPrimaryKey = PgCatalog.PgCollationNotPrimaryKey;
    }
    export namespace PgParameterAcl {
      export type Record = PgCatalog.PgParameterAcl;
      export type RecordNotPrimaryKey = PgCatalog.PgParameterAclNotPrimaryKey;
    }
    export namespace PgPartitionedTable {
      export type Record = PgCatalog.PgPartitionedTable;
      export type RecordNotPrimaryKey =
        PgCatalog.PgPartitionedTableNotPrimaryKey;
    }
    export namespace PgRange {
      export type Record = PgCatalog.PgRange;
      export type RecordNotPrimaryKey = PgCatalog.PgRangeNotPrimaryKey;
    }
    export namespace PgTransform {
      export type Record = PgCatalog.PgTransform;
      export type RecordNotPrimaryKey = PgCatalog.PgTransformNotPrimaryKey;
    }
    export namespace PgSequence {
      export type Record = PgCatalog.PgSequence;
      export type RecordNotPrimaryKey = PgCatalog.PgSequenceNotPrimaryKey;
    }
    export namespace PgPublication {
      export type Record = PgCatalog.PgPublication;
      export type RecordNotPrimaryKey = PgCatalog.PgPublicationNotPrimaryKey;
    }
    export namespace PgPublicationNamespace {
      export type Record = PgCatalog.PgPublicationNamespace;
      export type RecordNotPrimaryKey =
        PgCatalog.PgPublicationNamespaceNotPrimaryKey;
    }
    export namespace PgPublicationRel {
      export type Record = PgCatalog.PgPublicationRel;
      export type RecordNotPrimaryKey = PgCatalog.PgPublicationRelNotPrimaryKey;
    }
    export namespace PgSubscriptionRel {
      export type Record = PgCatalog.PgSubscriptionRel;
      export type RecordNotPrimaryKey =
        PgCatalog.PgSubscriptionRelNotPrimaryKey;
    }
    export namespace PgLargeobject {
      export type Record = PgCatalog.PgLargeobject;
      export type RecordNotPrimaryKey = PgCatalog.PgLargeobjectNotPrimaryKey;
    }
  }
}
export namespace Public {
  export namespace Tables {
    export namespace FilmActor {
      export type Record = Public.FilmActor;
      export type RecordNotPrimaryKey = Public.FilmActorNotPrimaryKey;
    }
    export namespace Address {
      export type Record = Public.Address;
      export type RecordNotPrimaryKey = Public.AddressNotPrimaryKey;
    }
    export namespace City {
      export type Record = Public.City;
      export type RecordNotPrimaryKey = Public.CityNotPrimaryKey;
    }
    export namespace Customer {
      export type Record = Public.Customer;
      export type RecordNotPrimaryKey = Public.CustomerNotPrimaryKey;
    }
    export namespace Actor {
      export type Record = Public.Actor;
      export type RecordNotPrimaryKey = Public.ActorNotPrimaryKey;
    }
    export namespace FilmCategory {
      export type Record = Public.FilmCategory;
      export type RecordNotPrimaryKey = Public.FilmCategoryNotPrimaryKey;
    }
    export namespace Inventory {
      export type Record = Public.Inventory;
      export type RecordNotPrimaryKey = Public.InventoryNotPrimaryKey;
    }
    export namespace Category {
      export type Record = Public.Category;
      export type RecordNotPrimaryKey = Public.CategoryNotPrimaryKey;
    }
    export namespace Country {
      export type Record = Public.Country;
      export type RecordNotPrimaryKey = Public.CountryNotPrimaryKey;
    }
    export namespace Language {
      export type Record = Public.Language;
      export type RecordNotPrimaryKey = Public.LanguageNotPrimaryKey;
    }
    export namespace Rental {
      export type Record = Public.Rental;
      export type RecordNotPrimaryKey = Public.RentalNotPrimaryKey;
    }
    export namespace Staff {
      export type Record = Public.Staff;
      export type RecordNotPrimaryKey = Public.StaffNotPrimaryKey;
    }
    export namespace Store {
      export type Record = Public.Store;
      export type RecordNotPrimaryKey = Public.StoreNotPrimaryKey;
    }
    export namespace Payment {
      export type Record = Public.Payment;
      export type RecordNotPrimaryKey = Public.PaymentNotPrimaryKey;
    }
    export namespace Film {
      export type Record = Public.Film;
      export type RecordNotPrimaryKey = Public.FilmNotPrimaryKey;
    }
  }
}
export namespace InformationSchema {
  export namespace Tables {
    export namespace SqlFeatures {
      export type Record = InformationSchema.SqlFeatures;
    }
    export namespace SqlImplementationInfo {
      export type Record = InformationSchema.SqlImplementationInfo;
    }
    export namespace SqlParts {
      export type Record = InformationSchema.SqlParts;
    }
    export namespace SqlSizing {
      export type Record = InformationSchema.SqlSizing;
    }
  }
}
// end string parsers

// BEGIN - Node side database connectivity layer
import {
  Context,
  initializeContext,
  PostgresDatabase,
} from "@embracesql/postgres";
import postgres from "postgres";

interface HasDatabase {
  database: Database;
}

export class Database extends PostgresDatabase {
  /**
   * Connect to your database server via URL, and return
   * a fully typed database you can use to access it.
   */
  static async connect(postgresUrl: string, props?: postgres.Options<never>) {
    return new Database(await initializeContext(postgresUrl, props));
  }

  /**
   * Use the database inside a transaction.
   *
   * A successful return is a commit.
   * An escaping exception is a rollback.
   */
  async withTransaction<T>(body: (database: Database) => Promise<T>) {
    if (this.context.sql.begin) {
      // root transaction
      return await this.context.sql.begin(
        async (sql) => await body(new Database({ ...this.context, sql })),
      );
    } else {
      // nested transaction
      const nested = this.context.sql as postgres.TransactionSql;
      return await nested.savepoint(
        async (sql) => await body(new Database({ ...this.context, sql })),
      );
    }
  }

  public Public = new (class implements HasDatabase {
    constructor(public database: Database) {}

    async FilmInStock(parameters: Public.FilmInStockArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.film_in_stock(pFilmId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pFilmId),
                  )},pStoreId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pStoreId),
                  )});
                  `;
      const results = response;
      const responseBody = results.map((x) =>
        this.parseFilmInStockResult(this.database.context, x.film_in_stock),
      ) as unknown as Public.FilmInStockResultset;
      return responseBody;
    }

    parseFilmInStockResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): Public.FilmInStockSingleResultsetRecord => {
      return context.procTypes.public_film_in_stock.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as Public.FilmInStockSingleResultsetRecord;
    };

    async FilmNotInStock(parameters: Public.FilmNotInStockArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.film_not_in_stock(pFilmId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pFilmId),
                  )},pStoreId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pStoreId),
                  )});
                  `;
      const results = response;
      const responseBody = results.map((x) =>
        this.parseFilmNotInStockResult(
          this.database.context,
          x.film_not_in_stock,
        ),
      ) as unknown as Public.FilmNotInStockResultset;
      return responseBody;
    }

    parseFilmNotInStockResult = (
      context: Context,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result: any,
    ): Public.FilmNotInStockSingleResultsetRecord => {
      return context.procTypes.public_film_not_in_stock.parseFromPostgresIfRecord(
        context,
        result,
      ) as unknown as Public.FilmNotInStockSingleResultsetRecord;
    };

    async GetCustomerBalance(parameters: Public.GetCustomerBalanceArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.get_customer_balance(pCustomerId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pCustomerId),
                  )},pEffectiveDate => ${typed.pg_catalog_timestamp(
                    undefinedIsNull(parameters.pEffectiveDate),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .get_customer_balance as unknown as Public.GetCustomerBalanceSingleResultsetRecord;
      return responseBody;
    }
    async InventoryHeldByCustomer(
      parameters: Public.InventoryHeldByCustomerArguments,
    ) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.inventory_held_by_customer(pInventoryId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pInventoryId),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .inventory_held_by_customer as unknown as Public.InventoryHeldByCustomerSingleResultsetRecord;
      return responseBody;
    }
    async InventoryInStock(parameters: Public.InventoryInStockArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.inventory_in_stock(pInventoryId => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.pInventoryId),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .inventory_in_stock as unknown as Public.InventoryInStockSingleResultsetRecord;
      return responseBody;
    }
    async LastDay(parameters: Public.LastDayArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.last_day( ${typed.pg_catalog_timestamp(
                    undefinedIsNull(parameters._0),
                  )});
                  `;
      const results = response;
      const responseBody = results?.[0]
        .last_day as unknown as Public.LastDaySingleResultsetRecord;
      return responseBody;
    }
    async RewardsReport(parameters: Public.RewardsReportArguments) {
      console.assert(parameters);
      const sql = this.database.context.sql;
      const typed = sql.typed as unknown as PostgresTypecasts;
      const response = await sql`
                  SELECT
                  public.rewards_report(minMonthlyPurchases => ${typed.pg_catalog_int4(
                    undefinedIsNull(parameters.minMonthlyPurchases),
                  )},minDollarAmountPurchased => ${typed.pg_catalog_numeric(
                    undefinedIsNull(parameters.minDollarAmountPurchased),
                  )});
                  `;
      const results = response;
      const responseBody = results.map(
        (x) => x.rewards_report,
      ) as unknown as Public.RewardsReportResultset;
      return responseBody;
    }

    public FilmActor = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byActorIdFilmId(
        parameters: Public.Tables.FilmActor.ByActorIdFilmId,
      ): Promise<Public.FilmActor> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT actor_id,film_id,last_update FROM public.film_actor WHERE actor_id = ${
            parameters.actorId === undefined
              ? sql("actor_id")
              : typed.pg_catalog_int2(parameters.actorId)
          } AND film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          }`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byFilmId(
        parameters: Public.Tables.FilmActor.ByFilmId,
      ): Promise<Public.FilmActor[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT actor_id,film_id,last_update FROM public.film_actor WHERE film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          }`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByActorIdFilmId(
        parameters: Public.Tables.FilmActor.ByActorIdFilmId,
      ): Promise<Public.FilmActor> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.film_actor WHERE actor_id = ${
            parameters.actorId === undefined
              ? sql("actor_id")
              : typed.pg_catalog_int2(parameters.actorId)
          } AND film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          } RETURNING actor_id,film_id,last_update
      `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByFilmId(
        parameters: Public.Tables.FilmActor.ByFilmId,
      ): Promise<Public.FilmActor[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.film_actor WHERE film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          } RETURNING actor_id,film_id,last_update
      `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByActorIdFilmId(
        parameters: Public.Tables.FilmActor.ByActorIdFilmId,
        values: Partial<Public.FilmActor>,
      ): Promise<Public.FilmActor> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film_actor SET actor_id = ${
          values.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int2(values.actorId)
        } , film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(values.filmId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE actor_id = ${
          parameters.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int2(parameters.actorId)
        } AND film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(parameters.filmId)
        } RETURNING actor_id,film_id,last_update`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByFilmId(
        parameters: Public.Tables.FilmActor.ByFilmId,
        values: Partial<Public.FilmActor>,
      ): Promise<Public.FilmActor[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film_actor SET actor_id = ${
          values.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int2(values.actorId)
        } , film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(values.filmId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(parameters.filmId)
        } RETURNING actor_id,film_id,last_update`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async create(
        values: Public.FilmActor | Public.FilmActorNotPrimaryKey,
      ): Promise<Public.FilmActor> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesFilmActorPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.film_actor (actor_id,film_id,last_update)
    VALUES (${
      values.actorId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.actorId)
    },${
      values.filmId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.filmId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (actor_id,film_id) DO UPDATE
    SET last_update = EXCLUDED.last_update
    RETURNING actor_id,film_id,last_update
    `;

          const results = response.map((record) => ({
            actorId: undefinedIsNull(record.actor_id),
            filmId: undefinedIsNull(record.film_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response = await sql`INSERT INTO public.film_actor (last_update)
    VALUES (${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING actor_id,film_id,last_update
    `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          filmId: undefinedIsNull(record.film_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Address = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAddressId(
        parameters: Public.Tables.Address.ByAddressId,
      ): Promise<Public.Address> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT address_id,address,address2,district,city_id,postal_code,phone,last_update FROM public.address WHERE address_id = ${
            parameters.addressId === undefined
              ? sql("address_id")
              : typed.pg_catalog_int4(parameters.addressId)
          }`;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byCityId(
        parameters: Public.Tables.Address.ByCityId,
      ): Promise<Public.Address[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT address_id,address,address2,district,city_id,postal_code,phone,last_update FROM public.address WHERE city_id = ${
            parameters.cityId === undefined
              ? sql("city_id")
              : typed.pg_catalog_int2(parameters.cityId)
          }`;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByAddressId(
        parameters: Public.Tables.Address.ByAddressId,
      ): Promise<Public.Address> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.address WHERE address_id = ${
            parameters.addressId === undefined
              ? sql("address_id")
              : typed.pg_catalog_int4(parameters.addressId)
          } RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update
      `;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByCityId(
        parameters: Public.Tables.Address.ByCityId,
      ): Promise<Public.Address[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.address WHERE city_id = ${
          parameters.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int2(parameters.cityId)
        } RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update
      `;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByAddressId(
        parameters: Public.Tables.Address.ByAddressId,
        values: Partial<Public.Address>,
      ): Promise<Public.Address> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.address SET address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int4(values.addressId)
        } , address = ${
          values.address === undefined
            ? sql("address")
            : typed.pg_catalog_varchar(values.address)
        } , address2 = ${
          values.address2 === undefined
            ? sql("address2")
            : typed.pg_catalog_varchar(values.address2)
        } , district = ${
          values.district === undefined
            ? sql("district")
            : typed.pg_catalog_varchar(values.district)
        } , city_id = ${
          values.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int2(values.cityId)
        } , postal_code = ${
          values.postalCode === undefined
            ? sql("postal_code")
            : typed.pg_catalog_varchar(values.postalCode)
        } , phone = ${
          values.phone === undefined
            ? sql("phone")
            : typed.pg_catalog_varchar(values.phone)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE address_id = ${
          parameters.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int4(parameters.addressId)
        } RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByCityId(
        parameters: Public.Tables.Address.ByCityId,
        values: Partial<Public.Address>,
      ): Promise<Public.Address[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.address SET address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int4(values.addressId)
        } , address = ${
          values.address === undefined
            ? sql("address")
            : typed.pg_catalog_varchar(values.address)
        } , address2 = ${
          values.address2 === undefined
            ? sql("address2")
            : typed.pg_catalog_varchar(values.address2)
        } , district = ${
          values.district === undefined
            ? sql("district")
            : typed.pg_catalog_varchar(values.district)
        } , city_id = ${
          values.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int2(values.cityId)
        } , postal_code = ${
          values.postalCode === undefined
            ? sql("postal_code")
            : typed.pg_catalog_varchar(values.postalCode)
        } , phone = ${
          values.phone === undefined
            ? sql("phone")
            : typed.pg_catalog_varchar(values.phone)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE city_id = ${
          parameters.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int2(parameters.cityId)
        } RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update`;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async create(
        values: Public.Address | Public.AddressNotPrimaryKey,
      ): Promise<Public.Address> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesAddressPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.address (address_id,address,address2,district,city_id,postal_code,phone,last_update)
    VALUES (${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.addressId)
    },${
      values.address === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.address)
    },${
      values.address2 === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.address2)
    },${
      values.district === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.district)
    },${
      values.cityId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.cityId)
    },${
      values.postalCode === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.postalCode)
    },${
      values.phone === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.phone)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (address_id) DO UPDATE
    SET address = EXCLUDED.address,address2 = EXCLUDED.address2,district = EXCLUDED.district,city_id = EXCLUDED.city_id,postal_code = EXCLUDED.postal_code,phone = EXCLUDED.phone,last_update = EXCLUDED.last_update
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update
    `;

          const results = response.map((record) => ({
            addressId: undefinedIsNull(record.address_id),
            address: undefinedIsNull(record.address),
            address2: undefinedIsNull(record.address2),
            district: undefinedIsNull(record.district),
            cityId: undefinedIsNull(record.city_id),
            postalCode: undefinedIsNull(record.postal_code),
            phone: undefinedIsNull(record.phone),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.address (address,address2,district,city_id,postal_code,phone,last_update)
    VALUES (${
      values.address === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.address)
    },${
      values.address2 === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.address2)
    },${
      values.district === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.district)
    },${
      values.cityId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.cityId)
    },${
      values.postalCode === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.postalCode)
    },${
      values.phone === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.phone)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING address_id,address,address2,district,city_id,postal_code,phone,last_update
    `;

        const results = response.map((record) => ({
          addressId: undefinedIsNull(record.address_id),
          address: undefinedIsNull(record.address),
          address2: undefinedIsNull(record.address2),
          district: undefinedIsNull(record.district),
          cityId: undefinedIsNull(record.city_id),
          postalCode: undefinedIsNull(record.postal_code),
          phone: undefinedIsNull(record.phone),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public City = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCityId(
        parameters: Public.Tables.City.ByCityId,
      ): Promise<Public.City> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT city_id,city,country_id,last_update FROM public.city WHERE city_id = ${
            parameters.cityId === undefined
              ? sql("city_id")
              : typed.pg_catalog_int4(parameters.cityId)
          }`;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byCountryId(
        parameters: Public.Tables.City.ByCountryId,
      ): Promise<Public.City[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT city_id,city,country_id,last_update FROM public.city WHERE country_id = ${
            parameters.countryId === undefined
              ? sql("country_id")
              : typed.pg_catalog_int2(parameters.countryId)
          }`;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByCityId(
        parameters: Public.Tables.City.ByCityId,
      ): Promise<Public.City> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.city WHERE city_id = ${
          parameters.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int4(parameters.cityId)
        } RETURNING city_id,city,country_id,last_update
      `;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByCountryId(
        parameters: Public.Tables.City.ByCountryId,
      ): Promise<Public.City[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.city WHERE country_id = ${
          parameters.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int2(parameters.countryId)
        } RETURNING city_id,city,country_id,last_update
      `;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByCityId(
        parameters: Public.Tables.City.ByCityId,
        values: Partial<Public.City>,
      ): Promise<Public.City> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.city SET city_id = ${
          values.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int4(values.cityId)
        } , city = ${
          values.city === undefined
            ? sql("city")
            : typed.pg_catalog_varchar(values.city)
        } , country_id = ${
          values.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int2(values.countryId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE city_id = ${
          parameters.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int4(parameters.cityId)
        } RETURNING city_id,city,country_id,last_update`;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByCountryId(
        parameters: Public.Tables.City.ByCountryId,
        values: Partial<Public.City>,
      ): Promise<Public.City[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.city SET city_id = ${
          values.cityId === undefined
            ? sql("city_id")
            : typed.pg_catalog_int4(values.cityId)
        } , city = ${
          values.city === undefined
            ? sql("city")
            : typed.pg_catalog_varchar(values.city)
        } , country_id = ${
          values.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int2(values.countryId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE country_id = ${
          parameters.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int2(parameters.countryId)
        } RETURNING city_id,city,country_id,last_update`;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async create(
        values: Public.City | Public.CityNotPrimaryKey,
      ): Promise<Public.City> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesCityPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.city (city_id,city,country_id,last_update)
    VALUES (${
      values.cityId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.cityId)
    },${
      values.city === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.city)
    },${
      values.countryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.countryId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (city_id) DO UPDATE
    SET city = EXCLUDED.city,country_id = EXCLUDED.country_id,last_update = EXCLUDED.last_update
    RETURNING city_id,city,country_id,last_update
    `;

          const results = response.map((record) => ({
            cityId: undefinedIsNull(record.city_id),
            city: undefinedIsNull(record.city),
            countryId: undefinedIsNull(record.country_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.city (city,country_id,last_update)
    VALUES (${
      values.city === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.city)
    },${
      values.countryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.countryId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING city_id,city,country_id,last_update
    `;

        const results = response.map((record) => ({
          cityId: undefinedIsNull(record.city_id),
          city: undefinedIsNull(record.city),
          countryId: undefinedIsNull(record.country_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Customer = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byAddressId(
        parameters: Public.Tables.Customer.ByAddressId,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active FROM public.customer WHERE address_id = ${
            parameters.addressId === undefined
              ? sql("address_id")
              : typed.pg_catalog_int2(parameters.addressId)
          }`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async byCustomerId(
        parameters: Public.Tables.Customer.ByCustomerId,
      ): Promise<Public.Customer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active FROM public.customer WHERE customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int4(parameters.customerId)
          }`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results[0];
      }

      async byLastName(
        parameters: Public.Tables.Customer.ByLastName,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active FROM public.customer WHERE last_name = ${
            parameters.lastName === undefined
              ? sql("last_name")
              : typed.pg_catalog_varchar(parameters.lastName)
          }`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async byStoreId(
        parameters: Public.Tables.Customer.ByStoreId,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active FROM public.customer WHERE store_id = ${
            parameters.storeId === undefined
              ? sql("store_id")
              : typed.pg_catalog_int2(parameters.storeId)
          }`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async deleteByAddressId(
        parameters: Public.Tables.Customer.ByAddressId,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.customer WHERE address_id = ${
            parameters.addressId === undefined
              ? sql("address_id")
              : typed.pg_catalog_int2(parameters.addressId)
          } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
      `;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async deleteByCustomerId(
        parameters: Public.Tables.Customer.ByCustomerId,
      ): Promise<Public.Customer> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.customer WHERE customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int4(parameters.customerId)
          } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
      `;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results[0];
      }

      async deleteByLastName(
        parameters: Public.Tables.Customer.ByLastName,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.customer WHERE last_name = ${
            parameters.lastName === undefined
              ? sql("last_name")
              : typed.pg_catalog_varchar(parameters.lastName)
          } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
      `;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async deleteByStoreId(
        parameters: Public.Tables.Customer.ByStoreId,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.customer WHERE store_id = ${
            parameters.storeId === undefined
              ? sql("store_id")
              : typed.pg_catalog_int2(parameters.storeId)
          } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
      `;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async updateByAddressId(
        parameters: Public.Tables.Customer.ByAddressId,
        values: Partial<Public.Customer>,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.customer SET customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int4(values.customerId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , email = ${
          values.email === undefined
            ? sql("email")
            : typed.pg_catalog_varchar(values.email)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , activebool = ${
          values.activebool === undefined
            ? sql("activebool")
            : typed.pg_catalog_bool(values.activebool)
        } , create_date = ${
          values.createDate === undefined
            ? sql("create_date")
            : typed.pg_catalog_date(values.createDate)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , active = ${
          values.active === undefined
            ? sql("active")
            : typed.pg_catalog_int4(values.active)
        } WHERE address_id = ${
          parameters.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(parameters.addressId)
        } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async updateByCustomerId(
        parameters: Public.Tables.Customer.ByCustomerId,
        values: Partial<Public.Customer>,
      ): Promise<Public.Customer> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.customer SET customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int4(values.customerId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , email = ${
          values.email === undefined
            ? sql("email")
            : typed.pg_catalog_varchar(values.email)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , activebool = ${
          values.activebool === undefined
            ? sql("activebool")
            : typed.pg_catalog_bool(values.activebool)
        } , create_date = ${
          values.createDate === undefined
            ? sql("create_date")
            : typed.pg_catalog_date(values.createDate)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , active = ${
          values.active === undefined
            ? sql("active")
            : typed.pg_catalog_int4(values.active)
        } WHERE customer_id = ${
          parameters.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int4(parameters.customerId)
        } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results[0];
      }

      async updateByLastName(
        parameters: Public.Tables.Customer.ByLastName,
        values: Partial<Public.Customer>,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.customer SET customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int4(values.customerId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , email = ${
          values.email === undefined
            ? sql("email")
            : typed.pg_catalog_varchar(values.email)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , activebool = ${
          values.activebool === undefined
            ? sql("activebool")
            : typed.pg_catalog_bool(values.activebool)
        } , create_date = ${
          values.createDate === undefined
            ? sql("create_date")
            : typed.pg_catalog_date(values.createDate)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , active = ${
          values.active === undefined
            ? sql("active")
            : typed.pg_catalog_int4(values.active)
        } WHERE last_name = ${
          parameters.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(parameters.lastName)
        } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async updateByStoreId(
        parameters: Public.Tables.Customer.ByStoreId,
        values: Partial<Public.Customer>,
      ): Promise<Public.Customer[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.customer SET customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int4(values.customerId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , email = ${
          values.email === undefined
            ? sql("email")
            : typed.pg_catalog_varchar(values.email)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , activebool = ${
          values.activebool === undefined
            ? sql("activebool")
            : typed.pg_catalog_bool(values.activebool)
        } , create_date = ${
          values.createDate === undefined
            ? sql("create_date")
            : typed.pg_catalog_date(values.createDate)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , active = ${
          values.active === undefined
            ? sql("active")
            : typed.pg_catalog_int4(values.active)
        } WHERE store_id = ${
          parameters.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(parameters.storeId)
        } RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active`;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results;
      }

      async create(
        values: Public.Customer | Public.CustomerNotPrimaryKey,
      ): Promise<Public.Customer> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesCustomerPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.customer (customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active)
    VALUES (${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.customerId)
    },${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.email === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.email)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.activebool === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bool(values.activebool)
    },${
      values.createDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_date(values.createDate)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.active === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.active)
    })
    ON CONFLICT (customer_id) DO UPDATE
    SET store_id = EXCLUDED.store_id,first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,email = EXCLUDED.email,address_id = EXCLUDED.address_id,activebool = EXCLUDED.activebool,create_date = EXCLUDED.create_date,last_update = EXCLUDED.last_update,active = EXCLUDED.active
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
    `;

          const results = response.map((record) => ({
            customerId: undefinedIsNull(record.customer_id),
            storeId: undefinedIsNull(record.store_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            email: undefinedIsNull(record.email),
            addressId: undefinedIsNull(record.address_id),
            activebool: undefinedIsNull(record.activebool),
            createDate: undefinedIsNull(record.create_date),
            lastUpdate: undefinedIsNull(record.last_update),
            active: undefinedIsNull(record.active),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.customer (store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active)
    VALUES (${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.email === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.email)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.activebool === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bool(values.activebool)
    },${
      values.createDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_date(values.createDate)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.active === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.active)
    })
    RETURNING customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_update,active
    `;

        const results = response.map((record) => ({
          customerId: undefinedIsNull(record.customer_id),
          storeId: undefinedIsNull(record.store_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          email: undefinedIsNull(record.email),
          addressId: undefinedIsNull(record.address_id),
          activebool: undefinedIsNull(record.activebool),
          createDate: undefinedIsNull(record.create_date),
          lastUpdate: undefinedIsNull(record.last_update),
          active: undefinedIsNull(record.active),
        }));
        return results[0];
      }
    })(this);

    public Actor = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byActorId(
        parameters: Public.Tables.Actor.ByActorId,
      ): Promise<Public.Actor> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT actor_id,first_name,last_name,last_update FROM public.actor WHERE actor_id = ${
            parameters.actorId === undefined
              ? sql("actor_id")
              : typed.pg_catalog_int4(parameters.actorId)
          }`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byLastName(
        parameters: Public.Tables.Actor.ByLastName,
      ): Promise<Public.Actor[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT actor_id,first_name,last_name,last_update FROM public.actor WHERE last_name = ${
            parameters.lastName === undefined
              ? sql("last_name")
              : typed.pg_catalog_varchar(parameters.lastName)
          }`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByActorId(
        parameters: Public.Tables.Actor.ByActorId,
      ): Promise<Public.Actor> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.actor WHERE actor_id = ${
          parameters.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int4(parameters.actorId)
        } RETURNING actor_id,first_name,last_name,last_update
      `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByLastName(
        parameters: Public.Tables.Actor.ByLastName,
      ): Promise<Public.Actor[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.actor WHERE last_name = ${
          parameters.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(parameters.lastName)
        } RETURNING actor_id,first_name,last_name,last_update
      `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByActorId(
        parameters: Public.Tables.Actor.ByActorId,
        values: Partial<Public.Actor>,
      ): Promise<Public.Actor> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.actor SET actor_id = ${
          values.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int4(values.actorId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE actor_id = ${
          parameters.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int4(parameters.actorId)
        } RETURNING actor_id,first_name,last_name,last_update`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByLastName(
        parameters: Public.Tables.Actor.ByLastName,
        values: Partial<Public.Actor>,
      ): Promise<Public.Actor[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.actor SET actor_id = ${
          values.actorId === undefined
            ? sql("actor_id")
            : typed.pg_catalog_int4(values.actorId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE last_name = ${
          parameters.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(parameters.lastName)
        } RETURNING actor_id,first_name,last_name,last_update`;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async create(
        values: Public.Actor | Public.ActorNotPrimaryKey,
      ): Promise<Public.Actor> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesActorPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.actor (actor_id,first_name,last_name,last_update)
    VALUES (${
      values.actorId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.actorId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (actor_id) DO UPDATE
    SET first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,last_update = EXCLUDED.last_update
    RETURNING actor_id,first_name,last_name,last_update
    `;

          const results = response.map((record) => ({
            actorId: undefinedIsNull(record.actor_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.actor (first_name,last_name,last_update)
    VALUES (${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING actor_id,first_name,last_name,last_update
    `;

        const results = response.map((record) => ({
          actorId: undefinedIsNull(record.actor_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public FilmCategory = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byFilmIdCategoryId(
        parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
      ): Promise<Public.FilmCategory> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT film_id,category_id,last_update FROM public.film_category WHERE film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          } AND category_id = ${
            parameters.categoryId === undefined
              ? sql("category_id")
              : typed.pg_catalog_int2(parameters.categoryId)
          }`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          categoryId: undefinedIsNull(record.category_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByFilmIdCategoryId(
        parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
      ): Promise<Public.FilmCategory> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.film_category WHERE film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          } AND category_id = ${
            parameters.categoryId === undefined
              ? sql("category_id")
              : typed.pg_catalog_int2(parameters.categoryId)
          } RETURNING film_id,category_id,last_update
      `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          categoryId: undefinedIsNull(record.category_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByFilmIdCategoryId(
        parameters: Public.Tables.FilmCategory.ByFilmIdCategoryId,
        values: Partial<Public.FilmCategory>,
      ): Promise<Public.FilmCategory> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film_category SET film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(values.filmId)
        } , category_id = ${
          values.categoryId === undefined
            ? sql("category_id")
            : typed.pg_catalog_int2(values.categoryId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(parameters.filmId)
        } AND category_id = ${
          parameters.categoryId === undefined
            ? sql("category_id")
            : typed.pg_catalog_int2(parameters.categoryId)
        } RETURNING film_id,category_id,last_update`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          categoryId: undefinedIsNull(record.category_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.FilmCategory | Public.FilmCategoryNotPrimaryKey,
      ): Promise<Public.FilmCategory> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesFilmCategoryPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.film_category (film_id,category_id,last_update)
    VALUES (${
      values.filmId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.filmId)
    },${
      values.categoryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.categoryId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (film_id,category_id) DO UPDATE
    SET last_update = EXCLUDED.last_update
    RETURNING film_id,category_id,last_update
    `;

          const results = response.map((record) => ({
            filmId: undefinedIsNull(record.film_id),
            categoryId: undefinedIsNull(record.category_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.film_category (last_update)
    VALUES (${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING film_id,category_id,last_update
    `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          categoryId: undefinedIsNull(record.category_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Inventory = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byInventoryId(
        parameters: Public.Tables.Inventory.ByInventoryId,
      ): Promise<Public.Inventory> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inventory_id,film_id,store_id,last_update FROM public.inventory WHERE inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          }`;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byStoreIdFilmId(
        parameters: Public.Tables.Inventory.ByStoreIdFilmId,
      ): Promise<Public.Inventory[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT inventory_id,film_id,store_id,last_update FROM public.inventory WHERE store_id = ${
            parameters.storeId === undefined
              ? sql("store_id")
              : typed.pg_catalog_int2(parameters.storeId)
          } AND film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          }`;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByInventoryId(
        parameters: Public.Tables.Inventory.ByInventoryId,
      ): Promise<Public.Inventory> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.inventory WHERE inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          } RETURNING inventory_id,film_id,store_id,last_update
      `;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByStoreIdFilmId(
        parameters: Public.Tables.Inventory.ByStoreIdFilmId,
      ): Promise<Public.Inventory[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.inventory WHERE store_id = ${
            parameters.storeId === undefined
              ? sql("store_id")
              : typed.pg_catalog_int2(parameters.storeId)
          } AND film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int2(parameters.filmId)
          } RETURNING inventory_id,film_id,store_id,last_update
      `;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByInventoryId(
        parameters: Public.Tables.Inventory.ByInventoryId,
        values: Partial<Public.Inventory>,
      ): Promise<Public.Inventory> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.inventory SET inventory_id = ${
          values.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(values.inventoryId)
        } , film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(values.filmId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE inventory_id = ${
          parameters.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(parameters.inventoryId)
        } RETURNING inventory_id,film_id,store_id,last_update`;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByStoreIdFilmId(
        parameters: Public.Tables.Inventory.ByStoreIdFilmId,
        values: Partial<Public.Inventory>,
      ): Promise<Public.Inventory[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.inventory SET inventory_id = ${
          values.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(values.inventoryId)
        } , film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(values.filmId)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE store_id = ${
          parameters.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(parameters.storeId)
        } AND film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int2(parameters.filmId)
        } RETURNING inventory_id,film_id,store_id,last_update`;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async create(
        values: Public.Inventory | Public.InventoryNotPrimaryKey,
      ): Promise<Public.Inventory> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesInventoryPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.inventory (inventory_id,film_id,store_id,last_update)
    VALUES (${
      values.inventoryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.inventoryId)
    },${
      values.filmId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.filmId)
    },${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (inventory_id) DO UPDATE
    SET film_id = EXCLUDED.film_id,store_id = EXCLUDED.store_id,last_update = EXCLUDED.last_update
    RETURNING inventory_id,film_id,store_id,last_update
    `;

          const results = response.map((record) => ({
            inventoryId: undefinedIsNull(record.inventory_id),
            filmId: undefinedIsNull(record.film_id),
            storeId: undefinedIsNull(record.store_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.inventory (film_id,store_id,last_update)
    VALUES (${
      values.filmId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.filmId)
    },${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING inventory_id,film_id,store_id,last_update
    `;

        const results = response.map((record) => ({
          inventoryId: undefinedIsNull(record.inventory_id),
          filmId: undefinedIsNull(record.film_id),
          storeId: undefinedIsNull(record.store_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Category = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCategoryId(
        parameters: Public.Tables.Category.ByCategoryId,
      ): Promise<Public.Category> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT category_id,name,last_update FROM public.category WHERE category_id = ${
            parameters.categoryId === undefined
              ? sql("category_id")
              : typed.pg_catalog_int4(parameters.categoryId)
          }`;

        const results = response.map((record) => ({
          categoryId: undefinedIsNull(record.category_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByCategoryId(
        parameters: Public.Tables.Category.ByCategoryId,
      ): Promise<Public.Category> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.category WHERE category_id = ${
            parameters.categoryId === undefined
              ? sql("category_id")
              : typed.pg_catalog_int4(parameters.categoryId)
          } RETURNING category_id,name,last_update
      `;

        const results = response.map((record) => ({
          categoryId: undefinedIsNull(record.category_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByCategoryId(
        parameters: Public.Tables.Category.ByCategoryId,
        values: Partial<Public.Category>,
      ): Promise<Public.Category> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.category SET category_id = ${
          values.categoryId === undefined
            ? sql("category_id")
            : typed.pg_catalog_int4(values.categoryId)
        } , name = ${
          values.name === undefined
            ? sql("name")
            : typed.pg_catalog_varchar(values.name)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE category_id = ${
          parameters.categoryId === undefined
            ? sql("category_id")
            : typed.pg_catalog_int4(parameters.categoryId)
        } RETURNING category_id,name,last_update`;

        const results = response.map((record) => ({
          categoryId: undefinedIsNull(record.category_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.Category | Public.CategoryNotPrimaryKey,
      ): Promise<Public.Category> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesCategoryPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.category (category_id,name,last_update)
    VALUES (${
      values.categoryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.categoryId)
    },${
      values.name === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.name)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (category_id) DO UPDATE
    SET name = EXCLUDED.name,last_update = EXCLUDED.last_update
    RETURNING category_id,name,last_update
    `;

          const results = response.map((record) => ({
            categoryId: undefinedIsNull(record.category_id),
            name: undefinedIsNull(record.name),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.category (name,last_update)
    VALUES (${
      values.name === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.name)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING category_id,name,last_update
    `;

        const results = response.map((record) => ({
          categoryId: undefinedIsNull(record.category_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Country = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCountryId(
        parameters: Public.Tables.Country.ByCountryId,
      ): Promise<Public.Country> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT country_id,country,last_update FROM public.country WHERE country_id = ${
            parameters.countryId === undefined
              ? sql("country_id")
              : typed.pg_catalog_int4(parameters.countryId)
          }`;

        const results = response.map((record) => ({
          countryId: undefinedIsNull(record.country_id),
          country: undefinedIsNull(record.country),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByCountryId(
        parameters: Public.Tables.Country.ByCountryId,
      ): Promise<Public.Country> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.country WHERE country_id = ${
            parameters.countryId === undefined
              ? sql("country_id")
              : typed.pg_catalog_int4(parameters.countryId)
          } RETURNING country_id,country,last_update
      `;

        const results = response.map((record) => ({
          countryId: undefinedIsNull(record.country_id),
          country: undefinedIsNull(record.country),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByCountryId(
        parameters: Public.Tables.Country.ByCountryId,
        values: Partial<Public.Country>,
      ): Promise<Public.Country> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.country SET country_id = ${
          values.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int4(values.countryId)
        } , country = ${
          values.country === undefined
            ? sql("country")
            : typed.pg_catalog_varchar(values.country)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE country_id = ${
          parameters.countryId === undefined
            ? sql("country_id")
            : typed.pg_catalog_int4(parameters.countryId)
        } RETURNING country_id,country,last_update`;

        const results = response.map((record) => ({
          countryId: undefinedIsNull(record.country_id),
          country: undefinedIsNull(record.country),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.Country | Public.CountryNotPrimaryKey,
      ): Promise<Public.Country> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesCountryPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.country (country_id,country,last_update)
    VALUES (${
      values.countryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.countryId)
    },${
      values.country === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.country)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (country_id) DO UPDATE
    SET country = EXCLUDED.country,last_update = EXCLUDED.last_update
    RETURNING country_id,country,last_update
    `;

          const results = response.map((record) => ({
            countryId: undefinedIsNull(record.country_id),
            country: undefinedIsNull(record.country),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.country (country,last_update)
    VALUES (${
      values.country === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.country)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING country_id,country,last_update
    `;

        const results = response.map((record) => ({
          countryId: undefinedIsNull(record.country_id),
          country: undefinedIsNull(record.country),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Language = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byLanguageId(
        parameters: Public.Tables.Language.ByLanguageId,
      ): Promise<Public.Language> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT language_id,name,last_update FROM public.language WHERE language_id = ${
            parameters.languageId === undefined
              ? sql("language_id")
              : typed.pg_catalog_int4(parameters.languageId)
          }`;

        const results = response.map((record) => ({
          languageId: undefinedIsNull(record.language_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByLanguageId(
        parameters: Public.Tables.Language.ByLanguageId,
      ): Promise<Public.Language> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.language WHERE language_id = ${
            parameters.languageId === undefined
              ? sql("language_id")
              : typed.pg_catalog_int4(parameters.languageId)
          } RETURNING language_id,name,last_update
      `;

        const results = response.map((record) => ({
          languageId: undefinedIsNull(record.language_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByLanguageId(
        parameters: Public.Tables.Language.ByLanguageId,
        values: Partial<Public.Language>,
      ): Promise<Public.Language> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.language SET language_id = ${
          values.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int4(values.languageId)
        } , name = ${
          values.name === undefined
            ? sql("name")
            : typed.pg_catalog_bpchar(values.name)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE language_id = ${
          parameters.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int4(parameters.languageId)
        } RETURNING language_id,name,last_update`;

        const results = response.map((record) => ({
          languageId: undefinedIsNull(record.language_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.Language | Public.LanguageNotPrimaryKey,
      ): Promise<Public.Language> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesLanguagePrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.language (language_id,name,last_update)
    VALUES (${
      values.languageId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.languageId)
    },${
      values.name === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bpchar(values.name)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (language_id) DO UPDATE
    SET name = EXCLUDED.name,last_update = EXCLUDED.last_update
    RETURNING language_id,name,last_update
    `;

          const results = response.map((record) => ({
            languageId: undefinedIsNull(record.language_id),
            name: undefinedIsNull(record.name),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.language (name,last_update)
    VALUES (${
      values.name === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bpchar(values.name)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING language_id,name,last_update
    `;

        const results = response.map((record) => ({
          languageId: undefinedIsNull(record.language_id),
          name: undefinedIsNull(record.name),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Rental = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byInventoryId(
        parameters: Public.Tables.Rental.ByInventoryId,
      ): Promise<Public.Rental[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update FROM public.rental WHERE inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          }`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async byRentalDateInventoryIdCustomerId(
        parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update FROM public.rental WHERE rental_date = ${
            parameters.rentalDate === undefined
              ? sql("rental_date")
              : typed.pg_catalog_timestamp(parameters.rentalDate)
          } AND inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          } AND customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int2(parameters.customerId)
          }`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byRentalId(
        parameters: Public.Tables.Rental.ByRentalId,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update FROM public.rental WHERE rental_id = ${
            parameters.rentalId === undefined
              ? sql("rental_id")
              : typed.pg_catalog_int4(parameters.rentalId)
          }`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByInventoryId(
        parameters: Public.Tables.Rental.ByInventoryId,
      ): Promise<Public.Rental[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.rental WHERE inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
      `;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async deleteByRentalDateInventoryIdCustomerId(
        parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.rental WHERE rental_date = ${
            parameters.rentalDate === undefined
              ? sql("rental_date")
              : typed.pg_catalog_timestamp(parameters.rentalDate)
          } AND inventory_id = ${
            parameters.inventoryId === undefined
              ? sql("inventory_id")
              : typed.pg_catalog_int4(parameters.inventoryId)
          } AND customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int2(parameters.customerId)
          } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
      `;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByRentalId(
        parameters: Public.Tables.Rental.ByRentalId,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.rental WHERE rental_id = ${
            parameters.rentalId === undefined
              ? sql("rental_id")
              : typed.pg_catalog_int4(parameters.rentalId)
          } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
      `;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByInventoryId(
        parameters: Public.Tables.Rental.ByInventoryId,
        values: Partial<Public.Rental>,
      ): Promise<Public.Rental[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.rental SET rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , rental_date = ${
          values.rentalDate === undefined
            ? sql("rental_date")
            : typed.pg_catalog_timestamp(values.rentalDate)
        } , inventory_id = ${
          values.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(values.inventoryId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , return_date = ${
          values.returnDate === undefined
            ? sql("return_date")
            : typed.pg_catalog_timestamp(values.returnDate)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE inventory_id = ${
          parameters.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(parameters.inventoryId)
        } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results;
      }

      async updateByRentalDateInventoryIdCustomerId(
        parameters: Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
        values: Partial<Public.Rental>,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.rental SET rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , rental_date = ${
          values.rentalDate === undefined
            ? sql("rental_date")
            : typed.pg_catalog_timestamp(values.rentalDate)
        } , inventory_id = ${
          values.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(values.inventoryId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , return_date = ${
          values.returnDate === undefined
            ? sql("return_date")
            : typed.pg_catalog_timestamp(values.returnDate)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE rental_date = ${
          parameters.rentalDate === undefined
            ? sql("rental_date")
            : typed.pg_catalog_timestamp(parameters.rentalDate)
        } AND inventory_id = ${
          parameters.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(parameters.inventoryId)
        } AND customer_id = ${
          parameters.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(parameters.customerId)
        } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByRentalId(
        parameters: Public.Tables.Rental.ByRentalId,
        values: Partial<Public.Rental>,
      ): Promise<Public.Rental> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.rental SET rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , rental_date = ${
          values.rentalDate === undefined
            ? sql("rental_date")
            : typed.pg_catalog_timestamp(values.rentalDate)
        } , inventory_id = ${
          values.inventoryId === undefined
            ? sql("inventory_id")
            : typed.pg_catalog_int4(values.inventoryId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , return_date = ${
          values.returnDate === undefined
            ? sql("return_date")
            : typed.pg_catalog_timestamp(values.returnDate)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE rental_id = ${
          parameters.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(parameters.rentalId)
        } RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update`;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.Rental | Public.RentalNotPrimaryKey,
      ): Promise<Public.Rental> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesRentalPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.rental (rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update)
    VALUES (${
      values.rentalId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.rentalId)
    },${
      values.rentalDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.rentalDate)
    },${
      values.inventoryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.inventoryId)
    },${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.customerId)
    },${
      values.returnDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.returnDate)
    },${
      values.staffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.staffId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (rental_id) DO UPDATE
    SET rental_date = EXCLUDED.rental_date,inventory_id = EXCLUDED.inventory_id,customer_id = EXCLUDED.customer_id,return_date = EXCLUDED.return_date,staff_id = EXCLUDED.staff_id,last_update = EXCLUDED.last_update
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
    `;

          const results = response.map((record) => ({
            rentalId: undefinedIsNull(record.rental_id),
            rentalDate: undefinedIsNull(record.rental_date),
            inventoryId: undefinedIsNull(record.inventory_id),
            customerId: undefinedIsNull(record.customer_id),
            returnDate: undefinedIsNull(record.return_date),
            staffId: undefinedIsNull(record.staff_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.rental (rental_date,inventory_id,customer_id,return_date,staff_id,last_update)
    VALUES (${
      values.rentalDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.rentalDate)
    },${
      values.inventoryId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.inventoryId)
    },${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.customerId)
    },${
      values.returnDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.returnDate)
    },${
      values.staffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.staffId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING rental_id,rental_date,inventory_id,customer_id,return_date,staff_id,last_update
    `;

        const results = response.map((record) => ({
          rentalId: undefinedIsNull(record.rental_id),
          rentalDate: undefinedIsNull(record.rental_date),
          inventoryId: undefinedIsNull(record.inventory_id),
          customerId: undefinedIsNull(record.customer_id),
          returnDate: undefinedIsNull(record.return_date),
          staffId: undefinedIsNull(record.staff_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Staff = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byStaffId(
        parameters: Public.Tables.Staff.ByStaffId,
      ): Promise<Public.Staff> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture FROM public.staff WHERE staff_id = ${
            parameters.staffId === undefined
              ? sql("staff_id")
              : typed.pg_catalog_int4(parameters.staffId)
          }`;

        const results = response.map((record) => ({
          staffId: undefinedIsNull(record.staff_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          addressId: undefinedIsNull(record.address_id),
          email: undefinedIsNull(record.email),
          storeId: undefinedIsNull(record.store_id),
          active: undefinedIsNull(record.active),
          username: undefinedIsNull(record.username),
          password: undefinedIsNull(record.password),
          lastUpdate: undefinedIsNull(record.last_update),
          picture: undefinedIsNull(record.picture),
        }));
        return results[0];
      }

      async deleteByStaffId(
        parameters: Public.Tables.Staff.ByStaffId,
      ): Promise<Public.Staff> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.staff WHERE staff_id = ${
          parameters.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int4(parameters.staffId)
        } RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture
      `;

        const results = response.map((record) => ({
          staffId: undefinedIsNull(record.staff_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          addressId: undefinedIsNull(record.address_id),
          email: undefinedIsNull(record.email),
          storeId: undefinedIsNull(record.store_id),
          active: undefinedIsNull(record.active),
          username: undefinedIsNull(record.username),
          password: undefinedIsNull(record.password),
          lastUpdate: undefinedIsNull(record.last_update),
          picture: undefinedIsNull(record.picture),
        }));
        return results[0];
      }

      async updateByStaffId(
        parameters: Public.Tables.Staff.ByStaffId,
        values: Partial<Public.Staff>,
      ): Promise<Public.Staff> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.staff SET staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int4(values.staffId)
        } , first_name = ${
          values.firstName === undefined
            ? sql("first_name")
            : typed.pg_catalog_varchar(values.firstName)
        } , last_name = ${
          values.lastName === undefined
            ? sql("last_name")
            : typed.pg_catalog_varchar(values.lastName)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , email = ${
          values.email === undefined
            ? sql("email")
            : typed.pg_catalog_varchar(values.email)
        } , store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int2(values.storeId)
        } , active = ${
          values.active === undefined
            ? sql("active")
            : typed.pg_catalog_bool(values.active)
        } , username = ${
          values.username === undefined
            ? sql("username")
            : typed.pg_catalog_varchar(values.username)
        } , password = ${
          values.password === undefined
            ? sql("password")
            : typed.pg_catalog_varchar(values.password)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , picture = ${
          values.picture === undefined
            ? sql("picture")
            : typed.pg_catalog_bytea(values.picture)
        } WHERE staff_id = ${
          parameters.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int4(parameters.staffId)
        } RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture`;

        const results = response.map((record) => ({
          staffId: undefinedIsNull(record.staff_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          addressId: undefinedIsNull(record.address_id),
          email: undefinedIsNull(record.email),
          storeId: undefinedIsNull(record.store_id),
          active: undefinedIsNull(record.active),
          username: undefinedIsNull(record.username),
          password: undefinedIsNull(record.password),
          lastUpdate: undefinedIsNull(record.last_update),
          picture: undefinedIsNull(record.picture),
        }));
        return results[0];
      }

      async create(
        values: Public.Staff | Public.StaffNotPrimaryKey,
      ): Promise<Public.Staff> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesStaffPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.staff (staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture)
    VALUES (${
      values.staffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.staffId)
    },${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.email === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.email)
    },${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.active === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bool(values.active)
    },${
      values.username === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.username)
    },${
      values.password === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.password)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.picture === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bytea(values.picture)
    })
    ON CONFLICT (staff_id) DO UPDATE
    SET first_name = EXCLUDED.first_name,last_name = EXCLUDED.last_name,address_id = EXCLUDED.address_id,email = EXCLUDED.email,store_id = EXCLUDED.store_id,active = EXCLUDED.active,username = EXCLUDED.username,password = EXCLUDED.password,last_update = EXCLUDED.last_update,picture = EXCLUDED.picture
    RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture
    `;

          const results = response.map((record) => ({
            staffId: undefinedIsNull(record.staff_id),
            firstName: undefinedIsNull(record.first_name),
            lastName: undefinedIsNull(record.last_name),
            addressId: undefinedIsNull(record.address_id),
            email: undefinedIsNull(record.email),
            storeId: undefinedIsNull(record.store_id),
            active: undefinedIsNull(record.active),
            username: undefinedIsNull(record.username),
            password: undefinedIsNull(record.password),
            lastUpdate: undefinedIsNull(record.last_update),
            picture: undefinedIsNull(record.picture),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.staff (first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture)
    VALUES (${
      values.firstName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.firstName)
    },${
      values.lastName === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.lastName)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.email === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.email)
    },${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.storeId)
    },${
      values.active === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bool(values.active)
    },${
      values.username === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.username)
    },${
      values.password === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.password)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.picture === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_bytea(values.picture)
    })
    RETURNING staff_id,first_name,last_name,address_id,email,store_id,active,username,password,last_update,picture
    `;

        const results = response.map((record) => ({
          staffId: undefinedIsNull(record.staff_id),
          firstName: undefinedIsNull(record.first_name),
          lastName: undefinedIsNull(record.last_name),
          addressId: undefinedIsNull(record.address_id),
          email: undefinedIsNull(record.email),
          storeId: undefinedIsNull(record.store_id),
          active: undefinedIsNull(record.active),
          username: undefinedIsNull(record.username),
          password: undefinedIsNull(record.password),
          lastUpdate: undefinedIsNull(record.last_update),
          picture: undefinedIsNull(record.picture),
        }));
        return results[0];
      }
    })(this);

    public Store = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byManagerStaffId(
        parameters: Public.Tables.Store.ByManagerStaffId,
      ): Promise<Public.Store> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT store_id,manager_staff_id,address_id,last_update FROM public.store WHERE manager_staff_id = ${
            parameters.managerStaffId === undefined
              ? sql("manager_staff_id")
              : typed.pg_catalog_int2(parameters.managerStaffId)
          }`;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async byStoreId(
        parameters: Public.Tables.Store.ByStoreId,
      ): Promise<Public.Store> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT store_id,manager_staff_id,address_id,last_update FROM public.store WHERE store_id = ${
            parameters.storeId === undefined
              ? sql("store_id")
              : typed.pg_catalog_int4(parameters.storeId)
          }`;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByManagerStaffId(
        parameters: Public.Tables.Store.ByManagerStaffId,
      ): Promise<Public.Store> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.store WHERE manager_staff_id = ${
            parameters.managerStaffId === undefined
              ? sql("manager_staff_id")
              : typed.pg_catalog_int2(parameters.managerStaffId)
          } RETURNING store_id,manager_staff_id,address_id,last_update
      `;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async deleteByStoreId(
        parameters: Public.Tables.Store.ByStoreId,
      ): Promise<Public.Store> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.store WHERE store_id = ${
          parameters.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int4(parameters.storeId)
        } RETURNING store_id,manager_staff_id,address_id,last_update
      `;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByManagerStaffId(
        parameters: Public.Tables.Store.ByManagerStaffId,
        values: Partial<Public.Store>,
      ): Promise<Public.Store> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.store SET store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int4(values.storeId)
        } , manager_staff_id = ${
          values.managerStaffId === undefined
            ? sql("manager_staff_id")
            : typed.pg_catalog_int2(values.managerStaffId)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE manager_staff_id = ${
          parameters.managerStaffId === undefined
            ? sql("manager_staff_id")
            : typed.pg_catalog_int2(parameters.managerStaffId)
        } RETURNING store_id,manager_staff_id,address_id,last_update`;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async updateByStoreId(
        parameters: Public.Tables.Store.ByStoreId,
        values: Partial<Public.Store>,
      ): Promise<Public.Store> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.store SET store_id = ${
          values.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int4(values.storeId)
        } , manager_staff_id = ${
          values.managerStaffId === undefined
            ? sql("manager_staff_id")
            : typed.pg_catalog_int2(values.managerStaffId)
        } , address_id = ${
          values.addressId === undefined
            ? sql("address_id")
            : typed.pg_catalog_int2(values.addressId)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } WHERE store_id = ${
          parameters.storeId === undefined
            ? sql("store_id")
            : typed.pg_catalog_int4(parameters.storeId)
        } RETURNING store_id,manager_staff_id,address_id,last_update`;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }

      async create(
        values: Public.Store | Public.StoreNotPrimaryKey,
      ): Promise<Public.Store> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesStorePrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.store (store_id,manager_staff_id,address_id,last_update)
    VALUES (${
      values.storeId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.storeId)
    },${
      values.managerStaffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.managerStaffId)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    ON CONFLICT (store_id) DO UPDATE
    SET manager_staff_id = EXCLUDED.manager_staff_id,address_id = EXCLUDED.address_id,last_update = EXCLUDED.last_update
    RETURNING store_id,manager_staff_id,address_id,last_update
    `;

          const results = response.map((record) => ({
            storeId: undefinedIsNull(record.store_id),
            managerStaffId: undefinedIsNull(record.manager_staff_id),
            addressId: undefinedIsNull(record.address_id),
            lastUpdate: undefinedIsNull(record.last_update),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.store (manager_staff_id,address_id,last_update)
    VALUES (${
      values.managerStaffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.managerStaffId)
    },${
      values.addressId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.addressId)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    })
    RETURNING store_id,manager_staff_id,address_id,last_update
    `;

        const results = response.map((record) => ({
          storeId: undefinedIsNull(record.store_id),
          managerStaffId: undefinedIsNull(record.manager_staff_id),
          addressId: undefinedIsNull(record.address_id),
          lastUpdate: undefinedIsNull(record.last_update),
        }));
        return results[0];
      }
    })(this);

    public Payment = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byCustomerId(
        parameters: Public.Tables.Payment.ByCustomerId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT payment_id,customer_id,staff_id,rental_id,amount,payment_date FROM public.payment WHERE customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int2(parameters.customerId)
          }`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async byPaymentId(
        parameters: Public.Tables.Payment.ByPaymentId,
      ): Promise<Public.Payment> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT payment_id,customer_id,staff_id,rental_id,amount,payment_date FROM public.payment WHERE payment_id = ${
            parameters.paymentId === undefined
              ? sql("payment_id")
              : typed.pg_catalog_int4(parameters.paymentId)
          }`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results[0];
      }

      async byRentalId(
        parameters: Public.Tables.Payment.ByRentalId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT payment_id,customer_id,staff_id,rental_id,amount,payment_date FROM public.payment WHERE rental_id = ${
            parameters.rentalId === undefined
              ? sql("rental_id")
              : typed.pg_catalog_int4(parameters.rentalId)
          }`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async byStaffId(
        parameters: Public.Tables.Payment.ByStaffId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT payment_id,customer_id,staff_id,rental_id,amount,payment_date FROM public.payment WHERE staff_id = ${
            parameters.staffId === undefined
              ? sql("staff_id")
              : typed.pg_catalog_int2(parameters.staffId)
          }`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async deleteByCustomerId(
        parameters: Public.Tables.Payment.ByCustomerId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.payment WHERE customer_id = ${
            parameters.customerId === undefined
              ? sql("customer_id")
              : typed.pg_catalog_int2(parameters.customerId)
          } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
      `;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async deleteByPaymentId(
        parameters: Public.Tables.Payment.ByPaymentId,
      ): Promise<Public.Payment> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.payment WHERE payment_id = ${
            parameters.paymentId === undefined
              ? sql("payment_id")
              : typed.pg_catalog_int4(parameters.paymentId)
          } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
      `;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results[0];
      }

      async deleteByRentalId(
        parameters: Public.Tables.Payment.ByRentalId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.payment WHERE rental_id = ${
            parameters.rentalId === undefined
              ? sql("rental_id")
              : typed.pg_catalog_int4(parameters.rentalId)
          } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
      `;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async deleteByStaffId(
        parameters: Public.Tables.Payment.ByStaffId,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.payment WHERE staff_id = ${
            parameters.staffId === undefined
              ? sql("staff_id")
              : typed.pg_catalog_int2(parameters.staffId)
          } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
      `;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async updateByCustomerId(
        parameters: Public.Tables.Payment.ByCustomerId,
        values: Partial<Public.Payment>,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.payment SET payment_id = ${
          values.paymentId === undefined
            ? sql("payment_id")
            : typed.pg_catalog_int4(values.paymentId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , amount = ${
          values.amount === undefined
            ? sql("amount")
            : typed.pg_catalog_numeric(values.amount)
        } , payment_date = ${
          values.paymentDate === undefined
            ? sql("payment_date")
            : typed.pg_catalog_timestamp(values.paymentDate)
        } WHERE customer_id = ${
          parameters.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(parameters.customerId)
        } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async updateByPaymentId(
        parameters: Public.Tables.Payment.ByPaymentId,
        values: Partial<Public.Payment>,
      ): Promise<Public.Payment> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.payment SET payment_id = ${
          values.paymentId === undefined
            ? sql("payment_id")
            : typed.pg_catalog_int4(values.paymentId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , amount = ${
          values.amount === undefined
            ? sql("amount")
            : typed.pg_catalog_numeric(values.amount)
        } , payment_date = ${
          values.paymentDate === undefined
            ? sql("payment_date")
            : typed.pg_catalog_timestamp(values.paymentDate)
        } WHERE payment_id = ${
          parameters.paymentId === undefined
            ? sql("payment_id")
            : typed.pg_catalog_int4(parameters.paymentId)
        } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results[0];
      }

      async updateByRentalId(
        parameters: Public.Tables.Payment.ByRentalId,
        values: Partial<Public.Payment>,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.payment SET payment_id = ${
          values.paymentId === undefined
            ? sql("payment_id")
            : typed.pg_catalog_int4(values.paymentId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , amount = ${
          values.amount === undefined
            ? sql("amount")
            : typed.pg_catalog_numeric(values.amount)
        } , payment_date = ${
          values.paymentDate === undefined
            ? sql("payment_date")
            : typed.pg_catalog_timestamp(values.paymentDate)
        } WHERE rental_id = ${
          parameters.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(parameters.rentalId)
        } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async updateByStaffId(
        parameters: Public.Tables.Payment.ByStaffId,
        values: Partial<Public.Payment>,
      ): Promise<Public.Payment[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.payment SET payment_id = ${
          values.paymentId === undefined
            ? sql("payment_id")
            : typed.pg_catalog_int4(values.paymentId)
        } , customer_id = ${
          values.customerId === undefined
            ? sql("customer_id")
            : typed.pg_catalog_int2(values.customerId)
        } , staff_id = ${
          values.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(values.staffId)
        } , rental_id = ${
          values.rentalId === undefined
            ? sql("rental_id")
            : typed.pg_catalog_int4(values.rentalId)
        } , amount = ${
          values.amount === undefined
            ? sql("amount")
            : typed.pg_catalog_numeric(values.amount)
        } , payment_date = ${
          values.paymentDate === undefined
            ? sql("payment_date")
            : typed.pg_catalog_timestamp(values.paymentDate)
        } WHERE staff_id = ${
          parameters.staffId === undefined
            ? sql("staff_id")
            : typed.pg_catalog_int2(parameters.staffId)
        } RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date`;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results;
      }

      async create(
        values: Public.Payment | Public.PaymentNotPrimaryKey,
      ): Promise<Public.Payment> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesPaymentPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.payment (payment_id,customer_id,staff_id,rental_id,amount,payment_date)
    VALUES (${
      values.paymentId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.paymentId)
    },${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.customerId)
    },${
      values.staffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.staffId)
    },${
      values.rentalId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.rentalId)
    },${
      values.amount === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.amount)
    },${
      values.paymentDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.paymentDate)
    })
    ON CONFLICT (payment_id) DO UPDATE
    SET customer_id = EXCLUDED.customer_id,staff_id = EXCLUDED.staff_id,rental_id = EXCLUDED.rental_id,amount = EXCLUDED.amount,payment_date = EXCLUDED.payment_date
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
    `;

          const results = response.map((record) => ({
            paymentId: undefinedIsNull(record.payment_id),
            customerId: undefinedIsNull(record.customer_id),
            staffId: undefinedIsNull(record.staff_id),
            rentalId: undefinedIsNull(record.rental_id),
            amount: undefinedIsNull(record.amount),
            paymentDate: undefinedIsNull(record.payment_date),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.payment (customer_id,staff_id,rental_id,amount,payment_date)
    VALUES (${
      values.customerId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.customerId)
    },${
      values.staffId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.staffId)
    },${
      values.rentalId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.rentalId)
    },${
      values.amount === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.amount)
    },${
      values.paymentDate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.paymentDate)
    })
    RETURNING payment_id,customer_id,staff_id,rental_id,amount,payment_date
    `;

        const results = response.map((record) => ({
          paymentId: undefinedIsNull(record.payment_id),
          customerId: undefinedIsNull(record.customer_id),
          staffId: undefinedIsNull(record.staff_id),
          rentalId: undefinedIsNull(record.rental_id),
          amount: undefinedIsNull(record.amount),
          paymentDate: undefinedIsNull(record.payment_date),
        }));
        return results[0];
      }
    })(this);

    public Film = new (class implements HasDatabase {
      constructor(private hasDatabase: HasDatabase) {}

      get database() {
        return this.hasDatabase.database;
      }

      async byFilmId(
        parameters: Public.Tables.Film.ByFilmId,
      ): Promise<Public.Film> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext FROM public.film WHERE film_id = ${
            parameters.filmId === undefined
              ? sql("film_id")
              : typed.pg_catalog_int4(parameters.filmId)
          }`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results[0];
      }

      async byFulltext(
        parameters: Public.Tables.Film.ByFulltext,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext FROM public.film WHERE fulltext = ${
            parameters.fulltext === undefined
              ? sql("fulltext")
              : typed.pg_catalog_gtsvector(parameters.fulltext)
          }`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async byLanguageId(
        parameters: Public.Tables.Film.ByLanguageId,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext FROM public.film WHERE language_id = ${
            parameters.languageId === undefined
              ? sql("language_id")
              : typed.pg_catalog_int2(parameters.languageId)
          }`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async byTitle(
        parameters: Public.Tables.Film.ByTitle,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`SELECT film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext FROM public.film WHERE title = ${
            parameters.title === undefined
              ? sql("title")
              : typed.pg_catalog_varchar(parameters.title)
          }`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async deleteByFilmId(
        parameters: Public.Tables.Film.ByFilmId,
      ): Promise<Public.Film> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.film WHERE film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(parameters.filmId)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
      `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results[0];
      }

      async deleteByFulltext(
        parameters: Public.Tables.Film.ByFulltext,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.film WHERE fulltext = ${
          parameters.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_gtsvector(parameters.fulltext)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
      `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async deleteByLanguageId(
        parameters: Public.Tables.Film.ByLanguageId,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response =
          await sql`DELETE FROM public.film WHERE language_id = ${
            parameters.languageId === undefined
              ? sql("language_id")
              : typed.pg_catalog_int2(parameters.languageId)
          } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
      `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async deleteByTitle(
        parameters: Public.Tables.Film.ByTitle,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`DELETE FROM public.film WHERE title = ${
          parameters.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(parameters.title)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
      `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async updateByFilmId(
        parameters: Public.Tables.Film.ByFilmId,
        values: Partial<Public.Film>,
      ): Promise<Public.Film> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film SET film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(values.filmId)
        } , title = ${
          values.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(values.title)
        } , description = ${
          values.description === undefined
            ? sql("description")
            : typed.pg_catalog_text(values.description)
        } , release_year = ${
          values.releaseYear === undefined
            ? sql("release_year")
            : typed.public_year(values.releaseYear)
        } , language_id = ${
          values.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int2(values.languageId)
        } , rental_duration = ${
          values.rentalDuration === undefined
            ? sql("rental_duration")
            : typed.pg_catalog_int2(values.rentalDuration)
        } , rental_rate = ${
          values.rentalRate === undefined
            ? sql("rental_rate")
            : typed.pg_catalog_numeric(values.rentalRate)
        } , length = ${
          values.length === undefined
            ? sql("length")
            : typed.pg_catalog_int2(values.length)
        } , replacement_cost = ${
          values.replacementCost === undefined
            ? sql("replacement_cost")
            : typed.pg_catalog_numeric(values.replacementCost)
        } , rating = ${
          values.rating === undefined
            ? sql("rating")
            : typed.public_mpaa_rating(values.rating)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , special_features = ${
          values.specialFeatures === undefined
            ? sql("special_features")
            : typed.pg_catalog__text(values.specialFeatures)
        } , fulltext = ${
          values.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_tsvector(values.fulltext)
        } WHERE film_id = ${
          parameters.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(parameters.filmId)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results[0];
      }

      async updateByFulltext(
        parameters: Public.Tables.Film.ByFulltext,
        values: Partial<Public.Film>,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film SET film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(values.filmId)
        } , title = ${
          values.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(values.title)
        } , description = ${
          values.description === undefined
            ? sql("description")
            : typed.pg_catalog_text(values.description)
        } , release_year = ${
          values.releaseYear === undefined
            ? sql("release_year")
            : typed.public_year(values.releaseYear)
        } , language_id = ${
          values.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int2(values.languageId)
        } , rental_duration = ${
          values.rentalDuration === undefined
            ? sql("rental_duration")
            : typed.pg_catalog_int2(values.rentalDuration)
        } , rental_rate = ${
          values.rentalRate === undefined
            ? sql("rental_rate")
            : typed.pg_catalog_numeric(values.rentalRate)
        } , length = ${
          values.length === undefined
            ? sql("length")
            : typed.pg_catalog_int2(values.length)
        } , replacement_cost = ${
          values.replacementCost === undefined
            ? sql("replacement_cost")
            : typed.pg_catalog_numeric(values.replacementCost)
        } , rating = ${
          values.rating === undefined
            ? sql("rating")
            : typed.public_mpaa_rating(values.rating)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , special_features = ${
          values.specialFeatures === undefined
            ? sql("special_features")
            : typed.pg_catalog__text(values.specialFeatures)
        } , fulltext = ${
          values.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_tsvector(values.fulltext)
        } WHERE fulltext = ${
          parameters.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_gtsvector(parameters.fulltext)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async updateByLanguageId(
        parameters: Public.Tables.Film.ByLanguageId,
        values: Partial<Public.Film>,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film SET film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(values.filmId)
        } , title = ${
          values.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(values.title)
        } , description = ${
          values.description === undefined
            ? sql("description")
            : typed.pg_catalog_text(values.description)
        } , release_year = ${
          values.releaseYear === undefined
            ? sql("release_year")
            : typed.public_year(values.releaseYear)
        } , language_id = ${
          values.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int2(values.languageId)
        } , rental_duration = ${
          values.rentalDuration === undefined
            ? sql("rental_duration")
            : typed.pg_catalog_int2(values.rentalDuration)
        } , rental_rate = ${
          values.rentalRate === undefined
            ? sql("rental_rate")
            : typed.pg_catalog_numeric(values.rentalRate)
        } , length = ${
          values.length === undefined
            ? sql("length")
            : typed.pg_catalog_int2(values.length)
        } , replacement_cost = ${
          values.replacementCost === undefined
            ? sql("replacement_cost")
            : typed.pg_catalog_numeric(values.replacementCost)
        } , rating = ${
          values.rating === undefined
            ? sql("rating")
            : typed.public_mpaa_rating(values.rating)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , special_features = ${
          values.specialFeatures === undefined
            ? sql("special_features")
            : typed.pg_catalog__text(values.specialFeatures)
        } , fulltext = ${
          values.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_tsvector(values.fulltext)
        } WHERE language_id = ${
          parameters.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int2(parameters.languageId)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async updateByTitle(
        parameters: Public.Tables.Film.ByTitle,
        values: Partial<Public.Film>,
      ): Promise<Public.Film[]> {
        console.assert(parameters);
        console.assert(values);
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        const response = await sql`UPDATE public.film SET film_id = ${
          values.filmId === undefined
            ? sql("film_id")
            : typed.pg_catalog_int4(values.filmId)
        } , title = ${
          values.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(values.title)
        } , description = ${
          values.description === undefined
            ? sql("description")
            : typed.pg_catalog_text(values.description)
        } , release_year = ${
          values.releaseYear === undefined
            ? sql("release_year")
            : typed.public_year(values.releaseYear)
        } , language_id = ${
          values.languageId === undefined
            ? sql("language_id")
            : typed.pg_catalog_int2(values.languageId)
        } , rental_duration = ${
          values.rentalDuration === undefined
            ? sql("rental_duration")
            : typed.pg_catalog_int2(values.rentalDuration)
        } , rental_rate = ${
          values.rentalRate === undefined
            ? sql("rental_rate")
            : typed.pg_catalog_numeric(values.rentalRate)
        } , length = ${
          values.length === undefined
            ? sql("length")
            : typed.pg_catalog_int2(values.length)
        } , replacement_cost = ${
          values.replacementCost === undefined
            ? sql("replacement_cost")
            : typed.pg_catalog_numeric(values.replacementCost)
        } , rating = ${
          values.rating === undefined
            ? sql("rating")
            : typed.public_mpaa_rating(values.rating)
        } , last_update = ${
          values.lastUpdate === undefined
            ? sql("last_update")
            : typed.pg_catalog_timestamp(values.lastUpdate)
        } , special_features = ${
          values.specialFeatures === undefined
            ? sql("special_features")
            : typed.pg_catalog__text(values.specialFeatures)
        } , fulltext = ${
          values.fulltext === undefined
            ? sql("fulltext")
            : typed.pg_catalog_tsvector(values.fulltext)
        } WHERE title = ${
          parameters.title === undefined
            ? sql("title")
            : typed.pg_catalog_varchar(parameters.title)
        } RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext`;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results;
      }

      async create(
        values: Public.Film | Public.FilmNotPrimaryKey,
      ): Promise<Public.Film> {
        const sql = this.database.context.sql;
        const typed = sql.typed as unknown as PostgresTypecasts;

        if (Public.includesFilmPrimaryKey(values)) {
          const response =
            await sql`INSERT INTO public.film (film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext)
    VALUES (${
      values.filmId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int4(values.filmId)
    },${
      values.title === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.title)
    },${
      values.description === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_text(values.description)
    },${
      values.releaseYear === undefined
        ? sql`DEFAULT`
        : typed.public_year(values.releaseYear)
    },${
      values.languageId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.languageId)
    },${
      values.rentalDuration === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.rentalDuration)
    },${
      values.rentalRate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.rentalRate)
    },${
      values.length === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.length)
    },${
      values.replacementCost === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.replacementCost)
    },${
      values.rating === undefined
        ? sql`DEFAULT`
        : typed.public_mpaa_rating(values.rating)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.specialFeatures === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog__text(values.specialFeatures)
    },${
      values.fulltext === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_tsvector(values.fulltext)
    })
    ON CONFLICT (film_id) DO UPDATE
    SET title = EXCLUDED.title,description = EXCLUDED.description,release_year = EXCLUDED.release_year,language_id = EXCLUDED.language_id,rental_duration = EXCLUDED.rental_duration,rental_rate = EXCLUDED.rental_rate,length = EXCLUDED.length,replacement_cost = EXCLUDED.replacement_cost,rating = EXCLUDED.rating,last_update = EXCLUDED.last_update,special_features = EXCLUDED.special_features,fulltext = EXCLUDED.fulltext
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
    `;

          const results = response.map((record) => ({
            filmId: undefinedIsNull(record.film_id),
            title: undefinedIsNull(record.title),
            description: undefinedIsNull(record.description),
            releaseYear: undefinedIsNull(record.release_year),
            languageId: undefinedIsNull(record.language_id),
            rentalDuration: undefinedIsNull(record.rental_duration),
            rentalRate: undefinedIsNull(record.rental_rate),
            length: undefinedIsNull(record.length),
            replacementCost: undefinedIsNull(record.replacement_cost),
            rating: undefinedIsNull(record.rating),
            lastUpdate: undefinedIsNull(record.last_update),
            specialFeatures: undefinedIsNull(record.special_features),
            fulltext: undefinedIsNull(record.fulltext),
          }));
          return results[0];
        }
        const response =
          await sql`INSERT INTO public.film (title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext)
    VALUES (${
      values.title === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_varchar(values.title)
    },${
      values.description === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_text(values.description)
    },${
      values.releaseYear === undefined
        ? sql`DEFAULT`
        : typed.public_year(values.releaseYear)
    },${
      values.languageId === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.languageId)
    },${
      values.rentalDuration === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.rentalDuration)
    },${
      values.rentalRate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.rentalRate)
    },${
      values.length === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_int2(values.length)
    },${
      values.replacementCost === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_numeric(values.replacementCost)
    },${
      values.rating === undefined
        ? sql`DEFAULT`
        : typed.public_mpaa_rating(values.rating)
    },${
      values.lastUpdate === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_timestamp(values.lastUpdate)
    },${
      values.specialFeatures === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog__text(values.specialFeatures)
    },${
      values.fulltext === undefined
        ? sql`DEFAULT`
        : typed.pg_catalog_tsvector(values.fulltext)
    })
    RETURNING film_id,title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,last_update,special_features,fulltext
    `;

        const results = response.map((record) => ({
          filmId: undefinedIsNull(record.film_id),
          title: undefinedIsNull(record.title),
          description: undefinedIsNull(record.description),
          releaseYear: undefinedIsNull(record.release_year),
          languageId: undefinedIsNull(record.language_id),
          rentalDuration: undefinedIsNull(record.rental_duration),
          rentalRate: undefinedIsNull(record.rental_rate),
          length: undefinedIsNull(record.length),
          replacementCost: undefinedIsNull(record.replacement_cost),
          rating: undefinedIsNull(record.rating),
          lastUpdate: undefinedIsNull(record.last_update),
          specialFeatures: undefinedIsNull(record.special_features),
          fulltext: undefinedIsNull(record.fulltext),
        }));
        return results[0];
      }
    })(this);
  })(this);
}

// begin - operation dispatch map
import { EmbraceSQLRequest, OperationDispatchMethod } from "@embracesql/shared";
export class OperationDispatcher {
  private dispatchMap: Record<string, OperationDispatchMethod>;
  constructor(private database: Database) {
    this.dispatchMap = {
      "Public.FilmInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmInStock(
          request.parameters as Public.FilmInStockArguments,
        ),
      "Public.FilmNotInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmNotInStock(
          request.parameters as Public.FilmNotInStockArguments,
        ),
      "Public.GetCustomerBalance": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.GetCustomerBalance(
          request.parameters as Public.GetCustomerBalanceArguments,
        ),
      "Public.InventoryHeldByCustomer": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.InventoryHeldByCustomer(
          request.parameters as Public.InventoryHeldByCustomerArguments,
        ),
      "Public.InventoryInStock": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.InventoryInStock(
          request.parameters as Public.InventoryInStockArguments,
        ),
      "Public.LastDay": async (request: EmbraceSQLRequest<object, object>) =>
        database.Public.LastDay(request.parameters as Public.LastDayArguments),
      "Public.RewardsReport": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.RewardsReport(
          request.parameters as Public.RewardsReportArguments,
        ),
      "Public.FilmActor.byActorIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.byActorIdFilmId(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
        ),
      "Public.FilmActor.byFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.byFilmId(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
        ),
      "Public.FilmActor.deleteByActorIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.deleteByActorIdFilmId(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
        ),
      "Public.FilmActor.deleteByFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.deleteByFilmId(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
        ),
      "Public.FilmActor.updateByActorIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.updateByActorIdFilmId(
          request.parameters as Public.Tables.FilmActor.ByActorIdFilmId,
          request.values as Partial<Public.FilmActor>,
        ),
      "Public.FilmActor.updateByFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.updateByFilmId(
          request.parameters as Public.Tables.FilmActor.ByFilmId,
          request.values as Partial<Public.FilmActor>,
        ),
      "Public.FilmActor.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmActor.create(
          request.values as Public.FilmActor | Public.FilmActorNotPrimaryKey,
        ),
      "Public.Address.byAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.byAddressId(
          request.parameters as Public.Tables.Address.ByAddressId,
        ),
      "Public.Address.byCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.byCityId(
          request.parameters as Public.Tables.Address.ByCityId,
        ),
      "Public.Address.deleteByAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.deleteByAddressId(
          request.parameters as Public.Tables.Address.ByAddressId,
        ),
      "Public.Address.deleteByCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.deleteByCityId(
          request.parameters as Public.Tables.Address.ByCityId,
        ),
      "Public.Address.updateByAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.updateByAddressId(
          request.parameters as Public.Tables.Address.ByAddressId,
          request.values as Partial<Public.Address>,
        ),
      "Public.Address.updateByCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.updateByCityId(
          request.parameters as Public.Tables.Address.ByCityId,
          request.values as Partial<Public.Address>,
        ),
      "Public.Address.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Address.create(
          request.values as Public.Address | Public.AddressNotPrimaryKey,
        ),
      "Public.City.byCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.byCityId(
          request.parameters as Public.Tables.City.ByCityId,
        ),
      "Public.City.byCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.byCountryId(
          request.parameters as Public.Tables.City.ByCountryId,
        ),
      "Public.City.deleteByCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.deleteByCityId(
          request.parameters as Public.Tables.City.ByCityId,
        ),
      "Public.City.deleteByCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.deleteByCountryId(
          request.parameters as Public.Tables.City.ByCountryId,
        ),
      "Public.City.updateByCityId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.updateByCityId(
          request.parameters as Public.Tables.City.ByCityId,
          request.values as Partial<Public.City>,
        ),
      "Public.City.updateByCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.updateByCountryId(
          request.parameters as Public.Tables.City.ByCountryId,
          request.values as Partial<Public.City>,
        ),
      "Public.City.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.City.create(
          request.values as Public.City | Public.CityNotPrimaryKey,
        ),
      "Public.Customer.byAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.byAddressId(
          request.parameters as Public.Tables.Customer.ByAddressId,
        ),
      "Public.Customer.byCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.byCustomerId(
          request.parameters as Public.Tables.Customer.ByCustomerId,
        ),
      "Public.Customer.byLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.byLastName(
          request.parameters as Public.Tables.Customer.ByLastName,
        ),
      "Public.Customer.byStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.byStoreId(
          request.parameters as Public.Tables.Customer.ByStoreId,
        ),
      "Public.Customer.deleteByAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.deleteByAddressId(
          request.parameters as Public.Tables.Customer.ByAddressId,
        ),
      "Public.Customer.deleteByCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.deleteByCustomerId(
          request.parameters as Public.Tables.Customer.ByCustomerId,
        ),
      "Public.Customer.deleteByLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.deleteByLastName(
          request.parameters as Public.Tables.Customer.ByLastName,
        ),
      "Public.Customer.deleteByStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.deleteByStoreId(
          request.parameters as Public.Tables.Customer.ByStoreId,
        ),
      "Public.Customer.updateByAddressId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.updateByAddressId(
          request.parameters as Public.Tables.Customer.ByAddressId,
          request.values as Partial<Public.Customer>,
        ),
      "Public.Customer.updateByCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.updateByCustomerId(
          request.parameters as Public.Tables.Customer.ByCustomerId,
          request.values as Partial<Public.Customer>,
        ),
      "Public.Customer.updateByLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.updateByLastName(
          request.parameters as Public.Tables.Customer.ByLastName,
          request.values as Partial<Public.Customer>,
        ),
      "Public.Customer.updateByStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.updateByStoreId(
          request.parameters as Public.Tables.Customer.ByStoreId,
          request.values as Partial<Public.Customer>,
        ),
      "Public.Customer.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Customer.create(
          request.values as Public.Customer | Public.CustomerNotPrimaryKey,
        ),
      "Public.Actor.byActorId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.byActorId(
          request.parameters as Public.Tables.Actor.ByActorId,
        ),
      "Public.Actor.byLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.byLastName(
          request.parameters as Public.Tables.Actor.ByLastName,
        ),
      "Public.Actor.deleteByActorId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.deleteByActorId(
          request.parameters as Public.Tables.Actor.ByActorId,
        ),
      "Public.Actor.deleteByLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.deleteByLastName(
          request.parameters as Public.Tables.Actor.ByLastName,
        ),
      "Public.Actor.updateByActorId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.updateByActorId(
          request.parameters as Public.Tables.Actor.ByActorId,
          request.values as Partial<Public.Actor>,
        ),
      "Public.Actor.updateByLastName": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.updateByLastName(
          request.parameters as Public.Tables.Actor.ByLastName,
          request.values as Partial<Public.Actor>,
        ),
      "Public.Actor.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Actor.create(
          request.values as Public.Actor | Public.ActorNotPrimaryKey,
        ),
      "Public.FilmCategory.byFilmIdCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmCategory.byFilmIdCategoryId(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
        ),
      "Public.FilmCategory.deleteByFilmIdCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmCategory.deleteByFilmIdCategoryId(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
        ),
      "Public.FilmCategory.updateByFilmIdCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmCategory.updateByFilmIdCategoryId(
          request.parameters as Public.Tables.FilmCategory.ByFilmIdCategoryId,
          request.values as Partial<Public.FilmCategory>,
        ),
      "Public.FilmCategory.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.FilmCategory.create(
          request.values as
            | Public.FilmCategory
            | Public.FilmCategoryNotPrimaryKey,
        ),
      "Public.Inventory.byInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.byInventoryId(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
        ),
      "Public.Inventory.byStoreIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.byStoreIdFilmId(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
        ),
      "Public.Inventory.deleteByInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.deleteByInventoryId(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
        ),
      "Public.Inventory.deleteByStoreIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.deleteByStoreIdFilmId(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
        ),
      "Public.Inventory.updateByInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.updateByInventoryId(
          request.parameters as Public.Tables.Inventory.ByInventoryId,
          request.values as Partial<Public.Inventory>,
        ),
      "Public.Inventory.updateByStoreIdFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.updateByStoreIdFilmId(
          request.parameters as Public.Tables.Inventory.ByStoreIdFilmId,
          request.values as Partial<Public.Inventory>,
        ),
      "Public.Inventory.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Inventory.create(
          request.values as Public.Inventory | Public.InventoryNotPrimaryKey,
        ),
      "Public.Category.byCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Category.byCategoryId(
          request.parameters as Public.Tables.Category.ByCategoryId,
        ),
      "Public.Category.deleteByCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Category.deleteByCategoryId(
          request.parameters as Public.Tables.Category.ByCategoryId,
        ),
      "Public.Category.updateByCategoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Category.updateByCategoryId(
          request.parameters as Public.Tables.Category.ByCategoryId,
          request.values as Partial<Public.Category>,
        ),
      "Public.Category.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Category.create(
          request.values as Public.Category | Public.CategoryNotPrimaryKey,
        ),
      "Public.Country.byCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Country.byCountryId(
          request.parameters as Public.Tables.Country.ByCountryId,
        ),
      "Public.Country.deleteByCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Country.deleteByCountryId(
          request.parameters as Public.Tables.Country.ByCountryId,
        ),
      "Public.Country.updateByCountryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Country.updateByCountryId(
          request.parameters as Public.Tables.Country.ByCountryId,
          request.values as Partial<Public.Country>,
        ),
      "Public.Country.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Country.create(
          request.values as Public.Country | Public.CountryNotPrimaryKey,
        ),
      "Public.Language.byLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Language.byLanguageId(
          request.parameters as Public.Tables.Language.ByLanguageId,
        ),
      "Public.Language.deleteByLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Language.deleteByLanguageId(
          request.parameters as Public.Tables.Language.ByLanguageId,
        ),
      "Public.Language.updateByLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Language.updateByLanguageId(
          request.parameters as Public.Tables.Language.ByLanguageId,
          request.values as Partial<Public.Language>,
        ),
      "Public.Language.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Language.create(
          request.values as Public.Language | Public.LanguageNotPrimaryKey,
        ),
      "Public.Rental.byInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.byInventoryId(
          request.parameters as Public.Tables.Rental.ByInventoryId,
        ),
      "Public.Rental.byRentalDateInventoryIdCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.byRentalDateInventoryIdCustomerId(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
        ),
      "Public.Rental.byRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.byRentalId(
          request.parameters as Public.Tables.Rental.ByRentalId,
        ),
      "Public.Rental.deleteByInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.deleteByInventoryId(
          request.parameters as Public.Tables.Rental.ByInventoryId,
        ),
      "Public.Rental.deleteByRentalDateInventoryIdCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.deleteByRentalDateInventoryIdCustomerId(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
        ),
      "Public.Rental.deleteByRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.deleteByRentalId(
          request.parameters as Public.Tables.Rental.ByRentalId,
        ),
      "Public.Rental.updateByInventoryId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.updateByInventoryId(
          request.parameters as Public.Tables.Rental.ByInventoryId,
          request.values as Partial<Public.Rental>,
        ),
      "Public.Rental.updateByRentalDateInventoryIdCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.updateByRentalDateInventoryIdCustomerId(
          request.parameters as Public.Tables.Rental.ByRentalDateInventoryIdCustomerId,
          request.values as Partial<Public.Rental>,
        ),
      "Public.Rental.updateByRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.updateByRentalId(
          request.parameters as Public.Tables.Rental.ByRentalId,
          request.values as Partial<Public.Rental>,
        ),
      "Public.Rental.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Rental.create(
          request.values as Public.Rental | Public.RentalNotPrimaryKey,
        ),
      "Public.Staff.byStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Staff.byStaffId(
          request.parameters as Public.Tables.Staff.ByStaffId,
        ),
      "Public.Staff.deleteByStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Staff.deleteByStaffId(
          request.parameters as Public.Tables.Staff.ByStaffId,
        ),
      "Public.Staff.updateByStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Staff.updateByStaffId(
          request.parameters as Public.Tables.Staff.ByStaffId,
          request.values as Partial<Public.Staff>,
        ),
      "Public.Staff.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Staff.create(
          request.values as Public.Staff | Public.StaffNotPrimaryKey,
        ),
      "Public.Store.byManagerStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.byManagerStaffId(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
        ),
      "Public.Store.byStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.byStoreId(
          request.parameters as Public.Tables.Store.ByStoreId,
        ),
      "Public.Store.deleteByManagerStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.deleteByManagerStaffId(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
        ),
      "Public.Store.deleteByStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.deleteByStoreId(
          request.parameters as Public.Tables.Store.ByStoreId,
        ),
      "Public.Store.updateByManagerStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.updateByManagerStaffId(
          request.parameters as Public.Tables.Store.ByManagerStaffId,
          request.values as Partial<Public.Store>,
        ),
      "Public.Store.updateByStoreId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.updateByStoreId(
          request.parameters as Public.Tables.Store.ByStoreId,
          request.values as Partial<Public.Store>,
        ),
      "Public.Store.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Store.create(
          request.values as Public.Store | Public.StoreNotPrimaryKey,
        ),
      "Public.Payment.byCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.byCustomerId(
          request.parameters as Public.Tables.Payment.ByCustomerId,
        ),
      "Public.Payment.byPaymentId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.byPaymentId(
          request.parameters as Public.Tables.Payment.ByPaymentId,
        ),
      "Public.Payment.byRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.byRentalId(
          request.parameters as Public.Tables.Payment.ByRentalId,
        ),
      "Public.Payment.byStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.byStaffId(
          request.parameters as Public.Tables.Payment.ByStaffId,
        ),
      "Public.Payment.deleteByCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.deleteByCustomerId(
          request.parameters as Public.Tables.Payment.ByCustomerId,
        ),
      "Public.Payment.deleteByPaymentId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.deleteByPaymentId(
          request.parameters as Public.Tables.Payment.ByPaymentId,
        ),
      "Public.Payment.deleteByRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.deleteByRentalId(
          request.parameters as Public.Tables.Payment.ByRentalId,
        ),
      "Public.Payment.deleteByStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.deleteByStaffId(
          request.parameters as Public.Tables.Payment.ByStaffId,
        ),
      "Public.Payment.updateByCustomerId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.updateByCustomerId(
          request.parameters as Public.Tables.Payment.ByCustomerId,
          request.values as Partial<Public.Payment>,
        ),
      "Public.Payment.updateByPaymentId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.updateByPaymentId(
          request.parameters as Public.Tables.Payment.ByPaymentId,
          request.values as Partial<Public.Payment>,
        ),
      "Public.Payment.updateByRentalId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.updateByRentalId(
          request.parameters as Public.Tables.Payment.ByRentalId,
          request.values as Partial<Public.Payment>,
        ),
      "Public.Payment.updateByStaffId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.updateByStaffId(
          request.parameters as Public.Tables.Payment.ByStaffId,
          request.values as Partial<Public.Payment>,
        ),
      "Public.Payment.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Payment.create(
          request.values as Public.Payment | Public.PaymentNotPrimaryKey,
        ),
      "Public.Film.byFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.byFilmId(
          request.parameters as Public.Tables.Film.ByFilmId,
        ),
      "Public.Film.byFulltext": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.byFulltext(
          request.parameters as Public.Tables.Film.ByFulltext,
        ),
      "Public.Film.byLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.byLanguageId(
          request.parameters as Public.Tables.Film.ByLanguageId,
        ),
      "Public.Film.byTitle": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.byTitle(
          request.parameters as Public.Tables.Film.ByTitle,
        ),
      "Public.Film.deleteByFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.deleteByFilmId(
          request.parameters as Public.Tables.Film.ByFilmId,
        ),
      "Public.Film.deleteByFulltext": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.deleteByFulltext(
          request.parameters as Public.Tables.Film.ByFulltext,
        ),
      "Public.Film.deleteByLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.deleteByLanguageId(
          request.parameters as Public.Tables.Film.ByLanguageId,
        ),
      "Public.Film.deleteByTitle": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.deleteByTitle(
          request.parameters as Public.Tables.Film.ByTitle,
        ),
      "Public.Film.updateByFilmId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.updateByFilmId(
          request.parameters as Public.Tables.Film.ByFilmId,
          request.values as Partial<Public.Film>,
        ),
      "Public.Film.updateByFulltext": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.updateByFulltext(
          request.parameters as Public.Tables.Film.ByFulltext,
          request.values as Partial<Public.Film>,
        ),
      "Public.Film.updateByLanguageId": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.updateByLanguageId(
          request.parameters as Public.Tables.Film.ByLanguageId,
          request.values as Partial<Public.Film>,
        ),
      "Public.Film.updateByTitle": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.updateByTitle(
          request.parameters as Public.Tables.Film.ByTitle,
          request.values as Partial<Public.Film>,
        ),
      "Public.Film.create": async (
        request: EmbraceSQLRequest<object, object>,
      ) =>
        database.Public.Film.create(
          request.values as Public.Film | Public.FilmNotPrimaryKey,
        ),
    };
  }

  async dispatch(request: EmbraceSQLRequest<object, object>) {
    return this.dispatchMap[request.operation](request);
  }
}
// Begin Express generated section
import { EmbraceSQLExpress } from "@embracesql/express";

export const EmbraceSQLExpressApp = async (
  postgresUrl: string,
  database?: Database,
) => {
  const dispatchToDatabase = database ?? (await Database.connect(postgresUrl));
  const dispatcher = new OperationDispatcher(dispatchToDatabase);
  return EmbraceSQLExpress(dispatcher);
};

// End Express generated section
