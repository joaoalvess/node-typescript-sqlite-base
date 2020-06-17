import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();

    table.integer("point_id").notNullable().references("id").inTable("points");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}
