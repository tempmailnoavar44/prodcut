const answersArrayToObject = <T extends Record<string, string>>(
  questions: T,
  answers: (number | null)[]
): { [K in keyof T]: number | null } => {
  {
    const keys = Object.keys(questions) as (keyof T)[];
    const result: Partial<{ [K in keyof T]: number | null }> = {};
    keys.forEach((key, idx) => {
      result[key] = answers[idx] ?? null;
    });
    return result as { [K in keyof T]: number | null };
  }
};

export default answersArrayToObject