import fs from 'fs/promises';
import crypto from 'crypto';
import {Post, PostWithoutId} from "./types";

const filename = './db.json';
let data: Post[] = [];

const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(filename);
            data = JSON.parse(fileContent.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data
    },
    async addItem(item: PostWithoutId) {
        const id = crypto.randomUUID();
        const datetime = new Date().toISOString();

        const post = {id, datetime, ...item};
        data.push(post);
        await this.save();

        return post;
    },
    async save() {
        await fs.writeFile(filename, JSON.stringify(data));
    }
};

export default fileDb;



