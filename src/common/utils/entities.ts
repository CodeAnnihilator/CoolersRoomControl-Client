import {ReactText} from 'react';

export const dateInUnix = (date: {date: ReactText}) => new Date(date.date).getTime();

export const startOfDay = (now: Date) => new Date(now.getFullYear(), now.getMonth(), now.getDate());
