const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(process.env.USERPROFILE, '.n8n', 'database.sqlite');

const db = new sqlite3.Database(dbPath);

console.log('Checking for recent executions...');

db.all(`SELECT id, workflowId, status, startedAt, stoppedAt FROM execution_entity ORDER BY startedAt DESC LIMIT 5`, [], (err, rows) => {
    if (err) {
        console.error('Error reading executions:', err.message);
        process.exit(1);
    }
    if (rows.length === 0) {
        console.log('No executions found.');
    } else {
        rows.forEach((row) => {
            console.log(`ID: ${row.id}, Workflow: ${row.workflowId}, Status: ${row.status}, Started: ${row.startedAt}`);
        });
    }
    db.close();
});
