const sqlite3 = require('d:/n8n-automation/node_modules/sqlite3').verbose();
const db = new sqlite3.Database('C:/Users/Admin/.n8n/database.sqlite');

db.serialize(() => {
    // List all tables
    db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
        if (err) console.error('Error listing tables:', err);
        else console.log('Tables:', tables.map(t => t.name));
    });

    // Check project entries
    db.all("SELECT * FROM project", (err, projects) => {
        if (err) console.error('Error listing projects:', err);
        else console.log('Projects:', projects);
    });

    // Check user entries
    db.all("SELECT * FROM user", (err, users) => {
        if (err) console.error('Error listing users:', err);
        else console.log('Users:', users);
    });

    // Check shared_workflow or similar link tables
    db.all("SELECT * FROM shared_workflow", (err, shared) => {
        if (err) console.log('shared_workflow table might not exist or empty');
        else console.log('Shared Workflows:', shared);
    });
});

setTimeout(() => db.close(), 3000);
