export const dateInUnix = (date: any) => new Date(date.date).getTime();

export const startOfDay = (now: any) => new Date(now.getFullYear(), now.getMonth(), now.getDate());
