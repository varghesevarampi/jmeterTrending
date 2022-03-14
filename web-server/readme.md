npm install to restore all the packages
use nodemon or run `node src\app.js` or `nodemon src\app.js` to start the website
website runs on port 3000, hence, once started navigate to localhost:3000 to view the website

In this MVP, data is read off '.json' file, which is present in public/data folder. 
    -to do : read fromd database or from AWS s3 bucket.

To generate json file, run the jmeter load test and generate a webreport. Navigate to jmeter webreport folder and copy over statistics.json which will have the key metrics for trending.
 
 Trending is based on the 90th percentile response times, which is represented by pct2 

 Incase existing jmeter jtl files are available, then they can be converted to a webreport (to generate statistics file ) by running the following command: `jmeter -g [absolute_path_to_jtl_file] -o [path_to_some_empty_folder]` e.g. on mac use `./jmeter.sh -g ../../nodeJs/loadResults/Run01.jtl -o ../../nodeJs/web-server/public/data/Run01`