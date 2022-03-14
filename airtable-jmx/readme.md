Sample jemter scripts that generate jtl files
js contains scripts to generate payload.
some of the api requests are failing, will need to analyze why the payloads are not working

once result file is generate converted convert to webreport as follows `./jmeter.sh -g ../../nodeJs/loadResults/Run02.jtl -o ../../nodeJs/loadResults/Run02-webreport `
copy statistics.json to the web-server to use it in the web server