import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();

    await knex("products").insert([
        { name: "Isca de Frango", price: 60 },
        { name: "Pizza calabresa", price: 78 },
        

    ]);
};
