type CSSVars = Record<`--${string}`, string>;

export const THEME = ["light", "dark"] as const;
export type ThemeType = (typeof THEME)[number];

const otherStyles: CSSVars = {
    "--active-color": "54, 96, 231", /* #3660e7 */
    "--error-color": "255, 102, 102", /* #ff6666 */
    "--main-color-hsl": "214, 61%", /* #74a2dd */

    "--checked-color": "35, 131, 249", /* #2383F9 */
    "--confirmed-color": "40, 190, 193", /* #28BEC1 */
    "--no-confirmed-color": "188, 27, 27", /* #BC1B1B */
    "--in-process": "81, 116, 146" /* #517492 */
}

export const Theme: Record<ThemeType, CSSVars> = {
    "light": {
        ...otherStyles,
        "--main-bg": "246, 247, 252", /* #F6F7FC */
        "--area-bg": "255, 255, 255", /* #FFFFFF */
        "--color": "12, 27, 36", /* #0C1B24 */
    },
    "dark": {
        ...otherStyles,
        "--main-bg": "4, 13, 21", /* #172430 */
        "--area-bg": "16, 37, 53", /* #102535 */
        "--color": "255, 255, 255", /* #FFFFFF */
    }
};

export interface selectorOptions {
    name: string
    option: string | number
}

export interface filterStruct {
    year: string,
    type: string,
    id_region: string
    id_district: string
    month: string
    day: string
    status: string
}

export function escapeCql(v: string) {
    return v ? v.replace(/'/g, "''") : "";
}

export function getSQLFilter(f: filterStruct) {
    const parts: string[] = [];
    if (f.year) parts.push(`year='${escapeCql(f.year)}'`);
    if (f.type) parts.push(`type='${escapeCql(f.type)}'`);
    if (f.id_region) parts.push(`id_region='${escapeCql(f.id_region)}'`);
    if (f.id_district) parts.push(`id_district='${escapeCql(f.id_district)}'`);
    if (f.month) parts.push(`fire_date LIKE '%${escapeCql(f.day)}.${(f.month.length == 1 ? "0" : "")}${escapeCql(f.month)}.%'`);
    if (f.status) parts.push(`status='${escapeCql(f.status)}'`); 
    return parts.length ? parts.join(" AND ") : null;
}
