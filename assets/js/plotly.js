var tbody = d3.select("#overview");

//initial function
function init(){
    //selects the input select ID
    var selector = d3.select("#selDataset");
  
    //options for this input
    let options = ['Yuba County'
    , 'Alameda County'
    , 'Alpine County'
    , 'Amador County'
    , 'Butte County'
    , 'Calaveras County'
    , 'Colusa County'
    , 'Contra Costa County'
    , 'Del Norte County'
    , 'El Dorado County'
    , 'Fresno County'
    , 'Glenn County'
    , 'Humboldt County'
    , 'Imperial County'
    , 'Inyo County'
    , 'Kern County'
    , 'Kings County'
    , 'Lake County'
    , 'Lassen County'
    , 'Los Angeles County'
    , 'Madera County'
    , 'Marin County'
    , 'Mariposa County'
    , 'Mendocino County'
    , 'Merced County'
    , 'Modoc County'
    , 'Mono County'
    , 'Monterey County'
    , 'Napa County'
    , 'Nevada County'
    , 'Orange County'
    , 'Placer County'
    , 'Plumas County'
    , 'Riverside County'
    , 'Sacramento County'
    , 'San Benito County'
    , 'San Bernardino County'
    , 'San Diego County'
    , 'San Francisco County'
    , 'San Joaquin County'
    , 'San Luis Obispo County'
    , 'San Mateo County'
    , 'Santa Barbara County'
    , 'Santa Clara County'
    , 'Santa Cruz County'
    , 'Shasta County'
    , 'Sierra County'
    , 'Siskiyou County'
    , 'Solano County'
    , 'Sonoma County'
    , 'Stanislaus County'
    , 'Sutter County'
    , 'Tehama County'
    , 'Trinity County'
    , 'Tulare County'
    , 'Tuolumne County'
    , 'Ventura County'
    , 'Yolo County'];
  
    // iterates through options and adds them 
    for (x in options){
      selector.append("option").text(options[x]).property("value", options[x]);
    }

    //inital table 
  tbody.html("");
  //iterates through years
  let columns = ["0 BR", "1 BR", "2 BR", "3 BR", "4 BR", " Inflation Rate (%)", "0_BR_adjust", "1_BR_adjust", "2_BR_adjust", "3_BR_adjust", "4_BR_adjust"];

  for (let i = 2006; i < 2023; i++){
      
        // assigns rows and cells
        let row = tbody.append("tr");
        let title = row.append("td")

        for (column in columns){
          console.log(columns[column])
            let name = columns[column]
        //beginning of each row is the year
        title.text(i)
        //iterates through the JSON file for laMetro and adds to table 
        // Object.values(AlamedaCounty[column][i]).forEach((val) => {
        let cell = row.append("td");
        cell.text(AlamedaCounty[name][i]);
        };
      };

      let BR_0 = []
      let BR_1 = []
      let BR_2= []
      let BR_3 = []
      let BR_4 = []
      let inflation = []
    
    
      for (let i = 2006; i < 2023; i++){
        BR_0.push(AlamedaCounty["0 BR"][i])
        BR_1.push(AlamedaCounty["1 BR"][i])
        BR_2.push(AlamedaCounty["2 BR"][i])
        BR_3.push(AlamedaCounty["3 BR"][i])
        BR_4.push(AlamedaCounty["4 BR"][i])
        inflation.push(AlamedaCounty[" Inflation Rate (%)"][i])
      }
    
      var BR_0_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_0,
        name : "0 Bedroom"
      };
    
      var BR_1_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_1,
        name : "1 Bedroom"
      };
    
      var BR_2_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_2,
        name : "2 Bedrooms"
      };
    
      var BR_3_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_3,
        name : "3 Bedrooms"
      };
    
      var BR_4_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_4,
        name : "4 Bedrooms"
      };
    
    
      var linePlot = [BR_0_Plot, BR_1_Plot, BR_2_Plot, BR_3_Plot, BR_4_Plot];
      //plot layout
      var lineLayout = {
        title : "Alameda County",
        xaxis : {
          title : "Years"
        },
        yaxis : {
          title : "Amount in USD"
        },
    
       };
       Plotly.newPlot("line", linePlot, lineLayout)

};

