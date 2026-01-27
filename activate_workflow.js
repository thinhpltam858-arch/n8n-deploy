const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(process.env.USERPROFILE, '.n8n', 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
        process.exit(1);
    }
});

const workflowId = 'J9JB5zKMKnykHIUTCb4L2';

db.run(`UPDATE workflow_entity SET active = 1 WHERE id = ?`, [workflowId], function (err) {
    if (err) {
        console.error('Error updating workflow:', err.message);
        process.exit(1);
    }
    console.log(`Successfully activated workflow ${workflowId}. Lines affected: ${this.changes}`);
    db.close();
});
