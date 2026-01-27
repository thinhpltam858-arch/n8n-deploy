const sqlite3 = require('d:/n8n-automation/node_modules/sqlite3').verbose();
const db = new sqlite3.Database('C:/Users/Admin/.n8n/database.sqlite');

const projectId = 'hGzmQAnRPj1ex1kw';

db.serialize(() => {
    db.all("SELECT id FROM workflow_entity", (err, workflows) => {
        if (err) {
            console.error('Error fetching workflows:', err);
            return;
        }

        workflows.forEach(wf => {
            db.run("INSERT OR REPLACE INTO shared_workflow (workflowId, projectId, role) VALUES (?, ?, ?)",
                [wf.id, projectId, 'workflow:owner'],
                (err) => {
                    if (err) console.error(`Error linking workflow ${wf.id}:`, err);
                    else console.log(`Linked workflow ${wf.id} to project ${projectId}`);
                }
            );
        });
    });
});

setTimeout(() => db.close(), 3000);