// builds table based on county selected
function buildTable(data){
  tbody.html("");
  //iterates through years
  let columns = ["0 BR", "1 BR", "2 BR", "3 BR", "4 BR", " Inflation Rate (%)", "0_BR_adjust", "1_BR_adjust", "2_BR_adjust", "3_BR_adjust", "4_BR_adjust"];

  for (let i = 2006; i < 2023; i++){
      
        // assigns rows and cells
        let row = tbody.append("tr");
        let title = row.append("td")

        for (column in columns){
          console.log(columns[column])
            let name = columns[column]
        //beginning of each row is the year
        title.text(i)
        //iterates through the JSON file for laMetro and adds to table 
        // Object.values(AlamedaCounty[column][i]).forEach((val) => {
        let cell = row.append("td");
        cell.text(data[name][i]);
        };
      };
};

function buildChart(data, name){
      let BR_0 = []
      let BR_1 = []
      let BR_2= []
      let BR_3 = []
      let BR_4 = []
      let inflation = []
    
    
      for (let i = 2006; i < 2023; i++){
        BR_0.push(data["0 BR"][i])
        BR_1.push(data["1 BR"][i])
        BR_2.push(data["2 BR"][i])
        BR_3.push(data["3 BR"][i])
        BR_4.push(data["4 BR"][i])
        inflation.push(data[" Inflation Rate (%)"][i])
      }
    
      var BR_0_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_0,
        name : "0 Bedroom"
      };
    
      var BR_1_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_1,
        name : "1 Bedroom"
      };
    
      var BR_2_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_2,
        name : "2 Bedrooms"
      };
    
      var BR_3_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_3,
        name : "3 Bedrooms"
      };
    
      var BR_4_Plot = {
        x : [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y : BR_4,
        name : "4 Bedrooms"
      };
    
      var linePlot = [BR_0_Plot, BR_1_Plot, BR_2_Plot, BR_3_Plot, BR_4_Plot];
      //plot layout
      var lineLayout = {
        title : name,
        xaxis : {
          title : "Years"
        },
        yaxis : {
          title : "Amount in USD"
        },
    
       };
       Plotly.newPlot("line", linePlot, lineLayout)

};




