const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(process.env.USERPROFILE, '.n8n', 'database.sqlite');

const db = new sqlite3.Database(dbPath);

db.get(`SELECT name, active FROM workflow_entity WHERE id = 'J9JB5zKMKnykHIUTCb4L2'`, [], (err, row) => {
    if (err) {
        console.error('Error reading workflow:', err.message);
        process.exit(1);
    }
    if (row) {
        console.log(`Workflow: ${row.name}, Active: ${row.active === 1 ? 'YES' : 'NO'}`);
    } else {
        console.log('Workflow not found.');
    }
    db.close();
});
