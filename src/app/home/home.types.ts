
export interface steps {
  "step": string,
  "description": string,
  "owner": string,
  "duration": number,
  "link": string,
  "system": string,
  "details": string
}

export interface prereq {
  "description": string,
  "link": string
}

export interface modConfig {
  "name": string,
  "description": string,
  "link": string,
  "steps": Array<steps>,
  "prereq"?: Array<prereq>;
}
