const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(process.env.USERPROFILE, '.n8n', 'database.sqlite');

const db = new sqlite3.Database(dbPath);
const workflowId = 'tlNNIaZKRMkIvFjF';

db.run(`UPDATE workflow_entity SET active = 1 WHERE id = ?`, [workflowId], function (err) {
    if (err) {
        console.error('Error activating workflow:', err.message);
        process.exit(1);
    }
    console.log(`Successfully activated workflow ${workflowId}.`);
    db.close();
});
