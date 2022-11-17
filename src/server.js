import express from 'express';

export const app = express();

export const PORT = process.env.PORT || 3000;
export const DB_CONNECT = process.env.DB_CONNECT;