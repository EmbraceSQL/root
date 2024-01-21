import { GenerationContext, SettingNode } from "@embracesql/shared";
import path from "path";
import { Sql } from "postgres";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type SettingRow = {
  name: string;
  setting: string;
};

/**
 * Settings in the database will be passed along for type generation.
 */
export class PGSettings {
  static async factory(sql: Sql) {
    const settings = (await sql.file(
      path.join(__dirname, "pgsettings.sql"),
    )) as unknown as SettingRow[];
    return new PGSettings(settings);
  }

  public settings: PGSetting[];
  private constructor(settings: SettingRow[]) {
    this.settings = settings.map((a) => new PGSetting(a.name, a.setting));
  }

  loadAST(context: GenerationContext) {
    this.settings.forEach(
      (s) => new SettingNode(s.name, s.setting, context.database),
    );
  }
}

class PGSetting {
  constructor(
    public name: string,
    public setting: string,
  ) {}
}
