migrate((db) => {
  const collection = new Collection({
    "id": "1124ej95kn4252d",
    "created": "2023-01-20 05:49:36.117Z",
    "updated": "2023-01-20 05:49:36.117Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vhv7n8jo",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1124ej95kn4252d");

  return dao.deleteCollection(collection);
})
