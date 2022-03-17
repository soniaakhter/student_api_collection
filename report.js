const newman = require('newman');

newman.run({
    collection: require('./collection/student_api_collection.json'), // pointing to local JSON file.
    environment: require('./collection/student_api_env.json'), // pointing to local env file
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
    
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});