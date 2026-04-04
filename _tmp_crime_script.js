
        const allCrimes = ["human trafficking (a), commercial sex acts", "human trafficking (b), involuntary servitude", "kidnapping", "missing person", "prostitution", "sex offenses, forcible", "sex offenses, non forcible"];
        const crimeProfiles = {"human trafficking (a), commercial sex acts": {"BAYVIEW": 0.6491195516160189, "CENTRAL": 1.1512165348323233, "INGLESIDE": 0.09498430249162004, "MISSION": 0.7827588668939542, "NORTHERN": 0.5568209494954257, "OUT OF SF": 8.452178869243065, "PARK": 0.09428376268162565, "RICHMOND": 0.1947224131591988, "SOUTHERN": 2.4561903877532067, "TARAVAL": 2.0849825627420353, "TENDERLOIN": 0.6445553427982763}, "human trafficking (b), involuntary servitude": {"BAYVIEW": 0.0, "CENTRAL": 0.0, "INGLESIDE": 0.0, "MISSION": 0.0, "NORTHERN": 0.0, "OUT OF SF": 48.70064967516242, "PARK": 0.0, "RICHMOND": 0.0, "SOUTHERN": 0.0, "TARAVAL": 7.644936063387464, "TENDERLOIN": 0.0}, "kidnapping": {"BAYVIEW": 1.456934908738216, "CENTRAL": 1.0138788935719674, "INGLESIDE": 1.5701690452754142, "MISSION": 0.7237848576037317, "NORTHERN": 0.8280305928376482, "OUT OF SF": 0.0, "PARK": 0.39963808796625533, "RICHMOND": 0.9574230935669714, "SOUTHERN": 1.183565082247311, "TARAVAL": 0.9319609119776402, "TENDERLOIN": 1.3265667468918128}, "missing person": {"BAYVIEW": 1.2301869082287162, "CENTRAL": 0.8932786915109893, "INGLESIDE": 1.1996200406022892, "MISSION": 0.661431183873316, "NORTHERN": 0.7804872524562879, "OUT OF SF": 1.4428686838974973, "PARK": 1.354215165645221, "RICHMOND": 1.2305222735697634, "SOUTHERN": 1.0923582597943473, "TARAVAL": 1.2063896768641817, "TENDERLOIN": 0.8446348362560318}, "prostitution": {"BAYVIEW": 0.09347744853351203, "CENTRAL": 1.3048762977079456, "INGLESIDE": 0.05967886760258078, "MISSION": 2.396294247958023, "NORTHERN": 1.9040019745364194, "OUT OF SF": 0.0, "PARK": 0.014972422912579981, "RICHMOND": 0.088733420341761, "SOUTHERN": 0.332923615197734, "TARAVAL": 0.31081409102217217, "TENDERLOIN": 1.5316388086380535}, "sex offenses, forcible": {"BAYVIEW": 0.8402222813262927, "CENTRAL": 1.1957126047402418, "INGLESIDE": 1.0932044930189062, "MISSION": 0.924603646890597, "NORTHERN": 0.9541693848597517, "OUT OF SF": 0.0, "PARK": 0.576481558904619, "RICHMOND": 1.0909308170648837, "SOUTHERN": 1.5236115808382642, "TARAVAL": 0.8233142530823129, "TENDERLOIN": 0.9689085801616101}, "sex offenses, non forcible": {"BAYVIEW": 1.3047087333145895, "CENTRAL": 0.8098674460157623, "INGLESIDE": 1.3364070466844216, "MISSION": 0.8565849615751671, "NORTHERN": 0.9792926582695713, "OUT OF SF": 0.0, "PARK": 1.3265506144740353, "RICHMOND": 2.7396990688677976, "SOUTHERN": 0.7275374220762253, "TARAVAL": 0.800051448494037, "TENDERLOIN": 0.30229145921934664}};
        const crimeCounts = {"human trafficking (a), commercial sex acts": {"BAYVIEW": 7, "CENTRAL": 12, "INGLESIDE": 1, "MISSION": 18, "NORTHERN": 8, "OUT OF SF": 7, "PARK": 1, "RICHMOND": 1, "SOUTHERN": 38, "TARAVAL": 22, "TENDERLOIN": 6}, "human trafficking (b), involuntary servitude": {"BAYVIEW": 0, "CENTRAL": 0, "INGLESIDE": 0, "MISSION": 0, "NORTHERN": 0, "OUT OF SF": 1, "PARK": 0, "RICHMOND": 0, "SOUTHERN": 0, "TARAVAL": 2, "TENDERLOIN": 0}, "kidnapping": {"BAYVIEW": 556, "CENTRAL": 374, "INGLESIDE": 585, "MISSION": 589, "NORTHERN": 421, "OUT OF SF": 0, "PARK": 150, "RICHMOND": 174, "SOUTHERN": 648, "TARAVAL": 348, "TENDERLOIN": 437}, "missing person": {"BAYVIEW": 7316, "CENTRAL": 5135, "INGLESIDE": 6965, "MISSION": 8388, "NORTHERN": 6184, "OUT OF SF": 659, "PARK": 7921, "RICHMOND": 3485, "SOUTHERN": 9320, "TARAVAL": 7020, "TENDERLOIN": 4336}, "prostitution": {"BAYVIEW": 146, "CENTRAL": 1970, "INGLESIDE": 91, "MISSION": 7981, "NORTHERN": 3962, "OUT OF SF": 0, "PARK": 23, "RICHMOND": 66, "SOUTHERN": 746, "TARAVAL": 475, "TENDERLOIN": 2065}, "sex offenses, forcible": {"BAYVIEW": 655, "CENTRAL": 901, "INGLESIDE": 832, "MISSION": 1537, "NORTHERN": 991, "OUT OF SF": 0, "PARK": 442, "RICHMOND": 405, "SOUTHERN": 1704, "TARAVAL": 628, "TENDERLOIN": 652}, "sex offenses, non forcible": {"BAYVIEW": 5, "CENTRAL": 3, "INGLESIDE": 5, "MISSION": 7, "NORTHERN": 5, "OUT OF SF": 0, "PARK": 5, "RICHMOND": 5, "SOUTHERN": 4, "TARAVAL": 3, "TENDERLOIN": 1}};
        const districts = ["BAYVIEW", "CENTRAL", "INGLESIDE", "MISSION", "NORTHERN", "OUT OF SF", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL", "TENDERLOIN"];
        
        const select = document.getElementById('crimeSelect');
        allCrimes.forEach(crime => {
            const option = document.createElement('option');
            option.value = crime;
            option.textContent = crime;
            select.appendChild(option);
        });
        
        let viewMode = 'lq';
        
        function createVisualization() {
            const crime = document.getElementById('crimeSelect').value;
            const showLQ = viewMode === 'lq';
            
            let data, layout;
            
            if (showLQ) {
                const values = districts.map(d => crimeProfiles[crime]?.[d] || 0);
                data = [{
                    x: districts, y: values, type: 'bar',
                    marker: { color: values, colorscale: 'RdYlGn_r', showscale: true, colorbar: { title: 'LQ Ratio', tickvals: [0,1,2,3], ticktext: ['0','1','2','3+'] }, line: {color: 'rgba(0,0,0,0.1)', width: 0.5} },
                    text: values.map(v => v.toFixed(2)), textposition: 'outside', textfont: {size: 10},
                    hovertemplate: '<b>%{x}</b><br>LQ Ratio: %{y:.2f}<extra></extra>'
                }];
                layout = { title: `<b>${crime}</b><br><sub>(Statistical Distribution)</sub>`, yaxis: { title: 'Location Quotient Ratio' } };
            } else {
                const values = districts.map(d => crimeCounts[crime]?.[d] || 0);
                const maxVal = Math.max(...values);
                const colors = values.map(v => v < maxVal/3 ? 'rgba(41, 128, 185, 0.8)' : v < 2*maxVal/3 ? 'rgba(52, 152, 219, 0.8)' : 'rgba(155, 89, 182, 0.8)');
                data = [{
                    x: districts, y: values, type: 'bar',
                    marker: { color: colors, line: {color: 'rgba(0,0,0,0.1)', width: 0.5} },
                    text: values.map(v => (v || 0).toLocaleString()), textposition: 'outside', textfont: {size: 10},
                    hovertemplate: '<b>%{x}</b><br>Incidents: %{y:,}<extra></extra>'
                }];
                layout = { title: `<b>${crime}</b><br><sub>(Actual Incident Counts)</sub>`, yaxis: { title: 'Number of Incidents' } };
            }
            
            layout = Object.assign(layout, {
                xaxis: { title: 'Police District', tickangle: -45 },
                hovermode: 'x unified', height: 550, template: 'plotly_white',
                margin: {b: 120, l: 80, r: 80, t: 100},
                font: {family: 'Arial, sans-serif', size: 11, color: '#333'},
                paper_bgcolor: 'rgba(249, 249, 249, 1)', plot_bgcolor: 'rgba(255, 255, 255, 1)'
            });
            
            Plotly.newPlot('chart', data, [layout], {responsive: true});
        }
        
        document.getElementById('crimeSelect').addEventListener('change', createVisualization);
        document.getElementById('lqBtn').addEventListener('click', function() {
            viewMode = 'lq';
            document.getElementById('lqBtn').classList.add('active');
            document.getElementById('countBtn').classList.remove('active');
            createVisualization();
        });
        document.getElementById('countBtn').addEventListener('click', function() {
            viewMode = 'counts';
            document.getElementById('countBtn').classList.add('active');
            document.getElementById('lqBtn').classList.remove('active');
            createVisualization();
        });
        
        createVisualization();
    