//function called when input for table is changed
function handleClick(countyInput) {
  // Grab the input value and call the JSON function associated with it
  let CountyExtract = ""

  if (countyInput === "Yuba County"){
    CountyExtract = YubaCounty
  }

  if (countyInput === "Alameda County"){
    CountyExtract = AlamedaCounty
  }

  if (countyInput === "Alpine County"){
    CountyExtract = AlpineCounty
  }

  if (countyInput === "Amador County"){
    CountyExtract = AmadorCounty
  }

  if (countyInput === "Butte County"){
    CountyExtract = ButteCounty
  }

  if (countyInput === "Calaveras County"){
    CountyExtract = CalaverasCounty
  }

  if (countyInput === "Yuba County"){
    CountyExtract = YubaCounty
  }

  if (countyInput === "Alameda County"){
    CountyExtract = AlamedaCounty
  }

  if (countyInput === "Alpine County"){
    CountyExtract = AlpineCounty
  }

  if (countyInput === "Amador County"){
    CountyExtract = AmadorCounty
  }

  if (countyInput === "Butte County"){
    CountyExtract = ButteCounty
  }

  if (countyInput === "Calaveras County"){
    CountyExtract = CalaverasCounty
  }

  if (countyInput === "Colusa County"){
    CountyExtract = ColusaCounty
  }

  if (countyInput === "Contra Costa County"){
    CountyExtract = ContraCostaCounty
  }

  if (countyInput === "Del Norte County"){
    CountyExtract = DelNorteCounty
  }

  if (countyInput === "El Dorado County"){
    CountyExtract = ElDoradoCounty
  }

  if (countyInput === "Fresno County"){
    CountyExtract = FresnoCounty
  }

  if (countyInput === "Glenn County"){
    CountyExtract = GlennCounty
  }

  if (countyInput === "Humboldt County"){
    CountyExtract = HumboldtCounty
  }

  if (countyInput === "Imperial County"){
    CountyExtract = ImperialCounty
  }

  if (countyInput === "Inyo County"){
    CountyExtract = InyoCounty
  }

  if (countyInput === "Kern County"){
    CountyExtract = KernCounty
  }

  if (countyInput === "Kings County"){
    CountyExtract = KingsCounty
  }

  if (countyInput === "Lake County"){
    CountyExtract = LakeCounty
  }

  if (countyInput === "Lassen County"){
    CountyExtract = LassenCounty
  }

  if (countyInput === "Los Angeles County"){
    CountyExtract = LosAngelesCounty
  }

  if (countyInput === "Madera County"){
    CountyExtract = MaderaCounty
  }

  if (countyInput === "Marin County"){
    CountyExtract = MarinCounty
  }

  if (countyInput === "Mariposa County"){
    CountyExtract = MariposaCounty
  }

  if (countyInput === "Mendocino County"){
    CountyExtract = MendocinoCounty
  }

  if (countyInput === "Merced County"){
    CountyExtract = MercedCounty
  }

  if (countyInput === "Modoc County"){
    CountyExtract = ModocCounty
  }

  if (countyInput === "Mono County"){
    CountyExtract = MonoCounty
  }

  if (countyInput === "Monterey County"){
    CountyExtract = MontereyCounty
  }

  if (countyInput === "Napa County"){
    CountyExtract = NapaCounty
  }

  if (countyInput === "Nevada County"){
    CountyExtract = NevadaCounty
  }

  if (countyInput === "Orange County"){
    CountyExtract = OrangeCounty
  }

  if (countyInput === "Placer County"){
    CountyExtract = PlacerCounty
  }

  if (countyInput === "Plumas County"){
    CountyExtract = PlumasCounty
  }

  if (countyInput === "Riverside County"){
    CountyExtract = RiversideCounty
  }

  if (countyInput === "Sacramento County"){
    CountyExtract = SacramentoCounty
  }

  if (countyInput === "San Benito County"){
    CountyExtract = SanBenitoCounty
  }

  if (countyInput === "San Bernardino County"){
    CountyExtract = SanBernadinoCounty
  }

  if (countyInput === "San Diego County"){
    CountyExtract = SanDiegoCounty
  }

  if (countyInput === "San Francisco County"){
    CountyExtract = SanFrancisco
  }

  if (countyInput === "San Joaquin County"){
    CountyExtract = SanJoaquinCounty
  }

  if (countyInput === "San Luis Obispo County"){
    CountyExtract = SanLuisObispoCounty
  }

  if (countyInput === "San Mateo County"){
    CountyExtract = SanMateoCounty
  }

  if (countyInput === "Santa Barbara County"){
    CountyExtract = SantaBarbaraCounty
  }

  if (countyInput === "Santa Clara County"){
    CountyExtract = SantaClaraCounty
  }

  if (countyInput === "Santa Cruz County"){
    CountyExtract = SantaCruzCounty
  }

  if (countyInput === "Shasta County"){
    CountyExtract = ShastaCounty
  }

  if (countyInput === "Sierra County"){
    CountyExtract = SierraCounty
  }

  if (countyInput === "Siskiyou County"){
    CountyExtract = SiskiyouCounty
  }

  if (countyInput === "Solano County"){
    CountyExtract = SolanoCounty
  }

  if (countyInput === "Sonoma County"){
    CountyExtract = SonomaCounty
  }

  if (countyInput === "Stanislaus County"){
    CountyExtract = StanislausCounty
  }

  if (countyInput === "Sutter County"){
    CountyExtract = SutterCounty
  }

  if (countyInput === "Tehama County"){
    CountyExtract = TehamaCounty
  }

  if (countyInput === "Trinity County"){
    CountyExtract = TrinityCounty
  }

  if (countyInput === "Tulare County"){
    CountyExtract = TulareCounty
  }

  if (countyInput === "Tuolumne County"){
    CountyExtract =TuolumneCounty
  }

  if (countyInput === "Ventura County"){
    CountyExtract = VenturaCounty
  }

  if (countyInput === "Yolo County"){
    CountyExtract = YoloCounty
  }
  //calls function to build new table
  buildTable(CountyExtract);
  //calls function to plot new chart
  buildChart(CountyExtract, countyInput);
};

console.log(AlamedaCounty)
console.log(AlamedaCounty["0 BR"][2006])
// initial function called
init();

